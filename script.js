const display = document.getElementById("display");

function append(value) {
    const input = display;
    const start = input.selectionStart;
    const end = input.selectionEnd;
  
    let insertValue = value;
  
    if (value === "π") {
      insertValue = Math.PI.toFixed(8);
    } else if (value === "√") {
      insertValue = "√(";
    }
  
    input.value = input.value.substring(0, start) + insertValue + input.value.substring(end);
    

    const newPos = start + insertValue.length;
    input.setSelectionRange(newPos, newPos);
    input.focus();
  }
  

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value
      .replace(/π/g, Math.PI)
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin((Math.PI/180)*") 
      .replace(/cos\(/g, "Math.cos((Math.PI/180)*")
      .replace(/tan\(/g, "Math.tan((Math.PI/180)*")
      .replace(/log\(/g, "Math.log10(")
      .replace(/\^/g, "**");

    const result = eval(expression);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
