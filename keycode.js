let parapa = document.getElementsByTagName ("p");


document.addEventListener("keypress", (to) => {

 parapa[0].textContent = to.which;
 parapa[1].textContent = to.key;
 parapa[2].textContent = to.code;
 parapa[3].textContent = to.which;
})

