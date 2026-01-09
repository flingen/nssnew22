import { AdminProvider } from '../contexts/AdminContext';
import { AdminRoute } from '../components/admin/AdminRoute';
import { AdminUpload } from '../components/admin/AdminUpload';

export function AdminPage() {
  return (
    <AdminProvider>
      <AdminRoute>
        <AdminUpload />
      </AdminRoute>
    </AdminProvider>
  );
}
