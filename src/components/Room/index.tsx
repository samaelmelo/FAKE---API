import axios from 'axios'
import { useState, useEffect } from 'react'

interface RoomProps{
  sala: number,
  professor: string,
  aula: string,
}

export function Room(){ //inicio o state como array, depois aplico uma tipagem para cada posição do array
  const [ rooms, setRooms ] = useState<RoomProps[]>([])
  
  useEffect(()=>{

    (async() =>{
      const response = await axios.get('http://localhost:3000/api/rooms')
      setRooms(response.data)
    })();

  },[])

  return(
    <>
        <h1 style={{textAlign: 'center'}}>Universidade do Estado do Amazonas</h1>
      {rooms?.map(item => (
     <div key={item.sala}>
        <ul>
          <li>Sala: {item.sala}</li>
          <li>{item.aula === 'Canto' ? `Professora: ${item.professor}` :  `Professor: ${item.professor}`} </li>
          <li>Aula: {item.aula}</li>
          <hr />
        </ul>
    </div>

      ))}
    </>
  )
}