// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      {/* This is a placeholder page. 
        It demonstrates how to use "shadcn-ui" components and Tailwind CSS.
        The AI interprets these imports as available UI primitives.
      */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Your Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Start building your application by editing <code className="bg-muted px-1 rounded">src/pages/Index.tsx</code>
          </p>
          
          <div className="space-y-2">
            <Input placeholder="Enter your project name..." />
            <Button className="w-full">
              Create Something Amazing
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;