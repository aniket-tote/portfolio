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
    className={`p-3 hover:bg-[#15232D] hover:text-white cursor-pointer ${
      isActive ? "border-l text-white" : "text-[#ccc]"
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
    <div className="bg-[#122738] w-12 flex flex-col">
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
  );
}
