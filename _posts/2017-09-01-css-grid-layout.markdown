---
layout: post
title:  "CSS Grid layout"
subtitle: "Tema 7"
date:   2017-08-28 12:00:35 +0200
---

Al principio de todo, usábamos tablas, luego comenzamos a usar floats, porcentajes y posicionamiento inline-block. Sin embargo todos estos recursos no eran sino parches que trataban de enmendar grandes carencias funcionales de versiones anteriores de CSS, el lenguaje para maquetación por excelencia que, sin embargo, distaba mucho de cumplir todas nuestras necesidades. 

La llegada de [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/){:target="_blank"} introdujo numerosos y muy positivos cambios, como por ejemplo, algo tan básico como el centrado vertical de elementos sin tener que recurrir a interminables hacks con posicionado y transformaciones. A efectos simples y unidimensionales (sólamente se desenvuelve en filas o en columnas, pero no en ambas al mismo tiempo) flexbox supuso que por fín podíamos ser capaces de realizar maquetaciones rápidas y efectivas. 

CSS Grid Layout (Grid a partir de ahora) es el primer módulo CSS creado específicamente para resolver los problemas de maquetación contra los que hemos estado lucharndo todos estos años. 

### Soporte en navegadores

Grid está soportado a mayo de 2017 por las últimas versiones de los navegadores mayoritarios, con la salvedad de IE11 y Edge, que precisan prefijo privativo y la nomenclatura inicial de las primeras fases de elaboración de la especificación. Tampoco Opera Mini y el navegador nativo de Android dan soporte.

<div class="highlightedblock bordered">
	<small>La tabla que se muestra a continuación recoge datos sacados de <a href="http://caniuse.com/#feat=css-grid" target="_blank"><small>Caniuse</small></a></small>

	<h5 class="m-b-sm">Desktop</h5>
	<ul class="inline nobullets">
		<li><span class="label lime-bg">Chrome <span class="green-text">58</span></span></li>
		<li><span class="label lime-bg">Firefox <span class="green-text">52</span></span></li>
		<li><span class="label lime-bg">Edge <span class="green-text">16</span></span></li>
		<li><span class="label amber-bg">IE <span class="deep-orange-text">11</span></span></li>
		<li><span class="label lime-bg">Safari <span class="green-text">10.1</span></span></li>
		<li><span class="label lime-bg">Opera <span class="green-text">46</span></span></li>
	</ul>
	<h5 class="m-b-sm">Móvil y Tablet</h5>
	<ul class="inline nobullets">
		<li><span class="label lime-bg">Android <span class="green-text">56</span></span></li>
		<li><span class="label lime-bg">Android Chrome <span class="green-text">59</span></span></li>
		<li><span class="label lime-bg">iOS Safari <span class="green-text">10.3</span></span></li>
		<li><span class="label deep-orange-bg">Opera mini <span class="brown-text">No</span></span></li>
	</ul>
</div>