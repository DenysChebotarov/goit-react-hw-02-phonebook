import React from 'react'

export default function Filter({value, handleChange}) {
  return (
    <input name = 'filter' type="text" value = {value} onChange = {handleChange} />
  )
}
