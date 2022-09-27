const navLinks = document.querySelectorAll('#navLinks');
const sections = document.querySelectorAll('section');
const containers = document.querySelectorAll('.container');
const navToggle = document.querySelector('#nav-toggle');
const prevBtns = document.querySelectorAll('#prevBtn');
const nextBtns = document.querySelectorAll('#nextBtn');
const sectionsOrder = ['hero','about','skill','project','contact'];

//function that shows the section
const showSection = link => {
    sections.forEach(section => {
        if(section.dataset.sectionName == link) {
            section.classList.add('show');
            section.querySelector('.container').classList.add('opacity');
        } else {
            section.classList.remove('show');
            section.querySelector('.container').classList.remove('opacity');
        }
        navToggle.checked = false;
    });
}

//if a link on navigation is clicked
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        let clickedLink = navLink.dataset.linkName;
        showSection(clickedLink);
    });
});

//if a next button is clicked
nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener("click", () => {
        let currentPage = document.querySelector('.show').dataset.sectionName;
        let nextPage = sectionsOrder[sectionsOrder.indexOf(currentPage) + 1];
        showSection(nextPage);
    });
});

//if a prev button is clicked
prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener("click", () => {
        let currentPage = document.querySelector('.show').dataset.sectionName;
        let nextPage = sectionsOrder[sectionsOrder.indexOf(currentPage) - 1];
        showSection(nextPage);
    });
});