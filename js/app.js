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
let sections;
let menuUl = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//An element is in viewport, if minimum 50% of height is visible
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
        (rect.top >= 0 && rect.top < window.innerHeight / 2) ||
        (rect.top < 0 && rect.bottom > window.innerHeight / 2);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//Adds a new lorem ipsum section with the given number
function addNewSection(num) {
    let newSection = document.createElement('section');
    newSection.setAttribute('id', `section${num}`);
    newSection.setAttribute('data-nav', `Section ${num}`);
    let newDiv = document.createElement('div');
    newDiv.classList.add('landing__container');
    let newH2 = document.createElement('h2');
    newH2.innerHTML = `Section ${num}`;
    let newP1 = document.createElement('p');
    newP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    let newP2 = document.createElement('p');
    newP2.innerHTML = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
    newDiv.appendChild(newH2);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newSection.appendChild(newDiv);
    document.querySelector('main').appendChild(newSection);
}


// build the nav
function buildNavigation() {
    sections = document.querySelectorAll('section');
    let navList = document.querySelector('#navbar__list');
    for (let i = 0; i < sections.length; i++) {
        const sectionElement = sections[i];
        let navLiElement = document.createElement('li');
        let navLiAElement = document.createElement('a');
        navLiAElement.innerText = sectionElement.getAttribute('data-nav');
        navLiAElement.setAttribute('href', '#' + sectionElement.getAttribute('id'));
        navLiAElement.classList.add('menu__link');
        navLiElement.appendChild(navLiAElement);
        navList.appendChild(navLiElement);
    }
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
    for (let i = 0; i < sections.length; i++) {
        if (isInViewport(sections[i])) {
            sections[i].classList.add("section__active");
            document.querySelector(`a[href='#${sections[i].id}']`).classList.add("menu__active");
        }
        else {
            sections[i].classList.remove("section__active");
            document.querySelector(`a[href='#${sections[i].id}']`).classList.remove("menu__active");
        }
    }
}


// Scroll to anchor ID using scrollTO event
function handleClick(e) {
    const handlerElement = this;
    const sourceElement = e.target;
    const selector = "li a";
    const closestelement = sourceElement.closest(selector);
    if (handlerElement.contains(closestelement)) {
        const delegatedelement = closestelement;
        e.preventDefault();
        let whereToScroll = document.querySelector(delegatedelement.getAttribute('href'));
        console.log(whereToScroll);
        whereToScroll.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

window.addEventListener("DOMContentLoaded", () => addNewSection(4));

// Build menu 
window.addEventListener("DOMContentLoaded", () => buildNavigation());

// Scroll to section on link click
menuUl.addEventListener('click', handleClick);

// Set sections as active
document.addEventListener('scroll', () => addActiveClass(), { passive: true });



