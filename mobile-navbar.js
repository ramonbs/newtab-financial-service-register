class MobileNavbar {
    constructor(mobileMenu) {
        this.MobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListerner("click", () => console.log("Hey auau"));
    }

    init() {
        if (this.MobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu-container",
    ".menu-container div",
);