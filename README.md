<h1 align="center">
    Front-end Interview Questions and Answers
</h1>

---

<div align="center">
    <p>
        <a name="madeWith"><img src="https://img.shields.io/badge/MADE_WITH-MARKDOWN-green?style=for-the-badge"></a>
        <a name="license"><img src="https://img.shields.io/badge/license-mit-green?style=for-the-badge"></a>
    </p>
</div>

<div align="center">
    <a href="https://frontend-interview-questions-nu.vercel.app/" target="_blank">
        <img src="content/assets/banner.png" alt="banner" />
    </a>
</div>

<div align="center">
  <h3>A collection of commonly asked questions for Frontend Developers</h3>

  <p>
    Show your support by giving a ⭐ to this repo
  </p>
</div>

---

## Overview of the Repo

Frontend Interview Questions is an interactive interview preparation platform built using **Next.js** and **Markdown-driven content**.

All content is authored in simple `.md` files. These markdown files are parsed at build time and transformed into a rich user experience featuring:

* Question navigation
* Accordion-based answers
* Syntax highlighted code blocks
* Dark mode support
* Topic-wise categorization

🚀 **Website is Live on:** [Frontend Interview Questions](https://frontend-interview-questions-nu.vercel.app/)

---

## Front-end Interview Questions with Answers by topic

- JavaScript

  - [Theoretical Questions](content/js-concepts.md)

- React

  - [Theoretical Questions](content/react-concepts.md)
  
- HTML & CSS

  - [HTML Questions](content/html-questions.md)
  - [CSS Questions](content/css-questions.md)

---

## Features

* 📚 Topic-wise interview questions
* ⚛️ React Concepts
* ⚡ JavaScript Concepts
* 🏗️ HTML Questions
* 🎨 CSS Questions
* 🌙 Dark Mode
* 📖 Markdown-based content management
* 📝 Code snippets with syntax highlighting
* 🔍 Quick question navigation

---

## How the App Works

### Content Layer

All interview questions are stored as Markdown files inside the `content` directory.

Example:

```text
content/
├── react-concepts.md
├── javascript-concepts.md
├── html-questions.md
└── css-questions.md
```

---

### Parsing Layer

The application reads Markdown files from the filesystem using:

```ts
fs.readFile()
```

The content is then parsed using a custom parser:

```ts
parseMarkdownToQuestions()
```

The parser extracts:

* Question Number
* Question Title
* Answer Content

and converts them into structured objects that can be rendered inside the UI.

---

## 🛠️ Tech Stack

<p>
  <!-- Next.js -->
  <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />

  <!-- React -->
  <img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" />

  <!-- TypeScript -->
  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  
  <!-- HTML5 -->
  <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  
  <!-- CSS3 -->
  <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  
  <!-- Tailwind CSS -->
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />

  <!-- React Markdown -->
  <img alt="React Markdown" src="https://img.shields.io/badge/-React%20Markdown-61DAFB?style=flat-square&logo=react&logoColor=black" />

  <!-- shadcn/ui -->
  <img alt="shadcn/ui" src="https://img.shields.io/badge/-shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white" />

  <!-- Lucide Icons -->
  <img alt="Lucide Icons" src="https://img.shields.io/badge/-Lucide%20Icons-F56565?style=flat-square&logo=lucide&logoColor=white" />

  <!-- Animate UI -->
  <img alt="Animate UI" src="https://img.shields.io/badge/-Animate%20UI-7C3AED?style=flat-square&logo=framer&logoColor=white" />

  <!-- React GFM -->
  <img alt="React GFM" src="https://img.shields.io/badge/-React%20GFM-181717?style=flat-square&logo=github&logoColor=white" />
</p>

---

## Running Locally

```
git clone
npm install
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## License

This project is licensed under the MIT License.

---

<div align="center">
  <p>If this project helps you prepare for interviews, consider giving it a ⭐</p>
</div>
