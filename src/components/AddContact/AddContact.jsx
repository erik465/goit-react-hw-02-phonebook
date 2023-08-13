import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm, StyledError } from './AddContact.styled';
import * as Yup from 'yup';





const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .typeError('This must be (123-123-123)')
    .required('Required'),
  
});

export const AddContact = ({addContact}) =>{
    return(
        <Formik
        initialValues={{
          firstName: '',
          number: '',
         
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          addContact(values.name, values.number)
        }}
      >
        <StyledForm>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" />
          <StyledError name='name' component='span'/>

          <label htmlFor="number">Number</label>
          <Field 
            id="number" 
            name="number" 
            type="tel    " 
            placeholder="Number" 
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          <StyledError name='name' component='span'/>

         
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    )
}