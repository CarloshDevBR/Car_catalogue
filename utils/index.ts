export async function fetchCars() {
    const headers: HeadersInit = {
      'X-RapidAPI-Key': '01757fce83msh28e2638f9be1ff7p101435jsn90f1354f0b4f',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
      {
        headers: headers,
      }
    );
  

    const result = await response.json();

    return result;
} 