const testsBtns = document.querySelectorAll('.closedAfterClick');
const list = document.querySelector('input.toggleSubmenu');
for(let btnItem of testsBtns) {
    btnItem.addEventListener("click", function() {
        document.querySelector('input.toggleSubmenu').checked = false;
        document.querySelector('input.menutogglefromtask2').checked = false;
    });
}