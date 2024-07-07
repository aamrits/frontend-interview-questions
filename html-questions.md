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
### ✨ What is HTML and why is it used

HTML (HyperText Markup Language) is the standard markup language used to create and design webpages. Here's why HTML is essential:

1. **Structure**: HTML provides the basic structure of a webpage. Elements like headings, paragraphs, lists, and links are all defined using HTML.

2. **Content**: HTML is used to embed text, images, videos, and other multimedia on web pages.

3. **Links**: HTML allows the creation of hyperlinks, which enable users to navigate between different web pages or sections within a single page.

4. **Accessibility**: HTML supports the use of tags that enhance the accessibility of web pages, making them usable by people with disabilities. For example, semantic tags and attributes like `alt` for images improve screen reader support.

5. **SEO**: HTML elements and attributes play a crucial role in Search Engine Optimization (SEO). Proper use of tags like `<title>`, `<meta>`, and header tags help search engines understand and index content, improving visibility in search results.

6. **Integration with Other Technologies**: HTML can be used in conjunction with CSS (Cascading Style Sheets) for styling and JavaScript for dynamic and interactive content.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q2
### ✨ What are the new features introduced in HTML5

HTML5 introduced several new features and enhancements to improve the functionality, performance, and user experience of web applications. Here are some key features:

1. **Semantic Elements**: New tags like `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, and `<nav>` provide better structure and meaning to web content, improving accessibility and SEO  .

2. **Multimedia Support**: Native support for audio and video through `<audio>` and `<video>` tags. These elements include built-in controls for play, pause, and volume.

3. **Canvas Element**: The `<canvas>` element allows for dynamic, scriptable rendering of 2D shapes and images, enabling complex graphics and animations directly within the browser without external plugins.

4. **Geolocation API**: This API enables web applications to access the geographical location of a user, which can be used for mapping, local search, and other location-based services .

5. **Web Storage**: HTML5 introduces `localStorage` and `sessionStorage` for storing data on the client side. This provides a more secure and efficient way to store data compared to cookies .

6. **Offline Capabilities**: The Application Cache allows web applications to run offline by storing resources like HTML, CSS, and JavaScript files locally, ensuring that web apps are accessible even without an internet connection  .

7. **Form Enhancements**: New input types (`email`, `url`, `date`, `number`, etc.) and attributes (`placeholder`, `required`, `pattern`, etc.) enhance form validation and user experience .

8. **Drag and Drop**: HTML5 includes a drag-and-drop API that simplifies the process of dragging elements within or between web pages .

9. **New APIs**: Additional APIs such as *Web Workers* for background processing, the *History API* for managing browser history, and the *WebSocket API* for real-time communication are also part of HTML5 .

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q3
### ✨ New APIs introduced in HTML5

Here are some examples of the new APIs introduced in HTML5 along with small code snippets demonstrating their usage:

**1. Geolocation API**
The Geolocation API allows web applications to obtain the geographical position of the user.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geolocation API</title>
</head>
<body>
    <button onclick="getLocation()">Get Location</button>
    <p id="location"></p>

    <script>
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                document.getElementById('location').innerText = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            document.getElementById('location').innerText = 
                "Latitude: " + position.coords.latitude + 
                " Longitude: " + position.coords.longitude;
        }
    </script>
</body>
</html>
```

**2. Web Storage API**
The Web Storage API provides mechanisms for storing key-value pairs in a web browser. It includes `localStorage` and `sessionStorage`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Storage API</title>
</head>
<body>
    <button onclick="storeData()">Store Data</button>
    <button onclick="retrieveData()">Retrieve Data</button>
    <p id="output"></p>

    <script>
        function storeData() {
            localStorage.setItem('name', 'John Doe');
        }

        function retrieveData() {
            const name = localStorage.getItem('name');
            document.getElementById('output').innerText = name;
        }
    </script>
</body>
</html>
```

**3. Canvas API**
The Canvas API provides a means for drawing graphics via JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas API</title>
</head>
<body>
    <canvas id="myCanvas" width="200" height="200" style="border:1px solid #000000;"></canvas>

    <script>
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');
        
        context.fillStyle = '#FF0000';
        context.fillRect(50, 50, 100, 100);
    </script>
</body>
</html>
```

**4. Drag and Drop API**
The Drag and Drop API allows for drag-and-drop functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Drag and Drop API</title>
</head>
<body>
    <div id="drag1" draggable="true" ondragstart="drag(event)" style="width: 100px; height: 100px; background-color: #ff0000;"></div>
    <div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)" style="width: 200px; height: 200px; border: 1px solid #000000;"></div>

    <script>
        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            const data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    </script>
