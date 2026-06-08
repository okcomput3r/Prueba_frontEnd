import type { FileItem } from "../data/types";

type Props = {
  file: FileItem;
  onDelete: (id: string) => void;
};

export default function FileCard(props : Props) {
  return (
    <div className="fileItem">
        <div>{icon(props.file.type)}</div>

        <h4>{props.file.name}</h4>

        <small>
          {formatSize(props.file.size)}
        </small>

        <button className="deleteButton"
          onClick={() =>
            props.onDelete(props.file.id)
          }
        >
          🗑
        </button>
    </div>
  );
}

function icon(type: string) {
  const map: Record<string, string> = {
    image: "🖼️",
    pdf: "📄",
    folder: "📁",
    document: "📝",
    other: "📦"
  };

  return map[type];
}

function formatSize(bytes: number) {
  return `${(
    bytes / 1024
  ).toFixed(1)} KB`;
}