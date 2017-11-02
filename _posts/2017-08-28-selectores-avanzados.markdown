---
layout: post
title:  "Selectores avanzados"
subtitle: "Tema 5"
date:   2017-08-28 12:00:35 +0200
---
https://learn.shayhowe.com/advanced-html-css/complex-selectors/

- [Teacher] In HTML, an attribute is used to provide additional information such as the location of an image file in an image tag or to define characteristics of an element such as different form input types. They usually follow the format of attribute name equals the value, contained in single or double quotes. The values may very depending on the attribute and there are also some exceptions where the attribute can be used with or without a value. There are two attributes that are commonly associated with CSS, ids and classes.

Ids and classes are a little different from all the other attributes. They each have their own specific CSS syntax. Classes are defined with a leading period followed by the class name, and ids use a leading number sign, followed by the id name. However, any attribute can be used as a CSS selector. Aside from class and id, all other attributes follow the syntax when used as a CSS selector. The attribute name enclosed in square brackets with or without a value. Let's take a look at an example.

As we've just talked about, class and id attributes have their own CSS selector syntax, but for all other attributes, use the attribute name enclosed in square brackets with or without a value. Let's first select the source attribute in the image tag on line five in the HTML. If I wanted to just select the source attribute I would start with my square brackets and put the attribute name. I'll just add a boarder style.

And run the code. Why would I want to use the attribute when I could just select the IMG image tag? Well, using the attribute is just another way to use a more specific selector, especially for form elements like input, as you can see in lines eight and nine. There are many different types. Here's a text input in a password input. If I type into a text input, you'll be able to see my letters, but if I type into the password input, you'll just see dots instead. Let's say I wanted to give each input its own style.

Instead of adding a class to each one, I can just select the attribute and the value instead. I'm just going to move my CSS box down a little bit to give myself a little more space, and I'll just add some boarder styles to these two input boxes as well. First I'm going to select my text type. Type equals text, in quotes, put my curly brackets and my boarder style. Let's give it a different color.

For my password type, I'll start the same, and give it a value of password instead. Run the code. Now, I've given each of my input types a different style by using the attribute and the value. We've covered this in part one and two of this series. Let's talk about some more advanced techniques. Let's say I have a bunch of links on my personal site. As you can see in lines 12 to 14 in the HTML side, some of the links are linking to pages within my site and some are linking to external websites.

Let's say I wanted to style my internal links to be different from my external links. Again, I could add a class to each one, or I can use a pattern matching technique to select my attribute value. Let me just type it in first and then we'll discuss the syntax. It starts the same, except this time I'm going to add an asterisk. Let's run the code and see what happens. By adding the asterisk in front of the equal sign, this selector will now look for any href attribute with the specific value enclosed in these quotes.

Because I have my URL listed in both lines 12 and 13, this style will now be applied to both of them. It's only looking for that specific pattern. It doesn't have to match the entire URL. This pattern matching technique can actually be used for any type of attribute. This selector's also useful for the class attribute since it contain multiple values, because it will match the string that is contained anywhere within the attribute value. This could be at the end, the beginning, or in the middle. If you need a selector that matches a more specific pattern, adding a caret symbol before the equal sign will only match the attribute values that begin with the specified string.

This could be useful for selecting multiple elements which use the same attribute and prefix value. In this example, all the shared styles can be added using this attribute selector. On the flip side, adding a dollar sign before the equal sign will match the attribute values that end with a particular string. This could be useful for selecting specific file types. If you want to learn more about advanced selectors in general, check out this article. Some of these selectors, we've talked about, but some of them, we haven't.

You might not memorize them all, as the title suggests, but it's a good resource that I myself have referred to many times over the years. I suggest scanning through the list, just to become familiar with what options are available.