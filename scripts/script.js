//MENU HACKS
//Toggle Burger menu on resize
var page = document.getElementById('page');
var burgerMenu = document.getElementById('burger');
var menu = document.getElementById('menu');
burgerMenu.addEventListener('click', function() {
  page.classList.toggle('resizeev');
});

menu.addEventListener('click', function() {
  page.classList.remove('resizeev');
});

//Show next prev menu elements
var menuList = document.getElementsByClassName('menu__list')[0];
var menuItems = [];
for (i = 0; i < menuList.children.length; i++) {
  menuItems.push(menuList.children[i])
}

var menuShowedItems = menuItems.slice(0, 5);
for (j = 0; j < menuShowedItems.length; j++) {
  menuShowedItems[j].classList.add('show');
}

function sliceArray(array, first, last) {
  array.slice(first, last);
  for (j = 0; j < array.length; j++) {
    array[j].classList.add('show');
  }
}

var k = 0;
console.log(k, k + 4)
function nextItem(){
  k = k + 4;
  console.log(k, k+4);
  sliceArray(menuItems, k, k+4)
  return(k)
}
function prevItem(){
  (k > 0) ? (k = k - 4) : (k = 0);
  console.log(k, k+4)
  sliceArray(menuItems, k, k+4)
}

var prevButton = document.getElementById('prev_button');
var nextButton = document.getElementById('next_button');
var items = menuList.children;
prevButton.addEventListener("click", function(e) {
  console.log(items)
  for (i = 0; i < items.length; i ++) {
    items[i].classList.remove('show');
  }
  prevItem()
})
nextButton.addEventListener("click", function(e) {
    console.log(items)
  for (i = 0; i < items.length; i ++) {
    items[i].classList.remove('show');
  }
  nextItem()
})

//ANIMATE POSTS ELEMENTS ON ENTER
var animated = document.getElementsByClassName('animated')[0];
var animatedChildren = animated.children;

function doSetTimeout(i) {
  setTimeout(function() {
    animatedChildren[i].classList.add('animate')
  }, i * 100)
}

for (i = 0; i < animatedChildren.length; i++) {
    this.doSetTimeout(i)
}

//DIRECTORY HACKS
var content = document.getElementById('content');
var directory = document.getElementById('directory');
var directoryContent = document.getElementsByClassName('directory__content')[0];
var pageNumber = document.getElementById('post__subtitle').innerHTML;
var directoryNumber = document.getElementsByClassName('directory__numberbullet')[0];
var pageSections = document.getElementById('post').querySelectorAll('h3, h4');
var button = document.getElementsByClassName('scrollto');

//show or not show directory
directory ? null : content.classList.add('fullwidth');

//Title creation
function trimText(text, string) {
  return string.replace(text, '')
}
directoryNumber.innerHTML = trimText('Tema ', pageNumber);

//List creation
var ul = document.createElement('ul');
ul.classList.add('directory__content__list');
for (s = 0; s < pageSections.length; s++) {
  var li = document.createElement('li');
  li.classList.add('directory__content__list__item');
  li.innerHTML = `<a href="#${pageSections[s].id}" class="scrollto">${pageSections[s].innerHTML}</a>`
  ul.appendChild(li);
}
directoryContent.appendChild(ul);

//Get distance from top of an element
var position = window.pageYOffset;
var getElemDistance = function (elem) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

//Math easing function
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

//ScrollTo target function
function scrollTo(element, to, duration) {
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;
  var animateScroll = function(){
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
        setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

//Target scroll onclick
for (b = 0; b < button.length; b++) {
  thisButton = button[b];
  thisButton.addEventListener('click', function(e) {
    e.preventDefault();

    var id = trimText('#', this.getAttribute('href'));
    var target = document.getElementById(id)
    var targetTop = getElemDistance(target);

    scrollTo(content, targetTop - 20, 500);
  })
}

//PROGRESSBAR HACKS
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

//FETUREDBOX HACKS
var featuredbox = document.getElementsByClassName('featuredbox');

//Truncate text
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
