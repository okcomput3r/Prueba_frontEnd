import type { FileItem } from "../data/types"
import FileCard from "./FileCard"

type Props = {
    currentItems : FileItem[]
    onDelete : (id : string) => void
    viewMode : "grid" | "list"

}

const ItemArea = (props: Props) => {
    return (
        <div className={`itemArea ${props.viewMode}`}>
            {props.currentItems.map(file => (
                    <FileCard
                      key={file.id}
                      file={file}
                      onDelete={props.onDelete}
                    />
                  ))}
        </div>
    )
}
export default ItemArea