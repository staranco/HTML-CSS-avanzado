---
layout: post
title:  "Transiciones y animaciones"
subtitle: "Tema 8"
date:   2017-08-27 12:00:35 +0200
---

Todos sabemos que Internet es un medio hiperpotente capaz de proveernos de todo tipo de información en multiples formas y vías. La variedad y la cantidad proporcionan riqueza, pero a los creadores de contenidos nos obliga a idear formas de diferenciarnos del resto. Las animaciones web son una forma de atraer la atención del usuario. 

Elegir un tipo de animación ayuda a definir una dirección creativa, desde la sofisticación, al dramatismo pasando por el humor. Contamos con transiciones, efectos de *slide*, de *fade*... usarlos correctamente puede sembrar la curiosidad del usuario y animarle a continuar navegando por nuestra página.

Desde CSS3 podemos alterar la apariencia y el comportamiento de los elementos de nuestra página en función de cambios de estado acontecidos por interacciones del usuario tales como *hover*, *focus*, *active* o que por ejemplo, un elemento en cuestión sea agregado o eliminado de nuestra página. Una transición ocurre cuando un elemento cambia de estado hacia otro, siendo el navegador el que genera una secuencia lógica de procesos entre el estado inicial y el final. Las animaciones son más potentes, ya que nos permiten establecer de manera personalizada los diferentes puntos intermedios gracias a *keyframes*.

<div class="highlightedblock bordered">
	<small>Advertencia: Los ejemplos mostrados en este tema no incluyen todas las variedades de prefijos necesarios para que las animaciones funcionen en todos los navegadores. Para mejorar la compatibilidad, se recomienda utilizar</small> <a href="http://shouldiprefix.com/#animations" target="_blank"><small> los prefijos correspondientes.</small></a> <small>En el caso de las animaciones, podemos comprobar en </small><a href="http://caniuse.com/#feat=css-transitions" target="_blank"><small>Caniuse</small></a> <small>que el 93,04% de los navegadores soportan transiciones sin prefijo.</small>
</div>

### Transiciones

Para ejecutar una transición, como antes hemos mencionado, necesitamos que un determinado elemanto sufra un cambio de estado y que haya diferentes estilos aplicados al estado inicial y final del mismo. La mejor forma de establecer la ejecución de animaciones es mediante el uso de las pseudo-classes como *:hover*, *:focus*, *:active* o *:target*

Existen un total de cuatro propiedades relacionadas con las transiciones, son: *transition-property*, *transition-duration*, *transition-timing-function*, y *transition-delay*.

A continuación puedes comprobar la aplicación de las propiedades antes mencionadas en un ejemplo en vivo. En él, el texto del enlace cambia de color desde rosa a coral en 5 milisegundos con un estilo de animación llamado *ease-in-out* tres milisegundos después de que el usuario ponga el ratón sobre el enlace.

<p data-height="265" data-theme-id="dark" data-slug-hash="veKpwL" data-default-tab="css,result" data-user="stsanchez" data-embed-version="2" data-pen-title="veKpwL" class="codepen">See the Pen <a href="https://codepen.io/stsanchez/pen/veKpwL/">veKpwL</a> by STWhorf (<a href="https://codepen.io/stsanchez">@stsanchez</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Es importante saber que no todas las propiedades CSS son transicionables. Para tener en cuenta las que sí lo son, a continuación peudes ver un listado:

<div class="highlightedblock bordered">
	<ul class="columns columns-3 nobullets">
		<li><a href="https://www.w3schools.com/cssref/pr_background-color.asp" target="_blank">background-color</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_background-position.asp" target="_blank">background-position</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_border-color.asp" target="_blank">border-color</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_border-width.asp" target="_blank">border-width</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_border-spacing.asp" target="_blank">border-spacing</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_pos_bottom.asp" target="_blank">bottom</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_pos_clip.asp" target="_blank">clip</a></li>
		<li><a href="https://www.w3schools.com/cssref/css_colors.asp" target="_blank">color</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_font_font-size.asp" target="_blank">font-size</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_font_weight.asp" target="_blank">font-weight</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_dim_height.asp" target="_blank">height</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_pos_left.asp" target="_blank">left</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_text_letter-spacing.asp" target="_blank">letter-spacing</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_dim_line-height.asp" target="_blank">line-height</a></li>
		<li><a href="https://www.w3schools.com/css/css_margin.asp" target="_blank">margin</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_dim_max-height.asp" target="_blank">max-height</a></li>
		<li><a href="https://www.w3schools.com/cssref/pr_dim_max-width.asp" target="_blank">max-width</a></li>
		<li><a href="" target="_blank">min-height</a></li>
		<li><a href="" target="_blank">min-width</a></li>
		<li><a href="" target="_blank">opacity</a></li>
		<li><a href="" target="_blank">outline-color</a></li>
		<li><a href="" target="_blank">outline-offset</a></li>
		<li><a href="" target="_blank">outline-width</a></li>
		<li><a href="" target="_blank">padding</a></li>
		<li><a href="" target="_blank">right</a></li>
		<li><a href="" target="_blank">text-indent</a></li>
		<li><a href="" target="_blank">text-shadow</a></li>
		<li><a href="" target="_blank">top</a></li>
		<li><a href="" target="_blank">vertical-align</a></li>
		<li><a href="" target="_blank">visibility</a></li>
		<li><a href="" target="_blank">width</a></li>
		<li><a href="" target="_blank">word-spacing</a></li>
		<li><a href="" target="_blank">z-index</a></li>
	</ul>
</div>

#### Propiedades transicionables

#### Duración de las transiciones

#### El tempo en las transiciones

#### Demora en las transiciones

#### Métodos abreviados de declaración de transiciones

### Animaciones

#### Keyframes

#### Nombre de la animación

#### Duración, tempo y demora en las animaciones

#### Personalizar animaciones (iteracción, dirección...)

#### Métodos abreviados de declaración de animaciones