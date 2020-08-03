const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Task 1: Create Selectors to point your data into elements.
const navLinks = document.querySelectorAll('nav a');

const heading = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImage = document.querySelector('#cta-img');

const middleImage = document.getElementById('middle-img')

const mainContentHeading = document.querySelectorAll('.text-content h4');
const mainContentPara = document.querySelectorAll(' .text-content p');

const contactHeading = document.querySelector('.contact h4');
const address = document.querySelector('.contact p');
const phone = document.querySelector('.contact p:nth-child(3)');
const email = document.querySelector('.contact p:nth-child(4)');

const footerPara = document.querySelector('footer p');

// Task 2: Update the HTML with the JSON data
// Using your selectors, update the content to match the example file

navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

//console.log(navLinks);

heading.textContent = siteContent.cta['h1'];
ctaButton.textContent = siteContent.cta['button'];
ctaImage.setAttribute('src', siteContent.cta['img-src']);

middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

mainContentHeading.textContent = siteContent['main-content']['services-h4'];
mainContentPara.textContent = siteContent['main-content']['services-content'];

contactHeading.textContent = siteContent.contact['contact-h4'];
address.textContent = siteContent.contact['address'];
phone.textContent = siteContent.contact['phone'];
email.textContent = siteContent.contact['email'];

footerPara.textContent = siteContent.footer['copyright'];

// Task 3: Add new content
// Change the color of the navigation text to be Green.
// Utilize .appendChild() and .prepend() to add two new items to the navigation system. Call them whatever you want.

navLinks.forEach(link => link.style.color = 'green');

