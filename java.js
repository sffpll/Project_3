//OBJECT 1

var project1 = {
title: "Hello World",
class: "image1",
description: "Nineteen eighty nine. // (music: Bee Gees - Stayin' Alive)",
image: "https://i.ibb.co/J3g8SyJ/0.jpg",};

function buttonOne() {
var container = document.querySelector("#containerOne");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");


description.innerHTML = project1.description;
Image.src = project1.image;
title.innerHTML = project1.title;

title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image1";

//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}



// OBJECT 2
var project2 = {
title: "Barbies & Disney",
class: "image2",
description: "Nineteen ninety six // music: Under the Sea, The Little Mermaid",
image: "https://i.ibb.co/F89pcxX/7.jpg.jpg" };

function buttonTwo() {
var container = document.querySelector("#containerTwo");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");


description.innerHTML = project2.description;
Image.src = project2.image;
title.innerHTML = project2.title;

title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image2";

//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}


// OBJECT 3
var project3 = {
title: "Britney Spears & Nsync",
class: "image3",
description: "Two thousand five. Hormonal and brain chemistry changes. Discovered dance dance revolution and whole wheat pizza. // music (Say my name, Destiny's Child",
image: "https://i.ibb.co/gwdJYdL/16.jpg" };

function buttonThree() {
var container = document.querySelector("#containerThree");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");


description.innerHTML = project3.description;
Image.src = project3.image;
title.innerHTML = project3.title;

title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image3";

//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}



// OBJECT 4
var project4 = {
title: "Wild Child",
class: "image4",
description: "Two thousand seven. Became obsessed with photography",
image: "https://i.ibb.co/fkQ1HgF/18.jpg" };
    
function buttonFour() {
var container = document.querySelector("#containerFour");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");
    
description.innerHTML = project4.description;
Image.src = project4.image;
title.innerHTML = project4.title;
    
title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image4";
    
//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}



// OBJECT 5
var project5 = {
title: "Shit got real",
class: "image5",
description: "Two thousand nineteen. Figuring out life.",
image: "https://i.ibb.co/6H47XGj/30.jpg" };
        
function buttonFive() {
var container = document.querySelector("#containerFive");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");
        
description.innerHTML = project5.description;
Image.src = project5.image;
title.innerHTML = project5.title;
        
title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image5";
        
//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}

// OBJECT 6
var project6 = {
title: "I hope to be genuinely happy",
class: "image6",
description: "By this age, my parents have died, all my dogs have died, and my art career has ended.",
image: "https://i.ibb.co/9bJcq3S/70.jpg" };
            
function buttonSix() {
var container = document.querySelector("#containerSix");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");
            
description.innerHTML = project6.description;
Image.src = project6.image;
title.innerHTML = project6.title;
            
title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image6";
            
//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}

// OBJECT 7
var project7 = {
title: "Fin. Two thousand eighty-nine",
class: "image7",
description: "(music: Tibetan singing crystal bowl chakra meditation - sound bath)",
image: "https://i.ibb.co/BzB8w7n/100.jpg" };
                
function buttonSeven() {
var container = document.querySelector("#containerSeven");
var Image = document.createElement("img");
var title = document.createElement("h1");
var description = document.createElement("p");
                
description.innerHTML = project7.description;
Image.src = project7.image;
title.innerHTML = project7.title;
                
title.className = "titleClass";
description.className = "descriptionClass";
Image.className = "image7";
                
//the order the content is displayed
container.appendChild(Image);
container.appendChild(title);
container.appendChild(description);
}