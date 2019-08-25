

function registreer(){
    var totaal = 0;
    var i;

    var a = document.getElementsByClassName("MAAND" );
    console.log(a.length);

    for( i=0;   i<=30;    i++ ) {
        var b = a[i].value;
        var c = Number(b);
        totaal += c;
        console.log("value: " + totaal);

    }

    document.getElementById("totaal").value = totaal;
    totaal = 0;

}

function doorverwijzen(){
    window.location.assign("https://www.w3schools.com");
}

function doorverwijzenHTML(){
    window.location.assign("./legePagina.html");
}

