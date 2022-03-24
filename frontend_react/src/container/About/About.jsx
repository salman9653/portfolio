import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const abouts = [
    { title: 'Web Development', description: 'I am a good web developer.', imgURL: images.about01 },
    { title: 'Frontend Development', description: 'I am a good Frontend developer.', imgURL: images.about02 },
    { title: 'MERN Stack', description: 'I am a good MERN Stack developer.', imgURL: images.about03 },
    { title: 'Web Design', description: 'I am a good web designer.', imgURL: images.about04 }
];

const About = () => {
    return (
        <>
            <h2 id='about' className="head-text">
                I know that
                <span> Good Website</span><br />
                means
                <span> Good Business</span>
            </h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        index={about.title + index}
                    >
                        <img src={about.imgURL} alt={about.title} />
                        <h2 className='bold-text' style={{ marinTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marinTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default About