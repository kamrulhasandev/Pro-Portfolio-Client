import Image from "next/image";
import Link from "next/link";
import { TbWorldShare } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
const ProjectSection = async () => {
  let projects = [];

  try {
    const res = await fetch("http://localhost:5000/api/project", {
      next: { revalidate: 30 },
    });
    const { data } = await res.json();
    projects = data;
    console.log(projects);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="relative min-h-[100vh] py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg2.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-2 pt-10">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Get to Know My Projects
        </h1>
        <p className="text-sm text-center mb-8 text-gray-400">
          Showcasing My Web Development Projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center ">
          {projects?.map((project: any) => (
            <div
              key={project.id}
              className="flex flex-col items-center justify-between  bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-md text-white p-5 rounded-xl border border-gray-500"
            >
              <div className="max-w-xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={600}
                  className=" rounded-lg"
                />
              </div>
              <p className="mt-2 text-gray-400 text-sm font-bold">
                {project.name}
              </p>
              <div className="flex flex-wrap mt-2">
                {project.technologies.map((tech: any, index: any) => (
                  <span
                    key={index}
                    className="text-xs text-gray-800 bg-gray-200 px-2 py-1 rounded-full m-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-3 mt-2">
                  <Link href={project.link} className="flex gap-1 items-center">
                    <TbWorldShare /> Live
                  </Link>
                  <Link
                    href={project?.githubServer}
                    className="flex gap-1 items-center"
                  >
                    <FaGithub /> Server
                  </Link>
                  <Link
                    href={project?.githubClient}
                    className="flex gap-1 items-center"
                  >
                    <FaGithub /> Client
                  </Link>
                  <Link className="flex gap-1 items-center" href={project.link}>
                    <CiLocationArrow1 /> Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
