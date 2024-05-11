const puppeteer = require('puppeteer');
//가상 브라우저를 띄우고, 그 가상브라우저가 떠 있는 상태에서 크롤링 후, dom parsing해야하므로
//비동기로 처리해야함.
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.daum.net/');

    // 상단 메뉴 텍스트가 포함된 요소 선택
    const menuItems = await page.evaluate(() => {
        const menuElements = Array.from(document.querySelectorAll('.link_service'));
        //크롤링한 목록 객체를 배열로 변환, [tag, tag, tag, ...]
        return menuElements.map(item => item.textContent.trim());
        //모든 배열의 요소를 꺼내어 텍스트만 추출, [text, text, text, ...]
    });

    console.log(menuItems);

    await browser.close();
})();
