const input = document.querySelector('#check')
const container = document.querySelector('.container')

function nightMode () {
  if(input.checked) {
    container.classList.add('night')
  } else {
    container.classList.remove('night')
  }
}


input.addEventListener('click', nightMode)

