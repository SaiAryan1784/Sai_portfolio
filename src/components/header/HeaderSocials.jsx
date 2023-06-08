import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sai-aryan-goswami-a38924249/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SaiAryan1784" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/NUCLEAR1784" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials