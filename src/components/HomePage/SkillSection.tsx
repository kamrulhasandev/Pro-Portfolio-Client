import Image from "next/image";

const SkillSection = async () => {
  let skills = [];

  try {
    const res = await fetch("http://localhost:5000/api/skill", {
      next: { revalidate: 30 },
    });
    const { data } = await res.json();
    skills = data;
    console.log(skills);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-20">
      <h1 className="text-2xl font-bold text-center text-white">
        My Expertise & Skills
      </h1>
      <p className="text-sm text-center mb-8 text-gray-400">
        Front-end and Back-end Technologies I Excel In
      </p>
      <div className="flex pt-10 flex-wrap justify-center gap-5 md:gap-12">
        {skills?.map((skill: any) => (
          <div key={skill.id} className="flex flex-col  items-center gap-1">
            <div>
              <Image src={skill.icon} alt={skill.name} width={35} height={35} />
            </div>
            <p className=" text-gray-400 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
