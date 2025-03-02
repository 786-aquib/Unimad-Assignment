"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

export default function InterviewQuestionsPage() {
  const router = useRouter();
  // Dummy questions
  const questions = [
    "Tell me about yourself.",
    "Why do you want this job?",
    "What are your strengths?",
    "Describe a challenge you faced and how you handled it.",
    "Where do you see yourself in 5 years?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));

  useEffect(() => {
    const savedAnswers = localStorage.getItem("userAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleCompare = () => {
    console.log("Answers:", answers);
    localStorage.setItem("userAnswers", JSON.stringify(answers)); // Save Answers to Local Storage
    router.push("/interview/compare");
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="flex min-h-screen bg-[#F8F9FB]">
      <div className="w-[240px] bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <img src="https://www.unimad.ai/_next/image?url=%2Fhome%2Flogo.png&w=640&q=100" />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-blue-600">Aquib Mahmood</span>
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

      {/* Main Content */}
      <section className="flex-1 p-6 flex flex-col items-center mt-5">
        <p className="text-sm font-small text-blue-600 bg-gray">Round</p>

        {/* Question Section */}
        <h2 className="text-xl font-inter font-weight-400 mt-6 text-[#808080]">{`${questions[currentQuestionIndex]}`}</h2>

        {/* Answer Input Box */}
        <Input
          type="text"
          className="w-[823px] h-[179px] mt-4 border border-blue-300 rounded-lg p-4 text-lg"
          value={answers[currentQuestionIndex]}
          onChange={(e) => {
            const newAnswers = [...answers];
            newAnswers[currentQuestionIndex] = e.target.value;
            setAnswers(newAnswers);
            localStorage.setItem("userAnswers", JSON.stringify(newAnswers)); // Save Answers in Local Storage
          }}
        />

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center w-full">
          <div className="flex space-x-4">
            <Button onClick={handlePrev} disabled={currentQuestionIndex === 0} variant="outline">Prev</Button>
            {currentQuestionIndex < questions.length - 1 ? (
              <Button className="bg-blue-600" onClick={handleNext}>Next</Button>
            ) : (
              <Button className="bg-blue-600" onClick={handleCompare}>Finish</Button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-[823px] mt-6">
          <Progress className="h-2 border border-blue-500" value={(currentQuestionIndex / (questions.length - 1)) * 100} />
        </div>
      </section>
    </main>
  );
}
