import Image from 'next/image'



export default function NotFound() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl">
        Shit, you fucked it all up. 
        </h2>
        <Image
          src="/cohle-404.jpeg"
          width={500}
          height={500}
          alt="Rust Needs a Beer"
        />
        <h2 className="text-3xl">
        I'll take a sixer of Old Milwaukee or Lone Star, nothing snooty. It's Thursday and it's past noon. Thursday is one of my days off. On my days off 
          I start drinking at noon. You don't get to interrupt that. I'd appreciate a little hustle up on that.
        </h2>
      </div>

    <div className="mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-right">
      <p className="lg:col-span-3">
        Built by <a href="https://ryan-james.omg.lol">Ryan James</a>
      </p>

    
    </div>
  </main>
  )
}
