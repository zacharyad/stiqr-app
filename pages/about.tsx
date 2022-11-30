import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-16">

      <div>
        <h2 className="text-3xl">So what is this all about?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero, nobis quibusdam consequatur iusto iure reprehenderit dicta debitis doloremque quis molestiae similique possimus cumque ipsam, eos aliquam? Ad, deserunt nemo?</p>
      </div>
        <Link href="/privacypolicy">Privacy Policy</Link>
    </div>
  )
}

export default About
