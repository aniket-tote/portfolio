import { useState } from "react";
import { ChevronDown, ChevronRight, X, FileIcon } from "lucide-react";
import type { Tab } from "../types/tabs";

interface FileProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  onClose?: () => void;
  icon?: React.ReactNode;
}

const File = ({ name, isActive, onClick, onClose, icon }: FileProps) => {
  const getIcon = () => {
    if (icon) return icon;
    if (name.endsWith(".tsx")) {
      return (
        <svg
          height="13"
          viewBox="175.7 78 490.6 436.9"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#61dafb">
            <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
            <circle cx="420.9" cy="296.5" r="45.7" />
          </g>
        </svg>
      );
    }
    if (name.endsWith(".json")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-braces"
        >
          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
          <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
        </svg>
      );
    }
    if (name.endsWith(".md")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#00f"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-info"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    }
    if (name.endsWith(".ts")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#00f"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-type"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M9 13v-1h6v1" />
          <path d="M12 12v6" />
          <path d="M11 18h2" />
        </svg>
      );
    }
    return <FileIcon className="w-4 h-4 text-[#6688CC] mr-2" />;
  };

  return (
    <div
      className={`flex items-center px-2 py-1 gap-2 cursor-pointer group ${
        isActive
          ? "bg-[#0d3a58] text-white"
          : "text-[#CCCCCC] hover:bg-[#193549] hover:text-white"
      }`}
      onClick={onClick}
    >
      {onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className={`focus:outline-none mr-1 ${
            isActive || "invisible group-hover:visible"
          }`}
        >
          <X className="w-3 h-3 text-[#CCCCCC] hover:text-white" />
        </button>
      )}
      {getIcon()}
      <span className="text-xs">{name}</span>
    </div>
  );
};

interface SectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Section = ({ title, isOpen, onToggle, children }: SectionProps) => (
  <div className="">
    <div
      className={`flex items-center space-x-2 px-2 py-1 hover:bg-[#193549] cursor-pointer ${
        title != "src" && "bg-[#193549]"
      }`}
      onClick={onToggle}
    >
      {isOpen ? (
        <ChevronDown className="w-4 h-4" />
      ) : (
        <ChevronRight className="w-4 h-4" />
      )}
      <span className="text-xs">{title}</span>
    </div>
    {isOpen && (
      <div className="pl-4">
        <div className={`${isOpen && "border-l border-gray-600"}`}>
          {children}
        </div>
      </div>
    )}
  </div>
);

interface FileExplorerProps {
  openTab: (tab: Tab) => void;
  closeTab: (tab: Tab) => void;
  isVisible: boolean;
  activeTab: Tab | null;
  openTabs: Tab[];
}

export function FileExplorer({
  openTab,
  closeTab,
  isVisible,
  activeTab,
  openTabs,
}: FileExplorerProps) {
  const [isOpenEditorsOpen, setIsOpenEditorsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  const [isSrcOpen, setIsSrcOpen] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#15232d] w-56 text-[#CCCCCC] overflow-auto border-r border-[#0d3a58]">
      <div className="h-[2.3rem] px-4 flex justify-between items-center">
        <span className="text-xs font-extralight">EXPLORER</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-ellipsis"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
      <Section
        title="OPEN EDITORS"
        isOpen={isOpenEditorsOpen}
        onToggle={() => setIsOpenEditorsOpen(!isOpenEditorsOpen)}
      >
        {openTabs.map((tab) => (
          <File
            key={tab}
            name={`${tab}`}
            isActive={activeTab === tab}
            onClick={() => openTab(tab)}
            onClose={() => closeTab(tab)}
          />
        ))}
      </Section>
      <Section
        title="PORTFOLIO"
        isOpen={isPortfolioOpen}
        onToggle={() => setIsPortfolioOpen(!isPortfolioOpen)}
      >
        <Section
          title="src"
          isOpen={isSrcOpen}
          onToggle={() => setIsSrcOpen(!isSrcOpen)}
        >
          <File
            name="about.tsx"
            isActive={activeTab === "about.tsx"}
            onClick={() => openTab("about.tsx")}
          />
          <File
            name="projects.tsx"
            isActive={activeTab === "projects.tsx"}
            onClick={() => openTab("projects.tsx")}
          />
          <File
            name="experience.tsx"
            isActive={activeTab === "experience.tsx"}
            onClick={() => openTab("experience.tsx")}
          />
          <File
            name="education.tsx"
            isActive={activeTab === "education.tsx"}
            onClick={() => openTab("education.tsx")}
          />
        </Section>
        <File
          name="package.json"
          isActive={activeTab === "package.json"}
          onClick={() => openTab("package.json")}
        />
        <File
          name="README.md"
          isActive={activeTab === "README.md"}
          onClick={() => openTab("README.md")}
        />
        <File
          name="tsconfig.ts"
          isActive={activeTab === "tsconfig.ts"}
          onClick={() => openTab("tsconfig.ts")}
        />
      </Section>
    </div>
  );
}
