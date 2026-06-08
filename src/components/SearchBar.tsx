import {type ReactElement } from "react";

type Props = {
    search : string
    setQuery : (v : string) => void
}

const Searchbar = (props : Props) : ReactElement => {
    
    return (
        <input
            type="text" className="searchbar"
            value={props.search}
            onChange={e => props.setQuery(e.target.value)}
            placeholder="Buscar..."
        ></input>

    )
}
export default Searchbar