function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 
      'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
   }
  }    
ibg();
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
    let delay = 500;//задержка
    let body=document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
    });
};
function menu_close(){
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}

$(document).ready(function(){
    let position = 0
    const slidesToScroll = 1;
    const slidesToShow = 1;
    const container = $('.carriage__slider-container');
    const track = $('.carriage__slider-track');
    const item = $('.carriage__slider-item');
    const btnPrev = $('.carriage__btn-left');
    const btnNext = $('.carriage__btn-right');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    })

    btnNext.click(function(){
        position -= movePosition;

        setPosition();
        checkBtns();
    }); 

    btnPrev.click(function(){
         position += movePosition;

         setPosition();
         checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
            
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled', 
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };
    
    checkBtns();
    
});
