var work = function ()  {
    var get = document.getElementById("d").value;
    var dt = get.split("-");
    var d = new Date();
    d.setFullYear(parseInt(dt[0]));
    d.setMonth(parseInt(dt[1])-1);
    d.setDate(parseInt(dt[2]));
    var date = d.getDay();
    document.getElementById("demo").innerHTML = date;
}

function gende() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked === true) {
        alert("Male");
    } else if (female.checked === true) {
        alert("Female");
    }
}