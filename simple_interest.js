function calculateSimpleInterest() {
	const principal = document.getElementById('principal').value;
	const rate = document.getElementById('rate').value;
	const time = document.getElementById('time').value;
	const interest = (principal * rate * time) / 100;
	document.getElementById('simple-interest-result').innerText = `Simple Interest: ${interest}`;
}

