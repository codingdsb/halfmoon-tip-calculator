const billInput = document.querySelector("#bill");
const percentageInput = document.querySelector("#percentage");
const tipSpan = document.querySelector("#tip-amount");

const calculateAndRenderTip = () => {
  const billValue = Number(billInput.value);
  const percentageValue = Number(percentageInput.value);
  const tip = (percentageValue / 100) * billValue;
  tipSpan.innerHTML = tip;
};

billInput.addEventListener("change", calculateAndRenderTip);
percentageInput.addEventListener("change", calculateAndRenderTip);

const toggleTheme = () => halfmoon.toggleDarkMode();
