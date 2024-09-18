import React from 'react'
import './Footer.css';

const Footer = () => {
const year=new Date()
  return (
    <footer>Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer