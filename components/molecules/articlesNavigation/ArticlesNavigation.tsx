import Link from "next/link"

const ArticlesNavigation = () => {
  return (
    <nav className="flex justify-center gap-4">
      <Link href="/" className="text-slate-500 hover:text-black cursor-pointer">All</Link>

    </nav>
  )
}

export default ArticlesNavigation
