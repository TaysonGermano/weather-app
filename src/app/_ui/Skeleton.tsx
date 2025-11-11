import Card from '@/components/ui/Card/Card';

export default function Skeleton() {
  return (
    <div className="weather-info min-h-screen space-y-12 flex flex-col items-center justify-center">
      <div className="current-weather animate-pulse w-80 h-60 bg-foreground-secondary rounded-lg"></div>
      <section className="week-weather grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            className="animate-pulse h-32 flex flex-col items-center justify-center bg-foreground-secondary"
          >
            <div className="rounded w-16 h-16 mb-4"></div>
            <div className="rounded w-12 h-6 mb-2"></div>
            <div className="rounded w-8 h-4"></div>
          </Card>
        ))}
      </section>
    </div>
  );
}
