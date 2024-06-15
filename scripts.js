function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
