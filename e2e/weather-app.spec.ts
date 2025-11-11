import { test, expect } from '@playwright/test';

test.use({
  geolocation: { longitude: 41.890221, latitude: 12.492348 },
  permissions: ['geolocation'],
});

// Mock OpenWeatherMap API
test.beforeEach(async ({ page }) => {
  await page.route('**/data/2.5/weather**', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        coord: { lon: 12.4924, lat: 41.8902 },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        base: 'stations',
        main: {
          temp: 298.15,
          feels_like: 298.45,
          temp_min: 296.15,
          temp_max: 300.15,
          pressure: 1012,
          humidity: 40,
        },
        visibility: 10000,
        wind: { speed: 3.6, deg: 120 },
        clouds: { all: 0 },
        dt: 1600000000,
        sys: {
          type: 1,
          id: 6752,
          country: 'IT',
          sunrise: 1600000000,
          sunset: 1600043200,
        },
        timezone: 7200,
        id: 3169070,
        name: 'Rome',
        cod: 200,
      }),
    });
  });
});

test.describe('Weather App', () => {
  test('should load and display the weather app', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });

    await expect(page.locator('section.current-weather')).toBeVisible();
  });

  test('should display current weather information', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });

    const temperature = page.locator('[aria-label="Current temperature"]');
    await expect(temperature).toBeVisible();
    await expect(temperature).toContainText('°C');

    const cityName = page.locator('[aria-label="City name"]');
    await expect(cityName).toBeVisible();
    await expect(cityName).toContainText('Showing weather for');

    const weatherIcon = page.locator('img[alt="Current weather icon"]');
    await expect(weatherIcon).toBeVisible();
  });

  test('should display wind and humidity information', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });

    const windSpeed = page.locator('[aria-label="Wind speed"]');
    await expect(windSpeed).toBeVisible();
    await expect(windSpeed).toContainText('km/h');

    const humidity = page.locator('[aria-label="Humidity"]');
    await expect(humidity).toBeVisible();
    await expect(humidity).toContainText('%');
  });

  test('should display weekly weather forecast', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });

    const weekWeather = page.locator('section.week-weather');
    await expect(weekWeather).toBeVisible();

    const weatherCards = page.locator('section.week-weather > div');
    await expect(weatherCards).toHaveCount(6);

    const firstCard = weatherCards.first();
    await expect(firstCard).toBeVisible();

    const tempRange = firstCard.locator('[aria-label="Temperature range"]');
    await expect(tempRange).toBeVisible();

    const maxTemp = firstCard.locator('[aria-label="Maximum temperature"]');
    const minTemp = firstCard.locator('[aria-label="Minimum temperature"]');
    await expect(maxTemp).toBeVisible();
    await expect(minTemp).toBeVisible();
    await expect(maxTemp).toContainText('°C');
    await expect(minTemp).toContainText('°C');
  });

  test('should have a functional refresh button', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });

    const refreshButton = page.locator('[aria-label="Refresh location"]');
    await expect(refreshButton).toBeVisible();

    const navigationPromise = page.waitForNavigation();
    await refreshButton.click();
    await navigationPromise;

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });
    await expect(
      page.locator('[aria-label="Current temperature"]'),
    ).toBeVisible();
  });

  test('should display loading skeleton initially', async ({ page }) => {
    const response = page.goto('/');

    await page.waitForSelector(
      '[aria-label="Current weather information"], .skeleton, [role="status"]',
      { timeout: 10000 },
    );

    await response;

    await expect(
      page.locator('[aria-label="Current weather information"]'),
    ).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await page.waitForSelector('[aria-label="Current weather information"]', {
      timeout: 10000,
    });

    // Check main elements are still visible on mobile
    await expect(
      page.locator('[aria-label="Current temperature"]'),
    ).toBeVisible();
    await expect(page.locator('[aria-label="City name"]')).toBeVisible();

    // Check weekly forecast is visible
    const weekWeather = page.locator('section.week-weather');
    await expect(weekWeather).toBeVisible();

    // On mobile, cards should be in a 2-column grid
    const weatherCards = page.locator('section.week-weather > div');
    await expect(weatherCards.first()).toBeVisible();
  });
});
