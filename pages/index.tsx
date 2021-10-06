import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedro Beda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className={styles.header}>
        <ul className={styles.headerlist}>
          <li><a target="_blank" href="https://drnimagens.com.br/" className={styles.headerlink}>linkedin</a></li>
          <li><a target="_blank" href="https://behance.net/pedrobeda" className={styles.headerlink}>behance</a></li>
          <li><a target="_blank" href="https://github.com/pedrobeto" className={styles.headerlink}>github</a></li>
        </ul>
        <img className={styles.qrcode} src="./flowcode.png" alt="mail-qrcode"/>
      </header>
     
      <main className={styles.main}>
        
        <div className={styles.text}>
          <h1 className={styles.title}>
            Olá,
          </h1>
          <h2 className={styles.subtitle}>
            Meu nome é Pedro Beda
          </h2>
          <h2 className={styles.description}>
            Desenvolvedor Web e Mobile
          </h2>
        </div>

        <div>
          <img className={styles.image} src="./beto.png" alt="beto"/>
        </div>

        
      </main>

      <footer className={styles.footer}>
        <ul className={styles.list}>
          <li><a target="_blank" href="https://drnimagens.com.br/" className={styles.link}>linkedin</a></li>
          <li><a target="_blank" href="https://behance.net/pedrobeda" className={styles.link}>behance</a></li>
          <li><a target="_blank" href="https://github.com/pedrobeto" className={styles.link}>github</a></li>
        </ul>
        <div className={styles.mobileqrcode}>
          <img className={styles.qrcode} src="./flowcode.png" alt="mail-qrcode"/>
        </div>
        <div className={styles.footermail}>
          <p className={styles.footertext} >Mail</p>
        </div>
      </footer>
    </div>
  )
}
