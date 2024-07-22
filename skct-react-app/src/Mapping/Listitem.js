import React from 'react'

const Listitem = (props) => {
    console.log("props======>>>>>>",props.data)
  return (
    <div>
        <h1>List values {props.data}</h1>
        <ol>
            {
              props.data.map((list,index)=>(
                <li key={index}>{list}</li>
              ))
            }
            
        </ol>
        
    </div>
  )
}

export default Listitem