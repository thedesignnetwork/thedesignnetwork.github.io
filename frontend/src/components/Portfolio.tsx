import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';

interface Project {
    summary: string;
    title: string;
    client: string;
    description: string;
    videoUrl: string;
    industry: string;
    style: string;
    tone: string;
    format: string;
    projectType: string;
}

export function Portfolio() {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        console.log('Fetching project data...');
        client
            .fetch(
                `*[_type == "project" && featured == true][0]{
            summary,
            title,
            client,
            description,
            videoUrl,
            industry,
            style,
            tone,
            format,
            projectType
          }`,
            )
            .then((data) => {
                console.log('Sanity Data:', data);
                setProject(data);
            })
            .catch((error) => {
                console.error('Sanity Fetch Error:', error);
            });
    }, []);

    if (!project) {
        return (
            <section id='portfolio' className='relative py-32 bg-background'>
                <div className='container mx-auto px-6 sm:px-8 lg:px-12'>
                    {/* Skeleton Header */}
                    <div className='text-center mb-20 space-y-4'>
                        <Skeleton className='h-4 w-32 mx-auto' />
                        <Skeleton className='h-16 w-3/4 mx-auto' />
                        <Skeleton className='h-8 w-1/2 mx-auto' />
                    </div>

                    {/* Skeleton Content */}
                    <div className='max-w-6xl mx-auto'>
                        <div className='relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl'>
                            {/* Video Skeleton */}
                            <div className='relative flex justify-center bg-muted/20 p-8'>
                                <Skeleton className='h-[600px] w-full max-w-[400px] rounded-xl' />
                            </div>

                            {/* Details Skeleton */}
                            <div className='p-8 lg:p-12 space-y-6'>
                                <div className='flex gap-4'>
                                    <Skeleton className='h-8 w-24 rounded-full' />
                                    <Skeleton className='h-8 w-32' />
                                </div>
                                <Skeleton className='h-10 w-2/3' />
                                <div className='space-y-2'>
                                    <Skeleton className='h-4 w-full' />
                                    <Skeleton className='h-4 w-full' />
                                    <Skeleton className='h-4 w-5/6' />
                                </div>
                                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className='space-y-2'>
                                            <Skeleton className='h-4 w-16' />
                                            <Skeleton className='h-6 w-24' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id='portfolio' className='relative py-32 bg-background'>
            <div className='container mx-auto px-6 sm:px-8 lg:px-12'>
                {/* Section Header */}
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center gap-3 mb-6'>
                        <div className='w-3 h-3 bg-emerald-500 rounded-full animate-pulse' />
                        <span className='text-sm font-semibold text-muted-foreground'>
                            Featured Work
                        </span>
                        <div className='w-3 h-3 bg-blue-500 rounded-full animate-pulse' />
                    </div>

                    <h2 className='text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8'>
                        <span className='block mb-2'>Creative Productions</span>
                    </h2>

                    <p className='text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
                        {project.summary}
                    </p>
                </div>

                {/* Featured Video */}
                <div className='max-w-6xl mx-auto'>
                    <div className='relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl'>
                        {/* Video Embed */}
                        <div className='relative flex justify-center bg-black/5'>
                            <div className='h-[700px] w-full max-w-[400px] shadow-2xl rounded-xl overflow-hidden'>
                                <iframe
                                    src={project.videoUrl}
                                    title='Instagram Post'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    allowFullScreen
                                    className='w-full h-full border-none'
                                />
                            </div>

                            {/* Floating Status Badge */}
                            <div className='absolute top-6 right-6'>
                                <span className='rounded-xl px-4 py-2 text-sm font-medium text-foreground bg-background/80 backdrop-blur-md border border-border/50 shadow-sm'>
                                    Latest Project
                                </span>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className='p-8 lg:p-12'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <span className='bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium'>
                                        {project.projectType || 'Commercial'}
                                    </span>
                                    <span className='text-sm text-muted-foreground'>
                                        Client: {project.client}
                                    </span>
                                </div>

                                <h3 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
                                    {project.title}
                                </h3>

                                <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
                                    {project.description}
                                </p>

                                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm'>
                                    <div>
                                        <span className='text-muted-foreground block'>
                                            Industry
                                        </span>
                                        <span className='font-medium'>
                                            {project.industry}
                                        </span>
                                    </div>
                                    <div>
                                        <span className='text-muted-foreground block'>
                                            Style
                                        </span>
                                        <span className='font-medium'>
                                            {project.style}
                                        </span>
                                    </div>
                                    <div>
                                        <span className='text-muted-foreground block'>
                                            Tone
                                        </span>
                                        <span className='font-medium'>
                                            {project.tone}
                                        </span>
                                    </div>
                                    <div>
                                        <span className='text-muted-foreground block'>
                                            Format
                                        </span>
                                        <span className='font-medium'>
                                            {project.format}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
