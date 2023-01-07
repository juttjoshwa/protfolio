import React from 'react'
import { useState, useRef } from "react"
import "./Contact.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Contact = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [massage, setMassage] = useState("")
    const [file, setFile] = useState("")


    // console.log(formdata)








    // const handleFetch =(event)=>{
    //     event.preventDefault()

    // }

    // const handleChange = (event) => {
    //     // setFile({value})
    //     setFormData((formdata) => {
    //         return {
    //           ...formdata,
    //           [event.target.name]: event.target.value
    //         };
    //       });
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: name,
            Email: email,
            feedback: massage,
            file: file,
        }
        fetch("http://localhost:5000/adduser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).then((r) => console.log(r))
    }

// }

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const payload = {}
//     setFormData( {formdata} )
//     // console.log(formdata)
//     // fetch("http://localhost:5000/adduser").then(r => r.json()).then(clor => setFormData(clor))
//     fetch("http://localhost:5000/adduser",{
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//     }).then((r) => console.log(r))
// }


const darkcss = props.mode;
// console.log(darkcss)

const Darkcss = {
    background: "linear-gradient(to right, rgb(111, 89, 139), #978abe, #dfd5ed)",
}
let darkStyle;
if (darkcss === "dark") {
    darkStyle = Darkcss
}

const DecodeColor = {
    color: "aliceblue"
}
let DarkText;
if (darkcss === "dark") {
    DarkText = DecodeColor
}



return (
    <>
        <div method="post" style={darkStyle} className='contactHeader'>
            <h2 data-aos="fade-up" style={DarkText} className='Feelfreetocontact'>Feel free to Contact</h2>
        </div>
        <div>
            <iframe
                data-aos="fade-up"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.739826880731!2d74.36044261448018!3d31.421293559172966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907a89a029201%3A0xff45a1ecca8b40fa!2sNishter%20Colony%20Main%20Bazar%2C%20Nishter%20Colony%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1672979374991!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
            <form data-aos="fade-up" data-aos-duration="800" onSubmit={handleSubmit}>
                <div data-aos="fade-up" data-aos-duration="800" style={darkStyle} className='formContainer'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Name</label>
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            name="name"
                            id="Name"
                            placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email"
                            className="form-control"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="email"
                            id="email"
                            placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label text-xl-start">Description About Project</label>
                        <textarea className="form-control"
                            value={massage}
                            onChange={e => setMassage(e.target.value)}
                            name="massage"
                            id="text"
                            rows="3"></textarea>
                    </div>
                    <div>
                        <label htmlFor="formFileLg" className="form-label">Example by Picture</label>
                        <input className="form-control form-control-lg"
                            value={file}
                            onChange={e => setFile(e.target.value)}
                            name="file"
                            id="formFileLg"
                            type="file" />
                    </div>
                    {/* <button className='btn-primary'>Place Project</button> */}
                    <button value="submit" type="submit" className="btn btn-primary btnPlaceProject">Place Project</button>
                </div>
            </form>
        </div>
    </>
)
}

export default Contact