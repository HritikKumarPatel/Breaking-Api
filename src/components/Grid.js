import React from 'react'
import CharacterItem from './charItem'


const Grid = ({items, isLoading}) => {
    return (
        <div>
            {isLoading?<h1>Loading...</h1>:<section className="cards">
                {items.map(item=>[
                    <CharacterItem item = {item}/>
                ])}
                </section>}
        </div>
    )
}

export default Grid
