import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    //en target descontrui el evento, event.target
    const onInputChange = ({ target }) => {
        // console.log(target);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
        
        // onNewCategory(categories => [inputValue, ...categories]);
    }
    return (
        //es lo mismo que onSubmit={(event) => onSubmit(event)}
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifts te recomiendo Dbz"
                //valor que tendra para agregar al state
                value={inputValue}
                //valor que caputra el cambio onChange={ (event) => onInputChange(event) }
                onChange={onInputChange}
            />
        </form>
    )
}
