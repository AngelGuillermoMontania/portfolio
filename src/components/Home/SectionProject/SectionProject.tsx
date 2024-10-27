import anime from "animejs";
import { useEffect } from "react";
import { allProjects } from "../../../assets/images/projects";

const SectionProject = () => {
  useEffect(() => {
    anime({
      targets: ".animDivProject",
      duration: 2000,
      delay: 5000,
      loop: true,
      endDelay: 2000,
      rotate: function () {
        return anime.random(-4, 4);
      },
      direction: "alternate",
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div
      id="experience"
      className="w-[98%] mx-auto flex flex-col items-center pl-2 text-center"
    >
      <p className="text-5xl my-16 underline-offset-8 underline text-white dark:text-black">
        Experience
      </p>
      <div className="flex w-full min-h-5/6 lg:max-w-screen-lg xl:max-w-screen-xl flex-wrap justify-around items-center">
        {allProjects
          ? allProjects.map((project, index) => (
              <div
                key={index + project.name}
                className="w-[45%] my-4 relative -top-8 animDivProject text-white dark:text-black"
              >
                <div className="bg-blackSecundary border border-greenPrimary shadow-2xl shadow-black dark:shadow-black hover:shadow-xl transition-all w-1 max-w-[90%] h-1 relative containProject mx-auto my-2 rounded-2xl dark:bg-gray-200">
                  <p className="contentProject opacity-0 my-4 text-3xl">
                    {project.name}
                  </p>
                  <p className="contentProject opacity-0 my-4">
                    {project.description}
                  </p>
                  <div className="w-full flex h-2/6 justify-around">
                    <div className="relative flex w-5/12 h-full contentProject opacity-0">
                      <img
                        src={project.src}
                        alt="not found"
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="contentProject opacity-0 flex flex-wrap items-center w-5/12 justify-between">
                      {project.skills.map((skill, index) => (
                        <p
                          key={index + skill.name}
                          className="border-r-2 border-l-2 border-white mx-1 px-2 pt-1 rounded-lg dark:border-black"
                        >
                          {skill.name}
                        </p>
                      ))}
                      {project.skills.length < 4
                        ? project.tools.map((tool, index) => (
                            <p
                              key={index + tool.name}
                              className="border-r-2 border-white border-l-2 mx-1 px-2 pt-1 rounded-lg dark:border-black"
                            >
                              {tool.name}
                            </p>
                          ))
                        : ""}
                    </div>
                  </div>
                  <div className="contentProject opacity-0 mt-1 flex justify-end">
                    {project.deployLink ? (
                      <a
                        className="border-double border-2 border-black py-1 mx-4 px-2 rounded-lg bg-greenPrimary hover:bg-blue-700 hover:border-white hover:scale-125 duration-700 text-black hover:text-white transition-all"
                        href={project.deployLink}
                      >
                        Deploy
                      </a>
                    ) : (
                      ""
                    )}
                    <a
                      className="border-double border-2 border-black py-1 mx-4 px-2 rounded-lg bg-greenPrimary hover:bg-blue-700 hover:border-white hover:scale-125 duration-700 text-black hover:text-white transition-all"
                      href={project.repositoryLink}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default SectionProject;
