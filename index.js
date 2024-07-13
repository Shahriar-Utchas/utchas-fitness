document.getElementById('nav-btn').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    if (nav.style.height === '443px') {
        nav.style.height = ''; // Reset to original height
    } else {
        nav.style.height = '443px'; // Set to expanded height
    }
});


