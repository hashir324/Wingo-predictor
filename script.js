
function predict() {
  const input = document.getElementById("inputNumber").value;
  const num = parseInt(input);

  if (isNaN(num) || num < 0 || num > 9) {
    document.getElementById("colorResult").innerText = "Enter a valid number (0-9)";
    document.getElementById("numberResult").innerText = "";
    return;
  }

  let color;
  if ([1, 3, 7, 9].includes(num)) {
    color = "Red";
  } else if ([2, 4, 6, 8].includes(num)) {
    color = "Green";
  } else {
    color = "Violet";
  }

  const nextNumber = (num + 1) % 10;

  document.getElementById("colorResult").innerText = "Next Color: " + color;
  document.getElementById("numberResult").innerText = "Predicted Number: " + nextNumber;
}
