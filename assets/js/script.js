$(window).scroll(function(){
    if($("#menu").offset().top > 80){
        $("#menu").addClass("bg-dark");
    }else{
        $("#menu").removeClass("bg-dark");
    }
});

// funcionalidad del Modal
var modal = document.getElementById("modalBox");
var modalOpen = document.getElementById("openModal");
var closeModal = document.getElementsByClassName("close")[0];

modalOpen.onclick = function() {
    modal.style.display = "block";
}
closeModal.onclick = function() {
    modal.style.display = "none";
}

var alertMessage = document.getElementById("alertSend");
alertMessage.addEventListener("click", function() {
    alert("Mensaje enviado!");
});