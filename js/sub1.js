// main.js
let bgArr = [
    './images/main-banner-e1.jpg',
    './images/main-banner-e2.jpg',
    './images/main-banner-e3.jpg'
]

let num = 0 ;

setInterval(function(){
    num++
    $('#main_banner .container').css({
        'background-image':`url(${bgArr[num%bgArr.length]})`
    })
}, 5000)


$('#main_banner .container').click(function(){     
    num++  
    $('#main_banner .container').css({
        'background-image':`url(${bgArr[num%bgArr.length]})`
    }) 
    });

// 사이트맵 보이기
    let toggleEl = document.getElementsByClassName('btn_toggle')[0];
    let siteMapEl = document.getElementsByClassName('site-map-menu')[0];
    let closeEl = document.getElementsByClassName('close-btn')[0];


    toggleEl.addEventListener('click',() => siteMapEl.style.display='block');

    closeEl.addEventListener('click',() => siteMapEl.style.display='none');

//서브메뉴 변동-선택시 볼드체 변환
    let subIntro = document.getElementsByClassName('sub-intro')[0];
    let subEdu = document.getElementsByClassName('sub-educate')[0];
    let subMenu = document.querySelectorAll('#lnb ul li');
        
    document.querySelectorAll('#lnb li')[0].addEventListener('click', bold)
    document.querySelectorAll('#lnb li')[1].addEventListener('click', bold)
    document.querySelectorAll('#lnb li')[2].addEventListener('click', bold)
    document.querySelectorAll('#lnb li')[3].addEventListener('click', bold)
    document.querySelectorAll('#lnb li')[4].addEventListener('click', bold)

    function bold() {
        for(i=0;i<3;i++) {
            document.querySelectorAll('#lnb li')[i].classList.remove('active');
        }
        this.classList.add('active');
    }
    
    //서브콘텐츠 변동(선택시 콘텐츠 변동)
    document.querySelectorAll('#lnb li')[0].addEventListener('click',show)
    document.querySelectorAll('#lnb li')[1].addEventListener('click',show)
    document.querySelectorAll('#lnb li')[2].addEventListener('click',show)
    document.querySelectorAll('#lnb li')[3].addEventListener('click',show)
    document.querySelectorAll('#lnb li')[4].addEventListener('click',show)

    document.querySelectorAll('#lnb li')[0].addEventListener('click', () => document.getElementsByClassName('sub-content')[0].style.display='block');
    document.querySelectorAll('#lnb li')[1].addEventListener('click', () => document.getElementsByClassName('sub-content')[1].style.display='block');
    document.querySelectorAll('#lnb li')[2].addEventListener('click', () => document.getElementsByClassName('sub-content')[1].style.display='block');
    document.querySelectorAll('#lnb li')[3].addEventListener('click', () => document.getElementsByClassName('sub-content')[1].style.display='block');
    document.querySelectorAll('#lnb li')[4].addEventListener('click', () => document.getElementsByClassName('sub-content')[1].style.display='block');

    function show() {
        for(i=0;i<5;i++) {
            document.getElementsByClassName('sub-content')[i].style.display='none'
        }
    }