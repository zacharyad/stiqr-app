import type { NextPage } from 'next'
import Link from 'next/link'

const Auth: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">

      <div>
      <p className="text-3xl">This is the AUTH page</p>
      <Link href="/stiqr/LOGGEDIN">Log In</Link>
      </div>
    </div>
  )
}

export default Auth
