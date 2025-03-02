"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeIcon, MessageSquareIcon, GitBranchIcon } from "lucide-react";

export default function Practice() {
  const [selectedCategory, setSelectedCategory] = useState("algorithms");

  const categories = {
    algorithms: [
      { title: "Binary Search", difficulty: "Medium", status: "Not Started" },
      { title: "Dynamic Programming", difficulty: "Hard", status: "In Progress" },
      { title: "Graph Traversal", difficulty: "Medium", status: "Completed" },
    ],
    system: [
      { title: "Distributed Systems", difficulty: "Hard", status: "Not Started" },
      { title: "Load Balancing", difficulty: "Medium", status: "Not Started" },
      { title: "Caching Strategies", difficulty: "Medium", status: "In Progress" },
    ],
    behavioral: [
      { title: "Leadership Experience", category: "Leadership", status: "Completed" },
      { title: "Conflict Resolution", category: "Teamwork", status: "Not Started" },
      { title: "Project Challenges", category: "Problem Solving", status: "In Progress" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Practice Area</h1>
          <p className="text-muted-foreground mt-2">Master your interview skills</p>
        </div>
      </div>

      <Tabs defaultValue="algorithms" className="space-y-4">
        <TabsList>
          <TabsTrigger value="algorithms" className="flex items-center gap-2">
            <CodeIcon className="h-4 w-4" />
            Algorithms & Data Structures
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <GitBranchIcon className="h-4 w-4" />
            System Design
          </TabsTrigger>
          <TabsTrigger value="behavioral" className="flex items-center gap-2">
            <MessageSquareIcon className="h-4 w-4" />
            Behavioral
          </TabsTrigger>
        </TabsList>

        {Object.entries(categories).map(([category, problems]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {problems.map((problem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{problem.title}</CardTitle>
                    <CardDescription>
                      {problem.difficulty || problem.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${
                        problem.status === "Completed" ? "text-green-500" :
                        problem.status === "In Progress" ? "text-blue-500" :
                        "text-muted-foreground"
                      }`}>
                        {problem.status}
                      </span>
                      <Button variant="outline" size="sm">
                        Start Practice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}