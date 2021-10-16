import React from 'react'
import { useState } from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState("")
    const onChange = (e)=>{
        setText(e.target.value);
        getQuery(e.target.value);
    }

    return (
        <section className="search">
            <form>
        <input
           type="text"
           className="form-control"
            placeholder = "Seach what you came for"
            autoFocus
            value={text}
            onChange={(e)=>{
                onChange(e);
            }}
        />
        </form>
        </section>
    )
}

export default Search
