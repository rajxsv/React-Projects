import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://api.github.com/users/rajxsv')
      .then(response => response.json())
      .then(
        data => {
            setData(data)
        }
      )
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' > Github Followers : {data.followers}
        <img src={data.avatar_url} />
    </div>
  )
}

export default Github