import { useEffect, useState, type ChangeEvent } from 'react'
import './App.css'

import type { FileItem  } from './data/types'
import      { mockFiles } from './data/mockfiles'
import TopBar   from './components/TopBar'
import ItemArea from './components/ItemArea'

function App() {



  // Hooks para el filtrado de la lista de items
  const [files, setFiles]   = useState<FileItem[]>(mockFiles)
  const [query, setQuery]   = useState<string>('')
  const [result, setResult] = useState<FileItem[]>(files)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
      if(query == null) 
        setResult(files)
      else
        setResult(files.filter(file => file.name.startsWith(query)))
  }, [query])

  // Cada vez que la lista de items se cactualize, se refrescará la lista de resultados que 
  // el usuario puede ver
  useEffect(() => {
    setResult(files)
  }, [files])
  // 


  // Handles de manipulación de archivos
  const handleDelete = (id : string) => {
    setFiles(files => files.filter(file => file.id !== id))    
  }

  const handleAdd = (e: ChangeEvent<HTMLInputElement>) => {
      const addedfiles = e.currentTarget.files
      
      if (!addedfiles) return

      var newFiles : FileItem[] = []
      for (const file of addedfiles)
      {
        var newFile : FileItem = {
          id: crypto.randomUUID(),
          name: file.name,
          size: file.size,
          uploadDate: new Date().toISOString().split("T")[0],
          type: file.type.toLowerCase().startsWith("image/")  ? "image"  : 
                file.type.toLowerCase() === "application/pdf" ?  "pdf"   : 
                file.type === "" ? "folder" : "other"
        }
        console.log(newFile)
        newFiles.push(newFile)
      }
      setFiles(files => [...files, ...newFiles])
  }
  //


  return (
    <>
        <section id="dashboard" >
          <div id="sideBar">
            <div className='top'> <h2>INTERNXT</h2></div>
            <div className="items"> 
              <button
              type="button"
              className="itemButton"
              > Inicio </button>
              <button
              type="button"
              className="itemButton"
              > Mi Drive </button>
              <button
              type="button"
              className="itemButton"
              > Compartidos </button>
              <button
              type="button"
              className="itemButton"
              > Papelera </button>
              <button
              type="button"
              className="itemButton"
              > Configuración </button>
            </div>
          
          </div>
          <div className='userUI' >
          <TopBar search={query} setQuery={setQuery} handleAdd={handleAdd} handleViewMode={setViewMode}></TopBar>
          <div className='ticks'></div>
          <ItemArea currentItems={result} onDelete={handleDelete} viewMode={viewMode}></ItemArea>
          </div>
        </section>
    </>
  )
}

export default App
