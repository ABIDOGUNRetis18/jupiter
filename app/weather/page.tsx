import Navigation from '@/app/components/Navigation';
import JupiterWeather from '@/app/components/JupiterWeather';

export default function WeatherPage() {
  return (
    <div className="relative">
      <Navigation />
      <JupiterWeather />
    </div>
  );
}
