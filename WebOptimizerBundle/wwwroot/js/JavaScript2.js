// Function to calculate and display the sum of two numbers
function calculateSum() {
    var num1 = parseInt(document.getElementById('num1').value, 10);
    var num2 = parseInt(document.getElementById('num2').value, 10);
    var sum = num1 + num2;
    document.getElementById('sumResult').innerText = 'Sum: ' + sum;
}