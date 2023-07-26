import React from 'react'
import BannerYeni from '../assets/banneryeni.jpg'
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
       <div className='aboutTop' style={{backgroundImage:`url(${BannerYeni})`}}>
       </div>
       <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nostrum iure magni doloribus odit quas, vitae porro facere dolorem impedit temporibus, aspernatur ad cupiditate sed dignissimos enim sapiente, quae beatae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis veniam dolorem labore facilis, itaque odio voluptas quis corporis et magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quo, excepturi animi nostrum quas voluptas magni eligendi iste, eius quia natus possimus iure quod error modi quidem quibusdam esse aspernatur facilis fugit. Ad laboriosam est rem explicabo libero impedit suscipit quisquam error sunt, tempore corrupti soluta sequi magni consequatur excepturi!</p>
       </div>
    </div>
  )
}

export default About