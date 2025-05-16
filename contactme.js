// Simulate form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert("Thank you for your message! This is a placeholder feature for now.");

        form.reset();
    });
});
