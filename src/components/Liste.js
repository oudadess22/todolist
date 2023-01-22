import React, { useRef } from 'react'
export default function Liste({txt,dlt,id,Lstdn,setLsts}) {
    const lstRef=useRef()
    const dn=(idl)=>{
      setLsts(valLst=>{
        let nValLst= valLst.map(lst=>{
          if(idl==lst.id){
            return {...lst,dn:!lst.dn};
          }
          return lst;
        })
        return nValLst;
      })
    }
  return (
    <div>
        <input type="text" value={txt} readOnly ref={lstRef} className={`${Lstdn? "valider":''}`} />
        <input type="button" value='Supprimer'onClick={dlt} className='lsts-input' />
        <input type="button" value='Done'onClick={e=>dn(id)} className='lsts-input'/>
    </div>
  )
}
