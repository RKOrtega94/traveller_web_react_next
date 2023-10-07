import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionTemplate({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col p-10">
      <div className="w-full flex justify-between flex-row space-x-2 items-center">
        <span className="text-2xl font-bold">{section}</span>
        <div className="flex items-center space-x-2 text-xs">
          <span>Ver más</span>
          <FontAwesomeIcon icon={faAngleRight} height={12} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
