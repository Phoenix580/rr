function myFunction(){
    let x = document.getElementById("userInput1").value;
    let y = document.getElementById("userInput2").value;
    let z =parseInt(x)+parseInt(y);
    document.getElementById("demo").innerHTML = z;
}