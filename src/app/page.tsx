'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import Head from 'next/head';
import techsImage from '../../public/images/techs.svg';
import { GetStaticProps } from 'next';
import { getPrismicClient } from './services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Content = {
  title: string;
  titleContent: string;
  linkAction: string;  
  mobileTitle: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
  webBanner: string;
}

interface ContentProps{
  content: Content;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste head</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>
              Elevando você ao próximo nível!
            </h1>  
            <span>
              texto texto texto texto texto texto texto texto texto texto texto
            </span>
            <a href="/">
              <button>
                Começar agora!
              </button>
            </a>

          </section>
            <img
              src="/images/banner-conteudos.png"
              alt="conteudo" />
        </div>

        <hr className={styles.divisor} />
        
        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda criar aplicativos para Android e IOS</h2>
            <span>texto texto texto texto texto texto texto texto texto texto texto</span>
          </section>

          <img
            src="/images/financasApp.png"
            alt="financas" />
          
        </div>

        <hr className={styles.divisor} />
                
        <div className={styles.sectionContent}>
          <img
            src="/images/webDev.png"
            alt="dev app web" />
          
          <section>
            <h2>Aprenda criar sistemas web</h2>
            <span>texto texto texto texto texto texto texto texto texto texto texto</span>
          </section>

        </div>


        <div className={styles.nextLevelContent}>

          <Image src={techsImage} alt="tecnologias" />
          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nível.</h2>
          <span>e você vai perder a chance de evoluir?</span>
          <a>
            <button>Acessar turma</button>
          </a>
        </div>
        
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'Home')
  ]);

  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner    
  } = response.results[0].data;
  
  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,    
    mobileTitle: RichText.asText(mobile), 
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  };


  return{
    props:{
      content
    },
    revalidate: 60 * 2 // A cada 2 minutos
  }
}