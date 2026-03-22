document.getElementById("upload").addEventListener("change", function(event) {
    
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("profilePreview").src = e.target.result;
            document.querySelector(".overlay").computedStyleMap.display = "none";

        };

         reader.readAsDataURL(file);   
        
    }
});
document.querySelector(".basic-btn").addEventListener("click", function() {
    alert("Go to Basic Details section");
});
document.querySelector("button").addEventListener("click",function(){

alert("Complete your profile to get better AI job recommendations!");

});
// Toggle dropdown on click
const profile = document.getElementById("profileMenu");

profile.addEventListener("click", function(e) {
    e.stopPropagation(); // prevent closing immediately
    profile.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", function() {
    profile.classList.remove("active");
});

document.getElementById("logoutBtn").addEventListener("click", function(e) {
    e.preventDefault();

    alert("Logged out successfully!");

    // redirect to landing page
    window.location.href = "../landing.html";
});
function loginUser() {
    // after login success
    window.location.href = "../profile page/profile.html";
}