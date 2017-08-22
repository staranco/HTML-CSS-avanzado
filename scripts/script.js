//Toggle burger menu on resize
var page = document.getElementById('page');
var burgerMenu = document.getElementById('burger');
var menu = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  page.classList.toggle('resizeev');
});

menu.addEventListener('click', function() {
  page.classList.remove('resizeev');
});

//Animate post elements on enter
var post = document.getElementById('post');
var postChildren = post.children;

function doSetTimeout(i) {
  setTimeout(function() {
    postChildren[i].classList.add('animate')
  }, i * 100)
}

for (i = 0; i <= postChildren.length; i++) {
    this.doSetTimeout(i)
}

//Get scroll position
var content = document.getElementById('content');

content.addEventListener('scroll', function(){
  var getScroll = this.scrollTop;
  if (getScroll > 200) {
    burgerMenu.classList.add('scrollev');
  } else {
    burgerMenu.classList.remove('scrollev');
  }
});
