


function meterToFoot(){
    var meters = document.getElementById("meters").value;
    var result =  3.279 * meters;
    document.getElementById("result1").innerHTML = result + " feet";
}

function footToMeter(){
    var feet = document.getElementById("feet").value;
    var result = 0.305 * feet;
    document.getElementById("result2").innerHTML = result + " meters";
}

