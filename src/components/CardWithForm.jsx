import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PasswordInput from "./PasswordInput"

export default function CardWithForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[500px]">
        <form>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Be a member of our comunity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input id="name" name="username" placeholder="Enter your Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="Enter your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <PasswordInput name="password"></PasswordInput>
              </div>
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Confirm Password">Confirm Password</Label>
              <PasswordInput name="confirme_password"></PasswordInput>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="#"><Button>3aa</Button></a>
            <Button>Deploy</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
