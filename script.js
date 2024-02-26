//let calcdiv = document.createElement("div");
//calcdiv.className = "calculator";

// Select the existing calculator element from the HTML
let calcdiv = document.querySelector(".calculator");

let calcdiv1 = document.createElement("div");
calcdiv1.className = "calc-text";

let calcdivp = document.createElement("p");
calcdivp.className ="user-input";
calcdivp.setAttribute("name","user-input");
calcdivp.innerHTML = "0";

//calcdiv1.appendChild(calcdivp);

let calcKeys = document.createElement("div");
calcKeys.className = "calc-keys";
calcKeys.innerHTML = `<button type="button" class="Others" onclick="Reset()">C</button>
	<button type="button" class="Others" onclick="Backspace()"><i class="fa fa-backward" aria-hidden="true"></i></button>
	<button type="button" class="Number" onclick="InsertNumber('.')">.</button>
	<button type="button" class="Func" onclick="InsertNumber('/')">÷</button>
	<button type="button" class="Number" onclick="InsertNumber(7)">7</button>
	<button type="button" class="Number" onclick="InsertNumber(8)">8</button>
	<button type="button" class="Number" onclick="InsertNumber(9)">9</button>
	<button type="button" class="Func" onclick="InsertNumber('*')">&#x00D7;</button>
	<button type="button" class="Number" onclick="InsertNumber(4)">4</button>
	<button type="button" class="Number" onclick="InsertNumber(5)">5</button>
	<button type="button" class="Number" onclick="InsertNumber(6)">6</button>
	<button type="button" class="Func" onclick="InsertNumber('-')">&#x2212;</button>
	<button type="button" class="Number" onclick="InsertNumber(1)">1</button>
	<button type="button" class="Number" onclick="InsertNumber(2)">2</button>
	<button type="button" class="Number" onclick="InsertNumber(3)">3</button>
	<button type="button" class="Func" onclick="InsertNumber('+')">+</button>
	<button type="button" class="Number BigKey" onclick="InsertNumber('00')">00</button>
	<button type="button" class="Number" onclick="InsertNumber(0)">0</button>
	<button type="button" class="Func" onclick="Result()">=</button>`;

calcdiv.append(calcKeys);
document.body.append(calcdiv);


function InsertNumber(numbers){
	const inputValue = document.getElementById("user-input");
	if (inputValue.innerText === "0") {
		inputValue.innerText = "";
	}
	inputValue.innerText += numbers;
}

function Result(){
	const inputValue = document.getElementById("user-input");
	inputValue.innerText = eval(inputValue.innerText);
}

function Reset(){
	const inputValue = document.getElementById("user-input");
	inputValue.innerText = 0;
}

function Backspace(){
	const inputValue = document.getElementById("user-input");
	inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
	if (inputValue.innerText.length === 0) {
		inputValue.innerText = "0";
	}

}

// Handling keyboard events
window.onkeypress = function(event) {
	const charCode = event.keyCode;
	const charTyped = String.fromCharCode(charCode);
	const inputValue = document.getElementById("user-input");
	if (!isNaN(parseInt(charTyped)) || charTyped === '.' || ['+', '-', '*', '/'].includes(charTyped)) {
		InsertNumber(charTyped);
	} else if (charCode === 13) { // Enter key
		Result();
	} else {
		alert("This is not a valid input: (" + charTyped + ")");
	}
}