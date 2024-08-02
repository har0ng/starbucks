console.log('hello');
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input')

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('focus', function () {
    searchInputEl.setAttribute('placeholder', '통합검색')
    searchEl.classList.add('focused')
});

searchInputEl.addEventListener('blur', function () {
    searchInputEl.setAttribute('placeholder', '')
    searchEl.classList.remove('focused')
});
// blur : 요소가 포커스를 잃는 순간을 의미

const fadeEls = document.querySelectorAll('.banner .fade-in');
// console.log(fadeEls);
fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEl);
    // console.log(index);
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.5,
        opacity:1,

    })
});

new Swiper('.notice_line', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: true
    //자동으로 움직일꺼니까 autoplay
});
const promoSwiper = new Swiper('.promotion .swiper-container', {
    loop: true,
    // 움직여야하니까 loop
    slidesPerView: 3,
    // slidesPerView 한번에 보여지는 슬라이드 개수 
    spaceBetween: 10,
    // css의 마진을 js에서 주는 방법 10px임. (사이 여백)
    centeredSlides: true,
    // 보여질 슬라이드가 가운데로 오게끔 해주는 것
    autoplay: {
        delay: 5000 //5초 기본값은 2천으로 2초임
    },
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable: true
        // 클릭시 페이지 이동
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    },
});
//swiper의 일시정지와 재생요소
const swiperControlBtn = document.querySelector('.swiper-control-btn');
swiperControlBtn.addEventListener('click', function(){
    let isSwiperOn = swiperControlBtn.classList.contains('on');
    if(isSwiperOn){//stop목적
        swiperControlBtn.classList.remove('on');
        promoSwiper.autoplay.stop();
        swiperControlBtn.textContent='pause';
    }else{//start목적
        swiperControlBtn.classList.add('on');
        promoSwiper.autoplay.start();
        swiperControlBtn.textContent='play_arrow'
    }
});


//프로모션 영역요소
const promotionEl = document.querySelector('.promotion');
//프로모션 버튼 요소 open
const promotionToggleBtn = document.querySelector('.toggle-promotion-');
//프로모션 영역 숨김여부 기본값(버튼 누르기전 모습)
let isHidePromotion = false;
//토글 버튼을 눌렸을 때 어떻게 반응 되는지
promotionToggleBtn.addEventListener('click',function(){
    // 프로모션 영역 숨김여부 'hide'확인,open 
    isHidePromotion = promotionEl.classList.contains('hide');
    if(!isHidePromotion){
        promotionEl.classList.add('hide');
        promotionToggleBtn.classList.remove('open');
        
    }else{
        promotionEl.classList.remove('hide');
        promotionToggleBtn.classList.add('open');
    }  
});

const spyEls= document.querySelectorAll('#body_layout .scroll-spy');
spyEls.forEach(function(spyEl){
    // console.log(spyEl);
    new ScrollMagic.Scene({
        triggerElement: spyEl //감지 요소
        ,triggerHook: 0.8 //윈도우를 위에서 아래까지 길이를 
        //1이라 기준했을 때 0.8위치에서 보이게끔 해달라
    }).setClassToggle(spyEl,'show').addTo(new ScrollMagic.Controller());
    //Scene = scrollmagic을 통해 스크롤 했을 때 감지해줌
    //setclasstoggle = 감지된걸 바탕으로 역할 지정
    //addTo = 이건 걍 쓰라고 되있음 외워.
});

const wardsEl = new Swiper('.wards .swiper-container', {
    slidesPerView: 5,
    spaceBetween:30,
    loop: true,
    // 움직여야하니까 loop
    // css의 마진을 js에서 주는 방법 10px임. (사이 여백)
    autoplay: {
        delay: 4000 //5초 기본값은 2천으로 2초임
    },
    navigation:{
        prevEl:'.wards .swiper-prev',
        nextEl:'.wards .swiper-next',
    }
});

const badgeEl = document.querySelector('#head_layout .badges');
// console.log(badgeEl);

window.addEventListener('scroll',_.throttle(function(){
    if(window.scrollY > 600){//윈도우의 총 높이값
        //배지숨기기
        gsap.to(badgeEl,0.6,{
            opacity:0,
            display:'none'
        });
        //상단버튼 보이기
        gsap.to('#to-top',0.4,{
           x:0 
        });
    }else{
        //배지보이기
        gsap.to(badgeEl,0.6,{
            opacity:1,
            display:'block'
        });
        //상단버튼 숨기기
        gsap.to('#to-top',0.4,{
            x:100
        });
    }
},300));
/* CDN lodash를 다운 받은 후 이용가능한 _.throttle를 통해 특수한
부분 에서만 스크롤을 인지할 수 있게끔 함. 300은 delay를 의미하며 0.3초
이는 0.3초마다 스크롤을 감지하게끔 제한해줌. 없을 경우 스크롤을 계속 감지함 */

// 화살표 상단버튼 클릭시 이동
const totopEl = document.querySelector('#to-top');
totopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    })
});
/* y:0이 아닌이유는 요소에 기준 삼아 하기 때문에 body 요소로 변화가 없게됨.
 그래서 스크롤을 기준 삼아 스크롤 기준점 0인 부분인 가장 위를 기준으로 삼아
 올라 갈수 있게 scrollTO라는 것을 이용*/
