function valida(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var idade = document.getElementById('idade').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;


    if(nome==''){
        alert('Digite um nome válido!');
        document.getElementById('nome').focus();
        return false;
    }
    else if(email==''){
        alert('Digite um email válido!');
        document.getElementById('email').focus();
        return false;
    }
    else if(cpf< 15){
        alert('Digite um cpf válido!');
        document.getElementById('cpf').focus();
        return false;
    }
    else if(idade<18){
        alert('Você não pode se cadastrar sendo menor de idade!');
        document.getElementById('idade').focus();
        return false;
    }
    else if(idade=''){
        alert('Digite uma idade válida');
        document.getElementById('idade').focus();
        return false;
    }
    else if(senha==''){
        alert('Digite uma senha válida!');
        document.getElementById('senha').focus();
        return false;
    }
    else if(confirmarSenha!=senha){
        alert('Confirme a senha corretamente!');
        document.getElementById('confirmarSenha').focus();
        return false;
    }
    
    else{
        alert('Olá, ' + nome +' bem vindo!');
        return true;        
    }
}