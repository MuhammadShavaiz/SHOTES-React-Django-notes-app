import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add-button.svg'

const CreateButton = () => {
  return (
    <div>
      <Link to='/note/new' className='floating-button'>
        <AddIcon/>
      </Link>
    </div>
  )
}

export default CreateButton
