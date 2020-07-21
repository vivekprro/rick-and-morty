import React from 'react'

import Cards from './Card'

const EpisodeLists = (props) => {

  const episodeLists = props.lists.map((list, i) => (
        <Cards
            key={i}
            name={list.name}
            code={list.episode}
            date={list.air_date} />
    ))

    return (
        <div className="lists">
            {episodeLists}
        </div>
    )
}

export default EpisodeLists
