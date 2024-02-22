import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group">
      {/* img */}
      <div className="overflow-hidden">
        <Image
          src={project.image}
          width={270}
          height={270}
          alt=""
          className="group-hover:scale-110 transition-all duration-300"
        />
      </div>
      {/* title & price */}
      <div className="pt-[20px] pb-[28px] px-[30px]">
        <Link href="/">
          <h3 className="font-poppins text-black mb-[14px]">{project.name}</h3>
        </Link>
        <div className="text-xl font-poppins font-semibold text-orange">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
