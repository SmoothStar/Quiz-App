// window.addEventListener('load',(ev) => {
//     const isloggedIn =localStorage.getItem("loggedInuser");

//     if(isloggedIn){
//         return
//     }

//     if(window.location.pathname === "/dashboard.html"){
//         window.location="/"
//     }
// })
// function signin(){
//     window.location="login.html"
// }
function questionPage(){
    window.location="question.html"
}
function signup(){
    const email =document.getElementById("email").value;
    const password =document.getElementById("password").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    

    if(!email){
        alert("Please enter your email")
        return;
    }
    if (!emailPattern.test(email)) {
        alert("not correct email")
        return;
    }

    

    if (!password) {
        alert("Please Enter your password")
        return;
    }
    if (password.length<8) {
        alert("Please Enter Atleast 8 characters")
        return;
    }

     window.location="login.html"
}