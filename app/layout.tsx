import './globals.css'
import Footer from './footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Poems @ the Uplands',
  description: 'A new poem every month.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ewf8ksw.css"></link>
      </head>
      <body>
        <main className={styles.main}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
