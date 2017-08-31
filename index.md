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