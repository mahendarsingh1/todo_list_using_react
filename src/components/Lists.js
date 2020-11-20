import React from 'react';
import List from './List'

function Lists(props) {
    return (
        <ul>
            {props.array.map((item, i) => {
                return <List key={i} id={i} text={item} onCheck={props.delete} />
            })}
        </ul>
    )
}

export default Lists;