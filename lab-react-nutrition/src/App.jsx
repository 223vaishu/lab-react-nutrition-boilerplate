import React from "react";
import FoodBox from './components/FoodBox';
import FoodData from './resources/FoodData'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      value:"",
      newArr:FoodData
    }
  }
 render(){
    let{value,newArr} = this.state;

    let handleChange = (event)=>{
      console.log(event.target.value)

    

    let filteredData = FoodData.filter((el,i)=>el.name.includes(event.target.value))

    this.setState({newArr:filteredData})

    }

   return (
    <>
    <div>
      <input type="text" placeholder="Search your food" onChange={handleChange}/>
    </div>
    <div>
      {newArr.map((el,i)=>(
          <FoodBox key={i} {...el}/>
        ))
        }
    </div>
    </>
  )
  
 }
}

    
// export default App
