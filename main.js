let boton = document.querySelector('.toggle-btn');



boton.addEventListener('click', function(){

  let sliderbar = document.getElementById('sliderbar');

//   if(sliderbar.classList.contains('active')){

//     sliderbar.classList.remove('active')
//   }else {

//     sliderbar.classList.add('active')

//   }

sliderbar.classList.toggle('active');
 
})