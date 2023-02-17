import React from "react";
import axios from "axios";

function DetailsPage() {

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
        hi
    </div>
  );
}

export {DetailsPage};
