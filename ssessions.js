document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButtons = document.querySelectorAll(".Collapse");

    collapsibleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});
