'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface YouTubePlayerProps {
	videoUrl: string;
	thumbnailUrl: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
	autoPlay?: boolean;
	showControls?: boolean;
	muted?: boolean;
	loop?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
														 videoUrl,
														 thumbnailUrl,
														 alt = 'YouTube video thumbnail',
														 width = "100%",
														 height = "100%",
														 className = '',
														 autoPlay = false,
														 showControls = true,
														 muted = false,
														 loop = false,
													 }) => {
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const [isLoading, setIsLoading] = useState(false);
	const videoId = extractYouTubeId(videoUrl);

	useEffect(() => {
		if (autoPlay) {
			setIsPlaying(true);
		}
	}, [autoPlay]);

	if (!videoId) {
		console.error('Invalid YouTube URL');
		return (
			<div className={`flex items-center justify-center bg-gray-200 ${className}`} style={{ width, height }}>
				<p className="text-gray-500">Invalid YouTube URL</p>
			</div>
		);
	}

	const handlePlay = () => {
		setIsLoading(true);
		setIsPlaying(true);
	};

	const handleIframeLoad = () => {
		setIsLoading(false);
	};

	const buildYouTubeUrl = (): string => {
		const params = new URLSearchParams({
			autoplay: '1',
			rel: '0',
			controls: showControls ? '1' : '0',
			mute: muted ? '1' : '0',
			loop: loop ? '1' : '0',
			playsinline: '1',
		});

		return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
	};

	return (
		<div className={`relative rounded-3xl  overflow-hidden ${className}`} style={{ width, height, aspectRatio: '16/9' }}>
			{!isPlaying ? (
				// Состояние с превью и кнопкой play
				<div className="relative w-full h-full cursor-pointer group" onClick={handlePlay}>
					<Image
						src={thumbnailUrl}
						alt={alt}
						fill
						className="object-cover transition-transform group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw, 100vw"
						priority
					/>
					<div className="absolute inset-0 bg-[#0000007a] bg-opacity-30 flex items-center justify-center transition-all group-hover:bg-opacity-20">
						<div className="w-24 h-16 bg-red-600 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-lg">
							<svg
								className="w-8 h-8 text-white ml-1"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M8 5v14l11-7z"/>
							</svg>
						</div>
					</div>
				</div>
			) : (
				// Состояние с воспроизводящимся видео
				<div className="relative w-full h-full">
					{isLoading && (
						<div className="absolute inset-0 flex items-center justify-center bg-gray-200">
							<div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
						</div>
					)}
					<iframe
						width="100%"
						height="100%"
						src={buildYouTubeUrl()}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="w-full h-full"
						onLoad={handleIframeLoad}
					/>
				</div>
			)}
		</div>
	);
};

// Функция для извлечения YouTube ID из различных форматов URL
function extractYouTubeId(url: string): string | null {
	const patterns = [
		/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
		/youtube\.com\/embed\/([^"&?\/\s]{11})/,
		/youtube\.com\/watch\?v=([^"&?\/\s]{11})/,
		/youtu\.be\/([^"&?\/\s]{11})/,
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match) {
			return match[1];
		}
	}

	return null;
}

export default YouTubePlayer;