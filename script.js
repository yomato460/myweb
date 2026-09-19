```javascript
/* =========================
   手机端菜单
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* 点击导航后自动关闭手机菜单 */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   返回顶部
========================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   滚动显示动画
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(
        ".skill-card, .project-card, .about-container"
    )
    .forEach(element => {

        observer.observe(element);

    });


/* =========================
   当前年份
========================= */

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-container p");

if (footerText) {

    footerText.textContent =
        `© ${year} BCD. All Rights Reserved.`;

}
```
