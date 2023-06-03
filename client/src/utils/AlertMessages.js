import swal from "sweetalert";

// distintos mensajes que se invocan dentro del programa

export const correctMessage = () =>{
        swal({
            title: "Mascota Registrada",
            text: "Con exito",
            button: "Aceptar",
            icon: "success"
          })
          
          return;
}   

export const errorMessage = (error) =>{
 
    swal({
        title: "Error en el campo",
        text:   error,
        button: "Aceptar",
        icon: "error"
      })
      
      return;
}    

export const updateMessage = () =>{

    swal({
        title: "Registro Actualizado",
        text: "éxito",
        button: "Aceptar",
        icon: "success"
      })
}

export const connectError = () =>{
    swal({
        title: "error",
        text: "Error de conexión",
        button: "Aceptar",
        icon: "warning"
      })
}




