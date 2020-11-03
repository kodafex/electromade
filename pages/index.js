import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="container mx-auto">
			<Head>
				<title>Nextjs / Tailwind / MDX Starter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="text-coal">
				<div className="max-w-2xl p-10 flex font-black jusitfy-center text-6xl">
					<p>I'm Eric, and this is my website.</p>
				</div>
			</main>

			<footer />
		</div>
	);
}
