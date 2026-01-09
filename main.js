let menu = document.querySelector(".nav")

function toggle(){
    menu.classList.toggle("open");
}

  function togglePassword() {
   const passwordInput = document.getElementById("password");
   const toggleEye = document.querySelector(".toggle-eye");

   if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleEye.textContent = "🙈";
   } else {
      passwordInput.type = "password";
      toggleEye.textContent = "👁️";
   }
}

