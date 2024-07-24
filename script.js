function checkEmailValidity() {
  const inputValue = document.getElementById("input").value;
  const emailError = document.getElementById("emailError");

  if (
    inputValue.includes("@") &&
    inputValue.endsWith(".com") &&
    inputValue.length > 0
  ) {
    emailError.textContent = "";
    document.getElementById("errorIcon").style.display = "none";
    document.getElementById("input").style.border =
      "1px solid hsl(95, 76%, 51%)";
  } else {
    emailError.textContent = "Please provide a valid email";
    emailError.style.color = "hsl(0, 93%, 68%)";
    emailError.style.marginTop = "20px";
    emailError.style.marginLeft = "20px";
    emailError.style.textAlign = "start";
    document.getElementById("input").style.border =
      "2px solid hsl(0, 93%, 68%)";
    document.getElementById("input").style.transition = "all 0.3s ease-in-out";
    document.getElementById("errorIcon").style.display = "block";
  }
}
document
  .getElementById("emailBtn")
  .addEventListener("click", checkEmailValidity);
