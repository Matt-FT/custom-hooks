import { useState } from "react";




export const useForm = ( incialForm = {} ) => {
  
    const [formState, setFormState] = useState( incialForm );
   
     
   
     const onInputChange = ({ target }) =>{
        const { value, name } = target;
   
        setFormState({
           ...formState,
           [ name ]:value,
        });
     }

     const onResetForm = () =>{

       setFormState(incialForm);


   }

    return{
        ...formState,
           formState,
           onInputChange,
           onResetForm,
        
    }
}
