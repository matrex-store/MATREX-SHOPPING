// =========================
// Register
// =========================

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.onclick = function () {

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        localStorage.setItem("fullname", fullname);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Account Created Successfully");

        window.location.href = "login.html";

    };

}

// =========================
// Login
// =========================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.onclick = function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (email === savedEmail && password === savedPassword) {

            window.location.href = "account.html";

        } else {

            alert("Wrong Email or Password");

        }

    };

}

// =========================
// Account
// =========================

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

if (userName && userEmail) {

    userName.innerHTML = localStorage.getItem("fullname");

    userEmail.innerHTML = localStorage.getItem("email");

}

// =========================
// Logout
// =========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.onclick = function () {

        window.location.href = "login.html";

    };

}