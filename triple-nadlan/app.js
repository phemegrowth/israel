
const hd=document.getElementById('hd'),pg=document.getElementById('prog'),hb=document.querySelector('.hero .bg');
function sc(){hd.classList.toggle('s',scrollY>40);const h=document.documentElement.scrollHeight-innerHeight;pg.style.transform='scaleX('+(h>0?scrollY/h:0)+')';if(hb&&scrollY<innerHeight)hb.style.transform='translateY('+scrollY*.25+'px)'}
addEventListener('scroll',sc,{passive:true});sc();
const io=new IntersectionObserver(es=>{let i=0;es.forEach(e=>{if(e.isIntersecting){const t=e.target;setTimeout(()=>{t.classList.add('in');t.querySelectorAll('[data-count]').forEach(count)},(i++)*90);io.unobserve(t)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
function count(el){const to=parseFloat(el.dataset.count),dec=(el.dataset.count.split('.')[1]||'').length,t0=performance.now();
(function f(t){const p=Math.min(1,(t-t0)/1400),v=to*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec);if(p<1)requestAnimationFrame(f)})(t0)}
document.querySelector('.burger').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(700px) rotateY('+x*8+'deg) rotateX('+(-y*8)+'deg) translateY(-6px)'});c.addEventListener('mouseleave',()=>c.style.transform='')});
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let t=f.dataset.intro;
f.querySelectorAll('label').forEach(l=>{const i=l.querySelector('input,select,textarea');if(i.value)t+='\n'+l.firstChild.textContent.trim()+': '+i.value});
location.href='https://wa.me/972549255279?text='+encodeURIComponent(t)}));
