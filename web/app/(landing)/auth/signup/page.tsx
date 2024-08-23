import GithubIcon from "@/components/GithubIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="mx-auto flex h-screen max-w-96 items-center">
      <Card className="w-full">
        <CardHeader>
          <h3 className="text-2xl font-semibold tracking-tight">Sign Up</h3>
          <p className="text-sm text-muted-foreground">Create your account</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <Input id="email" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full font-semibold text-gray-100">
              Sign up
            </Button>
          </div>
          <div className="my-5 flex items-center gap-3">
            <span className="inline-block h-px flex-1 bg-muted"></span>
            or
            <span className="inline-block h-px flex-1 bg-muted"></span>
          </div>
          <Button variant="outline" className="flex w-full items-center gap-2">
            Github
            <GithubIcon className="size-4 text-gray-200" />
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center p-4 pt-0">
          <Link
            className={`${buttonVariants({ variant: "link" })} text-gray-300`}
            href="/auth/login"
          >
            Already have an account? Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
