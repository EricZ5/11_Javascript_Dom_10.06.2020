let innerText = document.getElementsByTagName("h1");//ZUGRIFF AUF HTML-TAG H1
console.log(innerText);

let tagName = document.getElementsByTagName("h1")[0].tagName;//ZUGRIFF AUF HTML-TAG H1
console.log(tagName);

let textLength = document.getElementsByTagName("h1")[0].firstChild.length;//ZUGRIFF AUF HTML-TAG H1
console.log(textLength);

let innerText2 = document.getElementsByTagName("p")[0].innerText;
console.log(innerText2);

let tagName2 = document.getElementsByTagName("p")[0].tagName;
console.log(tagName2);

let innerHTML = document.getElementsByTagName("p")[0].innerHTML;
console.log(innerHTML);

let Dateipfad = document.getElementsByTagName("p")[0].baseURI;
console.log(Dateipfad);




/**
 * AUFGABE
 * 1) Auswahl des Attributs innerText
 * Ausgabe dieses Attributs 
 * 2) Auswahl des Attributs für den Namen des Tags
 * Ausgabe dieses Attributs
 * 3) Auswahl des Attributs innerHTML
 * Ausgabe des Attributs
 * 4) Auswahl des Attribus für den Dateipfad
 * Ausgabe des Attributs
 */