import type { FileItem } from "../data/types";
import FileCard from "./FileCard";

type Props = {
  files: FileItem[];
  onDelete: (id: string) => void;
  onPreview: (
    image: string | null
  ) => void;
};


export default function FileGrid({
  files,
  onDelete,
  onPreview
}: Props) {
  return (
    <div className="areaPrincipal">
      {files.map(file => (
        <FileCard
          key={file.id}
          file={file}
          onDelete={onDelete}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}