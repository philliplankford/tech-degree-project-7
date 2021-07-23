const notifDropdown = document.getElementById('notif-dropdown');
const bell = document.getElementById('bell');

function toggleShow(element) {
    element.classList.toggle('show');
}

bell.addEventListener('click', () => {
    toggleShow(notifDropdown);
});

window.onclick = (e) => {
    if (!e.target.matches('#bell')) {
            if (notifDropdown.classList.contains('show')) {
                notifDropdown.classList.remove('show');
            }
    }
};



