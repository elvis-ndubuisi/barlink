// import { QRCode } from "react-qrcode-logo";
import { AwesomeQRCode } from "@awesome-qrcode/react";

export default function ShortenUrlPreview() {
	return (
		<section className='flex items-center justify-center'>
			<div className=''>
				<AwesomeQRCode
					value='https://barlink.vercel.app'
					ecLevel='M'
					size={300}
					dataStyle='dots'
					eyeRadius={12}
					bgColor='#FFFFFF'
					fgColor='black'
					quietZone={10}
					eyeColor='rgb(139,92,246)'
				/>
			</div>
		</section>
	);
}
