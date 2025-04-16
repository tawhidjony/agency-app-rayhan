import dynamic from 'next/dynamic';
const LoginComponent = dynamic(() => import('@/components/auth/login/login.component'))
export default function Home() {
  return ( <LoginComponent/>);
}
