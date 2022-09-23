                  
                    window.addEventListener("load", function(){
                       
                       let formulario = document.querySelector("form")
                       
                       formulario.addEventListener("submit", function(e){
                        let errores = []

                        let campoEmail = document.getElementById ("email");
                        let campoPassword = document.getElementById  ("password");
                       

                        if (campoEmail.value == ""){
                            errores.push ("Incluir el mail")
                            } 
                        // else if (campoEmail  ){
                        //     errores.push ("Debe ser un email valido")
                        // }

                        if (campoPassword.value == ""){
                            errores.push ("Debe ingresar una contraseña")
                        } 


                        if (errores.length > 0){
                            e.preventDefault();

                            let ulErrores = document.querySelector ("div.errores ul")
                            for (let i=0; i<errores.length; i++){
                                ulErrores.innerHTML += "<li>" + errores [i] + "<li>"
                            }
                        }

                       })
                    })