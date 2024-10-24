import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <div className="mt-[3rem] pb-[3rem]">
      <h1 className="font-bold tracking-wide text-black text-2xl md:text-6xl text-center">
        MEET OUR EXPERT<span className="text-red-500">CHEFS</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <TeamCard
          image="/images/sf.png"
          name={"Sreya"}
          position={"Kitchen Porter"}
        />
        <TeamCard
          image="/images/shef1.jpeg"
          name={"Sreya"}
          position={"Executive shef"}
        />
        <TeamCard
          image="/images/shef3.jpeg"
          name={"Devin"}
          position={"Head Chef"}
        />
      </div>
    </div>
  );
};

export default Team;
