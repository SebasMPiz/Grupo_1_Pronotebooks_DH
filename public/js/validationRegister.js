                  
                    window.addEventListener("load", function(){
                       
                       let formulario = document.querySelector("form.listadoregistro")
                       
                       formulario.addEventListener("submit", function(e){
                        let errores = []

                        let campoNombre = document.getElementById ("name");
                        let campoApellido = document.getElementById  ("last_name");
                        let campoEmail = document.getElementById  ("email");
                        let campoPassword = document.getElementById  ("password");
                        let campoImagen = document.getElementById  ("imageInput");

                        if (campoNombre.value == ""){
                            errores.push ("El campo del nombre tiene que estar completo")
                        } else if (campoNombre.value.length < 2){
                            errores.push ("El nombre debe tener al menos 2 caracteres")
                        }

                        if (campoApellido.value == ""){
                            errores.push ("El campo del apellido tiene que estar completo")
                        } else if (campoApellido.value.length < 2){
                            errores.push ("El apellido debe tener al menos 2 caracteres")
                        }

                        if (campoEmail.value == ""){
                            errores.push ("El campo del email tiene que estar completo")}
                        //  else if (campoEmail.value.length < 3){
                        //     errores.push ("El camplo del mail debe ser un email valido")
                        // }

                        if (campoPassword.value == ""){
                            errores.push ("Debe ingresar una contraseña")
                        } else if (campoPassword.value.length < 8){
                            errores.push ("La contraseña debe tener al menos 8 caracteres")
                        }

                        // if (campoImagen.value == ""){
                        //     erores.push ("Debe ingresar una contraseña")
                        // } else if (campoPassword.value.length < 4){
                        //     errores.push ("La contraseña debe tener al menos 4 caracteres")
                        // }

                        if (errores.length > 0){
                            e.preventDefault();

                            let ulErrores = document.querySelector ("div.errores ul")
                            for (let i=0; i<errores.length; i++){
                                ulErrores.innerHTML += "<li>" + errores [i] + "<li>"
                            }
                        }

                       })
                    })