document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  function updateUI() {
    cards.forEach((card) => {
      const radio = card.querySelector('input[type="radio"]');
      const wrapper = card.querySelector('.selector-wrapper');

      if (radio.checked) {
        wrapper?.classList.add('active');
        card.classList.add('selected');
      } else {
        wrapper?.classList.remove('active');
        card.classList.remove('selected');
      }
    });
  }

  cards.forEach((card) => {
    const radio = card.querySelector('input[type="radio"]');
    radio.addEventListener('change', updateUI);
  });

  updateUI();
});
