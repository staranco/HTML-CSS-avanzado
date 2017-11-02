---
layout: post
title:  "Performance y organización"
subtitle: "Tema 1"
date:   2017-09-01 12:00:35 +0200
---
Poseer un conocimiento avanzado de HTML y CSS nos permite entender la base de una web. Estos conocimientos son indispensables para comprender las necesidades tanto de desarrollo como de definición de la experiencia del usuario.

La organización de la arquitectura del código de un proyecto puede afectar fácilmente no sólo a la velocidad del desarrollo, sino también a la velocidad de la renderización de las páginas. Ambos aspectos afectan tanto a desarrolladores como a usuarios finales. Tomarse el tiempo necesario para diseñar la estructura correcta del código e identificar cómo cada uno de los diferentes componentes se relaccionarán entre sí puede aumentar exponencialmente la velocidad productiva y proporcionar una experiencia mejor.

### Estrategia y estructura

El primer paso para mejorar la respuesta de una página web o app radica en identificar una buena estrategia y estructura para desarrollar el código base. Un primer paso debería ser construir un directorio estructural, posteriormente resaltar los patrones de diseño y finalmente perseguir la creación de código reutilizable.  
  
#### Arquitectura

La manera en la que organicemos nuestras hojas de estilo reside puramente en preferencias personales, pero gerealmente hay una serie de directrices de buenas prácticas a seguir. Una de las más repetidas es la de separar los estilos en función de su propósito, lo que supone crear directorios, por ejemplo, para estilos de base, para componenetes de la interfaz, para elementos comunes etc.

```
# Base
  – animations.css
  – layout.css
  – typography.css

# Components
  – alerts.css
  – buttons.css
  – forms.css
  – lists.css
  – badges.css
  – tables.css

# Modules
  – aside.css
  – footer.css
  – header.css
```

Esta arquitectura aquí descrita incluye tres directorios, todos con sus respectivas hojas de estilos. El principal propósito es **pensar en las páginas web y en las apps como sistemas** más que como conjuntos de páginas individuales, y estructurar el código de manera que se refleje esta filosofía. Se puede observar en el ejemplo anterior cómo no existe ninguna hoja de estilos que afecte específicamente a una página. 

El directorio "base" incluye estilos comunes y variables que serán usadas en toda la aplicación o sitio web: "**layout**" o "**typography**" por ejemplo. El directorio de "**componentes**" incluye los estilos que se emplearán en elementos específicos dentro de la interfaz, tales como "**alerts**", "**buttons**" o "**tables**". Por último, el directorio "**modules**" incluye los estilos para las diferentes secciones de una página, qeu están determinados por las necesidades específicas de cada aplicación o site.

El estilo que aplicamos a los diversos componentes comprende, de este modo, estilos específicos que responden a las necesidades estilíticas de la web en concreto y estilos heredados del componente "genérico" en sí mismo. Por ejemplo los botones de una página web en concreto pueden ser de color rosa, los de otra tener los bordes redondeados... (estilos concretos) pero todos los botones deberían ser suficientemente amplios y estar distanciados del resto de elementos como para poder ser presionados sin entorpecer la navegación (estilos genéricos). Esta separación de estilos propicia que sean resusables y "compartibles" por la comunidad o entre proyectos dentro de una misma compañía. 

Organizar los estilos siguiendo esta estrategia no es nueva y ha sido mencionada previamente en diversas metodologías CSS incluyendo [OOCSS](http://oocss.org/){:target="_blank"} (Object Oriented CSS), [BEM](http://getbem.com/){:target="_blank"} (Block, Element, Modifier) o [SMACS](https://smacss.com/){:target="_blank"} (Scalable and Modular Architecture for CSS). Se trata de metodologías que tienen su propia filosofía de estructuración y acerca de cómo usar los estilos. 

#### CSS orientado a objetos (OOCSS)

La metodología [Object Oriented CSS](https://github.com/stubbornella/oocss){:target="_blank"} fue desarrollada por [Nicole Sullivan](http://www.stubbornella.org/content){:target="_blank"} en 2008 y se basa en dos principios básicos que contribuyen a construir sites y aplicaciones escalables con una arquitectura sólida:

- Separar la estructura del diseño
- Separar el contenedor del contenido

Con **Separar la estructura del diseño** debemos entender que la filosofía OOCSS propone que los elementos de una página web o aplicación tienen diferentes características visuales que se repiten generalmente en los diferentes contextos. Lo mismo ocurre con las características estructurales, que también son compartidas en los diferentes puntos de la página o app. Si abstraemos estas características repetidas en módulos basados en clases, haremos que sean reutilizables y puedan ser aplicadas en cualquier punto sin tener que repetir código. 

**Separar el contenedor del contenido** implica deshacernos de la dependencia de los elementos de un elemento superior o "padre". Para lograrlo, los elementos deben tener sus estilos propios por defecto que podrán extenderse mediante clases si es necesario.