var userName = document.getElementById('userName');
var password = document.getElementById('password');
localStorage.setItem('userName',"admin");
localStorage.setItem('password',"admin");
var userName1 = localStorage.getItem('userName');
var password1 = localStorage.getItem('password');
function save() {
    if (userName.value === userName1 && password.value === password1) {
        location = 'login.html'
    }
    else {
        alert('Username Or Password Incorect')
    }
}