import React,{useRef} from 'react';
import Alert from "react-bootstrap/Alert";
import './ContactMe.css'
import emailjs from '@emailjs/browser';
export default function ContactMe()
{
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_3s6qhaq', 'template_z6tqfja', form.current, 'lTZ-tUdFAUA5_4-YW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            <Alert variant="success" style={{ width: "42rem" }}>
                <Alert.Heading>
                    This is a success alert which has green background
                </Alert.Heading>
            </Alert>
            form.current.reset()
        };
      
    return(<>
        <div className='parent_contact' id='ContactMe'>
            <div className='title_contact'>
                <center> <h1>Contact Me</h1></center>
            </div>
            <div className='sub-parent_contact'>
                <div className='content_contact'>
                    <div className='image_contact'></div>
                    <div className='form'>
                        <center> <h1>Contact Me</h1></center>
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" placeholder='Enter your name here' />
                            {/* <br /> */}
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" placeholder='Enter your email ID here' />
                            {/* <br /> */}
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" name="subject" id="subject" placeholder='Enter your Email Subject here' />
                            {/* <br /> */}
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" placeholder='Enter your message here' />
                            <center><input type="submit" className="submit" value="Send"/></center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}