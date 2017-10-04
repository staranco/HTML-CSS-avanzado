---
layout: post
title:  "Fundamentos de CSS Grid layout"
subtitle: "Tema 7"
date:   2017-08-28 12:00:35 +0200
---

Al principio de todo, usábamos tablas, luego comenzamos a usar floats, porcentajes y posicionamiento inline-block. Sin embargo todos estos recursos no eran sino parches que trataban de enmendar grandes carencias funcionales de versiones anteriores de CSS, el lenguaje para maquetación por excelencia que, sin embargo, distaba mucho de cumplir todas nuestras necesidades. 

La llegada de [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/){:target="_blank"} introdujo numerosos y muy positivos cambios, como por ejemplo, algo tan básico como el centrado vertical de elementos sin tener que recurrir a interminables hacks con posicionado y transformaciones. A efectos simples y unidimensionales (sólamente se desenvuelve en filas o en columnas, pero no en ambas al mismo tiempo) flexbox supuso que por fín podíamos ser capaces de realizar maquetaciones rápidas y efectivas. 

CSS Grid Layout (Grid a partir de ahora) es el primer módulo CSS creado específicamente para resolver los problemas de maquetación contra los que hemos estado luchando todos estos años. 

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

### Conceptos fundamentales

Al principio puede resultar un poco complicado adecuarse al uso de este módulo debido a la gran cantidad de nuevas propiedades que nos brinda, pero precisamente por esta gran cantidad de posibilidades debe convertirse en un _must_ dentro de la maquetación css. 

Conceptos fundamentales:
- **Grid Container:** Es el contenedor al que se aplica la propiedad <code class="inline">display: grid</code>. Es el padre de los _grid items_.
- **Grid Item:** Es cada uno de los hijos directos del _grid container_.
- **Grid Cell:** Es una unidad individual de la cuadrícula, en terminología de tablas, sería una _celda_
- **Grid Tracks:** Es el espacio que hay entre dos líneas de la cuadrícula. Podemos pensar en ellas como las _filas_ o _columnas_ de una tabla. 
- **Grid Lines:** Se trata de las líneas divisorias que demarcan la estructura de la _cuadrícula_. Pueden ser tanto horizontales como verticales.
- **Grid Area:** Es el espacio encuadrado entre cuatro _grid lines_. Puede comprender todas las _grid cells_ que queramos.

### Usando CSS Grid Layout

#### Definiendo una grid
Puedes familiarizarte con el uso de <code class="inline">display: grid</code> con este pen, en el que hemos creado un contenedor con la clase *grid*, y varios módulos con la clase *grid__item* que contienen una imagen y un titulo. Al proporcionar al contenedor la propiedad <code class="inline">display: grid</code> activamos las propiedades de CSS Grid Layout como <code class="inline">grid-template-columns</code> (en la que seteamos las anchuras para las columnas), <code class="inline">grid-template-rows</code> (lo mismo pero para las filas), <code class="inline">grid-column-gap</code> (establecemos el grosor de la separación entre columnas) y <code class="inline">grid-row-gap</code> (igual pero para los huecos entre filas). 

<p data-height="265" data-theme-id="dark" data-slug-hash="YxMEbK" data-default-tab="html,result" data-user="stsanchez" data-embed-version="2" data-pen-title="CSSGridLayout" class="codepen">See the Pen <a href="https://codepen.io/stsanchez/pen/YxMEbK/">CSSGridLayout</a> by STWhorf (<a href="https://codepen.io/stsanchez">@stsanchez</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Nuevas Unidades Especiales y la función *repeat()*
Con CSS grid nos llega una nueva unidad: **fr**, que es el equivalente a *fracción*. Vemos además que a la propiedad *grid-template-columns* le hemos asociado la funcion <code class="inline">repeat(3, 1fr)</code>, que hará que se repita 3 veces el valor que resulta de dividir la anchura total de la pantalla entre 3, de manera qeu si redimensionamos la pantalla, la anchura de cada módulo seguirá adaptándose al no tratarse de medidas absolutas, sino fracciones relativas al contenedor que las envuelve. 

<p data-height="265" data-theme-id="dark" data-slug-hash="ZXayvB" data-default-tab="html,result" data-user="stsanchez" data-embed-version="2" data-pen-title="CSSGridLayout - Fr Units" class="codepen">See the Pen <a href="https://codepen.io/stsanchez/pen/ZXayvB/">CSSGridLayout - Fr Units</a> by STWhorf (<a href="https://codepen.io/stsanchez">@stsanchez</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Ordenación de los elementos y auto-placement
Antes de comenzar a dar una breve explicación de los siguientes conceptos, quiro incidir en que la colocación "forzada" que CSS Grid Layout nos permite realizar de los ítems independientemente de su colocación en el HTML puede dar lugar a ciertos conflictos de accesibilidad, ya que sólo cambiaremos el orden visual de los elementos, y no su estructura lógica en el documento.

<div class="highlightedblock bordered">
	<small>Al ejemplo que venimos usando le hemos realizado ciertas modificaciones para que sea más claro mostrar la ordenación automática de los ítems y como afecta a su visualización. Ahora los titulares muestran el número de orden original del 1 al 6, donde 1 es originalmente el primero y 6 el último.</small>
</div>

En este caso, al div contenedor le hemos aplicado la propiedad <code class="inline">grid-auto-flow</code>, con la que establecemos la dirección que tomarán las filas de nuestra cuadrícula. Esta propiedad tiene los valores posibles *row* (fila, horizontal y es el valor por defecto), *column* (columna, vertical), y *dense* (que intenta autorellenar los espacios en blanco si hay unos ítems más altos que otros o mas estrechos que otros). En el ejemplo nos hemos decantado por ordenar los elementos en sentido vertical con <code class="inline">grid-auto-flow: column</code>. 

En cuanto a la ordenación índividual de los elementos, podemos lograrla con la propiedad <code class="inline">order</code>. En este caso a la clase genérica de nuestros ítems *.grid__item* le hemos aplicado <code class="inline">order: 2</code> (para que se ordenen a partir de la posición 2) y al ítem 3 le hemos aplicado <code class="inline">order: 1</code>, de este modo podemos ver cómo el primer módulo ya no es el de la Noticia 1, sino el de la 3. 

<p data-height="265" data-theme-id="dark" data-slug-hash="qPVjvy" data-default-tab="html,result" data-user="stsanchez" data-embed-version="2" data-pen-title="CSSGridLayout - Element placement" class="codepen">See the Pen <a href="https://codepen.io/stsanchez/pen/qPVjvy/">CSSGridLayout - Element placement</a> by STWhorf (<a href="https://codepen.io/stsanchez">@stsanchez</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Además de estos pequeños pens que hemos ido linkando a cada sección, puedes ver en [Grid by Example de Rachel Andrew](https://gridbyexample.com/examples/){:target="_blank"} un compendio mucho más profuso y detallado de casos y ejemplos de uso de CSS Grid Layout (en inglés).