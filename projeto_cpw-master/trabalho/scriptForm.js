$("#btn").click(function () {

    var decisao = confirm("Você tem certeza que deseja enviar o formulário?");
    
    if(decisao==1){
        
        var cpf = document.getElementById("cpf").value;
        var telefone = document.getElementById("telefone").value;

        if(telefone.length!=11 || cpf.length!=11){
            if(cpf.length!=11){
                alert("CPF inválido! ");
                document.getElementById("cpf").value="";
            }
            if(telefone.length!=11){
                alert("Telefone inválido! ");
                document.getElementById("telefone").value="";
            }
        }
        else{
            alert("O formulário será enviado!");
        }            
    }

});

