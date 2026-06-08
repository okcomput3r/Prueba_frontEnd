import type { FileItem } from "./types";

export const mockFiles: FileItem[] = [
  {
    id: crypto.randomUUID(),
    name: "photo.png",
    size: 1200000,
    uploadDate: "2026-06-01",
    type: "image"
  },
  {
    id: crypto.randomUUID(),
    name: "contract.pdf",
    size: 430000,
    uploadDate: "2026-05-30",
    type: "pdf"
  },
  {
    id: crypto.randomUUID(),
    name: "docs",
    size: 0,
    uploadDate: "2026-06-02",
    type: "folder"
  },
  {
    id: crypto.randomUUID(),
    name: "report.docx",
    size: 840000,
    uploadDate: "2026-05-12",
    type: "document"
  },
  {
    id: crypto.randomUUID(),
    name: "budget.xlsx",
    size: 300000,
    uploadDate: "2026-04-21",
    type: "document"
  },
  {
    id: crypto.randomUUID(),
    name: "avatar.jpg",
    size: 900000,
    uploadDate: "2026-06-03",
    type: "image"
  },
  {
    id: crypto.randomUUID(),
    name: "manual.pdf",
    size: 670000,
    uploadDate: "2026-06-04",
    type: "pdf"
  },
  {
    id: crypto.randomUUID(),
    name: "notes1.txt",
    size: 10000,
    uploadDate: "2026-05-11",
    type: "other"
  },
  {
    id: crypto.randomUUID(),
    name: "notes2.txt",
    size: 10000,
    uploadDate: "2026-05-11",
    type: "other"
  },
  {
    id: crypto.randomUUID(),
    name: "notes3.txt",
    size: 10000,
    uploadDate: "2026-05-11",
    type: "other"
  },
  {
    id: crypto.randomUUID(),
    name: "notes5.txt",
    size: 10000,
    uploadDate: "2026-05-11",
    type: "other"
  }
];