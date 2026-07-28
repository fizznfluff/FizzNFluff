const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu'});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='Menu'}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const field=document.querySelector('.bubble-field');if(field&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){for(let i=0;i<15;i++){const bubble=document.createElement('span');bubble.className='float-bubble';const size=18+Math.random()*55;bubble.style.width=`${size}px`;bubble.style.height=`${size}px`;bubble.style.left=`${Math.random()*100}%`;bubble.style.animationDuration=`${8+Math.random()*10}s`;bubble.style.animationDelay=`-${Math.random()*14}s`;field.appendChild(bubble)}}
