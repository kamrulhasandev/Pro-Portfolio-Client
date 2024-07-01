const ExperienceSection = async () => {
  let experience = [];

  try {
    const res = await fetch("http://localhost:5000/api/experience", {
      next: { revalidate: 30 },
    });
    const { data } = await res.json();
    experience = data;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-20">
      <div className="bg-white backdrop-blur-md bg-opacity-5 shadow-md backdrop-filter py-10 px-5 mx-5 rounded-md">
        <div>
          <h1 className="text-2xl font-bold text-center text-white">
            My Work Experience
          </h1>
          <p className="text-sm text-center mb-8 text-gray-400">
            Building Tomorrow&apos;s Solutions Today
          </p>
        </div>
        <div className="flex flex-col gap-14">
          {experience?.map((exp: any) => (
            <div
              key={exp.id}
              className="md:flex gap-10 p-5 shadow-[0_10px_20px_rgba(240,_46,_170,_0.2)]"
            >
              <div className="md:w-1/3 mb-5 md:mb-0">
                <div className="flex justify-between items-center">
                  <p className=" text-white text-base">{exp.companyName}</p>
                  <p className=" text-gray-400 text-sm">
                    {exp.companyLocation}
                  </p>
                </div>
                <p className=" text-white text-sm">
                  {exp.designation} ({exp.jobType})
                </p>

                <p className=" text-gray-400 text-sm pt-2">{exp.startDate} - {exp.endDate ? exp.endDate : "Present"}</p>
              </div>

              <div className="md:w-2/3 border-l-2 border-gray-400 pl-5">
                <p className=" text-gray-400 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
