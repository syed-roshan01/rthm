'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import AdminPanel from './AdminPanel';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/admin-login'); // if no user, redirect to login
      } else {
        setLoading(false); // if user is logged in, show the page
      }
    };
    checkSession();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <AdminPanel />
    </div>
  );
}
