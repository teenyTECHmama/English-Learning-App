const exitGame = []
window._open = window.open;
window._close = window.close;

window.open = function(url,name,params) {

}

window.close = function() {
    while ( w = openedWindows.shift());
}



 function jumpButton(button) {
    button.style.animation = 'jump 0.6s ease';
    setTimeout(() => {
      button.style.animation = '';
    }, 600);
  }

  // Add event listeners to the images to trigger the jump effect on their respective buttons
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      const img = button.closest('.secOne-item').querySelector('.secOne-item-img');
      img.addEventListener('click', () => jumpButton(button));
    });
  });
