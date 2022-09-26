window.addEventListener("load", function(){

    let formulario = document.querySelector("form.listadoregistroproductos")
                         
        formulario.addEventListener("submit", function(e){

        e.preventDefault()

        let errores = []

        let campoDescription = document.getElementById ("descripcion");                      
        let campoMarca = document.getElementById  ("marca");
        let campoPrecio = document.getElementById  ("precio");
        let campoCategory = document.querySelector( "input[name='category']:checked" )
                        ;

        let campoImagen = document.getElementById('image');
        let foto = campoImagen.files[0];
        let c = 0;
                      
        if (campoImagen.files.length == 0 || !(/\.(jpg|png|jpeg)$/i).test(foto.name)) {
            c = 1;
        alert('Ingrese una imagen con alguno de los siguientes formatos: .jpeg/.jpg/.png.');
                        } 

        if (campoDescription.value == ""){
            errores.push ("Debe describir el producto")
            } else if (campoDescription.value.length < 10){
            errores.push ("El nombre debe tener al menos 10 caracteres")
                        }

        if (campoMarca.value == ""){
            errores.push ("Debe indicar una marca")
            } else if (campoMarca.value.length < 2){
            errores.push ("La marca debe tener al menos 2 caracteres")
                        }

        if (campoPrecio.value == ""){
            errores.push ("Debe indicar un precio")
                        } 

        // if (campoCategory == null){
        //     errores.push ("Debe indicar una categoria valida")
        // }
        
        if (errores.length > 0){
            let ulErrores = document.querySelector ("div.errores ul")
            for (let i=0; i<errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores [i] + "<li>"
            }}
          })
})