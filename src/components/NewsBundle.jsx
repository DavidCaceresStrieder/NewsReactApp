import React from 'react'
import { New } from './New'

export const NewsBundle = ({ articles, nameBundle }) => 
{    

  return (
    <>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
            <h1> { nameBundle } </h1>      
            </div>
            <div className='col-1'></div>
        </div>
      {      
        articles.map((notice, index) => 
          <div className='row' key={ index }>

            <div className='col-1'></div>
            <div className='col-10'>
              <New notice={ notice }/> 
            </div>
            <div className='col-1'></div>
          </div>) 
      }
    </>
  )
}
