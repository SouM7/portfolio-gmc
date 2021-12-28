import React from 'react'
import FooterComponent from './FooterComponent'
import styled from 'styled-components'
import img1 from './images/phone.png'
import img2 from './images/email.png'
import img3 from './images/plus.png'
import img4 from './images/letter-c.png'
import icon1 from './images/linkedin.png'
import icon2 from './images/skype.png'
import icon3 from './images/cube.png'
import icon4 from './images/github.png'
const Myfooter=styled.div`
display:flex;
margin-top:259px;
justify-content: space-evenly;
align-items:center;
padding:15px 200px 15px 200px;
background-color: rgb(241, 80, 101);

`
function Footer() {
    return (
        <Myfooter>
           <FooterComponent  icone={img1} contact="Call" >
        <p>+213555000555</p>
       </FooterComponent>

       <FooterComponent  icone={img2} contact="Email" >
        <p>ea_kelai@esi.dz</p>
       </FooterComponent>
       <FooterComponent  icone={img3} contact="Contact me on : " >
     <div>
         <img src={icon1} alt=""  className='icon'/>
         <img src={icon2} alt="" className='icon' />
         <img src={icon3} alt=""  className='icon'/>
         <img src={icon4} alt="" className='icon'/>
     </div>
       </FooterComponent>
       
       <FooterComponent  icone={img4} contact="Go My Code feb-21" >
        <p>Recreated by Me</p>
       </FooterComponent>
        </Myfooter>
    )
}

export default Footer
