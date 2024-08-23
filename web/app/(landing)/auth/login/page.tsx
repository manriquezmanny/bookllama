import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";

export default function Login() {
  return (
    <div className="mx-auto flex h-screen max-w-5xl">
      <div className="w-96 pt-20">
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-semibold tracking-tight">Login</h3>
            <p className="text-sm text-muted-foreground">
              Welcome back! Please enter your details
            </p>
          </CardHeader>
          <CardContent>
            {/* <div className="my-6 h-0.5 bg-muted"></div> */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <Input id="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm" htmlFor="email">
                  Password
                </label>
                <Input id="password" type="password" />
              </div>
            </div>
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="h-full flex-1 bg-muted"></div>
    </div>
  );
}
