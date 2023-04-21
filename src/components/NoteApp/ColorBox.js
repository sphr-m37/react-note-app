import React from 'react'

export const ColorBox = ({ color, setInputColor }) => <div className='color-box' style={{ backgroundColor: color }} onClick={() => setInputColor(color)}></div>