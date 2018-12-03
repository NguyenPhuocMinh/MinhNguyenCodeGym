function convert() {
    var amount;
    var from;
    var to;
    var convert;
    amount = document.getElementById("amount").value;
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    if (from === "VND" && to === "USD") {
        convert = amount / 23000 + "VND";
    };
    document.getElementById("showResult").innerHTML = "Result is " + convert;
}