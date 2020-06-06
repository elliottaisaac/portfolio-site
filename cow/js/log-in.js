document.querySelector(".logIn button").addEventListener("click", () => {
	let enteredUsername = document.querySelector("#username").value;
	for(i = 0; i < users.length; i++){
        if(enteredUsername == users[i].username){
			if(users[i].password == document.querySelector("#password").value){
				localStorage.setItem("LOGGEDIN", true);
				localStorage.setItem("CURRENTUSER", users[i].userID);
				window.location.href = "dashboard.html";
			}
			else{
				document.querySelector("#password").value = ""; 
				document.querySelector("#password").placeholder = "incorrect password"; 
			}
		}
		else{
			document.querySelector("#username").value = ""; 
			document.querySelector("#username").placeholder = "username not found";
		}
	}
});