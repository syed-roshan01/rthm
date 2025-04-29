// src/app/admin-panel/layout.tsx

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {children}  {/* Only Admin Panel content */}
      </div>
    );
  }
  