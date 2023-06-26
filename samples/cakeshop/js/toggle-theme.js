const button = document.getElementById('toggle-theme-button');

button.addEventListener('click', toggleTheme);

function toggleTheme () {
       var lightTheme = 'light-theme';
       var darkTheme = 'dark-theme';
       var currentTheme = localStorage.getItem('theme');
       if ( currentTheme === lightTheme)  { document.body.className = darkTheme; localStorage.setItem('theme',darkTheme) }
       else { document.body.className= lightTheme; localStorage.setItem('theme',lightTheme) }
   }
 
function onLoadTheme () {
    var lightTheme = 'light-theme';
    var darkTheme = 'dark-theme';
    var currentTheme = localStorage.getItem('theme');
    if ( currentTheme === lightTheme)  { document.body.className = lightTheme; }
    else { document.body.className= darkTheme; }
}   