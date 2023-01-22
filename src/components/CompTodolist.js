import React, { useState } from 'react';
import Liste from './Liste';
import {v4 as uuidv4} from 'uuid';
export default function CompTodolist() {
    const [lsts,setLsts]=useState([
        {id:uuidv4(),Nom:"Abdel"}
    ]);
    const [lst,setLst]=useState('');
    const addLst=()=>{
        let nlsts=[...lsts];
        let nlst={};
        nlst.id=uuidv4();
        nlst.Nom=lst;
        nlsts.push(nlst);
        setLsts(nlsts);
        setLst("");
    };
    const dltLst=(idl)=>{
        let nlsts=lsts.filter((l)=>{
            return l.id!=idl;
        })
        setLsts(nlsts);
    };
  return (
    <div>
        <h1>Liste App</h1>
        <form>
        <p>Entrer un Nom:</p>
        <input type="text" value={lst} onChange={(e)=>{setLst(e.target.value)}} placeholder=' Ajouter un nom'/>
        <input type="button" value='Ajouter' onClick={addLst}  className='lst-input'/>
        </form>
        <br />
        <table>
            {

            lsts.map((l)=>{
                return  <tr key={l.id}> <td> <Liste  setLsts={setLsts} id={l.id} txt={l.Nom} Lstdn={l.dn} dlt={()=>dltLst(l.id)}/></td> </tr>
                        
            })
            }
        </table>

    </div>
  )
}
