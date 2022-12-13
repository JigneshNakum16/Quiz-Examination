import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import style from './Registration.module.css'

const Registration = () => {

    const [values, setValues] = useState({
        id : '',
        fname : '',
        age : '',
        email : '',
        mobile : '',
        fleid : ''

    })

    const Navigate = useNavigate()
    const handleChange = (event) =>{
        const id = Math.round(Math.random() * 1000)
        const { value , name } = event.target
        setValues({...values , [name]: value , id : id})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let info = JSON.parse(localStorage.getItem("Data")) || [];
        info.push(values);
        localStorage.setItem("Data", JSON.stringify(info));
        console.log('values', values)
        
        Navigate('/info')
        
    }
    

  return (
    <>
        <div className={style.form}>

            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" name='fname' id="fname" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" name='age' id="age" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Contact No.</label>
                    <input type="text" className="form-control" name='mobile' id="mobile"  onChange={handleChange} maxLength={10}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="email"  onChange={handleChange}/>
                </div>
                <div className="dropdown mb-4">
                    <label htmlFor="fleid" className="form-label">Employee Status</label>
                    <select className="form-select" aria-label="Default select example" onChange={handleChange} name="fleid" id="dropdown">
                        <option defaultValue>Choose Any Field</option>
                        <option value="Web Designer" >Web Designer</option>
                        <option value="React Developer">React Developer</option>
                        <option value="Angular Developer">Angular Developer</option>
                        <option value="MERN Developer">MERN Developer</option>
                        <option value="MEAN Developer">MEAN Developer</option>
                        <option value="Node Developer">Node Developer</option>
                        <option value="Laravel Developer">Laravel Developer</option>
                        <option value="UI/UX Developer">UI/UX Developer</option>
                        <option value="Flutter Developer">Flutter Developer</option>
                        <option value="Python Developer">Python Developer</option>
                    </select>                   
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    </> 
  );
};

export default Registration;
