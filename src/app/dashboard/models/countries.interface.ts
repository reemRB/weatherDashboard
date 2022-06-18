export interface CountriesData {
  ISO: string,
  country: string,
  flag: string,
  cities: CityData[]
}

export interface CityData {
  city: string,
  weather: Weather
}

interface Weather {
  month: string,
  data: WeatherData[]
}

interface WeatherData {
  day: string,
  date: number,
  temprature: number
}

