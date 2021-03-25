import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPerson} from '../../redux/Actions/person'

class Person extends Component {

    add=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const person={id:'1',name,age}
        this.props.addOne(person)
        this.nameNode.value=''
        this.ageNode.value=''
    }

    render() {
        return (
            <div>
                <h3>我是Person组件，上方求和为：{this.props.count}</h3>
                <input  ref={c=>this.nameNode=c}    type="text" placeholder='姓名' />
                <input  ref={c=>this.ageNode=c}    type='text' placeholder='年龄' />
                <button onClick={this.add} >添加</button>
                <ul>
                    {
                      this.props.people.map(person=>{
                          return <li key={person.id} >{person.name}-----{person.age}</li>
                      })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state=>({people:state.people,count:state.count}),
    {addOne:createAddPerson}
)(Person)