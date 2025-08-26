// Get references to DOM elements
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const openMobileBtn = document.getElementById('openMobileBtn');
const overlay = document.getElementById('overlay');

/* 
 * Desktop toggle button:
 * Toggles the 'collapsed' class on sidebar to shrink/expand width
 */
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

/* 
 * Mobile open button:
 * Adds 'open' class to sidebar to slide it in
 * Shows the overlay behind sidebar
 */
openMobileBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.style.display = 'block';
});

/* 
 * Clicking the overlay:
 * Closes the sidebar by removing 'open' class
 * Hides the overlay again
 */
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.style.display = 'none';
});
