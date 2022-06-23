import { useState } from "react"

let names = ["Khozama","Mohammad","Lujain","Nada","Ayman"]
function App() {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="App">
      <h2>Search filtering</h2>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
  
        {names
          .filter(name => name.match(new RegExp(searchValue, "i")))
          .map(name => {
            return <div key={name}>{name} </div>
          })}

    </div>
  )
}

export default App