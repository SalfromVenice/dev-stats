# Dev Stats

**Dev Stats** is a single-page web app built with **Ruby on Rails** (monolith) and a **React + Vite + TypeScript** frontend.

It allows you to enter a **GitHub username** and visualize which programming languages are used across that user's **public repositories**, using interactive **Chart.js** graphs. Data is fetched using the **GitHub GraphQL API**.

## 🌐 Live Demo

👉 [https://dev-stats.onrender.com/](https://dev-stats.onrender.com/)

> ⚠️ The app is hosted on [Render](https://render.com), which may put it into **cold start** mode after periods of inactivity.
> As a result, **it may take up to 1–2 minutes** to load when accessed for the first time.

## 🧠 How It Works

1. Enter a GitHub username into the input field.
2. The app queries the GitHub GraphQL API for public repositories.
3. It extracts the languages used across those repositories.
4. Results are displayed as interactive **pie and bar charts**.

## 📸 Features

-   GitHub GraphQL API integration
-   Aggregation of language usage per user
-   Interactive visualizations with **Chart.js**
-   Clean, minimal SPA experience

---

Made with ❤️ using Rails, React, Vite, and TypeScript.
