import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    default:"Admin",
  },
  description:"site movies"
}

export default function AdminLayout({ children }) {
  return (
    <main className='flex h-screen'>
     <aside className='w-44 bg-slate-500 p-3'>aside</aside>
     <section className='grow bg-sky-300 p-3'>{children}</section>
    </main>
  )
}
