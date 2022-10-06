function getFibonacci(n) {
    n = n * 1; //transforms string in number 

    if (n === 1) {
        alert("Fibonacci sequence = [0]");

        return fibonacci = [0];

    } else if (n === 0) {
        alert("Sequence does not exist");

        return "End of program";

    } else {
        var fibonacci = [0, 1];

        for (var x = 1; x < (n - 1); x++) {
            var lastNumber = (fibonacci.at(x)); //gets last number of sequence
            var prevNumber = (fibonacci.at(x - 1)); //gets previous number of sequence
            var newNumb = (lastNumber + prevNumber); //adds the two numbers to get the next number of sequence
            fibonacci.push(newNumb);
        }
    }

    alert("Fibonacci sequence is: " + fibonacci); //show to alert box
    return fibonacci; //show to console

}

var n = prompt("Type length of Fibonacci Sequence ");
getFibonacci(n);
