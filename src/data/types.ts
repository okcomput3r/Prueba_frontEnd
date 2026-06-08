export type FileItem = {
  id: string;
  name: string;
  size: number;
  uploadDate: string;
  type: "image" | "pdf" | "document" | "folder" | "other";
  preview?: string;
};

export type ViewMode = "grid" | "list";

export type SortOption =
  | "name"
  | "date"
  | "size";