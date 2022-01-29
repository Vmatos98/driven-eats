let valor1 = 0;     //valor do prato
let valor2 = 0;     //valor da bebida
let valor3 = 0;     //valor da sobremesa
function controleDePedido(id){
  
    
    
    
    let valorTotal = 0; 
    

    //caso o id pertença a algum prato
    if (id === "prato1" || id === "prato2" || id === "prato3"){
        //torna todas as bordas brancas
        document.querySelector('#prato1').style.border = "3px solid #FFFFFF";
        document.querySelector('#prato2').style.border = "3px solid #FFFFFF";
        document.querySelector('#prato3').style.border = "3px solid #FFFFFF";
        //seleciona a borda do prato e a torna verde
        document.querySelector('#'+id).style.border = "3px solid #32B72F";
        //obter valor do prato
        valor1 = document.querySelector('#'+id+' h4').textContent;
        //separa o R$ do valor e o remover 
        valor1 = valor1.split(" ", 2).splice(1);
        //substituir a virgula por ponto e tornar um float
        valor1 = parseFloat(valor1.toString().replace(',','.')); 
        console.log(valor1);
    }
    if (id === "bebida1" || id === "bebida2" || id === "bebida3"){
        document.querySelector('#bebida1').style.border = "3px solid #FFFFFF";
        document.querySelector('#bebida2').style.border = "3px solid #FFFFFF";
        document.querySelector('#bebida3').style.border = "3px solid #FFFFFF";
        document.querySelector('#'+id).style.border = "3px solid #32B72F";
        //obter valor da bebida
        valor2 = document.querySelector('#'+id+' h4').textContent;
        //separa o R$ do valor e o remover 
        valor2 = valor2.split(" ", 2).splice(1);
        //substituir a virgula por ponto e tornar um float
        valor2 = parseFloat(valor2.toString().replace(',','.')); 
        console.log(valor2);
    }
    if (id === "sobremesa1" || id === "sobremesa2" || id === "sobremesa3"){
        document.querySelector('#sobremesa1').style.border = "3px solid #FFFFFF";
        document.querySelector('#sobremesa2').style.border = "3px solid #FFFFFF";
        document.querySelector('#sobremesa3').style.border = "3px solid #FFFFFF";
        document.querySelector('#'+id).style.border = "3px solid #32B72F";
        //obter valor da bebida
        valor3 = document.querySelector('#'+id+' h4').textContent;
        //separa o R$ do valor e o remover 
        valor3 = valor3.split(" ", 2).splice(1);
        //substituir a virgula por ponto e tornar um float
        valor3 = parseFloat(valor3.toString().replace(',','.')); 
        console.log(valor3);
    }
    valorTotal = valor1+valor2+valor3; //valor total do pedido
    valorTotal = valorTotal.toFixed(2); //float com duas casas após o ponto
    let valorAtual = document.querySelector('.barra-topo h3 span');
    valorAtual.innerHTML = valorTotal;
    if(valor1 > 0 && valor2 > 0 && valor3 > 0){
        
        console.log(valorTotal);
        const elemento = document.querySelector(".barra-inferior button");
        elemento.innerHTML ="<span style='font-size:20px; color: #FFFFFF'>Fechar pedido</span>";
        elemento.style.background = "#32B72F";
    }

}

function fecharPedido(estado){
    if(valor1 > 0 && valor2 > 0 && valor3 > 0){
        if(estado === 'pedidosOk'){
            const notificacao = document.querySelector(".dados");
            notificacao.classList.remove("escondido");
        }
        if(estado === 'dadosOk'){
            const notificacao = document.querySelector(".dados");
            notificacao.classList.add("escondido");
        }
    }
    else{
        alert("Você precisa selecionar 3 produtos");
    }
}