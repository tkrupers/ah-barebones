# Build a modern web app in React

Hi,

Thank you for applying to AH Tech. Today you are building a modern web application using React and the Github REST API. 

You can fork this barebones repo to start your app.

### Barebones stack
* api
  * node.js
  * express
  * cors
* web
  * react
  * react-dom
  * react-router
  * jest
  * react testing-library
  * webpack (ts-loader)

Language: Typescript

## Assignment description
The app should render a search field to search Github users. Typing into the search field will query our server to fetch data from Github. We're not interested in all data output. The search result is limited to 20 users and should display: **name, avatar, location, followers and bio (max 50 chars)**. 
The result should be displayed in a list where I am able to sort and/or filter by followers and/or location. 

A Github user from search is clickable. It'll render a user detail page which displays a user card with the same data fields as seen in search and a list of repositories below. 
The repository list (limited to 10) includes **name**, **description** **stars** and **watchers**. Clicking on a repo will open its url in a new tab. In case of more than 10 repositories, you should display a See more button which links to the users github page (new tab). 

Make sure we're able to navigate back to our main search page.


## Limitations

* Must use React
* Must use Github REST API
* Aim to complete the assignment within 4 hours.

## Tips

* You can refactor the whole app, the template just serves as a starting point.
* Think about best practices.
* Make it secure.
* Make it reliable (error handling).
* Test your code.
* You are allowed to make use of open source libraries.


## Setup

1. Fork the project.
2. `yarn` or `npm install` in both folders.
3. `yarn start` or `npm start` in both folders to start servers.
4. Happy coding! 


## Submitting 
Please commit your code to a public GitHub repository and send your repo url in a reply to the challenge invite mail.

