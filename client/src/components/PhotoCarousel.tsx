
'use client';

import { motion } from 'framer-motion';
import { PhotoCard } from './PhotoCard';

const posterItems = [
    'https://miro.medium.com/v2/resize:fit:786/format:webp/1*rjBFN0BFNgZKn9gO6uXFEg.jpeg',
    'https://fwdlife.in/wp-content/uploads/2018/05/vitiligo-1.jpg',
    'https://cdn.shopify.com/s/files/1/0567/1865/5531/files/could-near-infrared-saunas-be-the-best-thing-for-your-skin-5.jpg',
    'https://images.unsplash.com/photo-1694005892002-5c43b8febc2f?q=80&w=1170&auto=format&fit=crop',
    'https://www.wellahealth.com/blog/wp-content/uploads/2024/07/vitiligo-1.png',
    "https://i.pinimg.com/1200x/99/05/d5/9905d5c734b3110498ce6c2eeca0cbea.jpg",
    "https://i.pinimg.com/1200x/11/37/16/1137161b98db41e4a0bfa8e93cdd4dd9.jpg",
];

// duplicate for seamless loop
const loopItems = [...posterItems, ...posterItems];

export default function PhotoCarousel() {
    return (
        <section className="py-12 pointer-events-auto overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 40,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {loopItems.map((src, i) => (
                        <div
                            key={i}
                            className="shrink-0 w-[260px]"
                        >
                            <PhotoCard src={src} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
