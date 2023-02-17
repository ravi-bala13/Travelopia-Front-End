import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Form() {

    let [details, setDetails] = React.useState({
        "name": "",
        "email": "",
        "place": "inida",
        "no_of_travellers": 0,
        "amount": 0
    })
    
    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addForm()        
    }

    const addForm = () => {
        const payload = {
            name: details.name,
            email: details.email,
            place: details.place,
            no_of_travellers: details.no_of_travellers,
            amount: details.amount
        }
        console.log(payload)
        axios.post('http://localhost:8080/users', payload)
          .then(function (response) {
            console.log("response", response.data);
          })
          .catch(function (error) {
            console.log("error", error);
          });
    }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='form'>

            <table>
                <tbody>
                <tr>
                    <td>
                        <h5>Name</h5>
                    </td>
                    <td>
                        <input 
                        type="text"
                        placeholder='Enter Name'
                        value={details.name}
                        name='name'
                        className='input'
                        onChange={handleChange}
                        // ref={}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Email</h5>
                    </td>
                    <td>
                        <input 
                        type="text"
                        placeholder='Enter Email Address'
                        value={details.email}
                        name='email'
                        className='input'
                        onChange={handleChange}
                        // ref={}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Place</h5>
                    </td>
                    <td>
                        <select name="place" className="select" onChange={handleChange}>
                            <option value="india">India</option>
                            <option value="africa">Africa</option>
                            <option value="europe">Europe</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>No Of Travelers</h5>
                    </td>
                    <td>
                        <input 
                        type="Number"
                        placeholder='Enter No of Travelers'
                        value={details.no_of_travellers}
                        name='no_of_travellers'
                        className='input'
                        onChange={handleChange}
                        // ref={}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Budget Per Person</h5>
                    </td>
                    <td>
                        <input 
                        type="number"
                        placeholder='Budget Per Person'
                        value={details.amount}
                        name='amount'
                        className='input'
                        onChange={handleChange}
                        // ref={}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
            <Link to={"/details"}>      
                <button className="submit-button">Submit</button>
            </Link>
        </form>
    </div>
  );
}

export {Form};
