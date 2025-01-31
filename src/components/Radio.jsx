import React from 'react'

function Radio({name , id , icon , label, onCh}) {
    function onChang(e) {
        onCh(e)
    }
  return (
    <div className="input-container">
    <input onChange={(e)=>onChang(e)} type="radio" name={name} id={id} />
    <div className="radio-title">
        <p>{icon}</p>
        <label for="cheep">{label}</label>
    </div>
</div>
  )
}

export default Radio