const footer = document.createElement("footer");
console.log(footer);

const body = document.querySelector("body");
console.log(body);

body.appendChild(footer);

//Add a copyright to the footer

const today = new Date();
const year = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `<span> &#169; ${year} Elina<\span>`;
footer.appendChild(copyright);

console.log(copyright);
console.log(footer);

//skills section
const skills = ["CSS", "HTML", "Javascript", "Jira", "Confluence", "Airtable"];

const skillsSection = document.querySelector("#Skills");
const skillsList = document.querySelector("#skillsList");

for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// const messageForm = document.querySelector('form[name="leave_message"]');
// // document.getElementById("submit_btn").addEventListener("click", myFunction);
// messageForm.addEventListener("submit", myFunction);

// function myFunction(event){
//     event.preventDefault(); // Prevent form submission
//     const userName = event.target.usersName.value;
//     const email = event.target.usersEmail.value;
//     const message = event.target.usersMessage.value;
//     console.log(userName, email, message);

// }


const messageForm = document.querySelector("#leave_message");
// document.getElementById("submit_btn").addEventListener("click", myFunction);
messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    let userName = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    console.log(userName, email, message);

    let messageSection = document.getElementById("#messages");
    let messageList = messageSection.getElementById("ul")
    document.getElementById("leave_message").requestFullscreen();
});