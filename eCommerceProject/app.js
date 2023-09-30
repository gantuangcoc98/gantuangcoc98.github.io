const company_title = document.querySelector('.company_title');

company_title.addEventListener('click', () => {
    window.location.href = "index.html";
});

const search_symbol = document.getElementById('search_symbol');
const search_input = document.getElementById('search_input');

search_symbol.addEventListener('click', () => {
    search_input.focus();
});