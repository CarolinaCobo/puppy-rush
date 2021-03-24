# Puppy Rush

![Logo](assets/testing/responsive-screens.png)

[Live site](https://carolinacobo.github.io/puppy-rush/)

## Table of contents

1.[UX](#ux)

* [User Stories](#user-stories)

2.[Structure](#structure)

* [Design process](#design-process)
  * [Page structure](#page-structure)
  * [Home page](#home-page)
  * [Recipes page](#recipes-page)
  * [Contact page](#contact-page)

3.[Styling](#styling)

* [Colours](#colours)
* [Fonts](#fonts)
* [Features](#features)
* [Existing features](#existing-features)
* [Future features](#future-features)

4.[Technologies used](#technologies-used)

* [Languages](#languages)
* [Libraries](#libraries)
* [Tools](#tools)

5.[Testing](#testing)

6.[Deployment](#deployment)

7.[Credits](#credits)

* [Content](#content)
* [Media](#media)
* [Acknowledgements](#acknowledgements)
* [I received advice and support from](#user-stories)

## UX

### User stories

**As a user I would like to**: |  **So that I could**: |
| ------------- |:-------------:|
| Easily understand the purpose of the page | Learn how to play and play the game|
| Use an aesthetically pleasing site| enjoy my user experience |
| Easily navigate the site| Quickly find what I need |
| Find features that load quickly | Save time |
| Play the game in different screen sizes | I can use different devices |
| Be able to find easily the contact information  | I can send a message easily |
| Be able to contact the site owner | I can communicate with them |

### Site owner objectives

**As the site owner I would like to**: |  **So that the users**: |
| ------------- |:-------------:|
| Offer an site that is easy to navigate | Can enjoy the game|
| Use an aesthetically pleasing site| Have an easy experience |
| Provide an easy way to contact me| Give feedback or ask questions |

The wireframes for this project for desktop, iPad and mobile can be find [here](https://github.com/CarolinaCobo/puppy-rush/tree/main/assets/wireframes).

## Structure

### Design process

#### Page structure

* My aim was to make the game simple and easy for the user to play it.
* All pages follow the same style and color palette, simple and easy to navigate.
* The navbar on top of the page is static and have the icons linked to the main site and the contact site. It also has the logo. It's responsive on smaller devices.
* The home page has two buttons one to play that will take the user to that side of the games and a "How to play" one that opens a modal to view the instructions.
* The game site has the navbar, a score section, as well as the game grid with the puppies.

### Home page

Single page with the navigation bar with a home and a contact button on the top and two buttons in the middle of the page, one to open the game and another one to read the instructions.
This page is a modal that is covering the game until the users press the "Play" button.

### Game page

This page has a modal on top of it that disappears once the "Play" button is clicked. It is a square with random puppies that has to be grouped in 3 or 4 of the same type to disappear. Once they disappear, some new appears from the top of the page and the score sections is updated.

On top of the page the user can find two buttons to reload the home page or go to the contact page.

### Contact page

The contact page has three boxes with name, email, question and button to submit a question. Once the question is submitted an alert will open showing that the message was sent.

## Styling

### Colours

Using [Colorhunt.co](https://colorhunt.co) I chose a palette with complementary colours that could be found in different sites:

* ![#fff](https://via.placeholder.com/15/fff/000000?text=+) `#fff` - h1, background in the instructions, score, footer.
* Gradient from the right of ![#7f53ac](https://via.placeholder.com/15/7f53ac/000000?text=+) `#7f53ac` and ![#657ced](https://via.placeholder.com/15/657ced/000000?text=+) `#657ced` - Background of the page and the modal.
* ![#c7a1f5](https://via.placeholder.com/15/c7a1f5/000000?text=+) `#c7a1f5` - Icons and buttons hover on the icons.
* ![#ccc](https://via.placeholder.com/15/ccc/000000?text=+) `#ccc` - Border of the button elements.
* ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `#ffffff` - Game board background color.  

### Fonts

For the logo and the Score I used  "Press Start 2P" and for the rest of the site "Poppins". Both imported from Google fonts. Used on the Universal selector to format the entire site.

### Favicon

I used as Favicon one of the images used for the game. I converted it using Favicon.io.

### Features

#### Existing Features

* Feature 1 - Landing page with two buttons that allows the user to pick between two options Play or How to Play.
* Feature 2 - Modal that covers the game.
  * Built with HTML, CSS and JS the modal disappears and let the user play the game.
  * Pressing the play button set the score to 0 as well.

* Feature 3 - Allows the user to click on "How to Play".
  * Built with HTML, CSS and JS once the button is clicked a modal appears with the instructions of how to play the game.

* Feature 4 - Two buttons on the top of the page, one to return to the main page and another to go to the contact page.
  * The buttons are SVG images and link with the Home page and contact page.

* Feature 4 - Allows users to send a message with a question.
  * Built with HTML, CSS and JS and used EmailJS API to send a message to the site owner.

#### Future features

* Timer.
* Score board with a ranking of players.

### Technologies Used

#### Languages

* HTML -  to build the structure of this site.
* CSS - to style and fix media queries and the max width.
* JavaScript - to build the game and add interactivity with buttons and send messages to the site owner.

#### Libraries

* [Google Fonts](https://fonts.google.com) - used for fonts on the site.
* [Hover.css](https://ianlunn.github.io/Hover/) - used for animation effects on social icons and various buttons throughout the site.
* [Google Fonts](https://fonts.google.com/) - Import the fonts used ont he site.
* [Hero Icons](https://heroicons.com/) - Site icons.
* [TailwindCSS](https://tailwindcss.com/docs/box-shadow) - For inspiration on the styles for the site.

#### Programmes and Tools

* VSCode - used as IDE for the project.
* [Git](https://git-scm.com/) - used for version control.
* [Github](https://github.com/) - used to host repository and to generate the live website.
* Balsamiq - used to create the wireframes.
* [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - used to test and optimize the site.

### Testing

The test performed can be found at the [testing.md](/testing.md) file.

### Deployment

#### GitHub pages

My site is hosted on GitHub pages, deployed directly from the master branch.
The steps to complete the hosting process.

1. Log into GitHub.
2. Pick the repository.
3. Go to settings.
4. Scroll down to GitHub Pages section.
5. Select as a source "master branch".
6. The page refreshes automatically and the project is deployed.
7. The URL for the page will be public automatically.

#### Cloning

To run this code locally, you can clone this repository directly into the editor of your choice by following the steps below:

1. Open Terminal.
2. Change the current working directory to the location when you want the cloned directory.
3. Type the following into your Terminal:
git clone [https://github.com/CarolinaCobo/puppy-rush.git]
5.Press Enter to create a local clone.

To cut ties with this GitHub repository, type git remote rm origin into the terminal.
For more information regarding cloning of a repository click [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

### Credits

#### Content

This project JS part was following Ania Kubow tutorial in how to build a Candy Crush style game. I made some changes on the game and built the CSS and HTML pulling information from different sites referenced below in the acknowledgements.

#### Media

* The color palette used in this site was obtained from [Colorhunt.co](https://colorhunt.co)
* The favicon for this site has been resized in [Favicon.io](https://favicon.io/)
* The Library Tailwind has been used for inspiration on styles.
* Icons are from [Hero Icons](https://heroicons.com/).
* The icons have been made for this project by a designer.

#### Acknowledgements

I received inspiration for this project from:

* [Ania Kubow](https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw)
* [MDN Documentation](https://developer.mozilla.org/en-US/)
* [W3Schools](https://www.w3schools.com/)
* [CSS-Tricks](https://css-tricks.com/)
* [StackOverflow](https://stackoverflow.com/)
* [Codú Community](https://www.youtube.com/channel/UCvI5azOD4eDumpshr00EfIw)
* [FreeCodeCamp](https://www.freecodecamp.org/)

#### I received advice and support from

* Codú Community.
* My mentor
* Code Institute Slack Community.
