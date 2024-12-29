import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const singleCampaign = useLoaderData();
  const { _id, photo, title, selectVal, description, amount, deadline } =
    singleCampaign;
  const newDonate = {
    displayName,
    email,
    photo,
    title,
    selectVal,
    description,
    amount,
    deadline,
  };

  const handleDonate = (id) => {
    if (deadline > today) {
      fetch("https://crowncube-server.vercel.app/donated", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDonate),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Alhamdulillah!",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Sorry! Time's up.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="card container mx-auto w-96 shadow-xl">
      <figure>
        <img src={photo} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className=" space-x-2">
          <div>
            <button className="btn btn-sm btn-outline p-1 text-xs">
              Amount: ${amount}
            </button>

            <button className="btn btn-sm btn-outline p-1 text-xs">
              End:{deadline}
            </button>
          </div>
          <button className="btn btn-sm btn-outline p-1 text-xs">
            Support for: {selectVal}
          </button>
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => handleDonate(_id)} className="btn btn-primary">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
