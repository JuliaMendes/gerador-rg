const btn = document.querySelector('button')
var text = document.querySelector('textarea')

btn.addEventListener('click', generationRg)

function generationRg(){
  text.value = Math.floor(100000000 + Math.random() * 900000000).toString().replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4")
}