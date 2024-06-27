# CSS Interview Questions

## Table of Questions

<br/>

|Sl.No| Questions                                                                         |
|-----|-----------------------------------------------------------------------------------|
| 01.|[Why is CSS important.](#Q1)|
| 02.|[What do you mean by `metatag`? And why is meant by `initial value = 1.0`](#Q2)|
| 03.|[In how many ways can CSS be integrated.](#Q3)|
| 04.|[Explain the box model.](#Q4)|
| 05.|[Difference between id and class selectors.](#Q5)|
| 06.|[What are data attributes?](#Q6)|
| 07.|[Position in CSS: Difference between `static`, `absolute`, `relative`, and `fixed`.](#Q7)|
| 08.|[Are CSS properties case-sensitive?](#Q8)|
| 09.|[Describe floats and how they work. How to clear floating sides](#Q9)|
| 10.|[Describe `z-index` and how stacking context is formed.](#Q10)|
| 11.|[Do `margin` and `padding` have an effect on inline elements.](#Q11)|
| 12.|[How will you decide when to use a `button` or `tag`?](#Q12)|
| 13.|[If you have a `<p>` element with `font-size: 10rem`, will the text be responsive when the user resizes or drags the browser window?](#Q13)|
| 14.|[What are the differences between `visibility: hidden` and `display: none`?](#Q14)|
| 15.|[What are the differences between `inline`, `block`, and `inline-block` display types?](#Q15)|
| 16.|[Does `overflow: hidden` create a new block formatting context?](#Q16)|
| 17.|[The pseudo-class will select inputs with type `radio` or `checkbox`, but not elements. True or False?](#Q17)|
| 18.|[In an HTML document, the pseudo-class always refers to the element. True or False?](#Q18)|
| 19.|[Which unit of measurement would you prefer among `px`, `rem`, `em`, `%`, or `pt`, and why?](#Q19)|
| 20.|[Difference between `div p`, `div > p`, `div + p`, and `div ~ p`.](#Q20)|
| 21.|[What is specificity in CSS.](#Q21)|
| 22.|[Explain CSS pseudo-selectors, pseudo-classes, and pseudo-elements. Name few](#Q22)|
| 23.|[Difference between `transition` and `transform` property in CSS.](#Q23)|
| 24.|[Can the `translate()` function move the position of an element on the z-axis?](#Q24)|
| 25.|[How is `font-face` used?](#Q25)|
| 26.|[What are media queries and explain them in detail.](#Q26)|
| 27.|[What is Mobile-First Approach and Desktop First approach and which one you follow and why?](#Q27)|
| 28.|[Does the screen keyword in media queries apply to the device's physical screen or the browser's viewport?](#Q28)|
| 29.|[Explain CSS Flexbox and how CSS Grid layout is different.](#Q29)|
| 30.|[What is the difference between layout and positioning in CSS?](#Q30)|
| 31.|[How can we achieve smooth scrolling?](#Q31)|
| 32.|[What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?](#Q32)|
| 33.|[How do you vertically and horizontally align a `<p>` element to the centre inside a `<div>`?](#Q33)|
| 34.|[How can you optimize CSS selectors for better performance? (Hint: sprites)](#Q34)|
| 35.|[How can you load CSS resources conditionally in a web page?](#Q35)|
| 36.|[What is the shadow DOM in web development?](#Q36)|
| 37.|[Name some different CSS filters you can use to modify elements.](#Q37)|
| 38.|[What are the reasons to use a CSS preprocessor in web development?](#Q38)|
| 39.|[What are some of the things you would test while doing accessibility testing?](#Q39)|
| 40.|[Write a piece of code to centre a div.](#Q40)|
| 41.|[How to make a triangle in CSS?](#Q41)|
| 42.|[Make a bouncing ball entirely with the help of CSS.](#Q42)|


## Answers

#### Q1 
### 🍄 Why is CSS important.

CSS (Cascading Style Sheets) is important because it:
- Separates content from design, allowing for easier maintenance and updating.
- Enhances the appearance and layout of web pages.
- Improves user experience by enabling responsive design.
- Provides consistent styling across the application.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q2
### 🍄 What do you mean by `meta` tag in HTML? And why is meant by `initial value = 1.0`

- A `meta` tag in HTML provides metadata about the HTML document. It is placed inside the <head> section and is used for various purposes, such as setting the character set, viewport settings, and SEO information.
- `initial value = 1.0` could refer to the default value of a property or parameter. In the context of CSS, 1.0 typically represents 100%.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q3
### 🍄 In how many ways can CSS be integrated.

CSS can be integrated into HTML in three main ways:
1. Inline CSS: Using the `style` attribute within HTML tags.
```html
<p style="color: blue">This is a paragraph.</p>
```
2. Internal CSS: Using a `<style>` tag within the `<head>` section of an HTML document.
```html
<head>
  <style>
    p { color: blue; }
  </style>
</head>
```
3. External CSS: Linking to an external CSS file using the `<link>` tag.
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q4
### 🍄 Explain the box model.

The CSS box model describes the rectangular boxes that are generated for elements in the document tree. Box model wraps every HTML elements. A Box model consists of margin, border, padding and the actual content.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q5
### 🍄 Difference between id and class selectors.

- `id` are unique and can be applied to only one element in a web page. If a web page has both `id` and `class` same name, then `id` takes precedence.
- `class` can be applied to multiple elements as they can share the same class name.
```js
#uniqueElement {
  border: 2px solid black;
}
.commonClass {
    color: green;
}

<div id="uniqueElement" class="commonClass">This element has both an ID and a class.</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q6
### 🍄 What are data attributes?

Data attributes are custom attributes that can be added to HTML elements to store extra information. They are prefixed with `data-` and can be accessed using JavaScript or CSS.
```js
<div data-user-id="12345" data-role="admin">User Info</div>

// by JS: use dataset
const userInfo = document.querySelector('[data-user-id]');
console.log(userInfo.dataset.userId); // Output: 12345

// by CSS
div[data-user-id="12345"] {
  color: green;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q7
### 🍄 Position in CSS: Difference between `static`, `absolute`, `relative`, and `fixed`.

1. `static`: The default position, where elements are positioned according to the normal flow of the document.
```css
div {
  position: static;
}
```
2. `relative`: The element is positioned relative to its normal position. `top`, `right`, `bottom`, `left` values will adjust it from this position.
```css
div {
  position: relative;
  top: 10px;
  left: 20px;
}
```
3. `absolute`: The element is positioned relative to its nearest positioned parent element.
```css
div {
  position: absolute;
  top: 50px;
  left: 60px;
}
```
4. `fixed`: The element is positioned relative to the browser window. It will not move even if the window is scrolled.
```css
div {
  position: fixed;
  top: 0;
  right: 0;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q8
### 🍄 Are CSS properties case-sensitive?

No, CSS properties are not case-sensitive. 
For example, `background-color` is the same as `BACKGROUND-COLOR` or `Background-Color`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q9
### 🍄 Describe floats and how they work. How to clear floating sides

The `float` property is used to float elements to the left or right, allowing text and inline elements to wrap around it.
```js
<div class="float-left">This is floated to the left.</div>
<p>This text wraps around the floated element.</p>
<div class="clear-both">This is cleared and moves below the floated elements.</div>

.float-left {
  float: left;
}

.clear-both {
  clear: both;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q10
### 🍄 Describe `z-index` and how stacking context is formed.

The `z-index` property specifies the stack order of an element. Higher values are closer to the viewer. Stacking context is formed by elements with a position value other than `static` and specific properties like `opacity`, `transform`, `filter`, etc.
```css
.element1 {
  position: relative;
  z-index: 1;
}
.element2 {
  position: relative;
  z-index: 2;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q11
### 🍄 Do `margin` and `padding` have an effect on inline elements.

Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.
But
- The box will not break onto a new line.
- The `width` and `height` properties will not apply.
- Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q12
### 🍄 How will you decide when to use a `button` or `tag`?

- We use `<button>` for actions within a web application (e.g., forms, modals, interactive features).
- We use `<a>` for navigation, linking to different pages or sections.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q13
### 🍄 If you have a `<p>` element with `font-size: 10rem`, will the text be responsive when the user resizes or drags the browser window?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q14
### 🍄 What are the differences between `visibility: hidden` and `display: none`?

With `visibility: hidden` the element is hidden, but it still occupies space in the layout. But with `display: none` the element is completely removed and it does not occupy any space.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q15
### 🍄 What are the differences between `inline`, `block`, and `inline-block` display types?

1. With `display: inline`, elements do not start on a new line and only take up as much width as necessary. `margin` and `padding` affect only the horizontal space.
2. With `display: block`, elements start on a new line and take up the full width available. `margin` and `padding` affect all sides.
3. With `display: inline-block`, elements don't start on a new line, but `margin` and `padding` affect all sides.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q16
### 🍄 Does `overflow: hidden` create a new block formatting context?

Yes, `overflow: hidden` can create a new block formatting context. This can be useful for containing floats or preventing margin collapse.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q17
### 🍄 The pseudo-class will select inputs with type `radio` or `checkbox`, but not elements. True or False?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q18
### 🍄 In an HTML document, the pseudo-class always refers to the element. True or False?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q19
### 🍄 Which unit of measurement would you prefer among `px`, `rem`, `em`, `%`, or `pt`, and why?

1. `px`: Absolute unit, useful for precise control.
2. `rem`: Relative to the root element's font size, useful for consistent scaling across components.
3. `em`: Relative to the font size of the parent element, useful for scaling within a component.
4. `%`: Relative to the parent element's dimensions, useful for responsive design.
5. `pt`: Typically used in print media, less common in web design.

`rem` for consistent scaling across components, ensuring responsive and accessible design.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q20
### 🍄 Difference between `div p`, `div > p`, `div + p`, and `div ~ p`.
1. `div p`: Selects all `<p>` elements inside a `<div>`, regardless of depth.
2. `div > p`: Selects all `<p>` elements that are direct children of a `<div>`.
3. `div + p`: Selects the `<p>` element immediately following a `<div>`.
4. `div ~ p`: Selects all `<p>` elements preceded by a `<div>`, not necessarily immediately.
```html
<div>
  <p>Paragraph 1</p> <!-- Matches div p, div > p -->
  <p>Paragraph 2</p> <!-- Matches div p, div > p -->
</div>
<p>Paragraph 3</p> <!-- Matches div + p if placed immediately after div -->
<div></div>
<p>Paragraph 4</p> <!-- Matches div ~ p -->
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q21
### 🍄 What is specificity in CSS.

Specificity is a measure of how specific a CSS selector is. Specificity is calculated based on the types of selectors used:
    1. Inline styles have the highest specificity.
    2. IDs have higher specificity than classes.
    3. Classes, attributes, and pseudo-classes have higher specificity than elements and pseudo-elements.
```css
/* Specificity: 0,0,0,1 */
div {
  color: blue;
}

/* Specificity: 0,0,1,0 */
.class {
  color: green;
}

/* Specificity: 0,1,0,0 */
#id {
  color: red;
}

/* Specificity: 1,0,0,0 */
style="color: purple"
```
An element with inline styles will have a color of purple, overriding other selectors.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q22
### 🍄 Explain CSS pseudo-selectors, pseudo-classes, and pseudo-elements. Name few

**Pseudo-selectors**: A general term encompassing pseudo-classes and pseudo-elements.
**Pseudo-classes**: Used to define the special state of an element.
```css
a:hover {
  color: red;
}
p:first-child {
  font-weight: bold;
}
:focus {
  outline: none;
}
```
**Pseudo-elements**: Used to style specified parts of an element.
```css
p::first-line {
  text-transform: uppercase;
}
p::before {
  content: "Note: ";
  color: gray;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q23
### 🍄 Difference between `transition` and `transform` property in CSS.

**transition**: Used to create smooth transitions between property values.
**transform**: Used to apply transformations like rotation, scaling, translation, and skewing to an element.
```js
<div class="box">Hover over me!</div>

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: transform 0.5s ease;
}
.box:hover {
  transform: scale(1.2);
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q24
### 🍄 Can the `translate()` function move the position of an element on the z-axis?

No, the `translate()` function can only move elements along the x and y axes. To move an element on the z-axis, you would use the `translateZ()` or `translate3d()` function.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q25
### 🍄 How is `font-face` used?

The `@font-face` rule allows you to define custom fonts for your web pages. You specify the font name and the URL of the font file.
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('mycustomfont.woff2') format('woff2'),
       url('mycustomfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'MyCustomFont', Arial, sans-serif;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q26
### 🍄 What are media queries and explain them in detail.

Media queries are a feature of CSS used to apply styles based on the characteristics of the device or viewport displaying the content. They enable responsive design.

Media query can be applied on:
    1. `width`, `min-width`, `max-width`
    2. `height`, `min-height`, `max-height`
    3. `orientation` (portrait or landscape)
    4. `resolution`

```css
/* Applies styles if the viewport width is 600px or less */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Applies styles if the viewport width is more than 600px */
@media (min-width: 601px) {
  body {
    background-color: lightgreen;
  }
}

/* Applies styles for portrait orientation */
@media (orientation: portrait) {
  body {
    font-size: 16px;
  }
}

/* Applies styles for landscape orientation */
@media (orientation: landscape) {
  body {
    font-size: 14px;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q27
### 🍄 What is Mobile-First Approach and Desktop First approach and which one you follow and why?

**Mobile-First Approach**: Designing the web application starting with the smallest screen size and then adding styles for larger screens. This approach ensures that the base styles are optimized for mobile devices. *This approach is mostly preferred.*
```css
/* Mobile styles */
body {
  font-size: 16px;
}

/* Tablet styles */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}
```
**Desktop-First Approach**: Designing the web application starting with the largest screen size and then adjusting styles for smaller screens.
```css
/* Desktop styles */
body {
  font-size: 20px;
}

/* Tablet styles */
@media (max-width: 1024px) {
  body {
    font-size: 18px;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  body {
    font-size: 16px;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q28
### 🍄 Does the screen keyword in media queries apply to the device's physical screen or the browser's viewport?

The `screen` keyword in media queries applies to the browser’s viewport, not the device’s physical screen. Media queries respond to the size of the viewport, which is the visible part of the web page in the browser window.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q29
### 🍄 Explain CSS Flexbox and how CSS Grid layout is different.

**CSS Flexbox**: Designed for one-dimensional layouts (either a row or a column). It helps distribute space along the main axis and align items along the cross axis.
```js
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
```
**CSS Grid Layout**: Designed for two-dimensional layouts (both rows and columns). It allows for more complex layouts by defining both rows and columns.
```js
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
}
</style>
```
More about Flexbox:
Flexbox, is a CSS layout module designed to make the layout of items in a container flexible and efficient.
Some important Flexbox Properties:
    1. Container Properties
        - display: flex | inline-flex
        - flex-direction: row | row-reverse | column | column-reverse
        - flex-wrap: nowrap | wrap | wrap-reverse
        - justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
        - align-items: stretch | flex-start | flex-end | center | baseline
        - align-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly
    2. Item Properties
        - order: 0 (default value)
        - flex-grow: 0 (default value)
        - flex-shrink: 1 (default value)
        - flex-basis: auto (default value)
        - flex: 1 1 auto (flex-grow flex-shrink flex-basis)
        - align-self: auto | flex-start | flex-end | center | baseline | stretch

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q30
### 🍄 What is the difference between layout and positioning in CSS?

**Layout**: Refers to the process of arranging elements within a container to create a structured and organized design. Common layout techniques include Flexbox, Grid, and floats.
**Positioning**: Refers to how elements are placed relative to their normal flow, parent container, or viewport. Common positioning techniques include static, relative, absolute, fixed, and sticky.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q31
### 🍄 How can we achieve smooth scrolling?

To achieve smooth scrolling, you can use the CSS scroll-behavior property:
```css
html {
  scroll-behavior: smooth;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q32
### 🍄 What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

**Resetting CSS**: Strips all default browser styling. This removes all built-in styles and forces you to style everything from scratch.
```css
/* Example of Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
**Normalizing CSS**: Aims to make built-in browser styles consistent across different browsers by providing sensible defaults, rather than removing all styling. 
*Normalizing CSS should be preferred because it provides a more consistent starting point across different browsers without removing all useful default styles.*
```css
/* Example of Normalize.css (simplified) */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q33
### 🍄 How do you vertically and horizontally align a `<p>` element to the centre inside a `<div>`?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q34
### 🍄 How can you optimize CSS selectors for better performance? (Hint: sprites)


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q35
### 🍄 How can you load CSS resources conditionally in a web page?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q36
### 🍄 What is the shadow DOM in web development?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q37
### 🍄 Name some different CSS filters you can use to modify elements.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q38
### 🍄 What are the reasons to use a CSS preprocessor in web development?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q39
### 🍄 What are some of the things you would test while doing accessibility testing?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q40
### 🍄 Write a piece of code to centre a div.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q41
### 🍄 How to make a triangle in CSS?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q42
### 🍄 Make a bouncing ball entirely with the help of CSS.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
