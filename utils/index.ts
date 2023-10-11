import { FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters;

  const headers: HeadersInit = {
    'X-RapidAPI-Key': '01757fce83msh28e2638f9be1ff7p101435jsn90f1354f0b4f',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  console.log(filters);

  return result;
}
