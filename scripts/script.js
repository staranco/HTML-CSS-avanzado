var page = document.getElementById('page');
var burgerMenu = document.getElementById('burger');
var menu = document.getElementById('menu');

//Toggle burger menu on resize
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

//Directory hacks
var content = document.getElementById('content');
var directory = document.getElementById('directory');
var directoryContent = document.getElementsByClassName('directory__content')[0];
var pageNumber = document.getElementById('post__subtitle').innerHTML;
var directoryNumber = document.getElementsByClassName('directory__numberbullet')[0];
var pageSections = document.getElementById('post').querySelectorAll('h3, h4');

directory ? null : content.classList.add('fullwidth');

function trimText(text, string) {
  return string.replace(text, '')
}

directoryNumber.innerHTML = trimText('Tema ', pageNumber);

var ul = document.createElement('ul');

for (s = 0; s < pageSections.length; s++) {
  var li = document.createElement('li');
  li.innerHTML = `<a href="#${pageSections[s].id}" class="scrollto">${pageSections[s].innerHTML}</a>`
  ul.appendChild(li);
}

directoryContent.appendChild(ul);

var button = document.getElementsByClassName('scrollto');

for (b = 0; b <= button.length; b++) {
  button[b].addEventListener('click', function() {
//******************************************************************************************************************************************TODO
  })
}

//Get scroll position
var progress = document.getElementById('progress');
content.addEventListener('scroll', function(){
  var getScroll = this.scrollTop;
  getScroll > 200 ?  burgerMenu.classList.add('scrollev') :  burgerMenu.classList.remove('scrollev');

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