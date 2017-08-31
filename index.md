---
layout: home
title:  "Guía de HTML y CSS avanzado"
subtitle:  "Comprende el proceso de maquetación"
date:   2017-08-01 12:00:35 +0200
---

Conocer los conceptos de la maquetación web puede parecer a priori algo sencillo, pero dominar estas nociones en profundidad requiere acercarnos al diseño y desarrollo fornt end. No se trata sólamente de colocar elementos dentro de una web, sino de hacerlo de manera consciente, flexible y optimizada.

<ol>
	{% for post in site.posts %}
	<li>{{ post.title }}</li>
    {% endfor %}
</ol>

<button href="#" class="btn margin-auto display-block filled xl"><span class="btn__line"></span><span class="btn__text">Descargar curso en PDF</span></button>

<ul class="home__social inline nobullets text-align-center display-block m-lg">
	<li><a href="https://github.com/staranco" target="_blank" class="p-sm"><i class="icon ion-social-github"></i></a></li>
	<li><a href="https://www.linkedin.com/in/susanataranco" target="_blank" class="p-sm"><i class="icon ion-social-linkedin"></i></a></li>
	<li><a href="http://susana-taranco.me" target="_blank" class="p-sm"><i class="icon ion-android-happy"></i></a></li>
</ul>