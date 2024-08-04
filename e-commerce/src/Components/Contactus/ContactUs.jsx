import React, { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Banner from '../../Pages/Banner';


const ContactUs = () => {

    const name = useRef("");
    const phone = useRef("");
    const email = useRef("");
    const message = useRef("");

    const HandaleContact = (e) => {
        e.preventDefault();

        const Data = {
            name: name.current.value,
            phone: phone.current.value,
            email: email.current.value,
            message: message.current.value,
        }

        axios.post('http://localhost:8999/Contactus', Data).then(() => {
            Swal.fire({
                title: "Thanks",
                text: "Your Form are submitted",
                icon: "success"
            })
        })
        e.target.reset();
    }

    return (
        <>
            <Banner title='about us' page={'Contact'} />
            <section>
                <div className='container mx-auto bg-white items-center justify-center min-h-screen mt-10'>
                    <div className="grid lg:grid-cols-2  ">
                        <div className=" mt-10 rounded-lg  w-full max-w-2xl ">
                            <h2 className="lg:text-4xl text-3xl font-bold mb-6 text-gray-800">Get in Touch with Us</h2>
                            <p className='text-gray-400 my-12 text-justify pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, mollitia ducimus illum nesciunt esse rerum reprehenderit cum optio quasi provident, dolorem magnam est laboriosam odio et, voluptatum voluptates dicta quod placeat a possimus? Quidem eaque fugiat quia consectetur rerum hic, incidunt tempora natus laborum officiis dolor minima earum minus sint?</p>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Location</h3>
                            <p className="text-gray-700">Clostich - Apparel & Clothing Store<br />507-Union Trade Centre<br />123456<br />France</p>
                            <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Phone Number</h3>
                            <p className="text-gray-700">(+91) 9876-543-210</p>
                            <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Email Address</h3>
                            <p className="text-gray-700">sales@yourcompany.com</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
                            <form className="space-y-4" onSubmit={HandaleContact}>
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                    <input type="text" id="name" name="name" ref={name} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Phone</label>
                                    <input type="text" id="name" name="name" ref={phone} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" name="email" ref={email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea id="message" name="message" ref={message} className=" px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%]" rows="4" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                                </div>
                            </form>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
