var oWidth = document.querySelector('#body');
// 選單漢堡條
var oNavBurger = document.querySelector('.rwd_navbar_burger')
var oburger_1 = document.querySelector('.burger:nth-child(1)')
var oburger_2 = document.querySelector('.burger:nth-child(2)')
var oburger_3 = document.querySelector('.burger:nth-child(3)')
var oAddClass_BurgerMenu = document.querySelector('.rwd_navbar_menu_burger')
//點擊事件涵式
oNavBurger.addEventListener('click', navBtnHandler)

function navBtnHandler() {
    oburger_1.classList.toggle('burger_1')
    oburger_2.classList.toggle('burger_2')
    oburger_3.classList.toggle('burger_3')

    if (oAddClass_BurgerMenu.classList.contains('burger_menu') == true) {
        oAddClass_BurgerMenu.classList.remove('burger_menu');
    } else {
        oAddClass_BurgerMenu.classList.add('burger_menu');
    }

    oWidth.onresize = function () {
        // 如果螢幕寬度轉換大於770上面class全刪除
        var aWidth = window.outerWidth;
        if (aWidth > 770 & oAddClass_BurgerMenu.classList.contains('burger_menu') == true) {
            oAddClass_BurgerMenu.classList.remove('burger_menu');
            oburger_1.classList.remove('burger_1');
            oburger_2.classList.remove('burger_2');
            oburger_3.classList.remove('burger_3');
        }
    }
}