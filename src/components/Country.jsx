import React, { useState } from 'react'

const Country = () => {
  const [data, setData] = useState({
    fruits: ['mango', 'apple', 'watermelon', 'banana', 'kiwi'],
    vegitables: ['pumpkin', 'onion', 'pumpkin']
  })
  const [sub, setsub] = useState([]);
  return (
    <div className='flex flex-col justify-center items-center'>
      select category:
      <div>
        <select className='border border-red-600' onChange={(e) => setsub(() =>
          data[e.target.value] !== undefined ? data[e.target.value] : []
        )}>
          <option value="">--select--</option>
          {
            Object.keys(data).map((item, i) => (
              <option key={item + i} value={item}> {item} </option>
            ))
          }
        </select>
        <br />
      </div>
      <br />
      select sub category:
      <div>
        <select className='border border-blue-500' disabled={sub.length > 0 ? false : true}>
          <option value="">--select--</option>
          {sub && sub.map((item, i) => (
            <option key={item + i} value={item}> {item} </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Country
