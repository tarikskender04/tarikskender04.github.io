$(document).ready(function () {
  function loadPage(page) {
    $.ajax({
      url: `../pages/${page}.html`,
      method: "GET",
      success: function (data) {
        if (page === "login" || page === "register") {
          // Load content into the login/register screen
          $(".loginregisterScreen").html(data);
        } else {
          $(".loginregisterScreen").html("");
          $("#container-fluid").html(data);
        }
      },
      error: function () {
        if (page === "login" || page === "register") {
          $(".loginregisterScreen").html("<h2>Page Not Found</h2>");
        } else {
          $("#container-fluid").html("<h2>Page Not Found</h2>");
        }
      },
    });
  }

  function updateContent() {
    const page = location.hash.substring(1) || "dashboard"; // Default page
    loadPage(page);
  }

  $(window).on("hashchange", updateContent);

  updateContent();
});
