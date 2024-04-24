const toggleBtn = document.querySelector('.btn');


toggleBtn.addEventListener('click', () => { 
  let index = 0;
  document.documentElement.classList.toggle('dark-theme');
  if(document.documentElement.classList.contains("dark-theme")){
    toggleBtn.innerHTML="Light Mode";} 
  else{
    toggleBtn.innerHTML= "Dark Mode" ;
  }
});