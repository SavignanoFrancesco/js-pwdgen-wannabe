var name = prompt("Inserisci il tuo nome: ");
var surname = prompt("Inserisci il tuo cognome: ");
var color = prompt("Inserisci il tuo colore preferito: ");
var year = 20;

document.getElementById('title').innerHTML = 'Password generata con successo!';
document.getElementById("pswdgenerator").innerHTML = name + surname + color + year;
