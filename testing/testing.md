# Puppy Rush Testing

1.[Automated Testing](#automated-testing)

2.[Other tools used](#other-tools-used)

3.[User Stories](#user-stories)

- [User Stories Paths](#user-stories-paths)
- [Testing user stories](#testing-user-stories)

3.[Manual Testing](#manual-testing)

- [Home page](#home-page)
- [Game page](#home-page)
- [Contact page](#home-page)
- [Test recording](#test-recording)
- [Devices and browsers](#devices-and-browsers)

5.[Bugs](#bugs)

- [Bugs Fixed During Testing](#bugs-fixed-during-testing)
- [Bugs found and not fixed](#bugs-found-and-not-fixed)

6.[Acknowledgements](#acknowledgements)

***  

Main [README.md](/README.md) file.  

[Live site](https://carolinacobo.github.io/puppy-rush/) on Github Pages.  

***

## Automated testing

- Both HTML and CSS code has been validated in [W3C CSS validation](https://jigsaw.w3.org/css-validator/) and [W3C Markup Validation](https://validator.w3.org/) to check the validity of the website code. In the following links a screenshot of the passed tests
  - [HTML](testing/html-test.png)

- Screenshots of the passed test on the following [link](https://github.com/CarolinaCobo/puppy-rush/tree/main/assets/testing).

- [Jshint](https://jshint.com/)
  - [Game.js file](testing/js-hint-game.png)

Some bugs were found and fixed, this will be explained in the bugs section below.

## Other tools used

- [Am I Responsive](http://ami.responsivedesign.is/) - test the game in different sizes.  

    ![Responsive](testing/responsive-screens.png)
    ![Game responsive](testing/game-responsive-screens.png)

- [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for testing and debugging along the development process.

## User Stories

### Testing user stories

1. As a new user I want to easily understand the purpose of the page.
    - The site is simple with the logo on the top left and two buttons one to access the game and another one to learn how to play.
    - Also the navbar has two icons that are commonly used in games to go to the Home page and the Contact page.

2. As a new user of the website, I want to find an aesthetically pleasing site.
    - A clearly labelled buttons to play and how to play are proportioned. The buttons on the navigation bar are the ones traditionally used on games.

3. As a new user, I want to find features that load quickly.
    - The code has been optimized to offer the quickest possible loading page.

4. As a new user, I want to easily play the game in different screen sizes.
    - The game works in different screen sizes as shown above. There's a bug that elaborated below as the game can't be played on touch screens.

5. As a new user, I want to be able to find easily the contact information.
    - The contact button can be accessed from all the pages Home page, game page and Contact page.

6. As a new user, I want to be able to contact the site owner.
    - Form that requires the user to input data to be able to submit and that shows an alert to let the user know that the message has been sent.

## Manual testing

### Home Page

1. Navigation bar:
    1. Go to the "Home" page from a desktop.
    2. Change the screen size from desktop to tablet to verify that the navigation bar and the buttons go to the right place.
        - _During the testing process another media query had to be added as the buttons were not in the right place in smaller screens._
    3. Click on each navigation menu item and verify that it links to the correct page.
    4. Hover over the Play, How to play buttons and Home and contact icons.
    5. Repeat verification of functionality and responsiveness on my mobile phone and tablet.

2. How to Play modal
    1. Click on it on different devices.
    2. Open it and close it when clicking anywhere else on the page.
        - _During the testing process another media query had to be added as the modal were not in the right place in smaller screens._

3. Review all functionality and responsiveness on my mobile devices and iPad.

### Game page

1. Navigation bar:
    1. As the game page was covered by a modal all the testing in the previous step is applicable for this page as well.

2. Play the game:
    1. Match 3 of the same kind of puppy, they disappear and more fall from the top of the grid.
    2. Match 4 of the same kind of puppy, they disappear and more fall from the top of the grid.
    3. Move the puppies around.

3. Game is responsive:
    1. The game size changes depending on the screen size.
        - _The size of the puppies had to be recalculated and another media query had to be added as during testing process as it was not the proper size in different screens_

4. Scoreboard update when the puppies are matched:
    1. Check that the scoreboard is at 0 anytime the game starts.
         - _This one was one of the biggest bugs encountered as the game was starting at a random number depending on how the puppies were randomly created. To fix that I added a modal on top of the game and linked the Play button with a set to score to 0 so anytime the user click on the play button the counter goes to zero, if the user goes back to the home page it will be again back to 0._

    2. Check that scoreboard is correctly update when the puppies match.

### Contact Page

1. Navigation bar:
    1. Navbar code is identical on this page as well. Testing already completed.

2. Contact form:
    1. Try to submit the empty form and verify that an error message about the required fields appears
    2. Try to submit the form with an invalid email address and verify that a relevant error message appears
    3. Try to submit the form with a file uploaded, verify that file selection process works.
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. Reduce and expand width of window to verify that the form display behaves and centres the way expected, and that it looks good on all device widths.

3. Alert when message sent:
    1. Once the message has been sent with the correct format an alert confirming the message has been sent appears.
    2. Receive the message on the email.

### Tests recording

The following manual tests have been performed, link video at the end.

1. Clicking all the buttons:
    1. Click Play and how to play.
    2. Click on the Home and Contact icons.

2. Game:
    1. Open it clicking the button.
    2. Matching the puppies to make them disappear.
    3. Checking that the score is updating.

3. Contact form:
    1. Go to the "Contact" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. An alert appears showing that the message has been sent.
    6. Click home button and come back to home page.

Below a table with a list of the test performed:

What do you do? | Expected Behavior | Pass/Fail  |
| ------------- |-------------| -----|
| Click the play button| Start game | Pass |
| Click How to Play button | Opens modal with the instructions | Pass |
| Click on the Contact icon on the top | Open the contact page | Pass |
| Play the game | Move the puppies on the grid | Pass |
| Play the game | Score starts on 0 | Pass |
| Play the game | Puppies disappear when 3 of them match | Pass |
| Play the game | Puppies disappear when 4 of them match | Pass |
| Play the game | Score updates when  puppies matched | Pass |
| Contact the site owner | Prompt an alert if the name is missing | Pass |
| Contact the site owner | Prompt an alert if the email is missing | Pass |
| Contact the site owner | Prompt an alert if the email format is incorrect | Pass |
| Contact the site owner | Prompt an alert if the message format is incorrect | Pass |
| Contact the site owner | Prompt an alert that the message has been sent | Pass |

Video testing the site in the following [link](https://www.loom.com/share/4cd9b9f3ad864e229848f7b6f35b7d50).

### Devices and browsers

Manually tested on:

- Chrome.
- Safari.

Tested on the following devices:

- MacBook Pro.
- HP.
- iPhone XS.
- Samsung.
- iPad.

## Bugs

### Bugs found and fixed

- The score was starting with random numbers as anytime the game loaded it matched some of the puppies and disappeared. To fix that I added the modal and linked the play button in the modal with the event to reset the score on the JS file.
- Overflow in small devices, to fix this I added an overflow hidden and made different media queries for all screen sizes.
- Modal was pushing the game down instead of covering it, to fix it I put a wrapper around the content.
- Buttons not appearing on the right place and appearing below, fixed it by adding negative margin to move it up.
- Test reported an error because an anchor tag was wrapping the button with the image icon. To fix that I included a onclick event that would redirect to the desired site.
- Some semicolons were missing on the Game JS file.
- The test reported an error on the score was initially an h3 but as it was empty I modify it using a p tag instead, modifying the styles on the CSS file as well.  
- The game was broken when some moves were made, generating an infinite loop. This was because the value on the row of three. Once the value was fixed it didn't happen again.

### Bugs found and not fixed

- Sometimes some squares remain empty even if they have the value, once they are moved they reappear. This bug has been tried to be fixed but no solution could be found and no errors on the console when the game is being played have been reported. More research to be done in the future.
