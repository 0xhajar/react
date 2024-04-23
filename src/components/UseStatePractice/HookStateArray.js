import React, {useState} from 'react'

export default function HookStateArray() {
    const [items, setItems] = useState([]);
    const [employee, setEmployee] = useState("");
    
    const addItems = () => {
        setItems([...items, {id: items.length, name: employee},]);
        setEmployee("");
    }
  return (
    <div>
        <h2>Add Employee</h2>
        <input type="text"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
        ></input>
        <button onClick={() => addItems()}>Add Items</button>
        <ul>
            {items.map((item) =>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}
