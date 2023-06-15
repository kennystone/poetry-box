import './globals.css'
import Footer from './footer'

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
      <body className="bg-amber-50">
        <main className={`p-4 md:p-16 lg:p-20 w-full max-w-[850px]`}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
