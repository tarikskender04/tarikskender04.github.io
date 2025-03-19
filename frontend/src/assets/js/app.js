document.addEventListener("DOMContentLoaded", function () {
  function loadPage(page) {
    fetch(`../pages/${page}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("container-fluid").innerHTML = data;
      })
      .catch(() => {
        document.getElementById("container-fluid").innerHTML =
          "<h2>Page Not Found</h2>";
      });
  }

  function updateContent() {
    const page = location.hash.substring(1) || "dashboard"; // Default page
    loadPage(page);
  }

  window.addEventListener("hashchange", updateContent);
  updateContent(); // Load default page on first load
});
