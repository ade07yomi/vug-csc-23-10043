function convertToDollar() {
    const naira = document.getElementById('naira').value;
    const dollar = naira / 500; // assuming 1 USD = 500 NGN
    document.getElementById('dollar-result').innerText = USD ${dollar};
    }
    
    function convertToNaira() {
    const dollar = document.getElementById('dollar').value;
    const naira = dollar * 500; // assuming 1 USD = 500 NGN
    document.getElementById('naira-result').innerText = NGN ${naira};
    }
    
    