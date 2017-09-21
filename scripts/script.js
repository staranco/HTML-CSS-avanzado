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

var position = window.pageYOffset;

var getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

var button = document.getElementsByClassName('scrollto');

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

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

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