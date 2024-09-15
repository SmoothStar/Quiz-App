//this is imp for taking the user if logged in
// window.addEventListener('load',(ev) => {
//     const isloggedIn =localStorage.getItem("loggedInuser");

//     if(isloggedIn){
//         return
//     }

//     if(window.location.pathname === "/dashboard.html"){
//         window.location="/"
//     }
// })
function signin(){
    window.location="dashboard.html"
}
function questionPage(){
    window.location="question.html"
}