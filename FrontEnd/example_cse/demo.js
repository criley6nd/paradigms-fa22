// Q1: Use DOM to change the H1 element to “Computer Science and Engineering Faculty”
let headings = document.getElementsByTagName("h1");
headings[0].innerText = "<a href='https://www.example.com'>Computer Science and Engineering Faculty</a>";


// Q2: Change everyone’s names to be Prof. Last Name
let nameHeadings = document.getElementsByTagName("h2");
for(let i = 0 ; i < nameHeadings.length; i++){
	let children = nameHeadings[i].children;
	let fullName = children[0].innerText.split(" ");
	let lastName = fullName[fullName.length-1];
	children[0].innerText = `Prof. ${lastName}`;
}

// Q3: Change Dr. Cleland-Huang’s link to her lab website (https://sarec.nd.edu)
let linkElement = document.getElementById("post-1033-link");
linkElement.href = "https://sarec.nd.edu";
