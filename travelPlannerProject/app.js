const view_wishlist = document.querySelector('.wishlist');

const wishlist_tab = document.getElementById('wishlist_tab');
wishlist_tab.addEventListener('click', () => {
    if (!view_wishlist.classList.toggle('active'))
        view_wishlist.classList.toggle('active');
});

const wishlist_title = document.getElementById('wishlist-title');
wishlist_title.addEventListener('click', () => {
    view_wishlist.classList.toggle('active');
});

const view_common_questions = document.querySelector('.faq');

const faq_tab = document.getElementById('faq_tab');
faq_tab.addEventListener('click', ()=>{
    if (!view_common_questions.classList.toggle('active'))
        view_common_questions.classList.toggle('active');
});

const common_questions_title = document.getElementById('faq-title');
common_questions_title.addEventListener('click', () => {
    view_common_questions.classList.toggle('active');
});

const questions = document.querySelectorAll(".questions");
questions.forEach(question_item => {
    const selected_question = question_item.querySelector("h3");
    selected_question.addEventListener("click", () => {
        question_item.classList.toggle("active");
    });
});