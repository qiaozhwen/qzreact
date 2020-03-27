import React, {Component} from 'react'
import './App.css'
export default class App extends Component{
    render(){
        return(
            <div className='box'>
                <div className='box-image'>
                    <img src={require('../assests/images/react.png')}/>
                </div>
                <div style={{color: 'white',width: '100%', textAlign:'center'}}>
                    <span>Welcome to your First React App, <a href='https://reactjs.org/'>Learn More</a></span>
                </div>
            </div>
        )
    }
}