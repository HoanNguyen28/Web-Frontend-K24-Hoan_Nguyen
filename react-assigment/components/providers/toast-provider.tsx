'use client';
import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
      
        duration: 3000,
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: '500',
          borderRadius: '0.5rem',
          padding: '12px 24px',
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#ef4444',
          },
        },
      }}
    />
  );
}