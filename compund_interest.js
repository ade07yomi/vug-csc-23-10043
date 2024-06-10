function calculateCompoundInterest() {
	const principal = document.getElementById('principal').value;
	const rate = document.getElementById('rate').value;
	const time = document.getElementById('time').value;
	const interest = (principal * (1 + rate / 100) ** time) - principal;
	document.getElementById('compound-interest-result').innerText = `Compound Interest: ${interest}`;
}

