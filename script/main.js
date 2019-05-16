function myFunction01() {
    var C = document.getElementById("tempC").value;
    var F = (9/5)*C+32;
    alert ("Температура по Фаренгейту: " + F);
}


function myFunction02() {
    var name = document.getElementById("name").value;
    var admin = name;
    document.getElementById("admin").value = admin;
    alert ("Имя админа: " + admin);
}

function myFunction03() {
    var left = 1000;
    var right = "108";
    var result = left + right;
    alert ("Результат: " + result);
}

