# Basic CSS Grid Course

<!-- Custom CSS for README styling -->
<style>
  .header {
    background: linear-gradient(90deg, #4f8cff 0%, #38e7b6 100%);
    color: #fff;
    padding: 24px 0;
    text-align: center;
    border-radius: 16px;
    margin-bottom: 24px;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  .header a {
    color: #fff !important;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s;
  }
  .header a:hover {
    color: #222 !important;
    text-decoration: underline;
  }
  .topics-table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 1rem;
    background: #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
  }
  .topics-table th, .topics-table td {
    border: 1px solid #e0e0e0;
    padding: 12px 16px;
    text-align: left;
  }
  .topics-table th {
    background: #e3f2fd;
    font-weight: bold;
  }
  .footer {
    margin-top: 36px;
    text-align: center;
    font-size: 1.1rem;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
  .flag-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    margin-left: 6px;
  }
</style>

<div class="header">
  <h1>✨ Basic CSS Grid Course — Platzi ✨</h1>
  <p>
    <a href="https://platzi.com/cursos/css-grid/" target="_blank">
      <img src="https://static.platzi.com/media/achievements/badge-css-grid-basico-5a5b5ab7-3cbb-4c7a-a15d-9f2719b56598.png" alt="Platzi CSS Grid Badge" width="60" style="vertical-align:middle; border-radius: 50%; margin-right: 8px;">
      Visit the course on Platzi
    </a>
  </p>
</div>

## 🚀 About this repository

This repository contains resources, code examples, and notes for the [Platzi Basic CSS Grid Course](https://platzi.com/cursos/css-grid/).  
Master the essentials of CSS Grid to create modern, responsive layouts with ease!

---

## 📚 Key Topics Covered

Below is a summary of the main topics from the course, with simple explanations:

<table class="topics-table">
  <tr>
    <th>Topic</th>
    <th>Explanation</th>
  </tr>
  <tr>
    <td>What is CSS Grid?</td>
    <td>A powerful layout system in CSS for building two-dimensional layouts on the web.</td>
  </tr>
  <tr>
    <td>Concepts</td>
    <td>
      <b>Container:</b> The parent element with <code>display: grid</code>.<br>
      <b>Items:</b> The children inside the grid container.<br>
      <b>Lines:</b> Invisible lines that divide the grid; used for placing items.<br>
      <b>Cell:</b> The space between four grid lines.<br>
      <b>Track & Areas:</b> Tracks are rows/columns; areas are groups of cells.
    </td>
  </tr>
  <tr>
    <td>Container Properties</td>
    <td>
      <code>display: grid</code>: Enables grid layout.<br>
      <code>grid-template</code>: Defines rows and columns.<br>
      <code>gaps</code>: Sets space between items.<br>
      <code>grid-auto</code>: Controls auto-placement.<br>
      <code>grid-template-columns/rows</code>: Sets column/row sizes.<br>
      <code>grid-auto-flow</code>: Controls item flow direction.
    </td>
  </tr>
  <tr>
    <td>Align Properties for Items</td>
    <td>
      <code>justify-items</code>: Aligns items horizontally.<br>
      <code>align-items</code>: Aligns items vertically.<br>
      <code>place-items</code>: Shorthand for both.
    </td>
  </tr>
  <tr>
    <td>Place Properties</td>
    <td>
      <code>grid-column-start/end</code>: Where an item starts/ends horizontally.<br>
      <code>grid-row-start/end</code>: Where an item starts/ends vertically.<br>
      <code>grid-area</code>: Shorthand for all four.
    </td>
  </tr>
  <tr>
    <td>Special Functions</td>
    <td>
      <code>minmax</code>: Sets min and max sizes.<br>
      <code>repeat</code>: Repeats columns/rows easily.
    </td>
  </tr>
  <tr>
    <td>Special Keywords</td>
    <td>
      <code>fr</code>: Fractional unit for flexible space.<br>
      <code>min-content</code>: Smallest content size.<br>
      <code>max-content</code>: Largest content size.<br>
      <code>auto-fill/auto-fit</code>: Fills available space automatically.
    </td>
  </tr>
</table>

---

## 🛠️ How to use

1. Clone this repository.
2. Open the project in your favorite code editor.
3. Explore the examples and notes to learn CSS Grid!

---

<div class="footer">
  Made with <span title="love">❤️</span> and <span title="coffee">☕</span> from 
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua Flag" class="flag-img">
</div>
