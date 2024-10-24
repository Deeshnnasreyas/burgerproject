import Image from "next/image";
interface Props {
  image: string;
  name: string;
  position: string;
}
const TeamCard = ({ image, name, position }: Props) => {
  return (
    <div className="items-center hover:scale-75 transition-all duration-100">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="rounded-2xl mx-auto"
      />
      <div className="mt-[3rem] text-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black">
          {name}
        </h1>
        <p className="opacity-50 text-black">{position}</p>
        <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsam maiores facere quisquam esse, ipsa nobis labore sed alias quos
          fuga ab necessitatibus architecto, culpa eius. Consectetur, modi.
          Repellendus, eum!
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
