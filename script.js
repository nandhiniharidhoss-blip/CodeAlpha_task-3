// ==========================
// Typing Animation
// ==========================

const roles = [
    "Web Developer",
    "Frontend Developer",
    "Student",
    "Programmer"
];

const roleElement = document.querySelector(".home h3");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){
        roleElement.textContent = currentRole.substring(0,charIndex++);
    }else{
        roleElement.textContent = currentRole.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex === currentRole.length + 1){
        deleting = true;
        speed = 1200;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});


// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");
    observer.observe(sec);

});


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00e5ff";
topBtn.style.color="#111";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ==========================
// Contact Form Validation
// ==========================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name=form.querySelector("input[type='text']").value.trim();

    const email=form.querySelector("input[type='email']").value.trim();

    const message=form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Thank you! Your message has been submitted.");

    form.reset();

});


// ==========================
// Footer Year
// ==========================

const footer=document.querySelector("footer p");

footer.innerHTML="© "+new Date().getFullYear()+" Nandhini H | Portfolio";


// ==========================
// Smooth Navigation
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});
