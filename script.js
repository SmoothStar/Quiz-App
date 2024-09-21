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
function questionPage() {
    window.location = "question.html"
}
function signup() {
    const fullName = document.getElementById("Name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const namepattern = /^[a-zA-Z\s\-']+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (!fullName) {
        alert("Please enter your full name")
        return;

    }

    if (!namepattern.test(fullName)) {
        alert("Enter the valid name")
        return;

    }

    if (!email) {
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
    if (password.length < 8) {
        alert("Please Enter Atleast 8 characters")
        return;
    }
    //email should not be repeated

    let userDetail = JSON.parse(localStorage.getItem("user")) || []
    let userExist = userDetail.some(
        (userDetail) => userDetail.email === email
    );
    if (userExist) {
        alert("User already exists")
        return;

    }
    //set values into localstorage from sigun fucntion
    let user =
    {
        "name": fullName,
        "email": email,
        "password": password
    }
    userDetail.push(user);
    let newUser = JSON.stringify(userDetail)
    localStorage.setItem("user", newUser)
    window.location = "login.html"
    alert("Registration Successful")
}


function login() {
    const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
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
if (password.length < 8) {
    alert("Please Enter Atleast 8 characters")
    return;
}

  // Check if user exists
  let userDetail = JSON.parse(localStorage.getItem("user")) || [];
  let userExist = userDetail.find((user) => user.email === email);

  if (!userExist) {
    alert("User does not exist");
    return;
  }

  // Check password match
  if (userExist.password !== password) {
    alert("Incorrect password");
    return;
  }
 
  


  // Login successful, redirect to question page
  window.location = "dashboard.html"
  alert("Login Successful");

// }
    
}