//writes a Fibonacci Sequence of a given length
function getFibonacci(n) {
    const fibonacci = [0, 1]; // start of Fibonacci Sequence
    for (var x = 1; x < (n - 1); x++) {
        var lastNumber = (fibonacci.at(x)); //gets last number of sequence
        var prevNumber = (fibonacci.at(x - 1)); //gets previous number of sequence
        var newNumb = (lastNumber + prevNumber); //adds the two numbers to get the next number of sequence
        fibonacci.push(newNumb);
    }
    alert(fibonacci); //show to alert box
    return fibonacci; //show to console
    
}
var n = prompt("Type length of Fibonacci Sequence "); 
getFibonacci(n);





