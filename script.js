const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-level");
const strengthText = document.getElementById("strength-text");
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  // Set strength bar and text
  switch (strength) {
    case 0:
      strengthBar.style.width = "0%";
      strengthText.textContent = "";
      break;
    case 1:
      strengthBar.style.width = "25%";
      strengthBar.style.background = "red";
      strengthText.textContent = "Very Weak";
      break;
    case 2:
      strengthBar.style.width = "50%";
      strengthBar.style.background = "orange";
      strengthText.textContent = "Weak";
      break;
    case 3:
      strengthBar.style.width = "75%";
      strengthBar.style.background = "yellowgreen";
      strengthText.textContent = "Good";
      break;
    case 4:
      strengthBar.style.width = "100%";
      strengthBar.style.background = "green";
      strengthText.textContent = "Strong";
      break;
  }
});
modeToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    modeToggle.textContent = "☀️ Day Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    modeToggle.textContent = "🌙 Night Mode";
  }
});
