document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".container > div");

    icons.forEach(icon => {
        const comment = icon.querySelector(".comment");

        icon.addEventListener("mouseenter", function() {
            comment.style.display = "block";
        });

        icon.addEventListener("mouseleave", function() {
            comment.style.display = "none";
        });
    });
});