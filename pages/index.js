import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <h1 className="text-2xl text-yellow-600 font-lg">Hello, I'm Tahany Ali(Software Developer)</h1>
          <p>Innovative Software Developer with a keen eye for detail and a determination to deliver the highest quality . I take great pride in my work , I always try to better myself with every project I work on.</p>
          <p>I enjoey with team work.</p>
          <p>I motivated by problem solving.</p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  )
}
