export interface SensorMeasurementDto {
  air_humidity: string;
  soil_moisture: string;
  temperature: string;
}

export interface Average24hDto extends SensorMeasurementDto {
  based_on: string;
  data_points: number;
}

export interface SensorDataDto {
  average_24h: Average24hDto;
  current: SensorMeasurementDto;
  last_update: number;
  sensor_id: string;
}
