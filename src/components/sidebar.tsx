import { useState } from "react";
import { FileIcon, GitBranchIcon, SearchIcon } from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon: Icon,
  isActive = false,
  onClick,
}: SidebarItemProps) => (
  <div
    className={`p-3 hover:text-white cursor-pointer ${
      isActive ? "border-l text-white" : "text-[#aaa]"
    }`}
    onClick={onClick}
  >
    <Icon className={`w-5 h-5}`} />
  </div>
);

interface SidebarProps {
  onExplorerToggle: () => void;
  onSourceControlToggle: () => void;
}

export function Sidebar({
  onExplorerToggle,
  onSourceControlToggle,
}: SidebarProps) {
  const [activeItem, setActiveItem] = useState<
    "explorer" | "search" | "sourceControl"
  >("explorer");

  const handleItemClick = (item: "explorer" | "search" | "sourceControl") => {
    if (item === "explorer") {
      onExplorerToggle();
    } else if (item === "sourceControl") {
      onSourceControlToggle();
    }
    setActiveItem(item);
  };

  return (
    <div className="bg-[#122738] w-12 flex flex-col justify-between border-r border-[#0d3a58]">
      <div className="flex flex-col">
        <SidebarItem
          icon={FileIcon}
          isActive={activeItem === "explorer"}
          onClick={() => handleItemClick("explorer")}
        />
        <SidebarItem
          icon={SearchIcon}
          isActive={activeItem === "search"}
          onClick={() => handleItemClick("search")}
        />
        <SidebarItem
          icon={GitBranchIcon}
          isActive={activeItem === "sourceControl"}
          onClick={() => handleItemClick("sourceControl")}
        />
      </div>
      <div className="flex justify-center w-full py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-settings"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
  );
}
