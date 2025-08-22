import { Gem, Gift, Handshake, Truck } from 'lucide-react'
import React from 'react'


const services = [ 
  {
    id : 1,
    title : 'Fast delivery',
    icon : <Truck/>
 }, 
   {
    id : 2,
    title : 'Consultant 24/7',
    icon : <Handshake/>
 }, 
   {
    id : 3,
    title : 'Bonus system',
    icon : <Gift/>
 }, 
  {
    id : 4,
    title : 'Quality assurance',
    icon : <Gem/>
 }, 
]

const Features = () => {
  return (
    <div className='flex gap-[170px] justify-center my-10'>
      {services.map((service) => (
        <div key={service.id} className="py-9 px-5 flex flex-col items-center gap-3 text-[#034032]">
          {service.icon}
          <p className='text-[#1B1B1B] max-w-[100px] text-center font-semibold'>{service.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
