/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let sections = document.querySelectorAll('section');
let navList = document.querySelector('#navbar__list');
console.log(navList);
for (let i = 0; i < sections.length; i++) {
    console.log(i + "th round");
    const sectionElement = sections[i];
    console.log(sectionElement);
    let navLiElement = document.createElement('li');
    navLiElement.innerText = sectionElement.querySelector('h2').innerText;
    console.log(navLiElement);
    navList.appendChild(navLiElement);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


