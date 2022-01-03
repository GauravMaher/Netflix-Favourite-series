import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from './Sdata';


// console.log(Sdata[0]);

// function ncard(val){
//     console.log(val);
// }


ReactDOM.render(
    <>

        <h1 className='heading_style'>List of top 5 Netflix series in 2020</h1>
         { Sdata.map((val, index) => {
             console.log(index);
            return(
        <Card imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
            );
        } )}
    </>
    , document.getElementById('root')
);
