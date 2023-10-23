import React from 'react'
import {BiWater} from 'react-icons/bi'

const Promo = () => {
    const promo = [{
        name:'10% discount',
        status:'unSuccessfull',
        price:"-$288"
    }]


  return (
    <div>
        <h3>Promo</h3>
        <div>
            {
                promo.map((val,i) => {
                    return 
                    <div className='flex flex-row items-center'>
                        <div className='h-10 w-10 bg-indigo-900 rounded-lg align'>

                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Promo