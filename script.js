
let bar = document.getElementById("bar");
let cross = document.getElementById("cross-mark");
let navBar = document.getElementById("nav-links");

// Function to handle opening and closing the menu
function closeBar() {
    bar.style.display = 'none';
    cross.style.display = 'block';
    navBar.style.display = 'flex';
}

function closeCross() {
    bar.style.display = 'block';
    cross.style.display = 'none';
    navBar.style.display = 'none';
}


bar.addEventListener("click", closeBar);
cross.addEventListener("click", closeCross);

// for resetingggg
function checkScreenSize() {
    if (window.innerWidth > 830) { 
        bar.style.display = 'none';
        cross.style.display = 'none';
        navBar.style.display = 'flex'; 
    } else {
      
        bar.style.display = 'block';
        cross.style.display = 'none';
        navBar.style.display = 'none';
    }
}

window.addEventListener('resize', checkScreenSize);

// for changing to dark and lightt modee....

let changeThemeBtn = document.getElementById("change-bg");

changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme(event) {
    event.preventDefault(); 
    document.body.classList.toggle('darkmode'); 
}
