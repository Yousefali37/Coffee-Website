document.querySelector("#show").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
})

document.querySelector("#sign-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active"),
    document.querySelector(".veri-form").classList.add("active")
});
document.querySelector(".veri-form .close-btn2").addEventListener("click",function(){
    document.querySelector(".veri-form").classList.remove("active");
})

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

document.querySelector("#action").addEventListener("click",function(){
    document.querySelector(".veri-form").classList.remove("active"),
    input1.value='',
    input2.value='',
    input3.value='',
    input4.value='';
})

const successMsg = "Login successful!";

        // Get the button element
        const loginBtn = document.getElementById("sign");

        // Attach a click event listener to the button
        loginBtn.addEventListener("click", () => {
            // Display the success message when the button is clicked
            alert(successMsg);
        });