import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/" ><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/people"><a>Ninja Listing</a></Link>
    </nav>
  )
}
