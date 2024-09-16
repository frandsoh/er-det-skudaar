const currentYear = new Date().getFullYear();

const divisibleByFour = currentYear % 4 === 0;
const divisibleByHundred = currentYear % 100 === 0;
const divisibleByFourHundred = currentYear % 400 === 0;

function isLeapYear() {
  return (divisibleByFour && !divisibleByHundred) || divisibleByFourHundred;
}

function getLeapYearExplanation() {
  if (isLeapYear()) {
    if (divisibleByFourHundred) {
      return `${currentYear} er et skudår, fordi det er dividerbart med 400.`;
    } else {
      return `${currentYear} er et skudår, fordi det er dividerbart med 4, men ikke med 100.`;
    }
  } else {
    let explanation = `${currentYear} er ikke et skudår, fordi `;
    if (!divisibleByFour) {
      explanation += `det ikke er dividerbart med 4.`;
    } else if (divisibleByHundred && !divisibleByFourHundred) {
      explanation += `det er dividerbart med 100, men ikke med 400.`;
    }
    return explanation;
  }
}

function toggleExplanation() {
  const explanationDiv = document.getElementById("leap-year-explanation");
  const toggleText = document.getElementById("toggle-explanation-text");

  if (explanationDiv.classList.contains("show")) {
    explanationDiv.classList.remove("show");
    toggleText.classList.remove("show");
    toggleText.querySelector("span").textContent = "Hvorfor?";
  } else {
    explanationDiv.classList.add("show");
    toggleText.classList.add("show");
    toggleText.querySelector("span").textContent = "Skjul forklaring";
  }
}

const leapYearStatus = isLeapYear() ? "Ja!" : "Nej!";
document.getElementById("leap-year-status").textContent = leapYearStatus;
document.getElementById("leap-year-explanation-text").textContent =
  getLeapYearExplanation();
document
  .getElementById("toggle-explanation-text")
  .addEventListener("click", toggleExplanation);
