import React from 'react';
import Search from './component/search/search'
import './App.css';
import CardList from './component/card-list/card-list.components'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      search: ''

    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  
handleChange = (e) =>{
   this.setState({search:e.target.value })
}





 render(){
   const{monsters,search} = this.state
   const filteredItems = 
     monsters.filter( monster=> monster.name.toLowerCase().includes(search.toLowerCase()))
   
  return(
    <div className='App'>
    <h1>Welcome Monsters</h1>
   
       <Search
        placeholder='search monsters'
        handleChange ={this.handleChange} 
       />
     
    <CardList monsters= {filteredItems}/>
    </div>

  )
 }
}
 

export default App;
