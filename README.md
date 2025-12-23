# 📰 Pulse News Engine

A beginner-friendly **NestJS** backend project demonstrating how to handle, validate, and process **HTTP Headers** to provide a localized and filtered news experience.

---

## 🚀 Overview
The **Pulse News Engine** is an API that serves news articles from a mock database (TypeScript Array). Instead of using URL parameters for everything, it uses **Custom Headers** to handle:
* **Filtering:** Via `x-category`.
* **Localization:** Via `accept-language`.

---

## 🛠️ Features
* **Header Validation:** Uses NestJS `Pipes` and `DTOs` to ensure headers are sent correctly.
* **Data Transformation:** Automatically switches news content between **English**, **Spanish**, and **French** based on headers.
* **Category Filtering:** Filters a mock database array based on user preferences.
* **Frontend Integration:** Includes a simple HTML/CSS/JS dashboard to test the API visually.

---

## 📂 Project Structure

### Backend (NestJS)
* `news.controller.ts`: Handles incoming requests and extracts headers.
* `news.service.ts`: Contains the `newsData` array and logic for filtering/translating.
* `dto/header.dto.ts`: Defines the "shape" and validation rules for our headers.
* `pipes/request-header.ts`: A custom decorator to grab headers cleanly.

### Frontend (HTML/CSS/JS)
* `index.html`: The user interface.
* `style.css`: Modern "News Card" styling.
* `script.js`: Uses the `fetch()` API to send custom headers to the backend.

---

## 📡 API Endpoints & Headers

### `GET /news/filter`
Fetches news based on your header preferences.

| Header Key | Required | Value Example | Description |
| :--- | :--- | :--- | :--- |
| `x-category` | No | `tech`, `sports`, `gaming` | Filters the news array. |
| `accept-language` | No | `en`, `es`, `fr` | Returns text in the chosen language. |

---

## ⚙️ Setup Instructions

### 1. Backend Setup
1.  Navigate to your NestJS project folder.
2.  Install dependencies: `npm install class-validator class-transformer`.
4.  Start the server: `npm run start:dev`.

### 2. Frontend Setup
1.  Open `index.html` in any modern web browser.
2.  Ensure the URL in `script.js` matches your NestJS server (usually `http://localhost:3000`).

---

## 🧪 How to Test
1.  **Using Postman:**
    * Set the request type to `GET`.
    * Go to the **Headers** tab.
    * Add `x-category: tech`.

2.  **Using the Frontend:**
    * Select a language from the dropdown.
    * Click **Update News**.

---

## 🧠 Learning Objectives
* Mastering the NestJS **Request Lifecycle**.
* Using **TypeScript Interfaces** to manage data objects.
* Implementing **Fallbacks** for missing headers.
