// xây dựng popup register và login
var loginRegister_Btn = document.querySelector('#login_register')
var modal = document.querySelector('.modal')
var popupRegister = document.querySelector('#popupRegister')
var popupLogin = document.querySelector('#popupLogin')
var connect1 = document.querySelector('#connect_popup1')
var connect2 = document.querySelector('#connect_popup2')
var exit1 = document.querySelectorAll('.au-form__controls-back')[0]
var exit2 = document.querySelectorAll('.au-form__controls-back')[1]
var loginRegister_responsive = document.querySelector('#login-register__mobile-tablet') 
var exitByOverlay = document.querySelector('.modal__overlay')

loginRegister_Btn.addEventListener('click', function() {
  modal.style.display = 'flex';
  popupRegister.style.display = 'block';
 
})

//tạo sự kiện click nút login register cho responsive

loginRegister_responsive.addEventListener('click', function() {
  modal.style.display = 'flex';
  popupRegister.style.display = 'block'
})

//xây dựng nút thoát register form

 exit1.addEventListener('click', function() {
    modal.style.display = 'none';
    popupRegister.style.display = 'none';
 })

 // xây dựng nút thoát login form

 exit2.addEventListener('click', function() {
  modal.style.display = 'none';
  popupLogin.style.display = 'none';
})

// xây dựng nút kết nối register và login

connect1.addEventListener('click', function() {
  modal.style.display = 'flex';
  popupLogin.style.display = 'block';
  popupRegister.style.display = 'none';
})

connect2.addEventListener('click', function() {
  modal.style.display = 'flex';
  popupRegister.style.display = 'block';
  popupLogin.style.display = 'none';
})

//thoát form khi click ra bên ngoài 
exitByOverlay.addEventListener('click', function() {
  modal.style.display = 'none';
  popupRegister.style.display = 'none';
  popupLogin.style.display = 'none';
})

//slide

const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

//hàm chạy slide tự động
let timer = setInterval(autoslide, 8000);
function autoslide() {
  counter += 1;
  slidefun(counter);
}

// hàm  nút bấm trước và sau
function plusSlides(n) {
  counter +=n;
  slidefun(counter);
  resetTimer();
}

// hàm 4 nút bấm manual 
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer
}

// hàm reset lại slide chạy tự động
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

// hàm này có chức năng đóng hết các slide và chỉ cho slide chỉ định hoạt động
function slidefun(n) {
  let i;
  for(i = 0; i < myslide.length; i++) {
    myslide[i].style.display = 'none';
  }

  for(i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active')
  }

  if (n > myslide.length) {
    counter = 1
  }

  if (n < 1) {
    counter = myslide.length
  }
  myslide[counter-1].style.display = 'block'
  dot[counter-1].classList.add('active')
}


// accordion menu sản phẩm

const accordion = document.getElementsByClassName('accordion__category')

for(i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('accordion-active')
  })
}
