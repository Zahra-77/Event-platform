import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';


export default function Home() {
  return (
    <main>
    <section className = "bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className = "wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0"> 
        <div className="flex flex-col justify-center gap-8">
          <h1 className ="h1-bold"> Welcome to Event Master</h1>
          <p className ="p-regular-20 md:p-regular-24">Book your event and enjoy your time with your freinds and family.</p>
          <Button size ='lg' asChild className="button w-full sm:w-fit">
            <Link href="#events">
              Explore Events
            </Link>
          </Button>
        </div>
        {/* <Image 
          src ="/images/hero.png"
          alt="hero"
          width = {1000}
          height = {1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          /> */}
      </div>
    </section>
     </main>
  );
}

// Remove the unnecessary export default Home; line
