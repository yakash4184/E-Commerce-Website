const header = document.querySelector("header");
const backToTopButton = document.createElement("button");

backToTopButton.textContent = "Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.display = "none";
backToTopButton.style.padding = "10px 20px";
backToTopButton.style.backgroundColor = "#000";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.opacity = "0.7";
backToTopButton.style.transition = "opacity 0.3s";

document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function() {
    // Toggle sticky class on header
    header.classList.toggle("sticky", window.scrollY > 0);

    // Change background color of the header when sticky
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#333";
        header.style.transition = "background-color 0.3s";
    } else {
        header.style.backgroundColor = "transparent";
    }

    // Show back-to-top button after scrolling down 300px
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top functionality for the back-to-top button
backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add hover effect for the back-to-top button
backToTopButton.addEventListener("mouseover", function() {
    backToTopButton.style.opacity = "1";
});

backToTopButton.addEventListener("mouseout", function() {
    backToTopButton.style.opacity = "0.7";
});
