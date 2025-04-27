interface Tech {
  id: string;
  name: string;
}

interface TechTopBarProps {
  techs: Tech[];
  handleTechs: (id: string) => void;
}

export default function TechTopBar({ techs, handleTechs }: TechTopBarProps) {
  return (
    <>
      {techs &&
        techs.map((tech) => {
          return (
            <div key={tech.id} className="">
              <button
                onClick={() => handleTechs(tech.id)}
                className="hover:rounded-md hover:bg-gray-200"
              >
                {tech.name}
              </button>
            </div>
          );
        })}
    </>
  );
}
