// question

var quiz = [
    {
      question: "What does HTML stand for?",
      options: {
        1: "Hyper Text Markup Language",
        2: "Home Tool Markup Language",
        3: "Hyperlinks and Text Markup Language",
        4: "Hyper Text Makeup Language",
      },
      answer: "Hyper Text Markup Language",
    },
    {
      question:
        "Which of the following is the correct HTML element for the largest heading?",
      options: {
        1: "<h1>",
        2: "<h6>",
        3: "<heading>",
        4: "<head>",
      },
      answer: "<h1>",
    },
    {
      question: "Which of the following is used to create a hyperlink in HTML?",
      options: {
        1: "<a>",
        2: "<link>",
        3: "<href>",
        4: "<hyperlink>",
      },
      answer: "<a>",
    },
    {
      question: "Which of these elements are all <table> elements?",
      options: {
        1: "<table>, <tr>, <td>",
        2: "<thead>, <body>, <footer>",
        3: "<table>, <tt>, <tr>",
        4: "<table>, <header>, <footer>",
      },
      answer: "<table>, <tr>, <td>",
    },
    {
      question: "What is the correct HTML element to insert a line break?",
      options: {
        1: "<br>",
        2: "<lb>",
        3: "<break>",
        4: "<hr>",
      },
      answer: "<br>",
    },
    {
      question: "How can you make a numbered list in HTML?",
      options: {
        1: "<ol>",
        2: "<ul>",
        3: "<dl>",
        4: "<list>",
      },
      answer: "<ol>",
    },
    {
      question:
        "Which HTML attribute specifies an alternative text for an image, if the image cannot be displayed?",
      options: {
        1: "alt",
        2: "src",
        3: "title",
        4: "href",
      },
      answer: "alt",
    },
    {
      question: "Which of the following is NOT a self-closing tag in HTML?",
      options: {
        1: "<img>",
        2: "<br>",
        3: "<input>",
        4: "<div>",
      },
      answer: "<div>",
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: {
        1: "<body bg='yellow'>",
        2: "<body style='background-color:yellow;'>",
        3: "<background>yellow</background>",
        4: "<body color='yellow'>",
      },
      answer: "<body style='background-color:yellow;'>",
    },
    {
      question: "In HTML, how can you make text bold?",
      options: {
        1: "<b>",
        2: "<bold>",
        3: "<strong>",
        4: "Both <b> and <strong>",
      },
      answer: "Both <b> and <strong>",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: {
        1: "bgcolor",
        2: "color",
        3: "background-color",
        4: "background",
      },
      answer: "background-color",
    },
    {
      question: "Which CSS property controls the text size?",
      options: {
        1: "font-style",
        2: "text-size",
        3: "font-size",
        4: "text-style",
      },
      answer: "font-size",
    },
    {
      question:
        "Which HTML element is used to specify a footer for a document or section?",
      options: {
        1: "<footer>",
        2: "<bottom>",
        3: "<section>",
        4: "<footer-section>",
      },
      answer: "<footer>",
    },
    {
      question: "How do you create a comment in CSS?",
      options: {
        1: "<!-- this is a comment -->",
        2: "// this is a comment",
        3: "/* this is a comment */",
        4: "comment: this is a comment",
      },
      answer: "/* this is a comment */",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: {
        1: "background-color",
        2: "color",
        3: "font-color",
        4: "text-color",
      },
      answer: "color",
    },
    {
      question:
        "How do you make each word in a text start with a capital letter in CSS?",
      options: {
        1: "text-transform:capitalize",
        2: "text-style:capitalize",
        3: "text-transform:uppercase",
        4: "text-transform:capitalize-each",
      },
      answer: "text-transform:capitalize",
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      options: {
        1: "font-family",
        2: "font-weight",
        3: "font-style",
        4: "font-size",
      },
      answer: "font-family",
    },
    {
      question: "How do you center an element horizontally in CSS?",
      options: {
        1: "margin:auto",
        2: "text-align:center",
        3: "float:center",
        4: "display:center",
      },
      answer: "margin:auto",
    },
    {
      question: "What is the default display value for a <div> element?",
      options: {
        1: "inline",
        2: "block",
        3: "flex",
        4: "none",
      },
      answer: "block",
    },
    {
      question:
        "Which CSS property is used to change the spacing between letters?",
      options: {
        1: "spacing",
        2: "letter-spacing",
        3: "text-spacing",
        4: "letter-space",
      },
      answer: "letter-spacing",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: {
        1: "style",
        2: "class",
        3: "styles",
        4: "font",
      },
      answer: "style",
    },
    {
      question:
        "Which CSS property is used to change the left margin of an element?",
      options: {
        1: "padding-left",
        2: "margin-left",
        3: "spacing-left",
        4: "left-margin",
      },
      answer: "margin-left",
    },
    {
      question: "How do you select an element with id 'header' in CSS?",
      options: {
        1: "#header",
        2: ".header",
        3: "header",
        4: "*header",
      },
      answer: "#header",
    },
    {
      question: "What does CSS stand for?",
      options: {
        1: "Creative Style Sheets",
        2: "Cascading Style Sheets",
        3: "Computer Style Sheets",
        4: "Colorful Style Sheets",
      },
      answer: "Cascading Style Sheets",
    },
    {
      question: "How do you select all <p> elements inside a <div> element?",
      options: {
        1: "div > p",
        2: "div p",
        3: "div + p",
        4: "div ~ p",
      },
      answer: "div p",
    },
    {
      question: "What is the default value of the position property in CSS?",
      options: {
        1: "static",
        2: "relative",
        3: "absolute",
        4: "fixed",
      },
      answer: "static",
    },
    {
      question:
        "Which property is used to set the space between the content and the border in CSS?",
      options: {
        1: "margin",
        2: "padding",
        3: "border-spacing",
        4: "content-spacing",
      },
      answer: "padding",
    },
    {
      question: "How do you make a list that lists its items with squares?",
      options: {
        1: "list-style-type: square",
        2: "list-style: square",
        3: "list-square: yes",
        4: "list: square",
      },
      answer: "list-style-type: square",
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      options: {
        1: "<ul>",
        2: "<ol>",
        3: "<li>",
        4: "<list>",
      },
      answer: "<ul>",
    },
    {
      question: "What is the correct HTML for making a text input field?",
      options: {
        1: "<input type='text'>",
        2: "<textfield>",
        3: "<input type='textfield'>",
        4: "<input='text'>",
      },
      answer: "<input type='text'>",
    },
    {
      question:
        "Which CSS property is used to create space between the element's border and inner content?",
      options: {
        1: "padding",
        2: "margin",
        3: "border-spacing",
        4: "inner-spacing",
      },
      answer: "padding",
    },
  ];

  localStorage.setItem("AllQuestions",JSON.stringify(quiz));
  
  console.log(quiz);
  // loggedin user ke liye hai
  // window.addEventListener('load',() => {
  //     const isloggedIn = localStorage.getItem("loggedInuser");
  
  //     if(isloggedIn){
  //         return
  //     }
  //     if(window.location.pathname === "/dashboard.html"){
  //         window.location="/"
  //     }
  // })
  
  // user = JSON.parse(localStorage.getItem("loggedInUser"));
  // document.getElementById("user-name").innerText = user.name;
  
  function logout() {
    localStorage.removeItem("loggedInUser");
    window.location = "login.html";
  }
  
  function profile() {
    let userProfile = document.getElementById("profileSlide");
    userProfile.classList.toggle("displayProfile");
  }
  // function uploadImage() {
  //   let userProfile = document.getElementById("userProfile");
  //   // let uploadImage = document.getElementById("uploadImage");
  //   let imageInput = document.getElementById("imageInput").files[0].name;
  //   let imagePath = "assets/" + imageInput;
  //   let stringedImagePath = JSON.stringify(imagePath);
  //   localStorage.setItem("loggedInUserImage", stringedImagePath);
  
  //   userProfile.src = imagePath;
  // }
  
  function questionPage() {
    window.location = "question.html";
  }
  // signin function
  // signin page to login page
  
  function signin() {
    const fullname = document.getElementById("Full-Name").value;
    const email = document.getElementById("emailId").value;
    const password = document.getElementById("Passkey").value;
  
    const namePattern = /^[a-zA-Z\s\-']+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!fullname) {
      alert("Enter your name");
      return;
    }
    if (!namePattern.test(fullname)) {
      alert("Enter the valid Name");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Enter the valid Email");
      return;
    }
    if (password.length < 8) {
      alert("Enter 8 character password");
      return;
    }
  
    // email should not be repeated
  
    let userDetail = JSON.parse(localStorage.getItem("user")) || [];
    let userExist = userDetail.some((userDetail) => userDetail.email === email);
    if (userExist) {
      alert("user already exist");
      return;
    }
  
    // set values to localstorage from singin function
  
    let user = {
      name: fullname,
      email: email,
      password: password,
    };
    userDetail.push(user);
    let newUser = JSON.stringify(userDetail);
    localStorage.setItem("user", newUser);
  
    window.location = "login.html";
    alert("register successfully");
  }
  
  // login function and its logics
  function log() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(email)) {
      alert("Enter the valid Email");
      return;
    }
    if (password.length < 8) {
      alert("Enter 8 character password");
      return;
    }
  
    const userDetail = JSON.parse(localStorage.getItem("user")) || [];
  
    // Find user with matching email and password
    const user = userDetail.find(
      (user) => user.email === email && user.password === password
    );
  
    if (!user) {
      alert("Invalid email or password");
      return;
    }
  
    let loggedInUser = JSON.stringify(user);
    localStorage.setItem("loggedInUser", loggedInUser);
  
    // Login successful, redirect to dashboard
    window.location = "dashboard.html";
    alert("Logged in successfully");
  }
  
  let profileName = document.getElementById("profile-name");
  let profileText = JSON.parse(localStorage.getItem("loggedInUser"));
  profileName.innerText = profileText.name;
  
  // question display
  
  function displayCurrentDate() {
  
    let currentDate = new Date();
  
    let day = currentDate.getDate();
  
    let month = currentDate.getMonth() + 1; // Months are zero-based
  
    let year = currentDate.getFullYear();
  
  
  
    let formattedDate = (day < 10 ? '0' + day : day) + '/' +
  
                        (month < 10 ? '0' + month : month) + '/' + year;
  
    document.getElementById('date').innerHTML= formattedDate;
  
  }
  // displayCurrentDate();
  
  
  
  // Start the timer
  
  let startTime = new Date().getTime();
  
  let timerElement = document.getElementById('timer');
  
  
  
  function updateTimer() {
  
    let currentTime = new Date().getTime();
  
    let timeDifference = currentTime - startTime;
  
    let seconds = Math.floor((timeDifference / 1000) % 60);
  
    let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  
  
  
    let minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
  
    let secondsDisplay = seconds < 10 ? '0' + seconds : seconds;
  
  
  
    timerElement.innerHTML ='<sub><img src="assets/timeroutline.png" height="30px" width="30px"></sub>'+ minutesDisplay + ":" + secondsDisplay;
  
  }
  
  
  
  let timerInterval = setInterval(updateTimer, 1000);
  
  let chooseQuestion = [];
  let indexQuestion = 0;
  
  // startQuize();
  
  function displayQuestion() {
    console.log({chooseQuestion})
    document.getElementById("asked-question").innerText =
      indexQuestion + 1 + ". " + chooseQuestion[indexQuestion].question;
    document.getElementById("opt1").innerText =
      chooseQuestion[indexQuestion].options[1];
    document.getElementById("opt2").innerText =
      chooseQuestion[indexQuestion].options[2];
    document.getElementById("opt3").innerText =
      chooseQuestion[indexQuestion].options[3];
    document.getElementById("opt4").innerText =
      chooseQuestion[indexQuestion].options[4];
  
    document.getElementById("option1").value =
      chooseQuestion[indexQuestion].options[1];
    document.getElementById("option2").value=
      chooseQuestion[indexQuestion].options[2];
    document.getElementById("option3").value =
      chooseQuestion[indexQuestion].options[3];
    document.getElementById("option4").value =
      chooseQuestion[indexQuestion].options[4];
  
    document.getElementById("count").innerText = indexQuestion + 1;
  
    // progress bar
  
    let progress = document.getElementById("progress");
    let progressWidth = (document.getElementById("count").innerText / 10) * 100;
    progress.style.width = progressWidth + "%";
  
    //set options to unchecked
    let selectRadio = document.querySelector("[name='option']:checked");
    if (selectRadio) {
      selectRadio.checked = false;
    }
  
    //set choosed answer
    if (chooseQuestion[indexQuestion].choosedAnswer) {
      let choosedAnswer = chooseQuestion[indexQuestion].choosedAnswer;
      choosedAnswer = choosedAnswer.replaceAll("'", "\\'");
      document.querySelector(
        "[name='options'][value='" + choosedAnswer + "']"
      ).checked = true;
    }
  }
  
  function startQuize() {
    let endTime = new Date().getTime();
        let timeSpent = endTime - startTime;
      
        let totalSeconds = Math.floor(timeSpent / 1000);
        let secondsTaken = totalSeconds % 60;
        let minutesTaken = Math.floor(totalSeconds / 60);
      
        let date = new Date().toLocaleDateString(); // Get the current date
       console.log("working")
        // Store date and time taken in localStorage
        let quizDateTimer={
          "quizDate":date,
          "quizMinutes":minutesTaken,
          "quizSeconds":secondsTaken
        }
    chooseQuestion = quiz.sort(() => 0.5 - Math.random()).slice(0, 10);
  //   chooseQuestion.forEach((question) => {
  //     question.choosedAnswer = null; // Initialize choosedAnswer property
  // });
  
  
    displayQuestion();
    
  }
  
  // console.log(chooseQuestion);
  let questionAsked = JSON.stringify(chooseQuestion);
  localStorage.setItem("questionAsked", questionAsked);
  
  function choosedAnswer(optionIndex) {
    chooseQuestion[indexQuestion]["choosedAnswer"] = chooseQuestion[indexQuestion].options[optionIndex];
  }
  //   if (optionIndex >= 0 && optionIndex < 4) {
  // } else {
  //     console.error("Invalid option index");
  //     }
  
  // }
  
  
  function next() {
  
    const currentQuestionOptions = document.querySelectorAll(`input[name='option']:checked`);
  
    // Check if no option is selected for the current question
    if (currentQuestionOptions.length === 0) {
      alert("Please select an option to proceed.");
      return;  // Prevent moving to the next question if no option is selected
    }
    if (indexQuestion == chooseQuestion.length - 1) {
      Submit();
      
  
      return;
    }
  
    indexQuestion++;
    displayQuestion();
    
   
  
    document.getElementById("previous").style = "display:block";
    
  }
  
  function previous() {
    if (indexQuestion == 0) {
      return;
    }
    indexQuestion--;
    displayQuestion();
  
    if (indexQuestion == 0) {
      document.getElementById("previous").style = "display:none";
    }
  }
  
  function Submit() {
    let score = 0;
    for (let i = 0; i < chooseQuestion.length; i++) {
      if (chooseQuestion[i].choosedAnswer == chooseQuestion[i].answer) {
        score += 10;
      }
    }
  
    let userTests = JSON.parse(localStorage.getItem("userTests")) || [];
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(loggedInUser);
    let usertest = {
      questions: chooseQuestion,
      // options: choosedAnswer,
      score: score,
      name: loggedInUser.name,
      email: loggedInUser.email,
      // quizDateTimer:quizDateTimer,
    };
  
    userTests.push(usertest);
    let stringarr = JSON.stringify(userTests);
    localStorage.setItem("userTests", stringarr);
  
    window.location = "scoreboard.html";
  }
  
  // scoreboard
  function assignRanks() {
    let storedArray = JSON.parse(localStorage.getItem("userTests"));
    //const scores = storedArray.map((object) =>object.score);
    let rankedTests = storedArray.sort((a, b) => b.score - a.score);
  
    // console.log(rankedTests);
  
    let rank1 = document.getElementById("first");
    let rank2 = document.getElementById("second");
    let rank3 = document.getElementById("third");
    let rank4 = document.getElementById("rank4");
    let rank5 = document.getElementById("rank5");
    let rank6 = document.getElementById("rank6");
  
    if (rankedTests.length > 0) {
      rank1.innerText = rankedTests[0].score;
    }
    if (rankedTests.length > 1) {
      rank2.innerText = rankedTests[1].score;
    }
    if (rankedTests.length > 2) {
      rank3.innerText = rankedTests[2].score;
    }
    if (rankedTests.length > 3) {
      rank4.innerText = rankedTests[3].score;
    }
    if (rankedTests.length > 4) {
      rank5.innerText = rankedTests[4].score;
    }
    if (rankedTests.length > 5) {
      rank6.innerText = rankedTests[5].score;
    }
  
    let Name1 = document.getElementById("name1");
    let Name2 = document.getElementById("name2");
    let Name3 = document.getElementById("name3");
    let Name4 = document.getElementById("name4");
    let Name5 = document.getElementById("name5");
    let Name6 = document.getElementById("name6");
  
    if (rankedTests.length > 0) {
      Name1.innerText = rankedTests[0].name;
    }
    if (rankedTests.length > 1) {
      Name2.innerText = rankedTests[1].name;
    }
    if (rankedTests.length > 2) {
      Name3.innerText = rankedTests[2].name;
    }
    if (rankedTests.length > 3) {
      Name4.innerText = rankedTests[3].name;
    }
    if (rankedTests.length > 4) {
      Name5.innerText = rankedTests[4].name;
    }
    if (rankedTests.length > 5) {
      Name6.innerText = rankedTests[5].name;
    }
    console.log("working")
  
  }
  