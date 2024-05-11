const axios = require('axios');
const cheerio = require('cheerio');

async function crawlStockInfo(url) {
    try {
        // 주어진 URL에서 HTML 가져오기
        const response = await axios.get(url);
        const html = response.data;

        // Cheerio를 사용하여 HTML 파싱
        const $ = cheerio.load(html);

        // 최저가, 최고가, 종목 코드, 회사 이름 가져오기
        const today = $('div.today.no_today');
        //console.log(today);
        const companyCode = $('.code').text().trim();
        const companyName = $('#middle > div.h_company > div.wrap_company > h2 > a').text().trim();
        const nowPrice = $('.no_today').text().substring(1, 70).trim();
        return {
            companyCode,
            companyName,
            nowPrice
        };
    } catch (error) {
        console.error('Error:', error);
    }
}

const stockUrl = 'https://finance.naver.com/item/main.naver?code=105560';

// 크롤링 함수 호출 및 결과 출력
crawlStockInfo(stockUrl).then((stockInfo) => {
    console.log('종목코드:', stockInfo.companyCode);
    const decodedStr = stockInfo.companyName;
    console.log('회사이름:', decodedStr);
    console.log('현재가:', stockInfo.nowPrice);
});
