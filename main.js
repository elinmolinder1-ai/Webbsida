//kod för att göra en sidomeny när man förminskar webbläsaren!
function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

//Instagram länk
const instagramLink = document.querySelector('.mobil-picture');
instagramLink.addEventListener('click', (event) => {
  event.preventDefault(); // Förhindra standardlänkhändelsen
  // Skicka användaren till en specifik post (förutsätter att du har POST-ID)
  window.location.href = `https://www.instagram.com/`;
});
