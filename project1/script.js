const darkbtn = document.getElementById("dark-btn");

darkbtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkbtn.textContent = "Light Mode";
  } else {
    darkbtn.textContent = "Dark Mode";
  }
});
