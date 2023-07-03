function Gaming() {
      const button = document.querySelector('.js-gaming');
      if (button.classList.contains('is-toggled') == false) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
    }
    
    function Music() {
      const button = document.querySelector('.js-music');
      if (button.classList.contains('is-toggled') == false) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
    }

    function Tech() {
      const button = document.querySelector('.js-tech');
      if (button.classList.contains('is-toggled') == false) {
        button.classList.add('is-toggled');
      } else {
        button.classList.remove('is-toggled');
      }
    }