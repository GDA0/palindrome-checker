// Automatically collapse hamburger after a .nav-link is clicked
const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
			toggle: false,
		});
		bsCollapse.hide();
	});
});

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	const userInput = formElement.querySelector("input").value;

	checkPalindrome(userInput);
});

// Function to check if the user input is a palindrome
const checkPalindrome = (userInput) => {
	// Check if the input is empty.
	if (userInput.trim() === "") {
		alert("Please input a value");
		return;
	}

	// Regex to remove non-alphanumeric characters
	const regex = /[^\w]|_/g;

	const processedInput = userInput.replace(regex, "").toLowerCase();
	const reversedInput = processedInput.split("").reverse().join("");

	const resultDisplay = document.querySelector("#result");

	if (processedInput === reversedInput) {
		resultDisplay.innerHTML = `<strong>${userInput}</strong> is a palindrome.`;
	} else {
		resultDisplay.innerHTML = `<strong>${userInput}</strong> is not a palindrome.`;
	}
};
