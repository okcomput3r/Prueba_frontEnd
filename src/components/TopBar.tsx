import {useRef, type ChangeEvent, type Dispatch, type ReactElement, type SetStateAction } from "react";
import Searchbar from "./SearchBar";

type Props = {
    search : string
    setQuery : (v : string) => void
    handleAdd : (e : ChangeEvent<HTMLInputElement>) => void
    handleViewMode : Dispatch<SetStateAction<"grid" | "list">>
}

const TopBar = (props : Props) : ReactElement => {
    const sidebar = document.querySelector("#sideBar")
    const inputRef = useRef<HTMLInputElement> (null)

    return (
        <div id="topBar">
            <button 
            type="button"
            className="menuBtn"
            onClick={() => {sidebar?.classList.toggle("open");}}
            >☰</button>
            
            <input
            type={'file'}
            ref={inputRef} 
            hidden
            multiple={true}
            onChange={e => props.handleAdd(e)}
            />

            <button
            type="button"
            className="uploadButton"
            onClick={() => {
                inputRef.current?.click()

            }}
            > Upload </button>
            <Searchbar search={props.search} setQuery={props.setQuery} ></Searchbar>
            <div>
                <button
                    type="button"
                    className="itemButton"
                    onClick={() => { 
                        props.handleViewMode("grid")
                    }}
                >⊞</button>
                <button
                    type="button"
                    className="itemButton"
                    onClick={() => { 
                        props.handleViewMode("list")
                    }}
                >☰</button>
            </div>
            
            <div>
                
                <button
                type="button"
                className="itemButton"
                ></button>
            </div>
        </div>
    )
}
export default TopBar