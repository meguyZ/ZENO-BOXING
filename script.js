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
  document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('bg.mp3'); // แทนที่ "music.mp3" ด้วย URL เพลงของคุณ
    audio.loop = true; // ตั้งค่าให้เล่นวนซ้ำ
    audio.play(); // เริ่มเล่นเพลง
    
    // เมื่อผู้ใช้คลิกเริ่มเกม
    document.getElementById('start-button').addEventListener('click', function() {
      audio.pause(); // หยุดเล่นเพลง
    });
  });
  
