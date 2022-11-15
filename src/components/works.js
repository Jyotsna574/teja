import React from 'react'
import tasky from '../tasskk.webp'
import pg from '../pg.jpeg'
import g from '../github3d.jpg'
import clock from '../clock3d.jpg'




function Works() {
    return (
      <div className='Works'>
          <div className='Myworks'> My works</div>
          <div className='work-cards'>
             <h1> Frontend Applications
             </h1>
            
            <div className='card1'>
          <div className='container'>
          <img src={tasky} ></img>
          <div className='middle'>
            <button className='tasky'>
            TASKY</button>
          </div>
        </div>
        </div>

        <div className='card2'>
        <div className='container'>
          <img src={pg} ></img>
          <div className='middle'>
            <button className='pg'>
            PASSWORD GENERATOR</button>
          </div>
        </div>
        </div>
        
</div>
<div className='work-cards'>
           <h1> API based Wed Applications </h1>
            <div className='container'>
            <img src={tasky} ></img>
            <div className='middle'>
              <button className='tasky'>
              TASKY</button>
            </div>
          </div>
  </div>

  

        

  <div className='work-cards'>
           <h1> MERN Stack Applications </h1>
            <div className='container'>
            <img src={tasky} ></img>
            <div className='middle'>
              <button className='tasky'>
              TASKY</button>
            </div>
          </div>
  </div>

  <div className='work-cards'>
             <h1> Fun Applications </h1>
            
            <div className='card1'>
          <div className='container'>
          <img src={tasky} ></img>
          <div className='middle'>
            <button className='tasky'>
            TASKY</button>
          </div>
        </div>
        </div>

        <div className='card2'>
        <div className='container'>
          <img src={pg} ></img>
          <div className='middle'>
            <button className='pg'>
            PASSWORD GENERATOR</button>
          </div>
        </div>
        </div>
        </div>



  
          
          
        </div>
        
        



           
     
           
          
     );
    }
    
    export default Works;