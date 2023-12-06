import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Icons } from "./icons";

export default function Community() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-2 flex flex-col gap-4 items-center">
      <h2 className="font-bold text-5xl">Community</h2>
      <p className="text-lg">Reach with via any of my social links</p>

      <div className="flex items-center gap-4">
        <Card
          isBlurred
          className="bg-secondary/40 border border-main/40 text-white"
        >
          <CardHeader className="flex items-center gap-2">
            <Icons.twitter className="w-6 h-6" />
            <p className="font-semibold">Twitter</p>
          </CardHeader>
          <CardBody>asdfadsf</CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center">adsfasdf</CardHeader>
          <CardBody>asdfadsf</CardBody>
        </Card>

        <Card>
          <CardHeader className="flex items-center">adsfasdf</CardHeader>
          <CardBody>asdfadsf</CardBody>
        </Card>
      </div>
    </section>
  );
}
