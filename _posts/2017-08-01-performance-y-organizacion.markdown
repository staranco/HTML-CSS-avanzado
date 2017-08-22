---
layout: post
title:  "Performance y organización"
date:   2017-08-02 12:00:35 +0200
categories: jekyll html css
---
Poseer un conocimiento avanzado de HTML y CSS nos permite entender la base de una web. Estos conocimientos son indispensables para comprender las necesidades tanto de desarrollo como de definición de la experiencia del usuario.

La organización de la arquitectura de un código de base, puede afectar fácilmente no sólo a la velocidad del desarrollo, sino también a la velocidad de la renderización de las páginas. Ambos aspectos afectan tanto a desarrolladores como a usuarios finales. Tomarse el tiempo necesario para diseñar la estructura correcta de un código de base e identificar cómo cada uno de los diferentes componentes se relaccionarán entre sí puede aumentar exponencialmente la velocidad productiva y aportar una mejor experiencia.

Por lo tanto, tomarnos la molestia de mejorar la performatividad de una web puede tener numerosas consecuencias positivas. El rendimiento del sitio web se parece mucho a la regla 80/20, donde el 20% de las optimizaciones acelerará aproximadamente el 80% del sitio web.

### Estrategia y estructura

The first part to improving a website’s performance and organization revolves around identifying a good strategy and structure for developing the code base. Specifically, building a strong directory architecture, outlining design patterns, and finding ways to reuse common code.

#### Style Architecture

Exactly how to organize styles boils down to personal preference and what is best for a given website but generally speaking there are best practices to follow. One practice includes separating styles based on intent, which includes creating directories for common base styles, user interface components, and business logic modules.

```
# Base
  – normalize.css
  – layout.css
  – typography.css

# Components
  – alerts.css
  – buttons.css
  – forms.css
  – list.css
  – nav.css
  – tables.css

# Modules
  – aside.css
  – footer.css
  – header.css
```

The architecture outlined above includes three directories, all with individual groups of styles. The goal here is to **start thinking of websites as systems** rather than individual pages, and the code architecture should reflect this mindset. Notice how there aren’t any page specific styles here.

The base directory includes common styles and variables to be used across the entire website, layout and typography styles for example. The components directory includes styles for specific user interface elements which are broken down into different component files such as alerts and buttons. Lastly, the *modules* directory includes styles for different sections of a page, which are determined by business needs.

The component styles are purely interface driven and have nothing to do with the core business logic of the website. Modules then include styles specific to the business logic. When marking up a module in HTML it is common to use different user interface components within it. For example, the sidebar of a page may have list and button styles that are defined within component styles while other styles needed for the sidebar are inherited from the module style. The separation of style encourages well thought out presets and the ability for styles to be widely shared and reused.

The strategy of organizing styles this way isn’t exactly new, and has been previously mentioned in different CSS methodologies including Object Oriented CSS, OOCSS, and the Scalable and Modular Architecture for CSS, SMACSS. These methodologies have their own opinions on structure, as well as on how to use styles.

#### Object Oriented CSS

The [Object Oriented CSS](https://www.google.es) methodology was pioneered by Nicole Sullivan in her work with writing styles for larger websites. Object Oriented CSS identifies two principles that will help build scalable websites with a strong architecture and a reasonable amount of code. These two principles include:

- Separate structure from skin
- Separate content from container

Overall **separating structure from skin** includes abstracting the layout of an element away from the theme of a website. The structure of a module should be transparent, allowing other styles to be inherited and displayed without conflict. Most commonly this requires a solid grid and layout structure, along with well crafted modules.

**Separating content from the container** involves removing the dependency of a parent element nesting children elements. A heading should look the same regardless of its parent container. To accomplish this, elements need to inherit default styles, then be extended with multiple classes as necessary.
