document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav ul');
  if(btn && menu){
    btn.addEventListener('click', ()=> menu.classList.toggle('open'));
  }
});
