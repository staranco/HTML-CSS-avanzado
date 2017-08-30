//Toggle burger menu on resize
var page = document.getElementById('page');
var burgerMenu = document.getElementById('burger');
var menu = document.getElementById('menu');
var progress = document.getElementById('progress');

burgerMenu.addEventListener('click', function() {
  page.classList.toggle('resizeev');
});

menu.addEventListener('click', function() {
  page.classList.remove('resizeev');
});

//Animate post elements on enter
var animated = document.getElementsByClassName('animated')[0];
var animatedChildren = animated.children;

function doSetTimeout(i) {
  setTimeout(function() {
    animatedChildren[i].classList.add('animate')
  }, i * 100)
}

for (i = 0; i <= animatedChildren.length; i++) {
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

  var height = content.scrollHeight;
  var width = window.innerWidth;
  var windowHeight = window.innerHeight;

  var scrollProgress = (getScroll / (height - windowHeight)) * 100;
  progress.setAttribute("style","width:" + scrollProgress + "%");
});

//Truncate featuredbox text
var featuredbox = document.getElementsByClassName('featuredbox');

function truncate(string) {
  if (string.length > 100) {
    return string.substring(0, 100)+'...';
  }
  else {
    return string;
  }
};

for (i = 0; i <= featuredbox.length - 1; i++) {
  var featuredboxContent = featuredbox[i].firstElementChild.children[0];
  var featuredboxContentText = featuredboxContent.innerHTML;
  var truncated = document.createTextNode(truncate(featuredboxContentText));

  featuredbox[i].firstElementChild.replaceChild(truncated, featuredboxContent)
}