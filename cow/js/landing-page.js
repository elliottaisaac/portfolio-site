//landing page animation ------------------------------------->
let circle1;
let circle2;
let c1;
let c2;
let text1;
let text2;
let moo;
let scr = window.scrollY;


if(!loggedIn || loggedIn == "false"){

    if(isMobile){
        window.scrollTo(0, 0);
        window.addEventListener('scroll', () => {
            if(!finished)window.scrollTo(0, 0);
        });
            Moo(-340);
            finished = true;
    }
    else{
        window.addEventListener('scroll', () => {
            if(!finished)window.scrollTo(0, 300);
        });
        CreateCircles();
        let animation = setTimeout( () => {
                window.setTimeout( () => {
                    circle1.style.height="90vw";
                    circle1.style.width="90vw";
                    c1 = true;
                }, 800);

                window.setTimeout( () => {
                    circle2.style.height="80vw";
                    circle2.style.width="80vw";
                    c2 = true;
                }, 1600);
            
                window.setTimeout( () => {
                    
                    Moo(-240);
                }, 3000);
        }, 2);  
    }
}
else{
    document.querySelector("#landingPage2Column").style.display = "none";
    document.querySelector("#signUp").style.display = "none";
}


function CreateCircles(){
    circle1 = document.createElement("div");
    c1 = false;
    circle2 = document.createElement("div");
    c2 = false;
    text1 = document.createElement("h1");
    text1.id = "text1";
    text1.innerHTML = "Get More";
    text2 = document.createElement("h1");
    text2.id = "text2";
    text2.innerHTML = "From Your";
    circle1.style.borderRadius="50%";
    circle1.style.backgroundColor="#373449";
    circle1.style.order = "2";
    circle2.style.borderRadius="50%";
    circle2.style.borderTopRightRadius="10%";
    circle2.style.borderBottomRightRadius="10%";
    circle2.style.backgroundColor="#e9e8e8";
    circle2.style.order = "1";
    document.querySelector("#animationContainer").appendChild(circle1);
    circle1.appendChild(circle2);
    circle1.appendChild(text1);
    circle2.appendChild(text2);
    finished = false;
}

function Moo(vw){
    if(c1==true){circle1.remove(); circle1 = undefined; text1.remove(); text1=undefined; }
    if(c2==true){circle2.remove(); circle2 = undefined; text2.remove(); text2=undefined; }
    document.querySelector("body").classList.add("CowSpots");
    moo = document.createElement("h4");
    moo.classList.add("MOO");
    moo.id = "moo";
    moo.innerHTML = "M00000000NEY!!!!";
    document.querySelector(".mockup").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.querySelector("#landingPageAnimation").style.width = "100vw";
    document.querySelector("#animationContainer").appendChild(moo);
    window.setTimeout( () => { moo.style.transform = `translateX(${vw}vw)`; }, 500);
    window.setTimeout( () => { learnmore() }, 5000);
}

function learnmore(){
    learnMore = document.createElement("h2");
    learnMore.classList.add("lm");
    learnMore.innerHTML = "(get started)";
    document.querySelector("#animationContainer").appendChild(learnMore);
    learnMore.addEventListener("click", () => {
        document.querySelector("body").classList.remove("CowSpots");
        document.querySelector("#landingPage2Column").style.display = "none";
        document.querySelector("header").style.display = "block";
        if(document.querySelector("#moo")) document.querySelector("#moo").remove();
        finished = true;
        window.scrollTo(0, 0);
    });
}

//--------------------------------------------------------------------->




//homepage animated text typing --------------------------------------------------------------------->
if(document.querySelector("#typing")){
    var Typing = document.querySelector("#typing");
    var copy;
    var cycle = 0;
    var backspacing;
    var TypedChars;
    var backspaceTo;
    var lag;
    var lag2;

    window.addEventListener("load", Type);
    window.addEventListener("resize", Type);
    window.addEventListener("blur", Reset);

    function Type(){
        if(!isMobile) copy = ["With Cow you can Spend. ", "With Cow you can Save. ", "With Cow you can Budget. ", "With Cow you can Invest. "];
        else copy =  ["With Cow you can...  Spend. ", "With Cow you can...  Save.", "With Cow you can...  Budget. ", "With Cow you can...  Invest. "];
        backspaceTo = 17;
        if(isMobile) backspaceTo = 20;
        TypedChars = copy[cycle].split("");
        backspacing = false;
        Typing.innerHTML = copy[cycle];
        clearInterval(lag2); 
        lag2  = setInterval( () => {   
            lag = setInterval( () => {  

                    if (Typing.innerHTML.length == copy[cycle].length) backspacing = true;
                    
                    else if(Typing.innerHTML.length == backspaceTo){
                            backspacing = false;
                            cycle++;
                            if(cycle == 4) cycle = 0;
                            TypedChars = copy[cycle].split("");
                    }

                    if (backspacing == true && Typing.innerHTML.length > backspaceTo) Typing.innerHTML = Typing.innerHTML.slice(0, -1);  
    
                    if(backspacing == false && Typing.innerHTML.length >= backspaceTo){ 
                        if (Typing.innerHTML.length < copy[cycle].length) Typing.innerHTML += TypedChars[Typing.innerHTML.length];
                        if (Typing.innerHTML.length == copy[cycle].length) clearInterval(lag); 
                    }
            }, 150);     
        }, 4000);  
    }
    
    function Reset(){
        clearInterval(lag2); 
        window.addEventListener("focus", () => {
            Type();
        });
    } 

    //blinks the cursor
    var cursor = document.querySelector("#cursorSVG");
    cursor.classList.add("hidden");
    var blinking;
    setInterval( () => {
        if (blinking == true){
        cursor.classList.remove("hidden"); 
        blinking = false;
        }
        else {
            cursor.classList.add("hidden");
            blinking = true;
        }
    }, 680);
}
// --------------------------------------------------------------------->


//sign up -------------------------------------------------------------------->
let available = false;
document.querySelector("#signUp button").addEventListener("click", () => {
    enteredUsername = document.querySelector("#username").value;
    for(i = 0; i <= users.length; i++){
        if(users[i] && enteredUsername == users[i].username){
            document.querySelector("#username").value = ""; 
            document.querySelector("#username").placeholder = "That username is taken, sorry!"; 
        }
        else available = true;
    }
    if(available){
        localStorage.setItem("LOGGEDIN", true);
        let newUser = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
            userID: users.length,
        }
        users.push(newUser);
        currentUser = users[newUser.userID];
        localStorage.setItem("CURRENTUSER", newUser.userID);
        localStorage.setItem("USERS",  JSON.stringify(users));
        window.location.href = "dashboard.html";
    }   
});
// --------------------------------------------------------------------->