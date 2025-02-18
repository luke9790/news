# Angular News Aggregator

This is a **portfolio** project built with Angular—a news aggregator website that fetches the latest headlines from [NewsAPI](https://newsapi.org/) and displays short articles on today's news. The design is inspired by major news sites like CNN and BBC, utilizing [Tailwind CSS] for a modern, responsive look. The application features a header and a slide-out sidenav for seamless navigation across different sections.

> **Note:** The free tier of NewsAPI only works on localhost, so the application is intended to run locally.

## Features

- **News Aggregation:** Retrieves current news from NewsAPI.
- **Intuitive Navigation:** Includes a header and a slide-out sidenav for easy browsing.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern Aesthetics:** Design inspired by leading news outlets like CNN and BBC.

## Technologies Used

- **Angular:** The main framework for building the application.
- **Tailwind CSS:** For creating a modern and responsive UI.
- **NewsAPI:** To fetch up-to-date news content.

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

3. **Configure Environment Variables:**

    Create (or modify) the file `src/environments/environment.ts` with your NewsAPI key:

    ```typescript
    export const environment = {
      production: false,
      newsApiKey: 'YOUR_API_KEY'
    };
    ```

    > **Important:** Register at [NewsAPI.org](https://newsapi.org/) to obtain your API key. Note that the free API only works on localhost.

4. **Run the application:**

    ```bash
    ng serve --open
    ```

    This command will launch your default browser and open the application at `http://localhost:4200`.

## Conclusion

This portfolio project showcases modern web development skills using Angular and Tailwind CSS. If you have any questions, suggestions, or collaboration ideas, feel free to get in touch!

---

