// code for login validation.

const form = document.querySelector("form")
const  username = document.querySelector(".username")
const password = document.querySelector(".password")
const display = Document.querySelector("error")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    display.textContent = ""
    try{
         const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ username: username.value, password: password.value }),
            headers: { "Content-Type": "application.json"} 
         })
         const data = await res.json()
         if(res.status === 400 || res.status === 401 ){
            return display.textContent = `${data.message}. ${data.error ? data.error : " "}`
         }
    } catch (error) {
        console.log("Error: ", error.message);

    }
})