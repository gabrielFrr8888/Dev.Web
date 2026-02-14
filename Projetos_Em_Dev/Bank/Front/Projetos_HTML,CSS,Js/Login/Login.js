
function verif_s(senha){
    const validador= document.getElementById("validationServerPassword")
    const aviso= document.getElementById("validationServerPasswordFeedback")

 const regras = {
        tamanho: senha.length >= 5,
    };

    if (regras.tamanho ) {
        console.log("Senha válida!");

        if(validador.classList.contains("is-invalid") || 
        aviso.classList.contains("invalid-feedback")){

        validador.classList.replace("is-invalid","is-valid")
        aviso.classList.replace("invalid-feedback","valid-feedback")        
        }
        else{
        validador.classList.add("is-valid")
        aviso.classList.replace("feedback","valid-feedback")
        }
    aviso.textContent= `Prossiga`
    } 
    else{
        if(!regras.tamanho || senha === null)
        console.log("Senha inválida!. Tamanho Inferior ao necessário");
        else {
        console.log("Senha inválida!. Não há caracteres especiais");    
        }

        if(validador.classList.contains("is-valid") || 
        aviso.classList.contains("valid-feedback")){

        validador.classList.replace("is-valid","is-invalid")
        aviso.classList.replace("valid-feedback","invalid-feedback")        
        }
        else{
        validador.classList.add("is-invalid")
        aviso.classList.replace("feedback","invalid-feedback")
        }
    aviso.textContent= `Senha inválida!`
    }

}


function verif_u(usu){
   const usuRegex = /^[a-zA-Z0-9]{5,15}$/;

   const validador= document.getElementById("validationServerUsername")
   const aviso= document.getElementById("validationServerUsernameFeedback")

   if(!usuRegex.test(usu) || usu === null){
      if(validador.classList.contains("is-valid") || 
        aviso.classList.contains("valid-feedback")){

        validador.classList.replace("is-valid","is-invalid")
        aviso.classList.replace("valid-feedback","invalid-feedback")
        }

       else{
        validador.classList.add("is-invalid")
        aviso.classList.replace("feedback","invalid-feedback")
       }  
    aviso.textContent= `Usuario Incorreto`
    }

   else{
        if(validador.classList.contains("is-invalid") || 
        aviso.classList.contains("invalid-feedback")){

        validador.classList.replace("is-invalid","is-valid")
        aviso.classList.replace("invalid-feedback","valid-feedback")     
        }

        else{
        validador.classList.add("is-valid")     
        aviso.classList.replace("feedback","valid-feedback")
        }
    aviso.textContent= `Prossiga`    
   }
}
