export interface WeatherData {
  id: string;
  areaId: string;
  dateTime: Date;
  temperature: string;
  humidity: string;
  pressure: string;
  createdAt: Date | null;
  createdBy: string;
  updatedAt: Date | null;
  updatedBy: string;
}

export class WeatherDataImpl implements WeatherData {
  id = '';
  areaId = '';
  dateTime = new Date();
  temperature = '';
  humidity = '';
  pressure = '';
  createdAt = new Date();
  createdBy = '';
  updatedAt = new Date();
  updatedBy = '';
}
