import {connect} from 'react-redux'
import {createIncrease,createDecrease,createAsyncDecrease} from '../../redux/Actions/countAction'
import React, { Component } from 'react'



class Count extends Component {

   increase=()=>{
       const {value}=this.sectionNode
       this.props.Increase(value*1)
   }

   decrease=()=>{
       const {value}=this.sectionNode
       this.props.Decrease(value*1)
   }

   IfOddIncrease=()=>{
      const {value}=this.sectionNode
      if(this.props.count % 2!==0){
        this.props.Increase(value*1)
      }
     
   }

   AsyncDecrease=()=>{
    const {value}=this.sectionNode
    this.props.AsyncDecrease(value*1,2000)
    
    
   }

    render() {

        return (
        <div>
                <h3>当前的求和为：{this.props.count},下方人数为{this.props.peopleNumber}</h3>
            <select ref={c=>this.sectionNode=c}style={{width:'100px'}} >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={this.increase}>+</button>&nbsp;
            <button onClick={this.decrease}>-</button>&nbsp;
            <button onClick={this.IfOddIncrease}>和为奇数再加</button>&nbsp;
            <button onClick={this.AsyncDecrease}>异步减</button>
        </div>
        )
    }
}


export default connect(
    state=>{
        return {count:state.count,peopleNumber:state.people.length}
    },
{
    Increase:createIncrease,
    Decrease:createDecrease,
    AsyncDecrease:createAsyncDecrease
})(Count)