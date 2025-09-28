// src/routes/_root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { FontSizeProvider } from '../components/context/FontSizeContext';



// Root layout
const RootLayout = () => {
  return (
    <>
      {/* Optional header */}


      {/* Providers wrap your main content */}
      <FontSizeProvider>
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Outlet />
        </main>
      </FontSizeProvider>

      {/* Optional footer */}
      

      {/* Global Toaster outside Outlet and Provider */}
    
    </>
  );
};

// Create the root route
export const Route = createRootRoute({
  component: RootLayout,
});
