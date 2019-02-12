---
layout: post
title:  "Transformaciones y formas"
subtitle: "Tema 6"
date:   2017-08-27 12:00:35 +0200
---
<!-- https://learn.shayhowe.com/advanced-html-css/css-transforms/

- [Narrator] By default, every HTML element is viewed by the browser as a square or a rectangle. We've been able to get around this visually by using images with transparent backgrounds. But even if the element appears to be a shape other than a square, the browser still views it as a square. If you wrap text around an element by floating it, it still follows a square or rectangular path. But what if you wanted to wrap text around the actual shape? There are shaped-based CSS properties that can be used to change the float area around an element.

Currently, on CANIUSE.COM, it's showing that these properties are only supported in Chrome, Safari and Opera. Edge is under consideration and Firefox is still in development. So it's not standardized across all modern browsers just yet, but it looks like it's on its way. Let's take a look at an example. If I add a float left to this red box, the paragraph will wrap around it. I can add a border-radius to turn the box into a circular shape.

But the browser still looks at it as a square shape. I can use this shape-outside property and choose from a variety of shape functions, as the value to change the shape of the float area around the element. For example, using the circle function will change the float area to a circular shape. This also works with images. I'm going to comment out my circle div, and put this image in. Instead of border-radius, we can also use the clip-path property, which also takes the shape functions as the value.

Let's comment out the border-radius and add clip-path back in. Right now it looks the same because it's set to the circle function. The difference between clip-path and border-radius is clip-path actually clips out parts of the elements to match the shape value. Since clip-path uses shape functions, it can also be used for more complex shapes beyond a circle. In addition to circle, there are other shape functions as well. Ellipses creates an oval shape, the polygon function is used to create irregular shapes, and inset creates an effect where the floated element is set inwards.

We'll talk about shape functions in more detail in the next lesson.

- [Narrator] By default, every HTML element is viewed by the browser as a square or a rectangle. We've been able to get around this visually by using images with transparent backgrounds. But even if the element appears to be a shape other than a square, the browser still views it as a square. If you wrap text around an element by floating it, it still follows a square or rectangular path. But what if you wanted to wrap text around the actual shape? There are shaped-based CSS properties that can be used to change the float area around an element.

Currently, on CANIUSE.COM, it's showing that these properties are only supported in Chrome, Safari and Opera. Edge is under consideration and Firefox is still in development. So it's not standardized across all modern browsers just yet, but it looks like it's on its way. Let's take a look at an example. If I add a float left to this red box, the paragraph will wrap around it. I can add a border-radius to turn the box into a circular shape.

But the browser still looks at it as a square shape. I can use this shape-outside property and choose from a variety of shape functions, as the value to change the shape of the float area around the element. For example, using the circle function will change the float area to a circular shape. This also works with images. I'm going to comment out my circle div, and put this image in. Instead of border-radius, we can also use the clip-path property, which also takes the shape functions as the value.

Let's comment out the border-radius and add clip-path back in. Right now it looks the same because it's set to the circle function. The difference between clip-path and border-radius is clip-path actually clips out parts of the elements to match the shape value. Since clip-path uses shape functions, it can also be used for more complex shapes beyond a circle. In addition to circle, there are other shape functions as well. Ellipses creates an oval shape, the polygon function is used to create irregular shapes, and inset creates an effect where the floated element is set inwards.

We'll talk about shape functions in more detail in the next lesson.-->
