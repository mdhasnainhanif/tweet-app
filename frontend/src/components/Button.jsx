import React from 'react'

const Button = ({className, name, imgSrc, imgClass, imgAlt, onClick}) => {
  return (
    <>
        <button className={className}>{name}&nbsp;{imgSrc && <img className={imgClass} onClick={onClick} src={imgSrc} alt={imgAlt} />}</button>
    </>
  )
}

export default Button