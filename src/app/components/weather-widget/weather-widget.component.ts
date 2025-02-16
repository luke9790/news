import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  cityName: string = 'Your location';
  currentDate: string = '';
  temperatureMin: string = '';
  temperatureMax: string = '';
  windIntensity: string = '';
  weatherDescription: string = '';
  weatherIcon: string = 'wb_sunny';
  private apiKey = environment.bigDataLocalization;

  ngOnInit(): void {
    this.fetchWeather();
  }

  private async fetchWeather(): Promise<void> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          this.cityName = await this.getNearestCity(latitude, longitude);
          this.getWeather(latitude, longitude);
        },
        () => {
          console.log('Geolocation denied, using Rome');
          this.cityName = 'Rome';
          this.getWeather(41.9028, 12.4964);
        }
      );
    } else {
      console.log('Geolocation not supported, using Rome');
      this.cityName = 'Rome';
      this.getWeather(41.9028, 12.4964);
    }
  }

  private async getWeather(latitude: number, longitude: number): Promise<void> {
    try {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,weathercode&windspeed_unit=kmh&timezone=auto`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      this.currentDate = this.formatDate(data.daily.time[0]);
      this.temperatureMin = `${Math.round(data.daily.temperature_2m_min[0])}°C`;
      this.temperatureMax = `${Math.round(data.daily.temperature_2m_max[0])}°C`;
      this.windIntensity = this.getWindIntensity(data.current_weather.windspeed);
      this.weatherDescription = this.getWeatherDescription(data.daily.weathercode[0]);
      this.weatherIcon = this.getWeatherIcon(data.daily.weathercode[0]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  private async getNearestCity(latitude: number, longitude: number): Promise<string> {
    try {
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=${this.apiKey}`;
      const response = await fetch(geoApiUrl);
      const data = await response.json();
      console.log('Nearest city response:', data);
      return data.city || data.locality || data.principalSubdivision || 'Your location';
    } catch (error) {
      console.error('Error fetching nearest city:', error);
      return 'Your location';
    }
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long' } as const;
    return date.toLocaleDateString('en-US', options);
  }

  private getWindIntensity(speed: number): string {
    if (speed < 10) return 'Light';
    if (speed < 20) return 'Moderate';
    if (speed < 30) return 'Strong';
    return 'Very Strong';
  }

  private getWeatherDescription(code: number): string {
    const descriptions: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Partly cloudy',
      2: 'Cloudy',
      3: 'Overcast',
      61: 'Rain',
      71: 'Snow',
      95: 'Thunderstorm'
    };
    return descriptions[code] || 'Unknown conditions';
  }

  private getWeatherIcon(code: number): string {
    const icons: { [key: number]: string } = {
      0: 'wb_sunny',
      1: 'wb_cloudy',
      2: 'wb_cloudy',
      3: 'cloud',
      61: 'umbrella',
      71: 'ac_unit',
      95: 'flash_on'
    };
    return icons[code] || 'help_outline';
  }
}
