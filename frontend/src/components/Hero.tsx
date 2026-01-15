'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Ensure video is muted immediately on load to prevent any audio
    useEffect(() => {
        if (videoRef.current) {
            console.log('Video element found, setting up...');
            videoRef.current.volume = 0;
            videoRef.current.muted = true;
            videoRef.current.defaultMuted = true;

            // Add event listeners for debugging
            videoRef.current.addEventListener('loadstart', () =>
                console.log('Video: loadstart')
            );
            videoRef.current.addEventListener('loadedmetadata', () =>
                console.log('Video: loadedmetadata')
            );
            videoRef.current.addEventListener('canplay', () =>
                console.log('Video: canplay')
            );
            videoRef.current.addEventListener('playing', () =>
                console.log('Video: playing')
            );
            videoRef.current.addEventListener('error', (e) =>
                console.error('Video error:', e)
            );

            // Force mute on play
            videoRef.current.addEventListener('play', () => {
                if (videoRef.current) {
                    console.log('Video play event fired');
                    videoRef.current.muted = true;
                    videoRef.current.volume = 0;
                }
            });

            // Try to play the video
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => console.log('Video autoplay successful'))
                    .catch((error) =>
                        console.error('Video autoplay failed:', error)
                    );
            }
        }
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
