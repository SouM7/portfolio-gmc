import React from 'react'
import styled from 'styled-components'

const Myfooter =styled.div`
display:flex;
align-items:center;
color : white;
font-size: 10px;
font-family: Georgia, 'Times New Roman', Times, serif;
gap:10px;
& .pic {
  width:35px;
  height:35px;

  border-radius:50%;
  background-color: rgb(36, 192, 184);
  padding: 8px;
}


& .icon{
  background-color: rgb(241, 80, 101);
  height:15px;
  width : 15px;
  color : white;


}

`

function FooterComponent(props) {
    return (
        <Myfooter>
            
     <img src={props.icone} alt="" className='pic' />
        <div>
          <h3>{props.contact}</h3>
          <p>{props.children}</p>
       </div>
      </Myfooter>
    )
}

export default FooterComponent
