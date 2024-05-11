import { fetchWeatherData } from "./weather.js";
import { city_name } from "./locaion.js";

// fetchWeatherData 함수 호출 예제
const cityName = city_name; // 도시 이름

fetchWeatherData(cityName).then((weatherData) => {
  if (weatherData) {
    console.log("날씨 정보:", weatherData);
    // 여기에서 필요한 작업을 수행합니다.
  } else {
    console.log("날씨 정보를 가져오지 못했습니다.");
  }
});
