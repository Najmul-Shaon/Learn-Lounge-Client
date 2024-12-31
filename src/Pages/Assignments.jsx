import { div } from "framer-motion/client";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Assignments = () => {
  return (
    <div className="container mx-auto my-24">
      <div className="card lg:card-side shadow-xl">
        <figure className="w-2/5">
          <img
            className="w-full"
            src="https://i.ibb.co.com/7kj75Dq/12085329-20944157.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body w-3/5">
          <h2 className="card-title text-2xl">This is a nice title</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            accusamus cum beatae earum, quis quisquam?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laborum, dignissimos. Quam, obcaecati
            debitis, itaque non eligendi ex autem ea ipsam possimus adipisci rem
            expedita id nemo atque, alias totam dolorum.
          </p>
          <div className="flex items-center justify-between gap-6 my-6">
            <div>
              <h5 className="text-lg text-black/60">Effort Scale</h5>
              <p className="text-lg font-bold text-black">Easy</p>
            </div>
            <div>
              <h5 className="text-lg text-black/60">Total Marks</h5>
              <p className="text-lg font-bold text-black">100</p>
            </div>
            <div>
              <h5 className="text-lg text-black/60">Deadline</h5>
              <p className="text-lg font-bold text-black">10/01/2025</p>
            </div>
            {/* <p className="btn btn-outline text-lg">Effort Scale:Easy</p>
            <p className="btn btn-outline text-lg">Marks:100</p> */}
          </div>
          {/* button action: update delete view  */}
          <div className="card-actions justify-end">
            <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white">
              <GrUpdate></GrUpdate>
            </button>
            <button className="btn bg-orange-400 hover:bg-orange-300 text-2xl font-bold text-white">
              <MdDelete></MdDelete>
            </button>
            <button className="btn bg-orange-400 hover:bg-orange-300 text-lg font-bold text-white">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
