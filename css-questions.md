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


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q9
### 🍄 Describe floats and how they work. How to clear floating sides


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q10
### 🍄 Describe `z-index` and how stacking context is formed.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q11
### 🍄 Do `margin` and `padding` have an effect on inline elements.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q12
### 🍄 How will you decide when to use a `button` or `tag`?


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


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q15
### 🍄 What are the differences between `inline`, `block`, and `inline-block` display types?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q16
### 🍄 Does `overflow: hidden` create a new block formatting context?


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


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q20
### 🍄 Difference between `div p`, `div > p`, `div + p`, and `div ~ p`.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q21
### 🍄 What is specificity in CSS.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q22
### 🍄 Explain CSS pseudo-selectors, pseudo-classes, and pseudo-elements. Name few


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q23
### 🍄 Difference between `transition` and `transform` property in CSS.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q24
### 🍄 Can the `translate()` function move the position of an element on the z-axis?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q25
### 🍄 How is `font-face` used?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q26
### 🍄 What are media queries and explain them in detail.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q27
### 🍄 What is Mobile-First Approach and Desktop First approach and which one you follow and why?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q28
### 🍄 Does the screen keyword in media queries apply to the device's physical screen or the browser's viewport?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q29
### 🍄 Explain CSS Flexbox and how CSS Grid layout is different.


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q30
### 🍄 What is the difference between layout and positioning in CSS?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q31
### 🍄 How can we achieve smooth scrolling?


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q32
### 🍄 What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?


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
