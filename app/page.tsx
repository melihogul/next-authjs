import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import Link from "next/link"
import LogOutButton from "./components/LogOutButton"
import { Button } from "@/components/ui/button"

export default async function Home () {
  const session = await getServerSession(authOptions)
  
  return (
    <div className="p-10">
      <h1>Hello from the index page</h1>
      {session ? (
        <div>
          <h1>You are logged in.</h1>
          <LogOutButton />
        </div>
      ) : (
        <div>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
