const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const toast = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('[data-toast]').forEach(button => {
  button.addEventListener('click', () => {
    toast.textContent = button.dataset.toast;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

document.getElementById('newsletterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  toast.textContent = 'Thank you — you are on the list.';
  toast.classList.add('show');
  event.target.reset();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
});
