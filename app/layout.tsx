import MyProfile from './components/MyProfile'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Mark',
  description: 'Created by Mark Kiprotich',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <MyProfile/>
        {children}</body>
    </html>
  )
}
