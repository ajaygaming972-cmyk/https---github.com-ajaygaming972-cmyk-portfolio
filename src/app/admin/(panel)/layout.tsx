import type { Metadata } from 'next';
import AdminShell from '@/app/admin/components/AdminShell';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
