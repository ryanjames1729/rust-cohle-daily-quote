import Image from 'next/image'

// API: https://rust-cohle-quotes.onrender.com/new-quote

export default async function Home() {

  const apiUrl = 'https://rust-cohle-quotes.onrender.com/new-quote';
  let staticData = await fetch(apiUrl)
    .then((res) => res.json());
  staticData = staticData['Rust says'];
  console.log(staticData);


  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <div className="text-xl relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2>Rust says: &quot;{staticData}&quot;</h2>
      </div>

      <div className="mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-right">
        <p className="lg:col-span-3">
          Built by <a href="https://ryan-james.omg.lol">Ryan James</a>
        </p>

      
      </div>
    </main>
  )
}
