setTimeout(function(){
    document.querySelector(".thong-tin").style.display = "block";
  }, 20000);

function giay(x){
  var bd = document.getElementById('giay');
  var zz = document.getElementById('giay1')
  var xx = document.getElementById('giay2')
  var cc = document.getElementById('giay3')
  var vv = document.getElementById('giay4')
  var bb = document.getElementById('giay5')
  var nn = document.getElementById('giay6')
  var mm = document.getElementById('giay7')
  var aa = document.getElementById('giay8')
  var ss = document.getElementById('giay9')
  var dd = document.getElementById('giay10')
  var ff = document.getElementById('giay11')
  var gg = document.getElementById('giay12')
  
  if( x==1){
    bd.src = "1.1.png"
    zz.src = "/nike/1.png"
    xx.src = "/nike/2.png"
    cc.src = "/nike/3.png"
    vv.src = "/nike/4.png"
    bb.src = "/nike/5.png"
    nn.src = "/nike/6.png"

    mm.src = "/nike/1.png"
    aa.src = "/nike/2.png"
    ss.src = "/nike/3.png"
    dd.src = "/nike/4.png"
    ff.src = "/nike/5.png"
    gg.src = "/nike/6.png"
  }
  if( x==2){
    bd.src = "/nike4/1.png"
    zz.src = "/nike4/1.png"
    xx.src = "/nike4/2.png"
    cc.src = "/nike4/3.png"
    vv.src = "/nike4/4.png"
    bb.src = "/nike4/5.png"
    nn.src = "/nike4/6.png"

    mm.src = "/nike4/1.png"
    aa.src = "/nike4/2.png"
    ss.src = "/nike4/3.png"
    dd.src = "/nike4/4.png"
    ff.src = "/nike4/5.png"
    gg.src = "/nike4/6.png"
    
  }
  if( x==3){
    bd.src = "/nike3/1.png"
    zz.src = "/nike3/1.png"
    xx.src = "/nike3/2.png"
    cc.src = "/nike3/3.png"
    vv.src = "/nike3/4.png"
    bb.src = "/nike3/5.png"
    nn.src = "/nike3/6.png"

    mm.src = "/nike3/1.png"
    aa.src = "/nike3/2.png"
    ss.src = "/nike3/3.png"
    dd.src = "/nike3/4.png"
    ff.src = "/nike3/5.png"
    gg.src = "/nike3/6.png"
  }
  if( x==4 ){
    bd.src = "/nike5/1.png"
    zz.src = "/nike5/1.png"
    xx.src = "/nike5/2.png"
    cc.src = "/nike5/3.png"
    vv.src = "/nike5/4.png"
    bb.src = "/nike5/5.png"
    nn.src = "/nike5/6.png"

    mm.src = "/nike5/1.png"
    aa.src = "/nike5/2.png"
    ss.src = "/nike5/3.png"
    dd.src = "/nike5/4.png"
    ff.src = "/nike5/5.png"
    gg.src = "/nike5/6.png"
  }
  if ( x==5 ){
    bd.src = "/nike6/1.png"
    zz.src = "/nike6/1.png"
    xx.src = "/nike6/2.png"
    cc.src = "/nike6/3.png"
    vv.src = "/nike6/4.png"
    bb.src = "/nike6/5.png"
    nn.src = "/nike6/6.png"

    mm.src = "/nike6/1.png"
    aa.src = "/nike6/2.png"
    ss.src = "/nike6/3.png"
    dd.src = "/nike6/4.png"
    ff.src = "/nike6/5.png"
    gg.src = "/nike6/6.png"
  }
}


function mau(x){
  var img = document.getElementById('mau1').querySelector('img');
  var imgg = document.getElementById('mau2').querySelector('img');
  var imggg = document.getElementById('mau3').querySelector('img');
  var imgggg = document.getElementById('mau4').querySelector('img');
  var imggggg = document.getElementById('mau5').querySelector('img');

  var bd = document.getElementById('giay').querySelector('img');
  var zz = document.getElementById('giay1').querySelector('img');
  var xx = document.getElementById('giay2').querySelector('img');
  var cc = document.getElementById('giay3').querySelector('img');
  var vv = document.getElementById('giay4').querySelector('img');
  var bb = document.getElementById('giay5').querySelector('img');
  var nn = document.getElementById('giay6').querySelector('img');
  var mm = document.getElementById('giay7').querySelector('img');
  var aa = document.getElementById('giay8').querySelector('img');
  var ss = document.getElementById('giay9').querySelector('img');
  var dd = document.getElementById('giay10').querySelector('img');
  var ff = document.getElementById('giay11').querySelector('img');
  var gg = document.getElementById('giay12').querySelector('img');


  if ( x==1 ){
    img.setAttribute('src', '/giay1/4.jpg');
    imgg.setAttribute('src', '/giay1/6.jpg');
    imggg.setAttribute('src', '/giay1/3.jpg');
    imgggg.setAttribute('src', '/giay1/2.jpg');
    imggggg.setAttribute('src', '/giay1/5.jpg');
    
    
  }
  if ( x==2 ){
    img.setAttribute('src', '/giay2/4.jpg');
    imgg.setAttribute('src', '/giay2/2.jpg');
    imggg.setAttribute('src', '/giay2/3.jpg');
    imgggg.setAttribute('src', '/giay2/6.jpg');
    imggggg.setAttribute('src', '/giay2/5.jpg');
  }
  if ( x==3 ){
    img.setAttribute('src', '/giay3/4.jpg');
    imgg.setAttribute('src', '/giay3/2.jpg');
    imggg.setAttribute('src', '/giay3/3.jpg');
    imgggg.setAttribute('src', '/giay3/6.jpg');
    imggggg.setAttribute('src', '/giay3/5.jpg');
  }
  if ( x==4 ){
    img.setAttribute('src', '/giay4/6.jpg');
    imgg.setAttribute('src', '/giay4/4.jpg');
    imggg.setAttribute('src', '/giay4/3.jpg');
    imgggg.setAttribute('src', '/giay4/5.jpg');
    imggggg.setAttribute('src', '/giay4/2.jpg');
  }
  if ( x==5 ) {
    img.setAttribute('src', '/giay5/4.jpg');
    imgg.setAttribute('src', '/giay5/2.jpg');
    imggg.setAttribute('src', '/giay5/3.jpg');
    imgggg.setAttribute('src', '/giay5/6.jpg');
    imggggg.setAttribute('src', '/giay5/5.jpg');
  }
}




























let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-slide");

function showSlide() {
  // Ẩn slide hiện tại
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Chuyển đến slide tiếp theo
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  // Hiển thị slide tiếp theo
  slides[slideIndex-1].style.display = "block";
  // Thiết lập thời gian delay giữa các ảnh (5000ms = 5 giây)
  setTimeout(showSlide, 5000);
}
function changeSlide(n) {
  // Thay đổi slide hiện tại
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  // Hiển thị slide mới
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
// Bắt đầu slideshow khi trang được tải
showSlide();



// đổi ảnh giày color
const buttons = document.querySelectorAll('.buttons button');
const image = document.querySelector('.giay-color img');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');
    const src = button.getAttribute('data-src');
    image.setAttribute('src', src);
  });
});

