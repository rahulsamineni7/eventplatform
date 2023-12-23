import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t mb-2">
      <div className="flex items-center">
        <Link href='/' className="flex-1 ml-4">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="mr-4">2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer