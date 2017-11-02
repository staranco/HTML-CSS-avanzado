---
layout: home
title:  "Guía de HTML y CSS avanzado"
subtitle:  "Comprende el proceso de maquetación"
date:   2017-08-01 12:00:35 +0200
---

Conocer los conceptos de la maquetación web puede parecer sencillo a priori, pero dominar estas nociones en profundidad requiere acercarnos al diseño y desarrollo fornt end. No se trata sólamente de colocar elementos dentro de una web, sino de hacerlo de manera consciente, flexible y optimizada.

<ol class="columns columns-3">
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

<div class="highlightedblock bordered">
	<a href="#"><h3 class="m-t-n">Guía de HTML y CSS avanzado en PDF</h3></a>
	<p>La guía está completamente disponible para descarga bajo licencia Creative Commons y puedes hacer con ella lo que quieras: imprimirla, guardarla en tu ordenador, o dejarla en la carpeta de descargas hasta que vendas tu ordenador por wallapop para retirarte del mundo digital y montar un puesto de alcachofas orgánicas.</p> 
	<p class="m-b-n">Esta Guía de HTML y CSS avanzado está creada con la única intención de proporcionar a todos los diseñadores gráficos, diseñadores web principiantes o curiosos digitales que quieran adentrarse un poco más en el mundo de la maquetación web.</p>
</div>