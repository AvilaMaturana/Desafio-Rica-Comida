var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("Correo enviado correctamente")

    });
});

$(document).ready(function () {
    $("#ingredientes").on("dblclick",function () {
        $(this).css({
            "color": "red",
            
        });
    });
});

$(document).ready(function () {

    $("#ingredientes").on("dblclick",function () {
        $(this).css({
            "color": "red",            
        });               
    }); 

    $("#ingredientes").click(function () {
        $(this).css({
            "color": "#373A3C", 
        });
    });
      

    $("#preparacion").on("dblclick",function () {
        $(this).css({
            "color": "red",            
        });       
    }); 
    
    $("#preparacion").click(function () {
        $(this).css({
            "color": "#373A3C",
        });
    });   
    
});





$(document).ready(function () {
    $("#cardUno").on("click",function () {
        $("#textUno").toggle();
    });
});

$(document).ready(function () {
    $("#cardDos").on("click",function () {
        $("#textDos").toggle();
    });
});

$(document).ready(function () {
    $("#cardTres").on("click",function () {
        $("#textTres").toggle();
    });
});



funcionCorreo = () => {
    var correo = document.getElementById("correo").value;

    alert("Tu recta fue enviada  "+correo);
}