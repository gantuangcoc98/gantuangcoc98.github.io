const company_title = document.querySelector('.company_title');

company_title.addEventListener('click', () => {
    window.location.href = "index.html";
});

const search_input = document.getElementById('search_input');
const search_symbol = document.getElementById('search_symbol');
search_symbol.addEventListener('click', () => {
    search_input.focus();
});


const browse_search_input = document.getElementById('browse_search_input');
const browse_search_symbol = document.getElementById('browse_search_symbol');
browse_search_symbol.addEventListener('click', () => {
    browse_search_input.focus();
});