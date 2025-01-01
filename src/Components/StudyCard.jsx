const StudyCard = () => {
  return (
    <div className="my-24 space-y-6">
      <h3 className="text-3xl font-bold text-center">
        Discover Study Together
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card 01  */}
        <div className="border rounded-xl p-6">
          <figure className="w-full">
            <img
              className="w-64"
              src="https://i.ibb.co.com/7kj75Dq/12085329-20944157.jpg"
              alt="Study"
            />
          </figure>
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-2xl font-bold">Own Study Universe</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eligendi consequuntur quis ea fugiat quibusdam.
            </p>
          </div>
        </div>
        {/* card 02  */}
        <div className="border rounded-xl p-6">
          <figure className="w-full">
            <img
              className="w-64"
              src="https://i.ibb.co.com/7kj75Dq/12085329-20944157.jpg"
              alt="Study"
            />
          </figure>
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-2xl font-bold">Own Study Universe</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eligendi consequuntur quis ea fugiat quibusdam.
            </p>
          </div>
        </div>
        {/* card 03 */}
        <div className="border rounded-xl p-6">
          <figure className="w-full">
            <img
              className="w-64"
              src="https://i.ibb.co.com/7kj75Dq/12085329-20944157.jpg"
              alt="Study"
            />
          </figure>
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-2xl font-bold">Own Study Universe</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eligendi consequuntur quis ea fugiat quibusdam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
