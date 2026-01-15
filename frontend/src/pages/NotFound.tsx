import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { logger } from '@/lib/logger';

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        logger.error(
            '404 Error: User attempted to access non-existent route:',
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className='flex min-h-screen items-center justify-center bg-background'>
            <div className='text-center'>
                <h1 className='mb-4 text-8xl font-bold text-foreground'>404</h1>
                <p className='mb-4 text-xl text-muted-foreground'>
                    Oops! Page not found
                </p>
                <Button asChild>
                    <Link to='/'>Return to Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
