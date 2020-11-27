## Year One API Challenge
[Bill Wilke](https://alumni.turing.io/alumni/bill-wilke)
#### Front-End Repo
https://github.com/Billwilke42/movierater

### Abstract

This challenge was completed YearOne. The challenge was to build a small web application that allows a user to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down. The challenge instructions allowed me to use and API of my choice for the search and displaying the movies information. For giving a rating of the selected movie, I had to make an API to save implement some type of storage or database to persist movie titles and how many thumbs up or thumbs down they’ve received.

### Technology Used

- React
- JavaScript
- React and Jest testing libraries
- React Router
- Git
- Travis-CI
- CSS
- Postgres
- Node.js
- Express.js

## Set Up

1. If you do not have Postgres installed, go to their site and follow the docs: https://www.postgresqltutorial.com/install-postgresql/

2. Clone down this repo.

3. Cd into movie-rater-api folder and run in your terminal: 

```bash
$ npm install
```

4. On your command line run: 

```bash
$ psql

$ CREATE DATABASE movieapi;

$ CREATE TABLE ratings (imdb_id text, thumbs_up integer, thumbs_down integer, title text);

$ SELECT * FROM ratings;
```

If everything went well you should see something like this on your command line: 

[![Screen-Shot-2020-11-27-at-10-40-34-AM.png](https://i.postimg.cc/sX2vwvyC/Screen-Shot-2020-11-27-at-10-40-34-AM.png)](https://postimg.cc/ns6FLVC3)

5. Open a new terminal window.

6. Cd into movie-rater-api

7. Open the folder in your text-editor and add .env file with necessary variables:

```
POSTGRES_PASSWORD = (Your password)
DB_PORT=(Your postgres port)
DB_HOST=localhost
DB_DATABASE=movieapi
DB_USER=(Your postgres username)
```

8. Run in your terminal:

```bash
$ node index.js
```

9. Open a new terminal window. 

10. Clone down the FE repository https://github.com/Billwilke42/movierater and cd into project folder.

11. If the given API key does not work. In your browser, go to https://rapidapi.com/rapidapi/api/Movie%20Database%20(IMDB%20Alternative), subscribe and add your given API key to a .env file in the Front End project folder.

12. In your terminal run: 

```bash
$ npm install
$ npm start
```

13. You should now be able to view the application in your browser at http://localhost:3000/

14. Go ahead and search for some movies and add your ratings, if you run in your Postgres CLI:

```bash
 $ SELECT * FROM ratings;
```

You should be able to view your ratings!

### GIFS and Screenshots

#### Homepage

[![Screen-Shot-2020-11-27-at-10-52-57-AM.png](https://i.postimg.cc/KzYd9gzb/Screen-Shot-2020-11-27-at-10-52-57-AM.png)](https://postimg.cc/DWtj00Lp)

#### Searching from Homepage

![Searching](https://media.giphy.com/media/V43kzlxYGjPV5pal0w/giphy.gif)

#### Viewing movie details and giving a rating

![Rate](https://media.giphy.com/media/8qQOMOA1Gpl1Ra2mVX/giphy.gif)

#### Movie Info Page

[![Screen-Shot-2020-11-27-at-11-03-38-AM.png](https://i.postimg.cc/7Z2sZnCb/Screen-Shot-2020-11-27-at-11-03-38-AM.png)](https://postimg.cc/Xrnc2Fk0)

#### Table

[![Screen-Shot-2020-11-27-at-11-05-06-AM.png](https://i.postimg.cc/K8PPWqk7/Screen-Shot-2020-11-27-at-11-05-06-AM.png)](https://postimg.cc/DSz4Jccm)


## Challenges and Reflection

I was a bit nervous but also excited going into this challenge, as an alumni of the Front End program at the Turing School of Software & Design, I had never actually built an API from scratch before. I love immersing myself in new tech and learning more about the Back End has been a priority for me. I have tons of experience with JavaScript and have built microservices with Express.js and used Postgres a bit, so I settled in on this as my Back End stack. One thing I wish I had gotten to on the Back End was Migrations so I could seed the database when the challenge was viewed by YearOne staff. I also wish I got to deployment. Unfortunately, even with the extension YearOne graciously gave me, I have no more time to work on this project due to previous commitments. I had no problems on the Front End other than I wanted to get more testing done, specifically integration and more sad path unit tests. Thank you YearOne for the opportunity to work on this challenge, I am very happy with what I made.


