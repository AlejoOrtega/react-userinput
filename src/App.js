import {useState, useEffect} from 'react'

function App() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState({})

  useEffect(()=>{
    const searchUp = async() => {
      if(input){
        await fetch(`https://jsonplaceholder.typicode.com/users/${input}`)
        .then(res => res.json())
        .then(data => setSearch(data))
      }
    };

    searchUp();
  },[input])

  const onChange = (e) => {
    if(!isNaN(e.target.value)){
      setInput(e.target.value)
    }
  }

  return (
    <div className="App">
       <input placeholder="Search only numbers..." value={input} onChange={onChange}/>
       <div>
          <h1>{search.name}</h1>
          <h2>{search.username}</h2>
          <p>{search.phone}</p>
       </div>
    </div>
  );
}

export default App;
