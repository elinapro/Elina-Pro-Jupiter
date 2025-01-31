const footer = document.createElement("footer");
console.log(footer);

const body = document.querySelector("body");
console.log(body);

body.appendChild(footer);

//Add a copyright to the footer

const today = new Date();
const year = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `<span> &#169; ${year} Elina</span>`;
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

// Creating the Message Form

const messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm);
// document.getElementById("submit_btn").addEventListener("click", myFunction);
messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;
  console.log(name, email, message);
  messageForm.reset();

  let messageSection = document.getElementById("messages");
  console.log(messageSection);
  let messageList = messageSection.getElementsByTagName("ul")[0];
  console.log(messageList);
  // messageSection.hidden = true;
  // document.getElementById("leave_message").requestFullscreen();

  // Creating a new message
  let newMessage = document.createElement("ul");
  newMessage.innerHTML = `<a href= 'mailto: ${email} '>${name} </a> <br /> <span>${message} </span>`;

  // Adding the remove button
  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (event) => {
    let entry = event.target.parentNode;
    entry.remove();
  });

  // adding a message to the list along with a remove button and a name
  newMessage.appendChild(removeButton);
  newMessage.appendChild(document.createElement("hr"));
  messageList.appendChild(newMessage);
  messageForm.reset();
  // messageSection.hidden = false;
});

// Lesson -13 fetch

//projects list

const projectSection = document.getElementById("projects");
console.log("projectSection: ", projectSection);

const projectsList = projectSection.querySelector("ul");

//Fetching the Github projects from the API

fetch("https://api.github.com/users/elinapro/repos")
  .then((response) => {
    return response.json(); //the response from Github
  })
  .then((repositories) => {
    console.log("repositories: ", repositories); //pass in a string and then the variable itself
    // loop through the reposities array
    for (let i = 0; i < repositories.length; i++) {
      //get specific project data
      const project = repositories[i].name;
      //to hide a project
      if (project === "yahtzee") {
        continue;
      }
      //create the DOM (HTML) elements
      const li = document.createElement("li");
      //put the data from the project into the DOM element(li)
      li.innerText = project;
      //<li>Jupiter</li>
      //Any list items would be listed
      projectsList.appendChild(li);
    }
  })
  .catch((error) => {
    console.log(error); //add error message to DOM
  });
