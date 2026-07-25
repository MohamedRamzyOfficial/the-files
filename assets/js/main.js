
const header = document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>30));

const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>navLinks?.classList.toggle('open'));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

document.querySelectorAll('[data-rail]').forEach(wrap=>{
  const rail=wrap.querySelector('.rail');
  wrap.querySelector('.next')?.addEventListener('click',()=>rail.scrollBy({left:-420,behavior:'smooth'}));
  wrap.querySelector('.prev')?.addEventListener('click',()=>rail.scrollBy({left:420,behavior:'smooth'}));
});

const searchPanel=document.querySelector('.search-panel');
const searchInput=document.querySelector('#globalSearch');
document.querySelectorAll('[data-open-search]').forEach(btn=>btn.addEventListener('click',()=>{
  searchPanel?.classList.add('open');document.body.classList.add('no-scroll');setTimeout(()=>searchInput?.focus(),50);
}));
document.querySelector('[data-close-search]')?.addEventListener('click',()=>{
  searchPanel?.classList.remove('open');document.body.classList.remove('no-scroll');
});
searchPanel?.addEventListener('click',e=>{
  if(e.target===searchPanel){searchPanel.classList.remove('open');document.body.classList.remove('no-scroll')}
});
searchInput?.addEventListener('input',()=>{
  const q=searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.search-result').forEach(item=>{
    item.classList.toggle('hidden',q && !item.dataset.search.toLowerCase().includes(q));
  });
});

const tabButtons=[...document.querySelectorAll('.tab-btn')];
const tabSections=[...document.querySelectorAll('.tab-section')];
tabButtons.forEach(btn=>btn.addEventListener('click',()=>{
  tabButtons.forEach(b=>b.classList.remove('active'));
  tabSections.forEach(s=>s.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.tab)?.classList.add('active');
}));

const lightbox=document.querySelector('.lightbox');
document.querySelectorAll('.gallery-item img').forEach(img=>img.addEventListener('click',()=>{
  const target=lightbox?.querySelector('img');
  if(target){target.src=img.src;target.alt=img.alt}
  lightbox?.classList.add('open');document.body.classList.add('no-scroll');
}));
document.querySelector('[data-close-lightbox]')?.addEventListener('click',()=>{
  lightbox?.classList.remove('open');document.body.classList.remove('no-scroll');
});
