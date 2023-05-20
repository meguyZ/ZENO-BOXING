window.onload = function() {
    var loaderContainer = document.getElementById('loader-container');
    var mainContainer = document.getElementById('main-container');
    var startButton = document.getElementById('start-button');
  
    setTimeout(function() {
      loaderContainer.style.opacity = '0';
      loaderContainer.style.pointerEvents = 'none';
      mainContainer.style.display = 'block';
      mainContainer.classList.add('zoom-in');
    }, 3000);
  
    startButton.addEventListener('click', function() {
      console.log('Starting the game...');
    });
  };
  