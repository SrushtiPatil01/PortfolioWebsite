let roles = ["Data Scientist", "Data Analyst"];
let roleIndex = 0;

function changeRole() {
    const roleElement = document.getElementById("role");
    roleElement.innerText = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeRole, 3000);
