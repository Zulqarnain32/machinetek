import React from 'react'
import Button from 'react-bootstrap/Button';
import { SectionDataApi } from './SectionDataApi';
import { Link } from 'react-router-dom';
const Card = () => {
   console.log(SectionDataApi);
  return (
    <>
       <div className='parent-card'>
         {
            SectionDataApi.map((card,i) => (
               <div className='single-card'>
               {/* <img src="/assets/CottonRollersRepairing.jpg" alt="" className='card-img'/> */}
               <img src={card.cardImg} alt="" className='card-img'/>
               <h3 className='card-title mt-3 mx-3'>{card.title}</h3>
               <p className='cart-text mx-3 text-red'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatem, tempora, deserunt ad maxime sed iste aliquid asperiores nihil rerum nobis veniam modi. Minus natus ipsam magnam, ullam reiciendis maiores?</p>
               <Link to = "/services">
               <Button variant="primary" className='mx-3 mb-3 px-4'>Details</Button>{' '}
               </Link>
              
            </div>
            ))
         }
         
         
        </div>   
    </>
  )
}

export default Card
