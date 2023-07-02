import React from 'react'
import Checkboxx from '../components/Checkbox'


const tasks = [
   {
    objectid : 0,
    chore: "Dishes",
    time : 1800
   },
   {
    objectid : 1,
    chore: "Garbage",
    time : 600
   },
   {
    objectid : 2,
    chore: "Dusting",
    time: 1900
   }
]



const List = () => {
  return (
    <div>
        <ul>
            {tasks.map((item)=>{
                return (
                    <li key={item.objectid}>
                        <Checkboxx/>
                        <span>
                            {item.chore}
                        </span>
                        <br />
                        <span>⏲️: {item.time}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List