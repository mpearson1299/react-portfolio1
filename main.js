// Declare variables for the navigation titles and sections
const navTitles = ["About Me", "Portfolio", "Contact", "Resume"];
const sections = ["about", "portfolio", "contact", "resume"];

// Function to handle navigation click event
function handleNavigationClick(index) {
  // Remove the "active" class from all navigation titles
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Hide all sections
  const portfolioSections = document.querySelectorAll(".portfolio-section");
  portfolioSections.forEach((section) => {
    section.style.display = "none";
  });

  // Add the "active" class to the clicked navigation title
  navLinks[index].classList.add("active");

  // Display the corresponding section
  document.getElementById(sections[index]).style.display = "block";
}

// Function to validate email address
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle form field blur event
function handleFormFieldBlur(field) {
  if (field.value === "") {
    field.classList.add("required");
    field.nextElementSibling.style.display = "block";
  } else {
    field.classList.remove("required");
    field.nextElementSibling.style.display = "none";
  }
}

// Function to handle email field input event
function handleEmailInput(emailField) {
  const emailError = document.getElementById("email-error");
  if (emailField.value !== "" && !validateEmail(emailField.value)) {
    emailField.classList.add("required");
    emailError.style.display = "block";
  } else {
    emailField.classList.remove("required");
    emailError.style.display = "none";
  }
}

// Add event listeners to navigation titles
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    handleNavigationClick(index);
  });
});

// Add event listeners to form fields
const formFields = document.querySelectorAll(".form-field");
formFields.forEach((field) => {
  field.addEventListener("blur", () => {
    handleFormFieldBlur(field);
  });
});

// Add event listener to email field
const emailField = document.getElementById("email");
emailField.addEventListener("input", () => {
  handleEmailInput(emailField);
});