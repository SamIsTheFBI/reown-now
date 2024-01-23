import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";


export default function SignInCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Please sign in through these services
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-3">
          <Button variant="outline" className="flex items-center gap-3" onClick={() => void signIn("discord")}>
            <FaDiscord />
            Discord
          </Button>
          <Button variant="outline" className="flex items-center gap-3">
            <FaGoogle />
            Google
          </Button>
          <Button variant="outline" className="flex items-center gap-3">
            <FaGithub />
            Github
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
