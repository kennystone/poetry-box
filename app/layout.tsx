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
      <body>
        <main className={styles.main}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
