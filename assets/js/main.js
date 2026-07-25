
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.case-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
