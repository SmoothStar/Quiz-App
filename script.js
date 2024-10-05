//question 
var quiz = [
    {
        question: "What does HTML stand for?",
        options: {
            1: "Hyper Text Markup Language",
            2: "Home Tool Markup Language",
            3: "Hyperlinks and Text Markup Language",
            4: "Hyper Text Makeup Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is the correct HTML element for the largest heading?",
        options: {
            1: "<h1>",
            2: "<h6>",
            3: "<heading>",
            4: "<head>"
        },
        answer: "<h1>"
    },
    {
        question: "Which of the following is used to create a hyperlink in HTML?",
        options: {
            1: "<a>",
            2: "<link>",
            3: "<href>",
            4: "<hyperlink>"
        },
        answer: "<a>"
    },
    {
        question: "Which of these elements are all <table> elements?",
        options: {
            1: "<table>, <tr>, <td>",
            2: "<thead>, <body>, <footer>",
            3: "<table>, <tt>, <tr>",
            4: "<table>, <header>, <footer>"
        },
        answer: "<table>, <tr>, <td>"
    },
    {
        question: "What is the correct HTML element to insert a line break?",
        options: {
            1: "<br>",
            2: "<lb>",
            3: "<break>",
            4: "<hr>"
        },
        answer: "<br>"
    },
    {
        question: "How can you make a numbered list in HTML?",
        options: {
            1: "<ol>",
            2: "<ul>",
            3: "<dl>",
            4: "<list>"
        },
        answer: "<ol>"
    },
    {
        question: "Which HTML attribute specifies an alternative text for an image, if the image cannot be displayed?",
        options: {
            1: "alt",
            2: "src",
            3: "title",
            4: "href"
        },
        answer: "alt"
    },
    {
        question: "Which of the following is NOT a self-closing tag in HTML?",
        options: {
            1: "<img>",
            2: "<br>",
            3: "<input>",
            4: "<div>"
        },
        answer: "<div>"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        options: {
            1: "<body bg='yellow'>",
            2: "<body style='background-color:yellow;'>",
            3: "<background>yellow</background>",
            4: "<body color='yellow'>"
        },
        answer: "<body style='background-color:yellow;'>"
    },
    {
        question: "In HTML, how can you make text bold?",
        options: {
            1: "<b>",
            2: "<bold>",
            3: "<strong>",
            4: "Both <b> and <strong>"
        },
        answer: "Both <b> and <strong>"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: {
            1: "bgcolor",
            2: "color",
            3: "background-color",
            4: "background"
        },
        answer: "background-color"
    },
    {
        question: "Which CSS property controls the text size?",
        options: {
            1: "font-style",
            2: "text-size",
            3: "font-size",
            4: "text-style"
        },
        answer: "font-size"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: {
            1: "<footer>",
            2: "<bottom>",
            3: "<section>",
            4: "<footer-section>"
        },
        answer: "<footer>"
    },
    {
        question: "How do you create a comment in CSS?",
        options: {
            1: "<!-- this is a comment -->",
            2: "// this is a comment",
            3: "/* this is a comment */",
            4: "comment: this is a comment"
        },
        answer: "/* this is a comment */"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: {
            1: "background-color",
            2: "color",
            3: "font-color",
            4: "text-color"
        },
        answer: "color"
    },
    {
        question: "How do you make each word in a text start with a capital letter in CSS?",
        options: {
            1: "text-transform:capitalize",
            2: "text-style:capitalize",
            3: "text-transform:uppercase",
            4: "text-transform:capitalize-each"
        },
        answer: "text-transform:capitalize"
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        options: {
            1: "font-family",
            2: "font-weight",
            3: "font-style",
            4: "font-size"
        },
        answer: "font-family"
    },
    {
        question: "How do you center an element horizontally in CSS?",
        options: {
            1: "margin:auto",
            2: "text-align:center",
            3: "float:center",
            4: "display:center"
        },
        answer: "margin:auto"
    },
    {
        question: "What is the default display value for a <div> element?",
        options: {
            1: "inline",
            2: "block",
            3: "flex",
            4: "none"
        },
        answer: "block"
    },
    {
        question: "Which CSS property is used to change the spacing between letters?",
        options: {
            1: "spacing",
            2: "letter-spacing",
            3: "text-spacing",
            4: "letter-space"
        },
        answer: "letter-spacing"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: {
            1: "style",
            2: "class",
            3: "styles",
            4: "font"
        },
        answer: "style"
    },
    {
        question: "Which CSS property is used to change the left margin of an element?",
        options: {
            1: "padding-left",
            2: "margin-left",
            3: "spacing-left",
            4: "left-margin"
        },
        answer: "margin-left"
    },
    {
        question: "How do you select an element with id 'header' in CSS?",
        options: {
            1: "#header",
            2: ".header",
            3: "header",
            4: "*header"
        },
        answer: "#header"
    },
    {
        question: "What does CSS stand for?",
        options: {
            1: "Creative Style Sheets",
            2: "Cascading Style Sheets",
            3: "Computer Style Sheets",
            4: "Colorful Style Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        question: "How do you select all <p> elements inside a <div> element?",
        options: {
            1: "div > p",
            2: "div p",
            3: "div + p",
            4: "div ~ p"
        },
        answer: "div p"
    },
    {
        question: "What is the default value of the position property in CSS?",
        options: {
            1: "static",
            2: "relative",
            3: "absolute",
            4: "fixed"
        },
        answer: "static"
    },
    {
        question: "Which property is used to set the space between the content and the border in CSS?",
        options: {
            1: "margin",
            2: "padding",
            3: "border-spacing",
            4: "content-spacing"
        },
        answer: "padding"
    },
    {
        question: "How do you make a list that lists its items with squares?",
        options: {
            1: "list-style-type: square",
            2: "list-style: square",
            3: "list-square: yes",
            4: "list: square"
        },
        answer: "list-style-type: square"
    },
    {
        question: "Which HTML element is used to define an unordered list?",
        options: {
            1: "<ul>",
            2: "<ol>",
            3: "<li>",
            4: "<list>"
        },
        answer: "<ul>"
    },
    {
        question: "What is the correct HTML for making a text input field?",
        options: {
            1: "<input type='text'>",
            2: "<textfield>",
            3: "<input type='textfield'>",
            4: "<input='text'>"
        },
        answer: "<input type='text'>"
    },
    {
        question: "Which CSS property is used to create space between the element's border and inner content?",
        options: {
            1: "padding",
            2: "margin",
            3: "border-spacing",
            4: "inner-spacing"
        },
        answer: "padding"
    }
];
console.log(quiz);

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
    let loggedInUser = JSON.stringify(userExist);
    localStorage.setItem("loggedInUser", loggedInUser);


    // Login successful, redirect to question page
    window.location = "dashboard.html"
    alert("Login Successful");

    // }

}
let profileName = document.getElementById("userName");
let profile = JSON.parse(localStorage.getItem("loggedInUser"));
profileName.innerText = profile.name;

console.log(quiz);
