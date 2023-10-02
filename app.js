const project_view = document.querySelector(".projects");

const projects_tab = document.getElementById('projects_tab');
projects_tab.addEventListener('click', () => {
    if (!project_view.classList.toggle("active")) {
        project_view.classList.toggle("active")
    }
})

const project_title = document.getElementById("project-title");
project_title.addEventListener("click", () => {
    project_view.classList.toggle("active");
});


const faq_view = document.querySelector(".faq");

const faq_tab = document.getElementById('faq_tab');
faq_tab.addEventListener('click', ()=> {
    if (!faq_view.classList.toggle("active")) {
        faq_view.classList.toggle("active");
    }
})
const faq_title = document.getElementById("faq-title");
faq_title.addEventListener("click", () => {
    faq_view.classList.toggle("active");
});

const faqs = document.querySelectorAll(".questions");
faqs.forEach(faq => {
    const question = faq.querySelector("h3");
    question.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const education_title = document.getElementById("education-title");
education_title.addEventListener("click", () => {
    const education_view = document.querySelector(".education");
    education_view.classList.toggle("active");
});