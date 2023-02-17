import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function DetailsPage() {

    let [details, setDetails] = useState({
        "name": "",
        "email": "",
        "place": "inida",
        "no_of_travellers": 0,
        "amount": 0
    })
    const { emailId } = useParams();

    useEffect(() => {
      getForm()
    })

    const getForm = () => {
        axios.get(`http://localhost:8080/users/${emailId}`)
          .then(function (response) {
            console.log("response", response.data);
            setDetails(response.data)
          })
          .catch(function (error) {
            console.log("error", error);
          });
    }

  return (
    <div>
        <h1>Your Details</h1>
        <table>
                <tbody>
                <tr>
                    <td>
                        <h5>Name</h5>
                    </td>
                    <td>
                        <h5>{details.name}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Email</h5>
                    </td>
                    <td>
                        <h5>{details.email}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Place</h5>
                    </td>
                    <td>
                        <h5>{details.place}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>No Of Travelers</h5>
                    </td>
                    <td>
                        <h5>{details.no_of_travellers}</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Budget Per Person</h5>
                    </td>
                    <td>
                        <h5>{details.amount}$</h5>
                    </td>
                </tr>
                </tbody>
            </table>
            <Link to={"/"}> <button className="button back">Back to Home</button></Link>
    </div>
  );
}

export {DetailsPage};
