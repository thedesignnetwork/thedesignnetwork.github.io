'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Ensure video is muted immediately on load to prevent any audio
    useEffect(() => {
        const video = videoRef.current;
        if (!video) {
            return;
        }

        console.log('Video element found, setting up...');
        video.volume = 0;
        video.muted = true;
        video.defaultMuted = true;

        // Define event handlers so they can be removed on cleanup
        const handleLoadStart = () => {
            console.log('Video: loadstart');
        };

        const handleLoadedMetadata = () => {
            console.log('Video: loadedmetadata');
        };

        const handleCanPlay = () => {
            console.log('Video: canplay');
        };

        const handlePlaying = () => {
            console.log('Video: playing');
        };

        const handleError = (e: Event) => {
            console.error('Video error:', e);
        };

        const handlePlay = () => {
            console.log('Video play event fired');
            video.muted = true;
            video.volume = 0;
        };

        // Add event listeners for debugging
        video.addEventListener('loadstart', handleLoadStart);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('playing', handlePlaying);
        video.addEventListener('error', handleError);

        // Force mute on play
        video.addEventListener('play', handlePlay);

        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => console.log('Video autoplay successful'))
                .catch((error) =>
                    console.error('Video autoplay failed:', error)
                );
        }

        // Cleanup: remove all event listeners when component unmounts
        return () => {
            video.removeEventListener('loadstart', handleLoadStart);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('playing', handlePlaying);
            video.removeEventListener('error', handleError);
            video.removeEventListener('play', handlePlay);
        };
    }, []);

    return (
        <div className='relative h-screen w-full overflow-hidden bg-black'>
            {/* MASSIVE VIDEO - Takes up 95% of space */}
            <video
                ref={videoRef}
                className='absolute inset-0 w-full h-full object-cover scale-110'
                autoPlay
                muted
                loop
                playsInline
            >
                <source src='/Thedesignnetwork.MP4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Big Studio Title - Lower Left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className='absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40'
            >
                <div className='max-w-2xl'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white'>
                        <span className='block'>End to End</span>
                        <span className='block'>Interior Design</span>
                        <span className='block'>Your story, styled.</span>
                    </h1>
                </div>
            </motion.div>
        </div>
    );
}
