document.addEventListener("DOMContentLoaded", () => {
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "") {
        currentPage = "index.html";
    }

    const langLinks = document.querySelectorAll(".lang-link");
    let matched = false;
    langLinks.forEach((link) => {
        const target = link.getAttribute("href");
        if (target === currentPage) {
            matched = true;
        }
    });

    if (matched) {
        langLinks.forEach((link) => {
            const target = link.getAttribute("href");
            link.classList.toggle("active", target === currentPage);
        });
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const headerRight = document.querySelector(".header-right");

    if (!menuToggle || !headerRight) {
        return;
    }

    const closeMenu = () => {
        headerRight.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.classList.remove("active");
    };

    const openMenu = () => {
        headerRight.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.classList.add("active");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = headerRight.classList.contains("open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    headerRight.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 800) {
                closeMenu();
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth > 800) return;

        const target = event.target;
        if (!headerRight.contains(target) && !menuToggle.contains(target)) {
            closeMenu();
        }
    });
});
