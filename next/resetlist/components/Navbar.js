import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/shelter-logo.png" 
          width={98}
          height={98}
        />
      </div>
      <Link href="/" ><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/people"><a>Ninja Listing</a></Link>
    </nav>
  )
}
