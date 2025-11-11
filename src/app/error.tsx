'use client';

import Image from 'next/image';

export default function error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/thunderstorm.svg"
        alt="illustration"
        width={200}
        height={200}
        loading="eager"
        className="-mt-20"
      />
      <h1 className="text-3xl font-bold mb-4">Error Loading Weather Data</h1>
      <p>
        Unfortunately we could not load the weather data please make sure your
        location services are enabled and try again.
      </p>
    </div>
  );
}
