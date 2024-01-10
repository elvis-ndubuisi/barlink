"use client";
import { Input, ModalContent } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Snippet,
} from "@nextui-org/react";
import Link from "next/link";
import { Icons } from "./icons";
import React from "react";

export function ShortenInput() {
	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
	const [customUrl, setCustomUrl] = React.useState({
		hasCustom: false,
		value: "",
		isInvalid: false,
	});
	const [payload, setPayload] = React.useState({ url: "", custom: "" });
	const [processing, setProcessing] = React.useState({
		processing: false,
		converted: false,
		shortLink: "",
	});

	const isInvalid: boolean = React.useMemo(() => {
		const urlRegex =
			/^(https?|ftp):\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,}){1,}([/?#]\S*)?$/;

		if (payload.url === "") return false;

		return payload.url.match(urlRegex) && payload.url.length > 30 ? false : true;
	}, [payload.url]);

	function shortenLink() {
		customUrl.isInvalid &&
			customUrl.hasCustom &&
			setPayload((prev) => ({ ...prev, custom: customUrl.value }));

		if (!payload.url) return;

		setProcessing((prev) => ({ ...prev, processing: true }));

		fetch("/api/gen/shorten", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				longURL: payload.url,
				customUrl: customUrl.value,
			}),
		})
			.then(async (res) => {
				setProcessing({ converted: true, processing: false, shortLink: "" });
				setPayload({ custom: "", url: "" });
				setCustomUrl({ hasCustom: false, isInvalid: false, value: "" });
				const payload = await res.json();
				setProcessing((prev) => ({ ...prev, shortLink: payload.short_link }));
			})
			.catch(() => setProcessing({ converted: true, processing: false, shortLink: "" }));
	}

	return (
		<>
			<div className='flex-wrapc flex items-center gap-4'>
				<Button
					isIconOnly
					radius='none'
					size='lg'
					onPress={onOpen}
					className='bg-cinnabar text-light relative overflow-visible rounded-md'>
					<Icons.settings className='h-6 w-6' />
					{customUrl.hasCustom && (
						<span className='border-bg bg-indigo absolute -right-1 -top-1 z-10 h-3 w-3 rounded-full border' />
					)}
				</Button>

				<Input
					value={payload.url}
					type='text'
					label='Enter loooooooog url'
					size='sm'
					labelPlacement='inside'
					variant='flat'
					isInvalid={isInvalid}
					className='text-main min-w-md flex-1 bg-transparent focus-within:outline-primary'
					onChange={(e) => setPayload((prev) => ({ ...prev, url: e.target.value }))}
				/>
			</div>
			{isInvalid && (
				<span className='text-cinnabar text-center text-xs font-medium'>
					Please enter a loooong url starting with https://, http:// or ftp://
				</span>
			)}
			<Button
				isLoading={processing.processing}
				size='lg'
				radius='none'
				className='bg-dark text-light rounded-md'
				onPress={() => shortenLink()}
				disabled={!Boolean(payload.url && payload.url.length > 30 && !isInvalid)}>
				Shorten It
			</Button>

			<span className='text-center text-xs font-medium'>
				The shortened URL will be valid for only 30days.{" "}
				<Link
					href='/login/sign-up'
					className='text-cinnabar underline hover:no-underline'>
					Register
				</Link>{" "}
				to specify custom duration
			</span>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange} className='bg-dark text-light'>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>Customize URL</ModalHeader>
							<ModalBody>
								<Input
									label='Custom link address'
									type='url'
									labelPlacement='inside'
									minLength={4}
									defaultValue={customUrl.value}
									errorMessage={customUrl.isInvalid && "Must be more than 4 characters"}
									startContent={
										<div className='pointer-events-none flex items-center'>
											<span className='text-small text-default-400'>
												https://btn.js.org/
											</span>
										</div>
									}
									onChange={(e) => {
										setCustomUrl(() => ({
											hasCustom:
												!e.target.validity.tooShort && Boolean(e.target.value.length),
											value: e.target.value,
											isInvalid: e.target.validity.tooShort,
										}));
									}}
								/>
							</ModalBody>
							<ModalFooter>
								<Button
									className='bg-transparent text-white'
									onPress={() => {
										setCustomUrl(() => ({
											hasCustom: false,
											isInvalid: true,
											value: "",
										}));
										onClose();
									}}>
									Close
								</Button>
								<Button
									className='bg-cinnabar text-light'
									onPress={onClose}
									disabled={customUrl.isInvalid}>
									Save changes
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>

			{processing.converted && !processing.processing && (
				<Snippet autoFocus size='lg' color='danger'>
					{processing.shortLink}
				</Snippet>
			)}
		</>
	);
}
