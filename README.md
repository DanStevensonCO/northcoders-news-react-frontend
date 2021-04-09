# Northcoders News React Frontend

I built this project while studying with [Northcoders](https://www.northcoders.com). It's a news aggregator (losely) based on Reddit. The database includes dummy articles, comments, topics and users. As a user, you can navigate through articles, filter them and comment and vote.

It was built with [Create React App](https://github.com/facebook/create-react-app).

## To view a hosted version

This site is hosted on my domain here: [nc-news.danstevenson.co](http://nc-news.danstevenson.co/)

## To work with this repo locally:

- open your favorite CLI app and change directory (`cd`) to the location where you'd like to install it
- run `git clone https://github.com/DanStevensonCO/northcoders-news-react-frontend.git`
- `cd northcoders-news-react-frontend`
- run `npm install` to download all dependencies
- run `npm start` to run the app in the development mode and automatically open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You should also see an IP address (like http://192.168.0.27:3000) in the console which you can use to open the app on a mobile device if it's connected to the same network as your local machine.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Dependencies and packages

Here's a list of some NPM packages used in this project and what they are needed for...

- `react`: The project is built on the React framework, "an open-source, front end, JavaScript library for building user interfaces"
- `axios`: The project requires connection to my backend application and the data contained in it (more info on that repo [here](https://github.com/DanStevensonCO/be-nc-news).) Axios creates API calls to the backend.
- `@reach/router`: React is, by default, a single-page application (SPA) framework. Reach Router allows this project to include multiple, dynamic routes (e.g. `/topic-name/articles/article-id`).
- `netlify`: This project is hosted on Netlify, and the Netlify NPM is for deployment handling.
