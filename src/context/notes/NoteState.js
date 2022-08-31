import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "62e518fc2d85df131dd15dbc",
          "user": "62e511e09abaf48055576f74",
          "title": "Aasdfe ewfsdafzx",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-07-30T11:41:48.431Z",
          "__v": 0
        },
        {
          "_id": "62e518fc2d85df131dd15dbe",
          "user": "62e511e09abaf48055576f74",
          "title": "Aasdfe ewfsdafzx",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-07-30T11:41:48.688Z",
          "__v": 0
        },
        {
          "_id": "62e519542d85df131dd15dc0",
          "user": "62e511e09abaf48055576f74",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2022-07-30T11:43:16.664Z",
          "__v": 0
        },
        {
          "_id": "62e519542d85df131dd15dc0",
          "user": "62e511e09abaf48055576f74",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2022-07-30T11:43:16.664Z",
          "__v": 0
        },
        {
          "_id": "62e519542d85df131dd15dc0",
          "user": "62e511e09abaf48055576f74",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2022-07-30T11:43:16.664Z",
          "__v": 0
        },
        {
          "_id": "62e519542d85df131dd15dc0",
          "user": "62e511e09abaf48055576f74",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2022-07-30T11:43:16.664Z",
          "__v": 0
        },
        {
          "_id": "62e519542d85df131dd15dc0",
          "user": "62e511e09abaf48055576f74",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2022-07-30T11:43:16.664Z",
          "__v": 0
        },
        {
          "_id": "62e51ca0718da1889b872f9d",
          "user": "62e511e09abaf48055576f74",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2022-07-30T11:57:20.924Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    // const s1 = {
    //     "name": "Harry",
    //     "class": "5b"
    // }
    // const [state, setstate] = useState(s1);
    // const update = ()=>{
    //     setTimeout(()=> {
    //     setstate({
    //         "name": "Larry",
    //         "class": "10b"
    //     })
    //  }, 1000);
    // }
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;