function analyzeResume(){

    let file = document.getElementById("resumeFile").files[0];

    if(!file){
        alert("Please upload your resume first");
        return;
    }

    document.getElementById("resultBox").style.display = "block";

    // Dummy AI result (later connect Python backend)
    let score = 75;
    let skills = ["HTML", "CSS", "JavaScript", "Python"];
    let missing = ["React", "Django", "SQL"];
    let suggestions = [
        "Learn React for frontend development",
        "Improve backend skills using Django",
        "Practice SQL for database handling"
    ];

    // Score animation
    let bar = document.getElementById("scoreBar");
    bar.style.width = score + "%";
    bar.innerText = score + "%";

    // Show skills
    let skillsDiv = document.getElementById("skills");
    skillsDiv.innerHTML = "";
    skills.forEach(skill=>{
        skillsDiv.innerHTML += `<span>${skill}</span>`;
    });

    // Missing skills
    let missingDiv = document.getElementById("missingSkills");
    missingDiv.innerHTML = "";
    missing.forEach(skill=>{
        missingDiv.innerHTML += `<span>${skill}</span>`;
    });

    // Suggestions
    let sugList = document.getElementById("suggestions");
    sugList.innerHTML = "";
    suggestions.forEach(s=>{
        sugList.innerHTML += `<li>${s}</li>`;
    });

}