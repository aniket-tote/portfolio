import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import ProjectList from '../project-list'

const Projects = () => {
  return (
    <div>
      <Tabs defaultValue="all" className="w-full py-8">
        <div className='flex justify-between w-full px-8'>

        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
        </div>
        <TabsContent value="all">
          <ProjectList filter="all" />
        </TabsContent>
        <TabsContent value="company">
          <ProjectList filter="company" />
        </TabsContent>
        <TabsContent value="personal">
          <ProjectList filter="personal" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Projects