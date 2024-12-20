import React from 'react'

const HeroAnimation = () => {
  return (
    <div className="gradients-container z-0">
    <div className="absolute grad2 w-96 h-72 top-0 mix-blend-hardlight -right-40 rounded-full blur-3xl"></div>
    <div className="absolute grad3 w-64 h-96 top-0 mix-blend-hardlight -right-40 rounded-full blur-3xl"></div>
    <div className="absolute grad w-80 h-80 bottom-10 mix-blend-hardlight -left-40 rounded-full blur-3xl"></div>
    <div className="absolute grad4 w-72 h-96 bottom-10 mix-blend-hardlight -left-40 rounded-full blur-3xl"></div>
    <div className="absolute grad5 w-96 h-96 mix-blend-hardlight  rounded-full blur-3xl"></div>
  </div>
  )
}

export default HeroAnimation