document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const homeLinks = document.querySelectorAll('.links-list a[href="#"]'); // Select links with href="#"

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
      } else {
        alert("Please enter a search term.");
      }
    });

    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        searchButton.click();
      }
    });
  }

  // Update the homepage links to redirect correctly
  homeLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default '#' behavior
      window.location.href = "/"; // Replace '/' with your actual homepage URL
    });
  });
});
