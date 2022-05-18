//Pegar o DOM -> pega o dom com o document
//Acessa as propriedades do DOM - Olha dentro do navegador  
//Define o que quer pegar. ID? Class? Tag? 
//Os elementos obtidos geralmente são um array []
//Para modificar um elemento é necessario acessar cada um deles 

var trs = document.getElementsByTagName("tr");
for (let index = 0; index < trs.length; index++) {
    const tr = trs[index];
    
    if (index %2 == 0){
        tr.className = "cleonice";   
    }
    else{
        tr.className = "valeria"; 
    }
}