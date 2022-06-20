window.onload = function (){
    let skaiciausLaukelis = document.getElementById("skaicius");
    console.log(skaiciausLaukelis);

    let laipsnioLaukelis = document.getElementById("laipsnis");
    console.log(laipsnioLaukelis);

    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    console.log(mygtukas);

    let pastraipa = document.getElementById("rezultatoPastraipa");

    mygtukas.onclick = function() {
        let skaicius = skaiciausLaukelis.valueAsNumber;
        console.log(skaicius);

        let laipsnis = laipsnioLaukelis.valueAsNumber;
        console.log(laipsnis);

        console.log(skaiciausLaipsnis(skaicius, laipsnis));

        pastraipa.innerHTML = "Skaicius pakeltas x laipsniu: " + skaiciausLaipsnis(skaicius,laipsnis);
    }
    
}


function skaiciausLaipsnis(a,b){
    return a**b;
}