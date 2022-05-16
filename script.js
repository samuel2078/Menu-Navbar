class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
    this.mobileMenu= document.querySelector(mobileMenu); 
    this.navList= document.querySelector(navList);
    this.navLinks= document.querySelectorAll(navLinks);
    this.active= "active";
    this.handleClick= this.handleClick.bind();  
}   
    handleClick(){
        console.log(this)
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }
  
    addClickEvent() {
        this.mobileMenu.addClickEvent("click", this.handleClick);
    
}
init() {
    if(this.mobileMenu){
        this.addClickEvent();
    
    }
    return this;
}

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",

);
mobileNavbar.init();