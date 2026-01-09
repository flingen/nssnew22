import { ReactNode } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { AdminLogin } from './AdminLogin';
import { Loader2 } from 'lucide-react';

export function AdminRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAdmin();

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-nigeria-green animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  return <>{children}</>;
}
