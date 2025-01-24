import { Clock, GitBranchIcon, RefreshCcw } from "lucide-react"

export function Footer() {
  return (
    <div className="h-7 bg-[#15232d] text-white text-xs flex items-center justify-between border-t border-[#0d3a58]">
      <div className="flex items-center space-x-4">
        <div className="flex relative">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right absolute"><path d="m9 18 6-6-6-6"/></svg>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left absolute"><path d="m15 18-6-6 6-6"/></svg>
        </div>
        <GitBranchIcon className="w-4 h-4"/>
        <span>main</span>
        <RefreshCcw className="w-4 h-4"/>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>{"{ } "}</span>
        <span>TypeScript JSX</span>
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" /> 12:00 PM
        </span>
      </div>
    </div>
  )
}

