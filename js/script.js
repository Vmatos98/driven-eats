function controleDePedido(id){
    let el = document.getElementById(id).children[3].textContent;
    el = el.split(" ", 2);
    el = el.splice(1);
    alert(el);
    if (id === "prato1" || id === "prato2" || id === "prato3"){
        document.getElementById("prato1").style.border = "1px solid #FFFFFF";
        document.getElementById("prato2").style.border = "1px solid #FFFFFF";
        document.getElementById("prato3").style.border = "1px solid #FFFFFF";
        document.getElementById(id).style.border = "5px solid #32B72F";
    }
    if (id === "bebida1" || id === "bebida2" || id === "bebida3"){
        document.getElementById("bebida1").style.border = "1px solid #FFFFFF";
        document.getElementById("bebida2").style.border = "1px solid #FFFFFF";
        document.getElementById("bebida3").style.border = "1px solid #FFFFFF";
        document.getElementById(id).style.border = "5px solid #32B72F";
    }
    if (id === "sobremesa1" || id === "sobremesa2" || id === "sobremesa3"){
        document.getElementById("sobremesa1").style.border = "1px solid #FFFFFF";
        document.getElementById("sobremesa2").style.border = "1px solid #FFFFFF";
        document.getElementById("sobremesa3").style.border = "1px solid #FFFFFF";
        document.getElementById(id).style.border = "5px solid #32B72F";
    }
}