var rellax = document.querySelector('.rellax');

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

let cont1 = document.getElementById("cont1");
let cont3 = document.getElementById("cont3");

cont3.addEventListener("click", function() {
  if(cont1.style.display == 'block') {
   cont1.style.display = 'none';
  } else{
   cont1.style.display = 'block';
  }
});
