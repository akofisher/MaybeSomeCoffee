const noButton = document.querySelector('#noButton');
const yesButton = document.querySelector('#yesButton');
const answers = document.querySelector('#answers');
const successMessage = document.querySelector('#successMessage');

let escapeCount = 0;

function moveNoButton() {
  const area = answers.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const distance = Math.min(115, Math.max(65, 80 + escapeCount * 6));
  const direction = escapeCount % 2 === 0 ? 1 : -1;
  const maxX = Math.max(0, area.width / 2 - button.width / 2);
  const maxY = 76;
  const x = direction * Math.min(distance, maxX);
  const y = (escapeCount % 3 - 1) * Math.min(28 + escapeCount * 3, maxY);

  noButton.style.transform = `translate(${x}px, ${y}px)`;
  escapeCount += 1;
}

noButton.addEventListener('pointerenter', moveNoButton);
noButton.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener('click', (event) => event.preventDefault());

yesButton.addEventListener('click', () => {
  answers.hidden = true;
  successMessage.hidden = false;
  document.querySelector('.subtitle').hidden = true;
});
