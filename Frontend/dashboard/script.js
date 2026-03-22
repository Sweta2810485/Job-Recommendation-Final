// Simple alert when Apply clicked
document.querySelectorAll(".job-card button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        alert("Application Submitted!");
    });
});