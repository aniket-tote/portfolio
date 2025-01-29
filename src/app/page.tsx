"use client";

import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { FileExplorer, getIcon } from "../components/file-explorer";
import { SourceControl } from "../components/source-control";
import { XIcon } from "lucide-react";
import type { Tab } from "../types/tabs";
import Projects from "@/components/explorer/Projects";
import Experience from "@/components/explorer/Experience";
import Skills from "@/components/explorer/Skills";
import SocialMedia from "@/components/source-control/SocialMedia";
import CompetitiveProgramming from "@/components/source-control/CompetitiveProgramming";
import About from "@/components/explorer/About";
import { Footer } from "@/components/footer";
import Topbar from "@/components/Topbar";
import PackageJson from "@/components/explorer/PackageJson";
import ReadmeMD from "@/components/explorer/ReadmeMD";
import TsConfig from "@/components/explorer/TsConfig";
import localFont from "next/font/local";

const cascadia = localFont({ src: "../fonts/CascadiaCode.ttf" });

export default function Home() {
  const [openTabs, setOpenTabs] = useState<Tab[]>(["about.tsx"]);
  const [activeTab, setActiveTab] = useState<Tab | null>("about.tsx");
  const [isExplorerVisible, setIsExplorerVisible] = useState(true);
  const [isSourceControlVisible, setIsSourceControlVisible] = useState(false);

  const openTab = (tab: Tab) => {
    if (!openTabs.includes(tab)) {
      setOpenTabs([...openTabs, tab]);
    }
    setActiveTab(tab);
  };

  const closeTab = (tabToClose: Tab) => {
    const newOpenTabs = openTabs.filter((tab) => tab !== tabToClose);
    setOpenTabs(newOpenTabs);
    if (activeTab === tabToClose) {
      setActiveTab(
        newOpenTabs.length > 0 ? newOpenTabs[newOpenTabs.length - 1] : null
      );
    }
  };

  const toggleExplorer = () => {
    setIsExplorerVisible(!isExplorerVisible);
    setIsSourceControlVisible(false);
  };

  const toggleSourceControl = () => {
    setIsSourceControlVisible(!isSourceControlVisible);
    setIsExplorerVisible(false);
  };

  return (
    <div className="flex flex-col h-screen bg-[#193549] text-white font-[family-name:var(--font-geist-sans)]">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          onExplorerToggle={toggleExplorer}
          onSourceControlToggle={toggleSourceControl}
        />
        <FileExplorer
          openTab={openTab}
          closeTab={closeTab}
          isVisible={isExplorerVisible}
          activeTab={activeTab}
          openTabs={openTabs}
        />
        <SourceControl
          openTab={openTab}
          isVisible={isSourceControlVisible}
          activeTab={activeTab}
        />
        <div className="flex-1 flex flex-col">
          <div className="bg-[#122738] flex">
            {openTabs.map((tab) => (
              <div key={tab} className="flex">
                <div
                  className={`px-3 py-2 flex gap-2 items-center justify-between cursor-pointer group ${
                    activeTab === tab
                      ? "bg-[#193549] border-b border-yellow-400"
                      : "text-[#8C8C8C] hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {getIcon(tab)}
                  <span className="text-sm">{tab}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab);
                    }}
                    className={`focus:outline-none ${
                      activeTab === tab
                        ? "visible"
                        : "invisible group-hover:visible"
                    }`}
                  >
                    <XIcon className="w-4 h-4 text-[#CCCCCC] hover:text-white" />
                  </button>
                </div>
                <div className="h-full w-[0.1px] bg-[#15232d]"></div>
              </div>
            ))}
          </div>
          <div className={`flex-1 overflow-auto ${cascadia.className}`}>
            {renderTabComponent(activeTab)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const renderTabComponent = (activeTab: Tab | null) => {
  switch (activeTab) {
    case "about.tsx":
      return <About />;
    case "projects.tsx":
      return <Projects />;
    case "experience.tsx":
      return <Experience />;
    case "package.json":
      return <PackageJson />;
    case "README.md":
      return <ReadmeMD />;
    case "tsconfig.json":
      return <TsConfig />;
    case "skills.tsx":
      return <Skills />;
    case "social-media.tsx":
      return <SocialMedia />;
    case "competitive-programming.tsx":
      return <CompetitiveProgramming />;
    default:
      return (
        <div className="flex items-center justify-center h-full">
          No Files selected
        </div>
      );
  }
};
