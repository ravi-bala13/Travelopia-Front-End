import {useState} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Form() {

    // This variable used to change components of the page
    let [goToDetails, setGoToDetails] = useState(false)
    let [details, setDetails] = useState({
        "name": "",
        "email": "",
        "place": "india",
        "no_of_travellers": "",
        "amount": ""
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
        console.log("saving", payload)
        axios.post('http://localhost:8080/users', payload)
          .then(function (response) {
            console.log("response", response);
            setGoToDetails(true)
            alert("Registration Successfull")
          })
          .catch(function (error) {
            alert(error + " and Make sure emailid unique and backend should run")
            console.log("error", error);
          });
          
    }

  return ( goToDetails ? <Navigate to={`/details/${details.email}`} replace={true} /> :
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
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Place</h5>
                    </td>
                    <td>
                        <select name="place" className="select" onChange={handleChange}>
                            <option value="India">India</option>
                            <option value="Africa">Africa</option>
                            <option value="Europe">Europe</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>No Of Travelers</h5>
                    </td>
                    <td>
                        <input 
                        type="number"
                        placeholder='Enter No of Travelers'
                        value={details.no_of_travellers}
                        name='no_of_travellers'
                        className='input'
                        onChange={handleChange}
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
                        placeholder='Budget Per Person in Doller'
                        value={details.amount}
                        name='amount'
                        className='input'
                        onChange={handleChange}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
                <button type="submit" className="button">Submit</button>
        </form>
    </div>
  );
}

export {Form};
