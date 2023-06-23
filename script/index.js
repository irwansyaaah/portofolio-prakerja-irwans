function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const darkModeToggle = document.getElementById("darkModeToggle");
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.checked = true;
    } else {
        darkModeToggle.checked = false;
    }
}