"use client" 
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const navv = router.push('/home')
  return (
    <>
      {navv}
    </>
  );
}

