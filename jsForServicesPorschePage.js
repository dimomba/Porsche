const testsBtns = document.querySelectorAll('.closedAfterClick');
const list = document.getElementById('sub_m1');
for(let btnItem of testsBtns) {
    btnItem.addEventListener("click", function() {
        document.getElementById('sub_m1').checked = false;
        document.getElementById('menu-toggle').checked = false;
    });
}
