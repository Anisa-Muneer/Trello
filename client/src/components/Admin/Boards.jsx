import React from 'react'
import { ToDo } from './ToDo'
import AddList from './AddList'


function Boards() {
    return (
        <div className=' justify-between mx-10 mt-10'>

            <div className='flex justify-end'>
                <AddList />
            </div>

            <div className='mt-10'>
                <ToDo />
            </div>



        </div>
    )
}

export default Boards
