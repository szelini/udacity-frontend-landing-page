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

// append 4th section
let sectionFour = document.createElement('section');
sectionFour.setAttribute('id', 'section4');
sectionFour.setAttribute('data-nav', 'Section 1');
let newDiv = document.createElement('div');
newDiv.classList.add('landing__container');
let newH2 = document.createElement('h2');
newH2.innerHTML = 'Section 4';
let newP1 = document.createElement('p');
newP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
let newP2 = document.createElement('p');
newP2.innerHTML = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
newDiv.appendChild(newH2);
newDiv.appendChild(newP1);
newDiv.appendChild(newP2);
sectionFour.appendChild(newDiv);
document.querySelector('main').appendChild(sectionFour);



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


