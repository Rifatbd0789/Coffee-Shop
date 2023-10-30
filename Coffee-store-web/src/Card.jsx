import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side shadow-xl bg-[#F4F3F0]">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>
      <div className=" flex gap-10 m-5">
        <div>
          <h2 className="card-title">name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions ">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn hover:bg-indigo-700 hover:text-white">
              View
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn hover:bg-indigo-700 hover:text-white">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-400 hover:bg-indigo-700 hover:text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
