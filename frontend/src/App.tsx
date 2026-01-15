import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/layout/Layout';
import { Hero } from '@/components/Hero';

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Layout>
                <Hero />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
