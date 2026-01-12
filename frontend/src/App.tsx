import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/layout/Layout';

function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Layout>
                <div className='flex flex-col items-center justify-center min-h-[calc(100vh-60px)] bg-background text-foreground relative overflow-hidden'>
                    <h1 className='text-4xl font-bold text-primary'>
                        The Design Network
                    </h1>
                    <p className='mt-4 text-muted-foreground'>
                        End-to-End Interior Experience
                    </p>
                </div>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
