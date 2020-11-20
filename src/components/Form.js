import React, { useState } from 'react';

function Form(props) {

    const [inp, setInp] = useState('');

    function handleChange(e) {
        var value = e.target.value;
        setInp(value);
    }

    function handleClick(e){
        e.preventDefault();
        if(inp==='') return;
        props.onSubmit(inp);
        setInp('');
    }

    return (
        <form className="form">
            <input type="text" value={inp} onChange={handleChange} required={true} />
            <button onClick={handleClick}> <span>Add</span>
            </button>
        </form>
    )
}

export default Form;