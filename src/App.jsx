import { useState } from 'react'
import './App.css'
import Data from './components/Data'
import List from './components/List'

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <>
    <section>
      <div className='wrapper'>
        <h1>Hello World</h1>
        <h1>{people.length} people have their birthdays today</h1>
        <List people={people} />
        <button onClick={()=> setPeople([])}> Clear all</button>
      </div>
    </section>
      
    </>
  )
}

export default App
