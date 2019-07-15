function preventDefaultF(event) {
  event.preventDefault();
}

function BG() {
  document.body.style.background = 'lightgreen';
}

window.onload = function() {
  if(document.querySelector('#setRedBgBtn')) {
    document.querySelector('#setRedBgBtn').addEventListener('click', () => {
      document.body.style.background = '#ffcccb'
    });
  }
};

