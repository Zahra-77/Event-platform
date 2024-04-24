import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
//import { Link } from 'lucide-react'
import { CalendarHeart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import NavItems from './NavItem';
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className = "w-full border-b">
        <div className = "wrapper flex items-center justify-between">
            <CalendarHeart href="/" className= "w-36">
              Eventmaster
                 {/* <Image src = "/assests/images/logo.svg" width = {128} height = {38}
                alt = "Evently logo">
                </Image> */}
            </CalendarHeart>
            <SignedIn>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems />
              </nav>
              </SignedIn>
            <div className = "flex w-32 justify-end gap-3">  
          
            <SignedIn>
              <UserButton afterSignOutUrl ="/" />
              <MobileNav /> {/* Add the NavItems component */}
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">
                  Log in
                  </Link>
              </Button>
            </SignedOut>

            </div>
        </div>
    </header>
  )
}

export default Header

