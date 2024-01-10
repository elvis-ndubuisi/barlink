import { SVGProps } from "react";

export const Icons = {
	qrcode: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				{...props}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<rect width='5' height='5' x='3' y='3' rx='1' />
				<rect width='5' height='5' x='16' y='3' rx='1' />
				<rect width='5' height='5' x='3' y='16' rx='1' />
				<path d='M21 16h-3a2 2 0 0 0-2 2v3' />
				<path d='M21 21v.01' />
				<path d='M12 7v3a2 2 0 0 1-2 2H7' />
				<path d='M3 12h.01' />
				<path d='M12 3h.01' />
				<path d='M12 16v.01' />
				<path d='M16 12h1' />
				<path d='M21 12v.01' />
				<path d='M12 21v-1' />
			</svg>
		);
	},
	twitter: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				{...props}
				width='24'
				height='24'
				fill='currentColor'
				viewBox='0 0 16 16'>
				<path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z' />
			</svg>
		);
	},
	medium: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				fill='currentColor'
				{...props}
				viewBox='0 0 16 16'>
				<path d='M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795' />
			</svg>
		);
	},
	settings: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='currentColor'
				{...props}
				viewBox='0 0 16 16'>
				<path d='M8 4.754a3.246 3.246 0 100 6.492 3.246 3.246 0 000-6.492zM5.754 8a2.246 2.246 0 114.492 0 2.246 2.246 0 01-4.492 0z'></path>
				<path d='M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 01-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 01-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 01.52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 011.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 011.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 01.52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 01-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 01-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 002.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 001.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 00-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 00-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 00-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 001.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 003.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 002.692-1.115l.094-.319z'></path>
			</svg>
		);
	},
	link: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='currentColor'
				{...props}
				viewBox='0 0 16 16'>
				<path d='M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.002 1.002 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z'></path>
				<path d='M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243z'></path>
			</svg>
		);
	},
	textarea: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='currentColor'
				{...props}
				viewBox='0 0 16 16'>
				<path d='M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v3.563a2 2 0 010 3.874V13.5A1.5 1.5 0 0113 15H3a1.5 1.5 0 01-1.5-1.5V9.937a2 2 0 010-3.874zm1 3.563a2 2 0 010 3.874V13.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V9.937a2 2 0 010-3.874V2.5A.5.5 0 0013 2H3a.5.5 0 00-.5.5v3.563M2 7a1 1 0 100 2 1 1 0 000-2m12 0a1 1 0 100 2 1 1 0 000-2'></path>
				<path d='M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386z'></path>
			</svg>
		);
	},
	router: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='currentColor'
				{...props}
				viewBox='0 0 16 16'>
				<path d='M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z' />
				<path d='M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0' />
				<path d='M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z' />
				<path d='M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' />
			</svg>
		);
	},
	chevronBarExpand: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'
				{...props}>
				<path
					fillRule='evenodd'
					d='M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8'
				/>
			</svg>
		);
	},
	fileEarmark: (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				{...props}
				viewBox='0 0 16 16'>
				<path d='M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
				<path d='M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z' />
			</svg>
		);
	},
};
