import React from 'react';
import { choose } from '../constants';
import './Choose.css';

const Choose = () => {
  return (
    <>
        <div id="choose" className='container'>
            <div className='container-card'>
                {choose.map((item) => (
                    <div key={item.id} className='card'>
                        <item.icon className="icon-choose"/>
                        <h1 className='h1-choose'>{item.title}</h1>
                        <p className='p-choose'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Choose