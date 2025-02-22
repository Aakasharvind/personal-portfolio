document.addEventListener("DOMContentLoaded", function () {
    const achievementItems = document.querySelectorAll('.achievement-item');
  
    achievementItems.forEach(item => {
      item.addEventListener('toggle', function () {
        if (item.open) {
          // For instance, animate the detail section on open
          item.querySelector('.achievement-details').style.opacity = 0;
          setTimeout(() => {
            item.querySelector('.achievement-details').style.opacity = 1;
          }, 100);
        }
      });
    });
  });
  