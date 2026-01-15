import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/layout/Layout';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import NotFound from '@/pages/NotFound';

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Layout>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Hero />
                                <Portfolio />
                            </>
                        }
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
