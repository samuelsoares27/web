import styles from './styles.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import thumbImg from '../../../public/images/thumb.png';
import {
    FiChevronLeft, FiChevronsLeft,
    FiChevronRight, FiChevronsRight
} from 'react-icons/fi'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <main className={styles.container}>

                <div className={styles.posts}>

                    <Link href="/">
                    
                        <Image
                            src={thumbImg}
                            alt="post titulo 1"
                            height={410}
                            width={720}
                            quality={100}
                        />
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 Maio 2023</time>
                        <p>
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                        </p>
                       
                    </Link>

                    <Link href="/">
                    
                        <Image
                            src={thumbImg}
                            alt="post titulo 1"
                            height={410}
                            width={720}
                            quality={100}
                        />
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 Maio 2023</time>
                        <p>
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                        </p>
                       
                    </Link>
                    
                    <Link href="/">
                    
                        <Image
                            src={thumbImg}
                            alt="post titulo 1"
                            height={410}
                            width={720}
                            quality={100}
                        />
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 Maio 2023</time>
                        <p>
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                        </p>
                       
                    </Link>
                    
                    <Link href="/">
                    
                        <Image
                            src={thumbImg}
                            alt="post titulo 1"
                            height={410}
                            width={720}
                            quality={100}
                        />
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 Maio 2023</time>
                        <p>
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                            texto texto texto texto texto texto texto texto texto
                        </p>
                       
                    </Link>                    
                    
                
                    <div className={styles.buttonNavigate}>
                        <div>
                            <button aria-label="FiChevronsLeft">
                                <FiChevronsLeft size={25} color="#fff"/>
                            </button>
                            <button aria-label="FiChevronLeft">
                                <FiChevronLeft size={25} color="#fff"/>
                            </button>
                        </div>
                        <div>
                            <button aria-label="FiChevronsRight">
                                <FiChevronsRight size={25} color="#fff"/>
                            </button>
                            <button aria-label="FiChevronRight">
                                <FiChevronRight size={25} color="#fff"/>
                            </button>
                        </div>                        
                    </div>
                </div>

            </main>
            
        </>
    )
}