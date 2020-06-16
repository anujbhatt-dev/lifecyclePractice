import React,{Component} from 'react';
import Useeffect from './use-effect/use-effect';

class Lifecycle extends Component{
    constructor(props){
      super(props)
    }

    // static getDerivedStateFromProps(){
    //   console.log("getDerivedStateFromProps");
    // }

    componentDidMount(){
      console.log("componentDidMount");
    }

    shouldComponentUpdate(){
      console.log("shouldComponentUpdate");
      return {message:"updated"}
    }

    componentDidUpdate(a,b,s){
      console.log("componentDidUpdate");
      console.log(s);
      }

   state={
     name:"anuj",
     last:"bhatt",
     swap:false
   }
   swapHandler=(e)=>{
       this.setState({name:this.state.last,last:this.state.name})
   }

  render(){
    return (
      <div>
       <div>

        <button onClick={this.swapHandler}>swap</button>
        {this.state.name+" "+this.state.last}
      </div>
       <Useeffect prop={this.state}/>
      </div>

    )
  }
}
export default Lifecycle;
