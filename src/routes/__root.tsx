

import { createRootRoute,  Outlet } from '@tanstack/react-router';
import { FontSizeProvider } from '../components/context/FontSizeContext';

const RootLayout = () => (
  <>
    <FontSizeProvider>  
        <Outlet />
    </FontSizeProvider>


  </>
);

export const Route = createRootRoute({ component: RootLayout });
