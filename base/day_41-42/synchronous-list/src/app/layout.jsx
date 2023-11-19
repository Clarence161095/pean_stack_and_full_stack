import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import MyNavbar from '@/components/navbar';

export const metadata = {
  title: 'Synchronous List',
  description: 'NestJS And Synchronous List',
}

export default function RootLayout({ children }) {
  return (
    <>
      <MyNavbar />
      {children}
    </>
  )
}
