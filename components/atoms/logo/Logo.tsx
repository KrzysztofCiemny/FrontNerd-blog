import Link from "next/link"

const styles ={
  logo: 'no-underline text-black text-xl font-bold'
}

const {logo} = styles 

const Logo = () => {
  return <Link href="/" className={logo}>Frontnerd.</Link>
}

export default Logo
