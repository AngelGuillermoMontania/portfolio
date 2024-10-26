// const grid = [10, 10];
import { allSkills } from "../../../assets/images/skills";

const SectionSkills = () => {
  return (
    <div
      id="sectionSkills"
      className="text-white w-full flex flex-col justify-around text-4xl text-center relative z-20 dark:text-black"
    >
      <div className="flex flex-col w-full items-center justify-center top-full bg-blackSecundary dark:bg-slate-200 shadow-black shadow-2xl xl:shadow-inner xl:shadow-[-80px_0px_40px_-20px_inset_#000000]">
        <p className="relative titleSkill my-4 underline-offset-8 underline">
          Skills
        </p>
        <div className="flex justify-center w-5/6 flex-wrap relative skills">
          {allSkills
            ? allSkills.map((skill, index) => (
                <div key={index + skill.name} className="mx-4 my-2 w-auto">
                  <img
                    src={skill.src}
                    height={50}
                    width={50}
                    alt="not found"
                    className="imageSkills relative rounded-full"
                  />
                  <p className="text-lg text-center">{skill.name}</p>
                </div>
              ))
            : ""}
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center top-full my-12 bg-blackSecundary dark:bg-slate-200 shadow-black shadow-2xl xl:shadow-inner xl:shadow-[-80px_0px_40px_-20px_inset_#000000]">
        <p className="relative -left-[1500px] titleTool my-4 underline-offset-8 underline">
          Tools
        </p>
        <div className="flex justify-center w-5/6 flex-wrap relative tools">
          {allSkills.map((tool, index) => (
            <div key={index + tool.name} className="mx-12 my-2 w-auto">
              <img
                src={tool.src}
                height={50}
                width={50}
                alt="not found"
                className="imageSkills relative rounded-full"
              />
              <p className="text-lg">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center top-full bg-blackSecundary dark:bg-slate-200 shadow-black shadow-2xl xl:shadow-inner xl:shadow-[-80px_0px_40px_-20px_inset_#000000]">
        <p className="relative -left-[1500px] titleSoft my-4 underline-offset-8 underline">
          Soft Skills
        </p>
        <div className="flex justify-center w-5/6 flex-wrap relative softs">
          {allSkills.map((soft, index) => (
            <div key={index + soft.name} className="mx-12 my-2 w-auto">
              <img
                src={soft.src}
                height={50}
                width={50}
                alt="not found"
                className="imageSkills relative rounded-full"
              />
              <p className="text-lg">{soft.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSkills;
