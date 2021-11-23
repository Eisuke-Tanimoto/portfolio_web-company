// メニューボタンのイベントです。

const menu = document.querySelector('.menu-btn');
const cover = document.querySelector('.nav-cover')

menu.addEventListener('click', function() {
  menu.classList.toggle('menu-open');
  cover.classList.toggle('menu-open');
})

// トップへ移動するイベントです。

$('.top-scroll').click(function() {
  $('html,body').animate({scrollTop : 0}, 500);
})


// ヘッダーとトップスクローラーの位置を監視するスクロールオブザーバーイベントです。

const topIcon = document.querySelector('.top-scroll')
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

const cbTop = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      topIcon.classList.add('inview');
    } else {
      topIcon.classList.remove('inview');
    }
  });
}
const cbHeader = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add('triggered');
    } else {
      header.classList.remove('triggered');
    }
  });
}

const options = {
  root : null,
  rootMargin: '0px',
  threshold: [0.25,0.5]
}

const io = new IntersectionObserver(cbTop, options);
const io2 = new IntersectionObserver(cbHeader, options);
io.observe(hero);
io2.observe(hero);