import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <>
    <div className="footer">
        made by copy @{year}
        </div>
    
    
    </>
  )
}

export default Footer