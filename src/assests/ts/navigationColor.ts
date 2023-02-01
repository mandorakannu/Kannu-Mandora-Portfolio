const onScrollNavbarColorChange = () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        nav?.classList.add("bg-navy-900");
        nav?.classList.add("shadow");
    } else {
        nav?.classList.remove("bg-navy-900");
        nav?.classList.remove("shadow");
    }
};
window.addEventListener("scroll", onScrollNavbarColorChange);

export default onScrollNavbarColorChange;