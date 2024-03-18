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
			{parseInt(params?.step) === 1 && <Widget.QRCodetype />}
			{parseInt(params?.step) === 2 && <Widget.QRCodeCustomize />}
			{parseInt(params?.step) === 3 && <Widget.QRCodeLogo />}
			{parseInt(params?.step) === 4 && <Widget.QRCodeTemplate />}

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
