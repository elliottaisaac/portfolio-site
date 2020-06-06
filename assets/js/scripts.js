//----------------------------------------------------------------------------------------->
// nav & scroll scripts ----------------------------------------------------------->
//----------------------------------------------------------------------------------------->
let lastScrollTop = 0;
    
window.addEventListener("scroll", UpdateNav);
window.addEventListener("resize", UpdateNav);

 function UpdateNav(){
   let st = document.querySelector("html").scrollTop; 
   let nav = document.querySelector("#top-nav");
        
         //scrolling up---------------------------------------------------->
         if (st - 24 > lastScrollTop || st < 250 || window.innerWidth < 1200){
             nav.style.height = "46px";
             nav.style.margin = "25px auto 0 auto";  
             nav.style.paddingTop = "0px"; 
             nav.style.backgroundColor = "transparent";
             nav.style.position = "static";
             nav.classList.remove = "scrolling";
             nav.style.borderBottom = "1px solid transparent";
         } 
         //---------------------------------------------------------------->

         //scrolling down-------------------------------------------------->
         else if(st + 24 < lastScrollTop && window.innerWidth > 1200) {
             nav.style.backgroundColor = "hsla(34,24%,94%,0.625)";
             nav.style.position = "fixed";
             nav.style.marginTop = "0px";  
             nav.style.paddingTop = "25px"; 
             nav.style.zIndex = "10"; 
             nav.style.top = "0px";  
             nav.style.height = "96px";
             nav.style.borderBottom = "1px solid #cc3333";
             nav.style.maxWidth = "1240px";
         }
         //---------------------------------------------------------------->
         
         lastScrollTop = st <= 0 ? 0 : st;
 }
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->



//----------------------------------------------------------------------------------------->
//homepage animated text typing ----------------------------------------------------------->
//----------------------------------------------------------------------------------------->
if(document.querySelector("#typing") && document.querySelector("#typing").scrollTop > -100){

    const Typing = document.querySelector("#typing");
    let copy, backspacing, TypedChars, backspaceTo, lag, lag2;
    let cycle = 0;

    window.addEventListener("load", Type);
    window.addEventListener("resize", Type);
    window.addEventListener("blur", Reset);

    function Type(){
        if(window.innerWidth > 1000) copy = ["I can code.", "I can design.", "I can create.", "I can get it done!"];
        else copy = ["I can<br>design.", "I can<br>write.", "I can<br>build.", "I can<br>get it done!"];
        backspaceTo = 5;
        if(window.innerWidth < 1000) backspaceTo = 8;
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
            }, 133);     
        }, 4169);  
    }
    
    function Reset(){
        clearInterval(lag2); 
        window.addEventListener("focus", () => {
            Type();
        });
    } 


    //blinks the cursor----------------------------------------------->
    const cursor = document.querySelector("#cursor");
    cursor.classList.add("hidden");
    let blinking;
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
    //---------------------------------------------------------------->
}
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->





