"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { MessageSquare, Send } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(""); 

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    console.log("Sending message:", message);
    setMessage("");
  };

  const upcomingInterviews = [
    {
      company: "Google",
      position: "Data Manager",
      date: "Apr 15, 2024",
      status: "Retake"
    },
    {
      company: "Google",
      position: "Data Analyst",
      date: "Apr 18, 2024",
      status: "Retake"
    }
  ];

  const handleStartInterview = () => {
    console.log("Navigating to /interview/questions");
    router.push("/interview/questions");
  };

  return (
    <main className="flex min-h-screen bg-[#F8F9FB]">
      <div className="w-[240px] bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
          <img src="https://www.unimad.ai/_next/image?url=%2Fhome%2Flogo.png&w=640&q=100"></img>
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm">Aquib Mahmood</span>
          </div>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-blue-600 bg-blue-50" onClick={() => router.push("/")}>Home</Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">My Resume</Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">LinkedIn Optimisation</Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">Portfolio</Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600">Applications</Button>
          </nav>
        </div>
      </div>

      <div className="flex-1 p-6 relative">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 w-[200px] px-4 bg-white text-gray-600">+ Start new Interview</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Interview Prep</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" placeholder="e.g. Frontend Developer" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="e.g. Unimad" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea id="description" placeholder="Paste the job description here..." className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Interview Type</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select interview type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="behavioral">Behavioral</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="screening">Screening Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="button" className="w-full" onClick={() => handleStartInterview()}>Start Interview</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {upcomingInterviews.map((interview, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{interview.position}</h3>
                    <p className="text-sm text-gray-500">{interview.company}</p>
                  </div>
                  <div className="text-right">
                    <Button variant="outline" size="sm" className="mt-2 w-[200px] border-blue-600 bg-blue-600">{interview.status}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Section */}
       
      <div className="fixed bottom-0 left-[240px] right-0 bg-white border-t border-gray-200">
            <div className="max-w-[1105px] mx-auto px-6">
              <div className="h-14 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <div className="flex-1 flex items-center gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask anything about your interview preparation..."
                    className="flex-1 ml-4"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    size="icon"
                    className="shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

    </main>
  );
}
