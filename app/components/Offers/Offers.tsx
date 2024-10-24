const Offers = () => {
  return (
    <div className="mt-[5rem] pt-[5rem] pb-[5rem]">
      <div className="mx-auto items-center text-center">
        <h1 className="uppercase text-2xl md:text-4xl lg:6xl text-center font-bold text-black">
          Join for hot offers
        </h1>
        <p className="text-black text-opacity-55 mx-auto w-[85%] md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum distinctio natus esse officia cum! Cum sed nostrum minima qui
          consequuntur, excepturi corporis consequatur soluta magni inventore
          ducimus sit aspernatur!
        </p>
        <div className="text-center gap-[3rem] pt-4 space-x-3">
          <input
            type="text"
            className="w-[60%] py-4 bg-slate-300 outline-none p-4 rounded-lg"
            placeholder="Email Address"
          />
          <button className="text-white bg-green-800 outline-none transition-all duration-200 focus:bg-green-300 rounded-lg py-4 p-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
