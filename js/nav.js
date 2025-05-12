function toggleMenu() {
    const panel = document.getElementById('side-container');
    panel.style.right = panel.style.right === '0px' ? '-250px' : '0px';
}
document.getElementById('logo_button').onclick = function() {
    window.location.href = "../index.html";
};