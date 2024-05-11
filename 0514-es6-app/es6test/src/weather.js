//0b3b55e8f262238476508706d818c2d3
//211.177.126.217

const apiKey = "0b3b55e8f262238476508706d818c2d3";
async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("OpenWeatherMap API 응답에 문제가 있습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "날씨 정보를 가져오는 동안 에러가 발생했습니다:",
      error.message
    );
    return null;
  }
}

export { fetchWeatherData };
