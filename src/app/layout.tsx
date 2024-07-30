import Navbar from '@/components/header/Navbar';
import '../app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='justify-center'><Navbar/>{children}</body>
    </html>
  )
}