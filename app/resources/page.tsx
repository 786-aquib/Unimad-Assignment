import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenIcon, VideoIcon, UsersIcon, NewspaperIcon } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "Interview Guides",
      description: "Comprehensive guides for different interview types",
      icon: <BookOpenIcon className="w-6 h-6" />,
      items: [
        "Technical Interview Handbook",
        "System Design Primer",
        "Behavioral Questions Guide",
        "Company-Specific Prep Guides"
      ]
    },
    {
      title: "Video Tutorials",
      description: "Watch expert explanations and tutorials",
      icon: <VideoIcon className="w-6 h-6" />,
      items: [
        "Algorithm Walkthroughs",
        "System Design Sessions",
        "Mock Interview Videos",
        "Tips from Industry Experts"
      ]
    },
    {
      title: "Community Resources",
      description: "Learn from the community",
      icon: <UsersIcon className="w-6 h-6" />,
      items: [
        "Discussion Forums",
        "Study Groups",
        "Interview Experience Sharing",
        "Peer Mock Interviews"
      ]
    },
    {
      title: "Latest Articles",
      description: "Stay updated with industry trends",
      icon: <NewspaperIcon className="w-6 h-6" />,
      items: [
        "Interview Trends 2024",
        "Remote Interview Tips",
        "Company Culture Insights",
        "Career Growth Strategies"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Resources</h1>
        <p className="text-muted-foreground mt-2">Curated materials to help you succeed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                {resource.icon}
                <CardTitle>{resource.title}</CardTitle>
              </div>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}