import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
        <header>
              <h1>{props.title}</h1>
        </header>
)


const Items = (props) => {
    console.log(props.items)
    return (
      <ul>
        <li>
          <h2>Ninetales</h2>
          <ul>
            <li>Category : Fox</li>
            <li>Type : Fire</li>
            <li>Height : 3' 07"</li>
            <li>Weight : 43.9 lbs</li>
          </ul>
        </li>

        <li>
          <h2>Psyduck</h2>
          <ul>
            <li>Category : Duck</li>
            <li>Type : Water</li>
            <li>Height : 2' 07"</li>
            <li>Weight : 43.2 lbs</li>
          </ul>
        </li>

        <li>
          <h2>Bellsprout</h2>
          <ul>
            <li>Category : Flower</li>
            <li>Type : Grass , Poison</li>
            <li>Height : 2' 04"</li>
            <li>Weight : 8.8 lbs</li>
          </ul>
        </li>

        <li>
          <h2>Dewgong</h2>
          <ul>
            <li>Category : Sea Lion</li>
            <li>Type : Water , Ice</li>
            <li>Height : 5' 07"</li>
            <li>Weight : 264.6 lbs</li>
          </ul>
        </li>

        <li>
          <h2>Ponyta</h2>
          <ul>
            <li>Category : Fire Horse</li>
            <li>Type : Fire</li>
            <li>Height : 3' 03"</li>
            <li>Weight : 66.1 lbs</li>
          </ul>
        </li>

      </ul>
    )
}

const Content = (props) => (
    <section>
        <Items items={props.items}/>
    </section>
)

const myPoke = () => {
     const title = ' My Pokedex '
    return (
        <section>
            <Header title={title} />
            <Content />
        </section>
        
    )
}

const element = document.getElementById('myPoke')
ReactDOM.render(<MyPoke />,element)
