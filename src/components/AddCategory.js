import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const categories = props.categories;
    const setCategories = props.setCategories;


    const [inputValue, setInputValue] = useState(props.categories)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length!==0) {
            setCategories( [inputValue, ...categories] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input type="text" value = {inputValue}  onChange= { handleInputChange } />
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}