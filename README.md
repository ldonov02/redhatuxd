# redhatuxd

Red Hat UXD - Engineering Interview Screening (JS + CSS)

Written by: Laura Donovan

On: 7/11/2018

QUESTIONS

1.1: First off, which languages/frameworks/libraries are best suited to the application's purpose? After that, the key considerations when building the application (and ever after) are functionality (does it consistently do what you want?), performance, accessibility, and security (of the page and of user data). Modularity is also an important concern in terms of being able to build on what you've already written and thus reduce unnecessary complexity. I've never personally had to contend with this issue, but I imagine cost is also a factor.

1.2: I follow blogs of developers I know, talk to people in industry, and do Internet research.


2.1: First, test code locally, then test it on a server. For JavaScript and other web applications, it's important to test code in multiple browsers. If automatic tests are available, I'll use those (since you can usually trust that they're functional) in combination with unit tests; otherwise, I'll build comprehensive unit tests. I also like to build tests incrementally as I go along, because it's less time-consuming to identify a problem somewhere in fifteen lines of code than it is in 500. 

2.2: I like well-tested, stable code bases: code you can trust to do what you want it to. I also value comprehensive and accessible documentation, low syntactic complexity, and high performance.


3.1: It's very rewarding to build something that you know someone will use. Software dev is versatile and there's always more to learn.

3.2: Graduating Tufts magna cum laude with two degrees (English and CS).


PROJECTS

Exercise 1: Made var one, var two globals instead of locals, which caused the program to output "correct" instead of "error undefined" in the console. An alternate fix would be removing the setTimeout statements from callOneService and callTwoService, but in the interest of changing as little of the original code as possible, I made the local variables global instead. 

Files: remotemathservice_fixed.js - the fixed version of the code originally given to me

test/remotemathservice_test.js - the above file, modified to be able to be tested by mocha.js

test/test/test_rms.js - mocha.js unit test. NOTE: I was unable to get this to run on my computer for reasons I had trouble discerning, so I was ironically not able to test my unit test.



Exercise 2: Stumbling blocks: I know there's meant to be a gradient in the background image, but I wasn't sure how to replicate it with CSS. Putting a dark gray circle in the top corners was as close as I could get, but the circles appear to just cancel each other out. Also, I was able to get the box to respond to narrowing the browser window horizontally but not vertically, likely due to some problem with flexboxes vs block display.

Files: box.html, styles.css - WYSIWYG



Exercise 3: Stumbling blocks: I copied the JSON available at the given link into the file "temp-user.ts" because I had trouble parsing the JSON from the server to match the User[] typescript definition. Additional debugging or code reformatting would be required, but was unachievable due to time constraints. I also had trouble implementing the descending sort on users' names because Angular 2 removed the sorting mechanism that was present in AngularJS, and an external library was required which I had trouble installing. Due to time constraints I was unable to provide my own implementation. In retrospect, jQuery might have been a better approach, but I didn't consider it a framework so much as a library. 

Files: all in the userlist directory

To run: run "ng serve --open" on command line (assuming Angular2 is installed).

Unit test: run "ng test" on command line.

