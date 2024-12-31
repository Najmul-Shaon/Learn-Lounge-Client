import React from "react";

const FAQ = () => {
  return (
    <div className="my-24 flex flex-col items-center">
      {/* <h3 className="text-center text-3xl font-bold text-orange-400 mb-6"> */}
      <h3 className="text-center text-3xl font-bold text-orange-400 mb-6">
        Frequently Asked Questions
      </h3>
      <div className="join join-vertical w-2/3">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Who is Learn Lounge for?
          </div>
          <div className="collapse-content">
            <p>
              <span className="text-orange-400">Learn Lounge</span> is for
              anyone who wants to get things done.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What kind of work can I do on Learn Lounge?
          </div>
          <div className="collapse-content">
            <p>
              As long as you stay on camera, you can use Focusmate for most
              kinds of work: desk work, cleaning, cooking, art, music, writing,
              reading, even at-home exercise! The main thing is to set up your
              camera so that your partner can see you while you focus on your
              tasks.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is Learn Lorunge Free?
          </div>
          <div className="collapse-content">
            <p>
              Yes! Learn Lounge is completely free for lifetime. You do not need
              a credit card or other payment information to start using Learn
              Lounge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
