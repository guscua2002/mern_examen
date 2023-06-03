import * as yup from 'yup';

const messagOne = "Nombre debe tener entre 3 y 40 caracteres comunes";
const messageTwo = "Tipo debe tener entre 3 y 40 caracteres comunes";
const messageThree = "Descripcion debe tener entre 3 y 40 caracteres comunes";



   export const petsSchema = yup.object().shape({                                                                           
    petname: yup.string().typeError(messagOne).min(5,{ message: messagOne }).max(40,{ message: messagOne }).matches(/^(?!\s)[a-zA-Z0-9_-]*[^$%&()/#"'!*?]*$/,{ message: messagOne }).required({message: messagOne}),
    pettype: yup.string().typeError(messageTwo).min(5,{ message: messageTwo }).max(40,{ message: messageTwo }).matches(/^(?!\s)[a-zA-Z0-9_-]*[^$%&()/#"'!*?]*$/,{ message: messageTwo }).required({message: messageTwo}),
    petdescription: yup.string().typeError(messageThree).min(5,{ message: messageThree }).max(40,{ message: messageThree }).matches(/^(?!\s)[a-zA-Z0-9_-]*[^$%&()/#"'!*?]*$/,{ message: messageThree }).required({message: messageThree}),
   
    });

   