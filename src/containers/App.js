import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }
  const [robots, setRobots] = useState([]) // returns our initial state 'robots' and a function to change that state 'setRobots'
  const [searchfield, setSearchfield] = useState('') // using array destructuring - a new javascript feature
  const [count, setCount] = useState(0)

  // lifecycle hook
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }))
  // }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) })
    console.log(count)
  }, [count]) // only run if count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }


  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  if (robots.length === 0) {
    return <h1 className="tc">Loading...</h1>
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={() => { setCount(count + 1) }}>Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;