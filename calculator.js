const p = document.getElementById("p");
const osszeAd = document.getElementById("osszeAd");
const kiVon = document.getElementById("kiVon");
const szoroz = document.getElementById("szoroz");
const oszt = document.getElementById("oszt");
const szam1 = document.getElementById("szam1");
const szam2 = document.getElementById("szam2");
function muvelet(m){
    let eredmeny = 0;
    switch(m){
        case "+": eredmeny =(Number)(szam1.value) + (Number)(szam2.value);
        break;
        case "-": eredmeny =(Number)(szam1.value) - (Number)(szam2.value);
        break;
        case "*": eredmeny =(Number)(szam1.value) * (Number)(szam2.value);
        break;
        case "/": eredmeny =(Number)(szam1.value) / (Number)(szam2.value);
        break;

    }
    p.innerHTML=eredmeny;
}
osszeAd.addEventListener("click", function(){muvelet("+");});
kiVon.addEventListener("click", function(){muvelet("-");});
szoroz.addEventListener("click", function(){muvelet("*");});
oszt.addEventListener("click",function(){muvelet("/");});
