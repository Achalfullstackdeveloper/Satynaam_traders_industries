// Function to show an alert when translating to Hindi
function translateToHindi() {
    alert('Translating to Hindi...');
}

// Function to toggle the navigation menu
function toggleMenu() {
    const nav = document.querySelector('.site-header nav');
    nav.classList.toggle('show');
}
// Function to show the selected tab
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-pane');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}
// Function to show the selected peanut image in overlay
function openPeanutOverlay(src) {
      document.getElementById("peanut-overlay-img").src = src;
      document.getElementById("peanut-overlay").style.display = "flex";
    }
    function closePeanutOverlay() {
      document.getElementById("peanut-overlay").style.display = "none";
    }
    // Optional: click outside image to close
    document.getElementById("peanut-overlay").addEventListener("click", function(e) {
      if (e.target === this) closePeanutOverlay();
    });
