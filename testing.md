# Testing of Quizarama
## Code Validation
The Quizarama site has been thoroughly tested. All the code has been run though the [W3C HTML Validator](http://validator.w3.org/), the  [W3C CSS Vaidator](https://jigsaw.w3.org/css-validator/) and the [JavaScript validator](https://jshint.com/). Minor error were found on the game and end pages. After a fix and retest no errors were  returned.
 The HTML validator results for each page are below:
* Home page
  
  ![w3c validator test result](assets/images/readme-images/thtmlqhome.png)

* Game page
  
  ![w3c validator test result](assets/images/readme-images/thtmlqgame.png)

* Enter name and Save score page
  
  ![w3c validator test result](assets/images/readme-images/thtmlqend.png)

* High score page
  
  ![w3c validator test result](assets/images/readme-images/thtmlqhighscore.png)

The CSS Validator results are below:

  ![css validator test result](assets/images/readme-images/tcssqstyle.png)
  
  The JavaScript validator results are below:


  ## Responsiveness 

  * The responsive design tests were carried out manually with [Google Chrom DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive Design Checker](https://www.responsivedesignchecker.com/).

## Browser Compatibilty

quizarama was tested on the following browsers with no issues for the user- 
Goodle Chrom, Microsoft Edge, safari and Mozilla Firefoc. Appearance , functionality and responsivemness were consistnet throughout or a range of device sizes and browsers.
## Known Bugs
* ### Resolved
* When the site was first deployed an error 404 page came up where the name and save scores page was supposed to load. This was fixed by going back through all the page links and removing a backslash from the script link at the bottom of game.html.
* The HTML validator showed empty heading tags in the index page and high scroes page. This information was supplied by the Js files. I added a 0 in both cased and the error was fixed.
* Responsiveness
Js innertext on end.js error showing on console
* ### Unresolved
* The questions from open Trivia Database have not translated properly over showing up combinations of symbols instead of apostrophes. 

 Back to [README.md](./README.md#testing). 