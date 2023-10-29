document.getElementById("register").addEventListener('click', Register)

function Register() {
    let username = document.getElementById("name").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirm-password").value
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let region = document.getElementById("region").value
    let toc = document.getElementById("toc")

    if (username.length <= 7) {
        alert("Username must be 7 characters or more")
        return
    }

    if (password.length <= 7) {
        alert("Password must be 7 characters or more")
        return
    }
    if (checkAlNum(password) === false) {
        alert("Password must be alphanumeric")
        return
    }
    if (password !== confirmPassword) {
        alert("Password does not match")
        return
    }

    if (!male.checked && !female.checked) {
        alert("Gender not chosen")
        return
    }
    if (region === "") {
        alert("Region not chosen")
        return
    }

    if (!toc.checked) {
        alert("Terms and Conditions not agreed")
        return
    }

    alert("Registration Successfull")
    window.location.href = "home.html";
}

function checkAlNum(password) {
    let isNum = false
    let isAlp = false

    for (index = 0; index < password.length; index++) {
        if (isNaN(password[index])) {
            isAlp = true
        }
        if (!isNaN(password[index])) {
            isNum = true
        }
        if (isAlp && isNum) {
            return true
        }
    }
    return false
}