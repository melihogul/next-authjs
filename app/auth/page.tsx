import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInWithGithub from "../components/SignInWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "../components/SignInForm";

export default async function AuthRoute() {
    const session = await getServerSession(authOptions)

    if(session) {
        return redirect("/")
    }
    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Please sign in</CardTitle>
                    <CardDescription>To access the private page you must have to be authenticated</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SignInForm />
                        <SignInWithGithub />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}