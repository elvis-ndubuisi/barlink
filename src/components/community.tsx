import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Icons } from "./icons";

export default function Community() {
	return (
		<section className='mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 md:px-2'>
			<h2 className='text-5xl font-bold'>Community</h2>
			<p className='text-lg'>Reach with via any of my social links</p>

			<div className='flex items-center gap-4'>
				<Card isBlurred className='border-main/40 border bg-secondary/40 text-white'>
					<CardHeader className='flex items-center gap-2'>
						<Icons.twitter className='h-6 w-6' />
						<p className='font-semibold'>Twitter</p>
					</CardHeader>
					<CardBody>asdfadsf</CardBody>
				</Card>

				<Card>
					<CardHeader className='flex items-center'>adsfasdf</CardHeader>
					<CardBody>asdfadsf</CardBody>
				</Card>

				<Card>
					<CardHeader className='flex items-center'>adsfasdf</CardHeader>
					<CardBody>asdfadsf</CardBody>
				</Card>
			</div>
		</section>
	);
}
