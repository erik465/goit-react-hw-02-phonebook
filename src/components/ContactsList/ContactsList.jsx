import {StyledList} from './ContactsList.styled'

export const ContactsList = ({contacts}) =>{
    return (
        <StyledList > 
            {contacts.map(contact =>{
                return( 
                <li key={contact.id}>
                    <p>{contact.name} : {contact.number}</p>
                    <button>Delete</button>
                </li> 
                )
            })}
        </StyledList>
    )
}