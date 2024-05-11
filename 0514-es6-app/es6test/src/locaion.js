// location.js

import geoip from "geoip-lite";

// 현재 시스템의 IP 주소를 가져옵니다.
// --> https://whatismyipaddress.com/사이트 참고
// --> 다른 module을 사용해서 현재 위치의 ip를 획득해도 괜찮음.
// --> 컴퓨터 시스템에 설정된 ip를 넣어줘도 괜찮음.
const ip_addr = "211.177.126.217";

// IP 주소를 기반으로 국가, 도시, 위도, 경도를 가져옵니다.
const geo = geoip.lookup(ip_addr);

// 결과 출력
console.log("국가:", geo.country);
console.log("도시:", geo.city);
console.log("ip:", ip_addr);
console.log("위도:", geo.ll[0]);
console.log("경도:", geo.ll[1]);

const city_name = geo.city;
export { city_name };
