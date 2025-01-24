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

const messageForm = document.querySelector('input[name="leave_message"]');
document.getElementById("submit_btn").addEventListener("click", myFunction);

function myFunction(){
    const userName = event.target.usersName
    const email = event.target.usersEmail
    const message = event.target.usersMessage
    console.log(userName, email, message);
}