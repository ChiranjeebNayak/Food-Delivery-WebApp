import React from 'react'
import Items from '../items'
function testing() {
    return (
        <div>
            <ul>
                {Items.map(x => <li>{x.menuName}</li>)}
            </ul>
        </div>
    )
}

export default testing