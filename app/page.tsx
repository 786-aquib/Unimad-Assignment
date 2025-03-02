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
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64" 
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
          <div className="flex items-center justify-between mb-6">
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
                    <Label htmlFor="type" className="text-blue">Interview Type</Label>
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

      {/* Chat Section  */}

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