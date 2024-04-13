let menuVisible = false;

const showHideMenu =()=>{
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
showHideMenu()

const select =()=>{
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const effectSkills=()=>{
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("wordpress");
        skills[3].classList.add("photoshop");
        skills[4].classList.add("drupal");
        skills[5].classList.add("communication");
        skills[6].classList.add("teamwork");
        skills[7].classList.add("creativity");
        skills[8].classList.add("dedication");
        skills[9].classList.add("project-Management");
    }
}



window.onscroll = ()=>{
    effectSkills();
} 