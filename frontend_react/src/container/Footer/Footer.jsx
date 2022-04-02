import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;
    const handeChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handeSubmit = () => {

    }
    return (
        <>
            <h2 className="head-text">
                Take a Coffee and chat with me
            </h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:salman9915189734@gmail.com" className='p-text'>salman9915189734@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+918708860428" className='p-text'>+91 8708860428</a>
                </div>
            </div>

            <div className='app__footer-form app__flex'>
                <div className="app__flex">
                    <input type="text" className="p-text" name='name' placeholder='Your Name' value={name} onChange={handeChangeInput} />
                    <input type="email" className="p-text" name='email' placeholder='Your Email' value={email} onChange={handeChangeInput} />
                </div>
                <div>
                    <textarea
                        className='p-text'
                        placeholder='Your Message'
                        value={message}
                        name="message"
                        onChange={handeChangeInput} />
                </div>
                <button type='button' className='p-text' onChange={handeSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            </div>

        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
