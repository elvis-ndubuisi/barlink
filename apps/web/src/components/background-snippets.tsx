import Dots from "./dots";

export function TallGridBackground() {
	return (
		<div className='absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
	);
}

export function TopLightBackground() {
	return (
		<div className='absolute top-0 -z-10 h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]' />
	);
}

export function GradientDownBackground() {
	return (
		<div className='relative'>
			<div className='max-w-screen absolute top-0 z-[-2] h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
		</div>
	);
}

export function SideGlowBackground() {
	return (
		<div className='relative h-full w-full bg-slate-950'>
			<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			<div className='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
		</div>
	);
}

export function DotMaskedBackground() {
	return (
		// <div className='relative h-full w-full bg-white'>
		<div className='absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
		// </div>
	);
}

export function DotsBackground() {
	return (
		<>
			<Dots
				className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
				style={{ left: 0, top: 0 }}
			/>
			<Dots
				className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
				style={{ left: 60, top: 0 }}
			/>
			<Dots
				className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-secondary-2]'
				style={{ left: 0, top: 0 }}
			/>
			<Dots
				className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
				style={{ left: 0, top: 140 }}
			/>
			<Dots
				className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
				style={{ right: 0, top: 60 }}
			/>
		</>
	);
}
