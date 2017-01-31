var mainNav = document.querySelector('.sp1-main-navigation');

mainNav.addEventListener('click', scrollTo);

function scrollTo(e) {
  e.preventDefault();
  var linkId = e.target.nodeName === 'A' ? e.target.getAttribute('href').slice(1) : null;
  document.getElementById(linkId).scrollIntoView({ behavior: "smooth" });
}

