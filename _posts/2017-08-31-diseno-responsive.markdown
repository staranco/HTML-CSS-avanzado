---
layout: post
title:  "Diseño Responsive"
subtitle: "Tema 2"
date:   2017-08-31 12:00:35 +0200
---
<!--https://learn.shayhowe.com/advanced-html-css/responsive-web-design/

- [Instructor] In the previous lesson, we talked about responsive typography and used media queries to change the font sizes, but when we go from one breakpoint to another, there is an abruptive switch from one size to the other. This isn't necessarily a bad thing, we can assume that most people don't view websites by resizing the browser the way we do when we're testing our webpages. However, there is a way to create fluid typography using viewport units. There are four viewport units. Vw represents the viewport width.

Vh represents the viewport height. Vmin is the smaller value of the viewport's width or height and vmax is the larger value of the viewport width or height. Viewport refers to the browser's window size. Viewport units are a percentage of the browser's viewport dimensions. So that means 1vw is equal to 1% of the viewport's width, so 10vw is 10% of the viewport's width and so on. The vh unit works the same except it refers to the viewport's height.

Vm refers to the smaller value of the viewport width or height so 1vm would equal either 1vw or 1vh, whichever is the smaller value. 1vmax is the larger value of 1vw or 1vh. Not that there's only partial support in IE11 and Edge. Both IE11 and Edge don't support the vmax unit. Let's try this out in an example.

We can add the font size to the body element and all the elements will inherit this style. Let's start with the vw unit. I'm going to uncomment line two and run the code. Notice that with vw, it only affects the width of the viewport, but if I change the height, the font size stays the same. Now if I set it to 4vh, the opposite will happen.

Changing the height will change the font size. Changing the width will not. Vmin uses the smaller side of the viewport. So if the width of the viewport is smaller, 4vmin will be equal to 4% of the current width. Let's give that a try. And the opposite will happen for 4vmax.

The difference is, with 4vmax, it will take the value of the larger side. You can also add font size to specific elements as well. We can also use viewport units with other relative units. Let's go back to our previous rem example. If we set the root element to a fluid unit, all the relative units will now be fluid too. So let's change this html font size to 2vw instead.

So now, all of your relative rem units will be relative to a fluid unit so this means, I won't need to use the media query declaration anymore. The font size will now scale up or down based on the size of the viewport rather than specific breakpoints. I can still use media queries for a specific overrides. I can use a pixel value to override the relative value, since pixel is always fixed. So let's say for example, I always want my foot note to be 16 pixels.

By adding it here, it won't be effected by the other relative or fluid units. Using viewport units alone comes with some drawbacks. You don't get precise control over the sizes like you do with other units. Check out this article on Smashing Magazine for more details about using viewport units as well as more advanced features like the calc expression to create min and max font sizes to control the rate of the scale of your viewport units.-->
