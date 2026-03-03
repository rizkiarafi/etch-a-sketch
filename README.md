# Etch-a-Sketch (Flexbox)

A simple browser-based sketch pad built with **HTML, CSS (Flexbox), and JavaScript**.

## Features

- 16x16 grid generated dynamically with JavaScript
- Squares created inside a container div
- Flexbox layout (no CSS Grid)
- Hover effect changes square color (pixel trail)
- Button to generate a new grid size
- User input limited to **max 100 squares per side**
- Grid always keeps the same total width (e.g., 960px)

---

## How It Works

- JavaScript creates all grid squares dynamically.
- The container uses:
  display: flex;  
  flex-wrap: wrap;
- Square size is calculated so the total grid width stays constant.
- Hover effect is added using `mouseenter` or `mouseover`.
- Clicking the resize button:
  - Prompts user for grid size
  - Removes the old grid
  - Generates a new one

---

## Goal

Practice:

- DOM manipulation
- Event listeners
- Flexbox layout
- Dynamic UI updates

---
