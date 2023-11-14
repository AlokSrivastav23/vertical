// This app is sandboxed within CodePen so the referrer is always CodePen. Will work as expected when used independently.

// **Caveat** browsers will not send referrer if going to an http link from https.

$.fn.backButton = function() {
    if (document.referrer !== "") {
      $(this).show();
      $(this).on('click', function(e) {
        e.preventDefault();
        window.location.href = document.referrer;
      });
    }
  }
  
  $('.back-button').backButton();

  function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }
  // Tabs Action
const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is-active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  document.querySelector("#" + content).classList.add("is-active");
  btnTarget.classList.add("is-active");
}