</body>
</html>
```

**5. Web Workers API**
Web Workers API allows running scripts in background threads.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Workers API</title>
</head>
<body>
    <button onclick="startWorker()">Start Worker</button>
    <p id="result"></p>

    <script>
        let worker;

        function startWorker() {
            if (typeof(Worker) !== "undefined") {
                if (typeof(worker) == "undefined") {
                    worker = new Worker("worker.js");
                }
                worker.onmessage = function(event) {
                    document.getElementById("result").innerText = event.data;
                };
            } else {
                document.getElementById("result").innerText = "Sorry, your browser does not support Web Workers...";
            }
        }
    </script>
</body>
</html>
```

***worker.js***:
```javascript
let i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout(timedCount, 500);
}

timedCount();
```

**6. Offline Capabilities (Application Cache)**
The Application Cache API allows a web application to run offline.

```html
<!DOCTYPE html>
<html lang="en" manifest="example.appcache">
<head>
    <meta charset="UTF-8">
    <title>Application Cache</title>
</head>
<body>
    <h1>Application Cache Example</h1>
    <p>This web page is cached for offline use.</p>
</body>
</html>
```

***example.appcache***:
```plaintext
CACHE MANIFEST
# 2023-05-30:v1

CACHE:
index.html

NETWORK:
*
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q4
### ✨ How do you create a hyperlink in HTML

To create a hyperlink using JavaScript and manipulate the DOM (Document Object Model), you can follow these steps:

1. *Create an anchor element (`<a>`).*
2. *Set the attributes (`href`, `target`, etc.).*
3. *Set the link text.*
4. *Append the anchor element to the desired location in the DOM.*

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Hyperlink with JavaScript</title>
</head>
<body>
    <div id="link-container"></div>

    <script>
        // Step 1: Create an anchor element
        const link = document.createElement('a');

        // Step 2: Set the href attribute and other properties
        link.href = 'https://www.example.com';
        link.target = '_blank'; // Open link in a new tab
        link.title = 'Go to Example.com';

        // Step 3: Set the link text
        link.textContent = 'Visit Example.com';

        // Step 4: Append the anchor element to the desired location
        document.getElementById('link-container').appendChild(link);
    </script>
</body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q5
### ✨ Explain the difference between block and inline elements

In HTML, elements are categorized into two main types: *block elements* and *inline elements*. The key differences between these types lie in their default behavior and layout characteristics.

|Features         | Block Elements                    | Inline Elements                   |
|-----------------|-----------------------------------|-----------------------------------|
| **Default Behavior**| Block elements always start on a new line and take up the full width available | Inline elements do not start on a new line. They sit within the flow of the surrounding content and only take up as much width as necessary |
| **Content**| They typically contain other block elements and inline elements like paragraphs, lists, and divs | They generally contain text or other inline elements. They are used for elements that need to be part of a line, such as links, emphasis, or images |
| **Layout**| They form a block-like structure, and their height and width can be controlled using CSS properties.  | Inline elements cannot have their width and height adjusted using CSS. Margins and padding can be applied but only affect spacing horizontally.  |
| **Common Block Elements**| `<div>`, `<p>`, `<h1>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<section>`, `<article>`, `<header>`, `<footer>`  | `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<label>`, `<input>`, `<br>`, `<code>`  |

### Visual Representation
Imagine a web page layout:
- **Block Elements**: Think of them as building blocks stacked vertically. Each block (like a paragraph or a section) occupies its line.
- **Inline Elements**: Think of them as words within a sentence. They flow within the block elements and fit together horizontally.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q6
### ✨ Purpose of `<head>` tag


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q7
### ✨ How to embed an image in HTML page. (Hint: `<img />`)


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q8
### ✨ Explain semantic HTML and why is it important


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q9
### ✨ How to create a table


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q10
### ✨ Difference between HTML and XHTML


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q11
### ✨ How to include a video in HTML


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q12
### ✨ What is `doctype` used for. If you don't specify, what will happen


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q13
### ✨ DOM and DOM manipulation


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q14
### ✨ Different types of storage (local storage, session storage, cookies)


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q15
### ✨ Drag and drop in HTML5


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q16
### ✨ Form input types in HTML5


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q17
### ✨ `Datalist` tag in HTML5


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q18
### ✨ How browser renders HTML and CSS


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q19
### ✨ What are web workers


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q20
### ✨ Different types of script tags (`async`, `defer`)


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

