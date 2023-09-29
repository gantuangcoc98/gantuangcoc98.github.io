const project_title = document.getElementById("project-title" || "project-tab");
project_title.addEventListener("click", () => {
    const project_view = document.querySelector(".projects");
    project_view.classList.toggle("active");
});

const faq_title = document.getElementById("faq-title" || "faq-tab");
faq_title.addEventListener("click", () => {
    const faq_view = document.querySelector(".faq");
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