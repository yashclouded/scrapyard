import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HKRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://scrapyard.hk');
  }, [router]);

  return null;
}
