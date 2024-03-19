import { Tabs, Button, Group } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import * as Widget from "@/components/qrcode-widgets";

export const Route = createFileRoute("/generate/$step")({
	component: GenerateStep,
});

function GenerateStep() {
	const params = Route.useParams();
	const navigate = useNavigate();
	return (
		<Tabs.Panel value={params?.step}>
			{params?.step === "type" && <Widget.QRCodetype />}
			{params?.step === "customize" && <Widget.QRCodeCustomize />}
			{params?.step === "logo" && <Widget.QRCodeLogo />}
			{params?.step === "template" && <Widget.QRCodeTemplate />}

			<Group justify='space-between' mt={"sm"}>
				<Button
					disabled={parseInt(params?.step) == 1}
					onClick={() =>
						navigate({
							to: "/generate/$step",
							params: { step: (parseInt(params.step) - 1).toString() },
						})
					}>
					Back
				</Button>
				<Button
					disabled={parseInt(params?.step) == 4}
					onClick={() =>
						navigate({
							to: "/generate/$step",
							params: { step: (parseInt(params.step) + 1).toString() },
						})
					}>
					Next
				</Button>
			</Group>
		</Tabs.Panel>
	);
}
