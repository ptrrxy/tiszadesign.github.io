function showError(errorElement, errorMessage){

    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
        error.classList.remove("display-error");
    }
}

let form = document.forms['send-email-forms'];
form.onsubmit = function(event){

    clearError();


    if(form.name.value === ""){
        showError("name-error", "Írj be egy nevet");
        return false;
    }


    if(form.phone.value === ""){
        showError("phone-error", "Írj be egy telefonszámot");
        return false;
    }

    if(form.email.value === ""){
        showError("email-error", "Írj be egy E-mail címet");
        return false;
    }

    if(form.topic.value === ""){
        showError("topic-error", "Írj be egy tárgyat");
        return false;
    }

    if(form.comment.value === ""){
        showError("comment-error", "Adj hozzá egy megjegyzést");
        return false;
    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "Sikeresen elküldted az üzenetet";

    event.preventDefault();
}