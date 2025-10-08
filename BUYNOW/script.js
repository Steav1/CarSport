function register() {
    let fullname = document.getElementById("fullname").value.trim();
    let age = document.getElementById("age").value.trim();
    let idcard = document.getElementById("idcard").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let model = document.getElementById("model").value;

    let errorMsg = document.getElementById("error-msg");
    let successMsg = document.getElementById("success-msg");

    // Reset messages
    errorMsg.textContent = "";
    successMsg.textContent = "";

    // Validation
    if (fullname === "" || age === "" || idcard === "" || phone === "" || address === "" || model === "") {
        errorMsg.textContent = " Please fill in all fields.";
        return;
    }

    // Success message
    successMsg.innerHTML = `Thank you for booking, <b>${fullname}</b>! 
    You have successfully booked a <b>${model}</b>. 
    We will contact you soon.`;
    
    // Clear inputs after booking
    document.getElementById("fullname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("idcard").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("model").value = "";
}
