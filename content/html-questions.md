# HTML Interview Questions

## Table of Questions

<br/>

|Sl.No| Questions                                                                         |
|-----|-----------------------------------------------------------------------------------|
| 01.|[What is HTML and why is it used](#Q1)|
| 02.|[What are the new features introduced in HTML5](#Q2)|
| 03.|[New APIs introduced in HTML5](#Q3)|
| 04.|[How do you create a hyperlink in HTML](#Q4)|
| 05.|[Explain the difference between block and inline elements](#Q5)|
| 06.|[Purpose of `<head>` tag](#Q6)|
| 07.|[How to embed an image in HTML page.](#Q7)|
| 08.|[Explain semantic HTML and why is it important](#Q8)|
| 09.|[How to create a table](#Q9)|
| 10.|[Difference between HTML and XHTML](#Q10)|
| 11.|[How to include a video in HTML](#Q11)|
| 12.|[What is `doctype` used for. If you don't specify, what will happen](#Q12)|
| 13.|[DOM and DOM manipulation](#Q13)|
| 14.|[Different types of storage (local storage, session storage, cookies)](#Q14)|
| 15.|[Drag and drop in HTML5](#Q15)|
| 16.|[Form input types in HTML5](#Q16)|
| 17.|[`Datalist` tag in HTML5](#Q17)|
| 18.|[How browser renders HTML and CSS](#Q18)|
| 19.|[What are web workers](#Q19)|
| 20.|[Different types of script tags (`async`, `defer`)](#Q20)|


## Answers

#### Q1
### Q1. What is HTML and why is it used

**What is HTML?**

HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages. It defines the content and layout of a webpage using elements such as headings, paragraphs, images, links, tables, and forms.

**Why is HTML Important?**

1. **Provides Structure** – Organizes content into meaningful sections.
2. **Displays Content** – Supports text, images, audio, video, and forms.
3. **Enables Navigation** – Uses hyperlinks to connect pages.
4. **Improves Accessibility** – Helps assistive technologies understand content.
5. **Supports SEO** – Helps search engines index pages effectively.
6. **Works with CSS and JavaScript** – Forms the foundation of modern web applications.

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

**Key Takeaway**

HTML is the backbone of every web page and provides the structure on which CSS and JavaScript operate.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q2
### Q2. What are the new features introduced in HTML5

**Major HTML5 Features**

- Semantic elements (`header`, `footer`, `section`, `article`, `nav`)
- Native audio and video support
- Canvas API
- Geolocation API
- Web Storage (`localStorage`, `sessionStorage`)
- Drag and Drop API
- Web Workers
- Form enhancements
- WebSocket support

**Why HTML5 Was Important**

- Reduced dependency on plugins.
- Improved accessibility and SEO.
- Better support for modern web applications.
- Enhanced performance and user experience.

**Key Takeaway**

HTML5 transformed HTML from a document-markup language into a platform for building rich web applications.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q3
### Q3. New APIs introduced in HTML5

**Popular HTML5 APIs**

| API | Purpose |
|------|---------|
| Geolocation API | Access user location |
| Web Storage API | Store client-side data |
| Canvas API | Draw graphics |
| Drag and Drop API | Drag-and-drop interactions |
| Web Workers API | Background processing |
| WebSocket API | Real-time communication |

**Geolocation Example**

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
});
```

**Web Storage Example**

```js
localStorage.setItem("theme", "dark");
```

**Canvas Example**

```js
const ctx = canvas.getContext("2d");
ctx.fillRect(10, 10, 100, 100);
```

**Key Takeaway**

HTML5 APIs significantly expanded browser capabilities and reduced reliance on external plugins.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q4
### Q4. How do you create a hyperlink in HTML

**Basic Syntax**

```html
<a href="https://example.com">Visit Example</a>
```

**Common Attributes**

| Attribute | Purpose |
|------------|---------|
| href | Destination URL |
| target | Where to open the link |
| title | Tooltip text |
| rel | Security and relationship information |

**Open in New Tab**

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Example
</a>
```

**Key Takeaway**

The `<a>` element is used to connect pages, websites, files, and sections within a page.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q5
### Q5. Explain the difference between block and inline elements

**Definition**

Block elements occupy the full available width and start on a new line. Inline elements only take up the space they need and remain within the flow of surrounding content.

| Feature | Block Elements | Inline Elements |
|----------|----------|----------|
| Starts on new line | Yes | No |
| Takes full width | Yes | No |
| Width/Height can be set | Yes | Limited |
| Typical Usage | Layout and structure | Text formatting |

**Common Examples**

**Block Elements**

- `div`
- `p`
- `section`
- `article`
- `ul`
- `table`

**Inline Elements**

- `span`
- `a`
- `strong`
- `em`
- `img`
- `code`

**Key Takeaway**

Block elements are used for page structure, while inline elements are used for content within a line.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q6
### Q6. Purpose of `<head>` Tag

**What is the `<head>` Tag?**

The `<head>` element contains metadata and resources required by the browser to render a webpage correctly. The content inside `<head>` is not displayed directly on the webpage.

**Common Elements Inside `<head>`**

| Element | Purpose |
|----------|----------|
| `<title>` | Sets the browser tab title |
| `<meta>` | Provides metadata |
| `<link>` | Links external resources such as CSS |
| `<script>` | Includes JavaScript files |
| `<style>` | Adds internal CSS |
| `<base>` | Specifies a base URL for relative links |

**Why is it Important?**

- Improves SEO.
- Enhances accessibility.
- Helps browsers render pages correctly.
- Enables performance optimizations such as preconnect and prefetch.

**Example**

```html
<head>
  <title>My Website</title>
  <meta charset="UTF-8">
  <meta name="description" content="Sample website">
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
```

**Key Takeaway**

The `<head>` element contains metadata and external resources that help browsers, search engines, and users interact with the webpage effectively.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q7
### Q7. How to Embed an Image in an HTML Page

**Basic Syntax**

The `<img>` element is used to display images in HTML.

```html
<img
  src="mountain.jpg"
  alt="Beautiful mountain"
>
```

**Important Attributes**

| Attribute | Purpose |
|------------|---------|
| `src` | Image source |
| `alt` | Alternative text |
| `width` | Width of image |
| `height` | Height of image |
| `title` | Tooltip text |

**Example**

```html
<img
  src="https://example.com/mountain.jpg"
  alt="Mountain Scenery"
  width="600"
  height="400"
  title="Mountain View"
>
```

**Why is `alt` Important?**

- Improves accessibility.
- Helps screen readers.
- Improves SEO.
- Displays fallback text if image loading fails.

**Key Takeaway**

Always provide meaningful `alt` text when using images.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q8
### Q8. Explain Semantic HTML and Why It Is Important

**What is Semantic HTML?**

Semantic HTML uses tags that describe the meaning and purpose of content rather than just its appearance.

**Examples of Semantic Elements**

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

**Semantic vs Non-Semantic Elements**

| Non-Semantic | Semantic |
|--------------|----------|
| div | article |
| div | section |
| div | nav |
| div | header |
| div | footer |

**Benefits of Semantic HTML**

1. Better accessibility.
2. Better SEO.
3. Easier maintenance.
4. Improved readability.
5. Future-proof code.

**Example**

```html
<header>
  <h1>My Blog</h1>
</header>

<nav>
  <a href="/">Home</a>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
  </article>
</main>

<footer>
  Copyright 2026
</footer>
```

**Key Takeaway**

Semantic HTML helps browsers, search engines, and assistive technologies understand the structure of a webpage.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q9
### Q9. How to Create a Table

**Basic Table Structure**

HTML tables are created using:

- `<table>`
- `<tr>` (table row)
- `<th>` (table header)
- `<td>` (table data)

**Example**

```html
<table>
  <tr>
    <th>Name</th>
    <th>Department</th>
  </tr>

  <tr>
    <td>John</td>
    <td>Engineering</td>
  </tr>
</table>
```

**Additional Table Elements**

| Element | Purpose |
|----------|----------|
| `<thead>` | Header section |
| `<tbody>` | Body section |
| `<tfoot>` | Footer section |
| `<caption>` | Table title |

**Interview Tip**

For accessibility and maintainability, use `<thead>`, `<tbody>`, and `<caption>` whenever possible.

**Key Takeaway**

HTML tables are best suited for displaying tabular data, not for page layout.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q10
### Q10. Difference Between HTML and XHTML

**Overview**

HTML and XHTML are both markup languages used to create web pages. XHTML follows stricter XML rules than HTML.

| Feature | HTML | XHTML |
|----------|----------|----------|
| Case Sensitive | No | Yes |
| Tag Closing Required | Optional in some cases | Mandatory |
| Attribute Quotes | Optional | Mandatory |
| Error Handling | Forgiving | Strict |
| XML Compatible | No | Yes |

**HTML Example**

```html
<img src="image.jpg" alt="Example">
<br>
```

**XHTML Example**

```html
<img src="image.jpg" alt="Example" />
<br />
```

**Why XHTML Was Introduced**

- To make HTML compatible with XML.
- To enforce cleaner markup.
- To improve consistency.

**Modern Relevance**

Today, HTML5 is preferred over XHTML for most web applications.

**Key Takeaway**

XHTML enforces strict XML syntax rules, while HTML is more flexible and forgiving.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q11
### Q11. How to Include a Video in HTML

**What is the `<video>` Tag?**

The `<video>` element allows you to embed videos directly into a webpage without requiring third-party plugins such as Flash.

**Basic Example**

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

**Common Attributes**

| Attribute | Purpose |
|------------|---------|
| `controls` | Displays play, pause, and volume controls |
| `autoplay` | Starts playback automatically |
| `muted` | Starts video without sound |
| `loop` | Repeats video continuously |
| `poster` | Displays an image before playback begins |
| `width` / `height` | Specifies video dimensions |

**Multiple Formats Example**

```html
<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
</video>
```

**Interview Tip**

Most browsers block `autoplay` unless the video is muted.

**Key Takeaway**

The `<video>` tag provides native video support in modern browsers without external plugins.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q12
### Q12. What is `DOCTYPE` Used For? What Happens if You Don't Specify It?

**What is `DOCTYPE`?**

The `<!DOCTYPE>` declaration tells the browser which version of HTML the document uses and ensures that the page is rendered according to web standards.

**HTML5 Doctype**

```html
<!DOCTYPE html>
```

**Why is It Important?**

1. Enables standards-compliant rendering.
2. Improves browser consistency.
3. Prevents layout issues.
4. Ensures predictable behavior across browsers.

**Standards Mode vs Quirks Mode**

| Standards Mode | Quirks Mode |
|----------------|-------------|
| Modern browser behavior | Legacy browser behavior |
| Consistent rendering | Inconsistent rendering |
| Recommended | Not recommended |

**What Happens if DOCTYPE is Missing?**

- Browser may switch to Quirks Mode.
- Layouts may break.
- CSS behavior may differ across browsers.
- Debugging becomes more difficult.

**Interview Tip**

The HTML5 doctype is short and simple:

```html
<!DOCTYPE html>
```

**Key Takeaway**

Always include `<!DOCTYPE html>` at the top of every HTML document.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q13
### Q13. DOM and DOM Manipulation

**What is the DOM?**

The Document Object Model (DOM) is a tree-like representation of an HTML document. Every HTML element becomes a node in the DOM tree.

**DOM Structure Example**

```html
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Produces:

```text
Document
└── html
    └── body
        └── h1
```

**What is DOM Manipulation?**

DOM manipulation refers to using JavaScript to dynamically modify content, styles, attributes, and elements on a webpage.

**Common DOM Operations**

| Operation | Example |
|------------|---------|
| Select Element | `querySelector()` |
| Change Content | `textContent` |
| Change Attributes | `setAttribute()` |
| Change Styles | `element.style` |
| Add Elements | `appendChild()` |
| Remove Elements | `remove()` |
| Event Handling | `addEventListener()` |

**Example**

```js
const heading =
  document.querySelector("h1");

heading.textContent =
  "Welcome to HTML";
```

**Interview Tip**

React, Angular, and Vue ultimately update the DOM. Understanding DOM manipulation is essential before learning frontend frameworks.

**Key Takeaway**

The DOM provides a JavaScript representation of a webpage, allowing dynamic updates without reloading the page.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q14
### Q14. Different Types of Storage (Local Storage, Session Storage, Cookies)

**Overview**

Browsers provide multiple mechanisms for storing data on the client side.

| Feature | Local Storage | Session Storage | Cookies |
|----------|----------|----------|----------|
| Capacity | 5–10 MB | 5–10 MB | ~4 KB |
| Lifetime | Until deleted | Until tab closes | Configurable |
| Sent to Server | No | No | Yes |
| Accessible via JS | Yes | Yes | Yes |
| Scope | All tabs | Current tab only | All tabs |

**When to Use Each?**

**Local Storage**

- User preferences
- Theme settings
- Cached application data

**Session Storage**

- Multi-step forms
- Temporary session data
- Per-tab information

**Cookies**

- Authentication
- User sessions
- Tracking

**Interview Shortcut**

- `localStorage` → survives browser restart
- `sessionStorage` → survives refresh but not tab close
- `cookies` → automatically sent to server

**Example**

```js
localStorage.setItem(
  "theme",
  "dark"
);

const theme =
  localStorage.getItem("theme");
```

**Key Takeaway**

Choose storage based on lifetime, size requirements, and whether the server needs access to the data.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q15
### Q15. Drag and Drop in HTML5

**What is Drag and Drop?**

HTML5 provides a native API that allows users to drag elements and drop them into designated targets.

**Core Components**

| Component | Purpose |
|------------|---------|
| `draggable` | Makes an element draggable |
| `dragstart` | Fired when dragging begins |
| `dragover` | Allows dropping |
| `drop` | Fired when element is dropped |
| `dragend` | Fired when dragging ends |
| `dataTransfer` | Transfers data during drag operations |

**Basic Example**

```html
<div
  id="item"
  draggable="true"
>
  Drag Me
</div>

<div id="dropzone">
  Drop Here
</div>
```

```js
item.addEventListener(
  "dragstart",
  (event) => {
    event.dataTransfer.setData(
      "text",
      event.target.id
    );
  }
);
```

**Common Use Cases**

- Kanban boards
- File uploads
- Reordering lists
- Dashboard customization

**Benefits**

- Native browser support
- Better user experience
- No external libraries required

**Limitations**

- Mobile support can be inconsistent.
- Complex implementations may require additional libraries.

**Interview Tip**

The most commonly asked event is:

```js
event.preventDefault();
```

inside the `dragover` handler. Without it, dropping is not allowed.

**Key Takeaway**

The HTML5 Drag and Drop API enables rich user interactions using built-in browser functionality.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q16
### Q16. Form Input Types in HTML5

**What Changed in HTML5?**

HTML5 introduced several new input types that improve user experience and provide built-in validation.

**Common Input Types**

| Type | Purpose |
|--------|---------|
| `text` | General text input |
| `password` | Password entry |
| `email` | Email validation |
| `url` | URL validation |
| `tel` | Phone number |
| `search` | Search field |
| `number` | Numeric input |
| `range` | Slider |
| `date` | Date picker |
| `time` | Time picker |
| `month` | Month picker |
| `week` | Week picker |
| `color` | Color picker |
| `file` | File upload |

**Example**

```html
<form>
  <input type="text" placeholder="Username">

  <input type="email" placeholder="Email">

  <input type="date">

  <input type="color">

  <button type="submit">
    Submit
  </button>
</form>
```

**Benefits**

- Better user experience
- Built-in validation
- Mobile-friendly keyboards
- Less JavaScript required

**Interview Tip**

Using:

```html
<input type="email">
```

automatically enables basic email validation.

**Key Takeaway**

HTML5 input types improve usability and reduce the need for custom validation logic.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q17
### Q17. `Datalist` Tag in HTML5

**What is `<datalist>`?**

The `<datalist>` element provides autocomplete suggestions for an input field while still allowing users to enter custom values.

**Example**

```html
<label for="browser">
  Browser
</label>

<input
  list="browsers"
  id="browser"
>

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
```

**How It Works**

1. Create an `<input>`.
2. Add a `list` attribute.
3. Create a matching `<datalist>`.
4. Add `<option>` values.

**Benefits**

- Better user experience
- Reduces typing
- Suggests common values
- Still allows custom input

**Datalist vs Select**

| Feature | Datalist | Select |
|----------|----------|----------|
| Custom Value Allowed | Yes | No |
| Searchable | Yes | Limited |
| Fixed Choices Only | No | Yes |

**Key Takeaway**

`<datalist>` combines the flexibility of text input with the convenience of predefined suggestions.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q18
### Q18. How Browser Renders HTML and CSS

**Rendering Pipeline**

When a browser loads a webpage, it follows a sequence of steps to convert HTML, CSS, and JavaScript into pixels on the screen.

```text
HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree
Render Tree → Layout
Layout → Paint
Paint → Composite
```

**Step-by-Step Process**

1. **Parse HTML**
   - Creates the DOM tree.

2. **Parse CSS**
   - Creates the CSSOM tree.

3. **Build Render Tree**
   - Combines DOM and CSSOM.

4. **Layout (Reflow)**
   - Calculates positions and dimensions.

5. **Paint**
   - Converts visual information into pixels.

6. **Composite**
   - Combines layers into the final screen output.

**Visual Overview**

```text
HTML
  ↓
DOM

CSS
  ↓
CSSOM

DOM + CSSOM
  ↓
Render Tree
  ↓
Layout
  ↓
Paint
  ↓
Composite
```

**Interview Tip**

A common question:

"What is the difference between Reflow and Repaint?"

- Reflow → Recalculates layout.
- Repaint → Repaints pixels without layout changes.

**Key Takeaway**

Browser rendering is the process of converting HTML and CSS into visual pixels displayed on the screen.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q19
### Q19. What Are Web Workers?

**What Are Web Workers?**

Web Workers allow JavaScript code to run in background threads separate from the main UI thread.

This helps perform heavy computations without freezing the user interface.

**Why Use Web Workers?**

Without Web Workers:

```text
Heavy JavaScript Task
       ↓
UI Freezes
```

With Web Workers:

```text
Heavy Task
     ↓
Worker Thread

UI Remains Responsive
```

**Types of Web Workers**

| Type | Description |
|--------|-------------|
| Dedicated Worker | Used by a single script |
| Shared Worker | Shared across multiple windows/tabs |

**Basic Example**

Main File:

```js
const worker =
  new Worker("worker.js");

worker.onmessage =
  (event) => {
    console.log(event.data);
  };
```

Worker File:

```js
postMessage("Hello from Worker");
```

**Benefits**

- Keeps UI responsive
- Handles CPU-intensive work
- Improves application performance

**Limitations**

- Cannot directly access the DOM
- Additional memory usage
- Subject to same-origin restrictions

**Key Takeaway**

Web Workers enable background processing and prevent long-running JavaScript tasks from blocking the UI.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q20
### Q20. Different Types of Script Tags (`async`, `defer`)

**Why Do `async` and `defer` Exist?**

By default, scripts block HTML parsing while they are downloaded and executed.

`async` and `defer` help improve page performance.

**Comparison Table**

| Feature | Normal Script | Async | Defer |
|----------|----------|----------|----------|
| Blocks HTML Parsing | Yes | No | No |
| Executes Immediately After Download | Yes | Yes | No |
| Preserves Script Order | Yes | No | Yes |
| Waits for DOM Parsing | No | No | Yes |

**Normal Script**

```html
<script src="app.js"></script>
```

**Async Script**

```html
<script
  src="analytics.js"
  async
></script>
```

Use for:

- Analytics
- Ads
- Independent scripts

**Defer Script**

```html
<script
  src="app.js"
  defer
></script>
```

Use for:

- Application code
- DOM manipulation
- Scripts dependent on page structure

**Visual Timeline**

```text
Normal:
HTML → Stop → Download → Execute → Continue

Async:
HTML → Download → Execute Immediately

Defer:
HTML → Download
HTML Parsing Complete
↓
Execute
```

**Interview Tip**

If a script needs access to DOM elements, `defer` is usually the better choice.

**Key Takeaway**

Use `async` for independent scripts and `defer` for scripts that rely on the fully parsed DOM.

<div align="left">
    <b><a href="#">↥ back to top</a></b>
</div>
