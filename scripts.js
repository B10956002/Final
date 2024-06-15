function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// 預設顯示首頁
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
