import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='bg-primary-50'>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-10'>
          <div className='flex flex-col items-center'>
            <h1 className="h1-bold">Host, Connect, Celebrate: <br />Your Events, Our Platform!</h1>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div>
            <Image
              src="/assets/images/hero.png"
              alt="hero"
              width={400}
              height={1000}
              className=''
            />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col  md:gap-12">
        <h2 className="h2-bold">Trust by Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
        Search 
        CategoryFilter 
        </div>
      </section>
    </main>
  );
}
