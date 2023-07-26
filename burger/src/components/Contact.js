import React from 'react'
import Banner from '../assets/banner.png'
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'  style={{backgroundImage:`url(${Banner})`}}>
        
      </div>
      <div className='rightSide'>
       <h1>Bizimle İletişime Geçin</h1>
       <form>
        <label>Ad Soyad</label>
        <input type="text" name='name' placeholder='Lütfen Adınızı Soyadınızı giriniz...'/>
        <label>E-mail</label>
        <input type="email" name='email' placeholder='Lütfen e-mailinizi giriniz...'/>
        <label>Mesaj</label>
        <textarea rows="6" name='mesage' placeholder='Lütfen mesajınızı giriniz...'>
        </textarea>
       </form>
      </div>
    </div>
  )
}

export default Contact