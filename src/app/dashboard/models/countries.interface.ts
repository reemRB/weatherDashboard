export interface CountriesData {
  ISO: string,
  country: string,
  flag: string,
  cities: CitiesData[]
}

interface CitiesData {
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

