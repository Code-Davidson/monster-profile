import React from 'react'
import './search.styles.css'

 const Search = ({placeholder,handleChange}) => (
       
<input
      type= 'search' 
       placeholder= {placeholder}
       onChange = {handleChange}
       className="search"
       />
    
    )

export default Search