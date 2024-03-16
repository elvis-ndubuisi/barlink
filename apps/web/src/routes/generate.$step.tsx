import { Tabs, Button, Group } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/generate/$step")({
	component: GenerateStep,
});

function GenerateStep() {
	const params = Route.useParams();
	const navigate = useNavigate();
	return (
		<Tabs.Panel value={params?.step}>
			{parseInt(params?.step) === 1 && <section>page 1</section>}
			{parseInt(params?.step) === 2 && <div>page 2</div>}
			{parseInt(params?.step) === 3 && <section>page 3</section>}
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
					disabled={parseInt(params?.step) == 3}
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
