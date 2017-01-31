var mainNav = document.querySelector('.sp1-main-navigation');

mainNav.addEventListener('click', scrollTo);

function scrollTo(e) {
  e.preventDefault();
  var linkID = e.target.getAttribute('href').slice(1);
  document.getElementById(linkID).scrollIntoView({ 
  behavior: 'smooth' 
});
}