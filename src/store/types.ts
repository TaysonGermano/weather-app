export interface Store {
  coords: { lat: number; lon: number } | null;

  setCoords: (coords: { lat: number; lon: number } | null) => void;
}
