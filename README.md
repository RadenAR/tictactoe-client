# Tic Tac Toe
w/ Authentication

## Instructions

To play the live version click this link:
[TicTacToeGame](https://radenar.github.io/tictactoe-client/)

To run locally, run the following in terminal from the project directory:
```sh
grunt serve
```
To deploy, run the following in terminal from the project directory:
```sh
grunt deploy
```

## Planning and Development process

1.    Wireframes and User Stories were made first
2.    Following this, files for the modularity were made (ui.js, event.js, api.js) for both the game actions and authentication seperately.
3.    Authentication was done first on the initial page.
4.    Curl-scripts were made for each of the actions (sign-in, sign-up, sign-out and change password)
5.    Following this, curl-scripts were made for the game actions( to get all games, to create a new game, to get one game and to update the game)
6.    HTML elements were then created for each of the authentication actions.
7.    The api calls were then translater to AJAX calls and added to work through the html elements.
8.    A tic tac toe board was then created in html including elements for the title, and two messages (one for error/success and one for game instructions)
9.    The api calls were then made into AJAX calls but not yet linked to the board.
10.   Event handlers were made to make the board work and game logic was included to find out the winner and push a message to the user.
11.   The ui functions were created for every action to notify the user.
12.   Styling was then done using bootstrap
13.   A modal was then created to style better with show and hide for certain actions that take place in the game.

## Problem solving strategy
* What is the error?
* What function is causing the error? If unsure, start from the index.html and move down the chain (app.js, events.js, api.js, ui.js)
* What is that function returning?
* What is the function being passed?
* If the problem is what it is being passed work back to the function before, if it is returning correctly more the other way down the chain.
* If unsure of the above process, look through old issues and google relevant keywords.
* If there is still an issue, open an issue on the issue que.


## Built With

* [jQuery](https://jquery.com/) - DOM Manipulation
* [AJAX](https://api.jquery.com/category/ajax/) - AJAX used for API calls
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language for site functionality
* [Bootstrap](https://getbootstrap.com/) - Used for more advanced styling
* [CSS3](http://www.css3.info/) - Used in conjunction with bootstrap for styling
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used for general structure of webpage

## WireFrames
![alt text](https://i.imgur.com/1jOucpI.png "wireframe")

## User Stories
* As a user, I want to be able to sign up so that I can play.
* As a user, I want to be able to sign in so that I can play.
* As a user, I want to be able to change my password.
* As a user, I want to be able to choose where to put X's and O's.
* As a user, I want to be able to win and be notified of the win.
* As a user, I want to be notified if the game is over in a tie.
* As a user, I want to be able to know if i signed up correctly.
* As a user, I want to know if my signin/up has failed.
* As a user, I want to be able to be able to start a new game.
* As a user, I would like to have an indication of whose turn it is

## Unsolved Problems (that will be fixed in the future iterations)
* Slightly vague to notify when signup was a success or failure + if signin was a failure

## Author
* Raden
