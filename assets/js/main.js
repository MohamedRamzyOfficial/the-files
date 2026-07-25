
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
if(menu && nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));

const input = document.querySelector('#caseSearch');
const cards = [...document.querySelectorAll('.card')];
const filters = [...document.querySelectorAll('.filter')];
let currentFilter='all';

function applyFilters(){
  const q=(input?.value||'').trim().toLowerCase();
  cards.forEach(card=>{
    const text=card.dataset.search.toLowerCase();
    const category=card.dataset.category;
    const visible=(currentFilter==='all'||category.includes(currentFilter)) && (!q||text.includes(q));
    card.classList.toggle('hidden',!visible);
  });
}
if(input) input.addEventListener('input',applyFilters);
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter=btn.dataset.filter;
  applyFilters();
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
