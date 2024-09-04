import './globals.css'
import './print.css'
import LayoutFooter from './LayoutFooter'

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
        <main className="flex justify-center items-center">
          <div className="p-4 sm:px-8 md:px-8 lg:px-0 md:py-16  w-full max-w-screen-md">
            {children}
            <LayoutFooter />
          </div>
        </main>
      </body>
    </html>
  )
}
