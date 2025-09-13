// SQL Cheat Sheet JavaScript

// Function to expand all details elements
function expandAll() {
	const details = document.querySelectorAll("details");
	details.forEach((detail) => {
		detail.open = true;
	});
}

// Function to collapse all details elements
function collapseAll() {
	const details = document.querySelectorAll("details");
	details.forEach((detail) => {
		detail.open = false;
	});
}

// Function to highlight the active navigation link based on scroll position
function highlightActiveNav() {
	const sections = document.querySelectorAll("details");
	const sidebarLinks = document.querySelectorAll(".sidebar-nav a");

	let currentSection = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 100;
		const sectionHeight = section.offsetHeight;
		if (
			window.scrollY >= sectionTop &&
			window.scrollY < sectionTop + sectionHeight
		) {
			currentSection = section.id;
		}
	});

	// Update sidebar links
	sidebarLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === "#" + currentSection) {
			link.classList.add("active");
		}
	});
}

// Function to smooth scroll to a section
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
		const offsetTop = section.offsetTop - 80; // Adjust for sticky header
		window.scrollTo({
			top: offsetTop,
			behavior: "smooth"
		});
	}
}

// Function to handle navigation clicks
function handleNavClick(event) {
	event.preventDefault();
	const targetId = event.target.getAttribute("href").substring(1);
	scrollToSection(targetId);
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
	// Add event listeners to toggle buttons
	const expandBtn = document.getElementById("expandAllBtn");
	const collapseBtn = document.getElementById("collapseAllBtn");

	if (expandBtn) {
		expandBtn.addEventListener("click", expandAll);
	}

	if (collapseBtn) {
		collapseBtn.addEventListener("click", collapseAll);
	}

	// Add scroll event listener for navigation highlighting
	window.addEventListener("scroll", highlightActiveNav);

	// Highlight active navigation on page load
	highlightActiveNav();
});
