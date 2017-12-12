// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp


function playSound1(e){
	document.getElementById("wfi").play();
	document.getElementById("pg").pause();
	document.getElementById("idfwu").pause();
	document.getElementById("nmi").pause();
	document.getElementById("guap").pause();
}
function playSound2(e){
	document.getElementById("pg").play();
	document.getElementById("wfi").pause();
	document.getElementById("idfwu").pause();
	document.getElementById("nmi").pause();
	document.getElementById("guap").pause();
}

function playSound3(e){
	document.getElementById("idfwu").play();
	document.getElementById("pg").pause();
	document.getElementById("wfi").pause();
	document.getElementById("nmi").pause();
	document.getElementById("guap").pause();
}
function playSound4(e){
	document.getElementById("guap").play();
	document.getElementById("pg").pause();
	document.getElementById("idfwu").pause();
	document.getElementById("nmi").pause();
	document.getElementById("wfi").pause();
}
function playSound5(e){
	document.getElementById("nmi").play();
	document.getElementById("pg").pause();
	document.getElementById("idfwu").pause();
	document.getElementById("wfi").pause();
	document.getElementById("guap").pause();
}
function showText1(elem){
	document.getElementById("one").classList.toggle("blue");
	document.getElementById("one").innerHTML = "FOCUS";
}	

function showText2(elem){
	document.getElementById("two").classList.toggle("white");
	document.getElementById("two").innerHTML = "PATIENCE";
}

function showText3(elem){
document.getElementById("three").classList.toggle("blue");
	document.getElementById("three").innerHTML = "LOVE";
}

function showText4(elem){
    document.getElementById("four").classList.toggle("blue");
	document.getElementById("four").innerHTML = "IMAGINATION";
}

function showText5(elem){
    document.getElementById("five").classList.toggle("white");
	document.getElementById("five").innerHTML = "FAMILY";
}

function showText6(elem){
	  document.getElementById("six").classList.toggle("blue");
	document.getElementById("six").innerHTML = "FEAR";
}