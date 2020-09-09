import React, { useState } from 'react';

const Contact=()=>{

    const [data, setData]=useState({
        name:'',
        phone:'',
        email:'',
        mssg:'',
    });
    const InputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `My Name is ${data.name}. Mobile Number ${data.phone}. My Email is ${data.email}. My mssg is ${data.mssg}`
        );
    };
    return(
    <>
    <div className="my-5">
            <h1 className="text-center">Contact us</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit}>
                   <div className="mb-3">
                       <input type="text" className="form-control" id="name" 
                       name="name"
                       value={data.name}
                       onChange={InputEvent}
                       placeholder="Full Name"/>
                   </div>

                   <div className="mb-3">
                       <input type="numbers" className="form-control" id="phone" 
                       name="phone"
                       value={data.phone}
                       onChange={InputEvent}
                       placeholder="Phone Number"/>
                   </div>

                   <div className="mb-3">
                       <input type="email" className="form-control" id="email" 
                       name="email"
                       value={data.email}
                       onChange={InputEvent}
                       placeholder="Email"/>
                   </div>

                
                    <div className="mb-3">
                     <textarea className="form-control" id="mssg" rows="3"
                     
                     name="mssg"
                     value={data.mssg}
                     onChange={InputEvent}
                     placeholder="Type Your Message"></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" type="submit">
                            Submit
                        </button>
                    </div>
                    </form>

                </div>

            </div>

        </div>
    </>
    );
};
export default Contact;