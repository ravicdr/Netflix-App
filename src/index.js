
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';  
import Sdata from './Sdata';
import './index.css';
function ncard(val){
  return(
<Cards imglink={val.imglink} sname={val.sname } alink={val.alink}/>
  );
}
const heading={

}
ReactDOM.render(<>

<div className="Lox">
<h1>Top Netflix Series</h1>
{Sdata.map(ncard)}
</div>
 

 </>
,
  document.getElementById('root')
);


