function controleDePedido(id){
    
    if (id === "prato1" || id === "prato2" || id === "prato3"){
        document.getElementById("prato1").style.border = "1px solid #FFFFFF";
        document.getElementById("prato2").style.border = "1px solid #FFFFFF";
        document.getElementById("prato3").style.border = "1px solid #FFFFFF";
        document.getElementById(id).style.border = "5px solid #32B72F";
    }
}    
