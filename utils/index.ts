export async function fetchCars() {
    const headers: HeadersInit = {
      "X-RapidAPI-Key": "18WJMUA9DGp+2QxoQdIRYQ==qSFHgfx9P70g4jk8",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carolla`,
      {
        headers: headers,
      }
    );

    const result = await response.json();
  
    return result;
}