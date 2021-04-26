import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss'

export default function Posts() {
  return  (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>24 de abril de 2021</time>
            <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
            <p>Para mais detalhes, veja o commit. Com isso, agora as imagens serão convertidas para o formato webP, seu tamanho será diminuído sem perder a qualidade e passarão a ser cacheadas automaticamente. Serão carregadas em tela assim que estiverem próximas de aparecer em tela, ou seja, só se for realmente visualizada. Isso é um benefício na performance do projeto, confira abaixo:</p>
          </a>
          <a href="#">
            <time>24 de abril de 2021</time>
            <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
            <p>Para mais detalhes, veja o commit. Com isso, agora as imagens serão convertidas para o formato webP, seu tamanho será diminuído sem perder a qualidade e passarão a ser cacheadas automaticamente. Serão carregadas em tela assim que estiverem próximas de aparecer em tela, ou seja, só se for realmente visualizada. Isso é um benefício na performance do projeto, confira abaixo:</p>
          </a>
          <a href="#">
            <time>24 de abril de 2021</time>
            <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
            <p>Para mais detalhes, veja o commit. Com isso, agora as imagens serão convertidas para o formato webP, seu tamanho será diminuído sem perder a qualidade e passarão a ser cacheadas automaticamente. Serão carregadas em tela assim que estiverem próximas de aparecer em tela, ou seja, só se for realmente visualizada. Isso é um benefício na performance do projeto, confira abaixo:</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  return {
    props: {

    }
  }
}