import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router';
import AppRoutes from './Router/AppRoutes.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>

    <AuthProvider>
     <BrowserRouter>
        <AppRoutes />
     </BrowserRouter>

    </AuthProvider>
    </QueryClientProvider>


)
