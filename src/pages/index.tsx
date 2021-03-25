import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <main>
        <section>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the news
          </p>
        </section>
      </main>
    </>
  )
}
