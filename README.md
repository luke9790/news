# Angular News Aggregator

![Screenshot del sito](assets/site.png)

This is a **portfolio** project built with Angular—a news aggregator website that fetches the latest headlines from [NewsAPI](https://newsapi.org/) and displays short articles on today's news. The design is inspired by major news sites like CNN and BBC, utilizing [Tailwind CSS] for a modern, responsive look. The application features a header and a slide-out sidenav for seamless navigation across different sections.

In addition to news aggregation, the project integrates a **weather widget** that leverages two external APIs. This widget requests your geolocation to display real-time weather information for your current city; if geolocation is not available or permission is denied, it defaults to showing the weather for Rome.

> **Note:** The free tier of NewsAPI only works on localhost, so the application is intended to run locally.

## Features

- **News Aggregation:** Retrieves current news from NewsAPI.
- **Intuitive Navigation:** Includes a header and a slide-out sidenav for easy browsing.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern Aesthetics:** Design inspired by leading news outlets like CNN and BBC.
- **Weather Widget:** Uses two APIs to request geolocation and display the local weather and city, or shows the weather for Rome as a fallback.

## Technologies Used

- **Angular:** The main framework for building the application.
- **Tailwind CSS:** For creating a modern and responsive UI.
- **NewsAPI:** To fetch up-to-date news content.
- **Weather APIs:** Integrates external APIs to provide current weather data based on geolocation.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://cli.angular.io/)

## Installation and Local Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    ng serve --open
    ```

    This command will launch your default browser and open the application at `http://localhost:4200`.

## Conclusion

This portfolio project showcases modern web development skills using Angular and Tailwind CSS. If you have any questions, suggestions, or collaboration ideas, feel free to get in touch!

---
