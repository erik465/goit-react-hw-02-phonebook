import { StyledFilter } from "./ContactFilter.styled"

export const ContactFilter = () =>{
    return(
        <StyledFilter>
            <p>Filter: </p>
            <input type="text" placeholder="Filter"/>
        </StyledFilter>
    )
}