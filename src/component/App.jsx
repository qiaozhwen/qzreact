import React, {Component} from 'react'
import './App.css'
export default class App extends Component{
    render(){
        return(
            <div className='box'>
                <div className='box-image'>
                    <img src={require('../assests/images/America.png')}/>
                </div>
            </div>
        )
    }
}