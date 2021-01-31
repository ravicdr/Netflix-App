import React from 'react'
import './index.css'
function Cards(props){ return(
    <>
    <div className="box" >
    <div className="card">
      <img className="card-img" src={props.imglink} width="300" height="300"/>
      <div className="card-info">
      <div className="writtenbox">
      <span className="card-category">A Netflix Original Series</span>
        <h3 className="card-title">{props.sname}</h3>
        
        <a href={props.alink} className="btn btn-primary">
        <button>Watch now</button>
        </a>
      </div>
      </div>
    </div>
    </div>
    
    
    </>
    )
    }
export default Cards;    