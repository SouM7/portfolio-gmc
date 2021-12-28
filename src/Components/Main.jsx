import React from 'react'
import Circle from './Circle'
import './Main.css'

function Main(props) {
    return (
        <div className='container'>
            <img className='profilepic' src={props.image} alt={props.alt}/>

            <div >
                <div className='title'>
                <h1>Hello,</h1>
                <p>a bit about me : </p>
                </div>
            <div className='circleParent' >

                <Circle content="MY RESUME" classColor="btn-color"/>
                <Circle content="MY WORK" classColor="btn-color2"/>
                <Circle content="MY SKILLS" classColor="btn-color3"/> 

                </div>
                
                <p className='par'>Iam here to show you why React Js is so powerfull to build your web applications, and why you should become a developper.</p>
            
                <p>I have been working for three years, specializing in front-end developpement. I love Java Script as well as its frameworks jQuery and React.js.</p>
                </div>

            </div>

           
 

    
    )
}

export default Main
