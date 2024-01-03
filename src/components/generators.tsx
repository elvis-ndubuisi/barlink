"use client";
import React from "react";
import qrcode from "qrcode";
import * as qrgenerator from "qrcode-generator";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { Icons } from "./icons";
// import QRCode from "@/app/qrcode/page";

type Qtype =
  | "wifi"
  | "url"
  | "text"
  | "email"
  | "location"
  | "vcard"
  | "mobile"
  | "sms"
  | "custom";

const btnTypes = [
  { title: "Website URL", type: "url" },
  { title: "Text", type: "text" },
  { title: "Email", type: "email" },
  { title: "Phone Number", type: "mobile" },
  { title: "SMS", type: "sms" },
  { title: "VCard", type: "vcard" },
  { title: "Event", type: "event" },
  { title: "Wifi", type: "wifi" },
  { title: "Geolocation", type: "location" },
  { title: "Custom Data", type: "custom" },
];

const ctx =
  "orem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae, iusto, praesentium molestias enim eligendi hic eveniet nam esse, molestiae quam repellat amet facilis harum nemo? Maxime velit id enim repudiandae quibusdam itaque libero ipsa doloribus unde, ex autem amet, ab, corrupti sed odio sunt facere quis! Voluptatibus ex deleniti tenetur aliquam doloribus ipsa neque sit molestiae! Voluptate ab repudiandae nesciunt illum autem, dicta ipsum, hic iure vitae quae temporibus tempore doloribus veniam asperiores ut? Sint cumque fuga recusandae impedit, dolor beatae laboriosam qui consequatur voluptatum rerum nihil amet illum modi vitae alias, assumenda ducimus! Itaque commodi ipsum mollitia explicabo quaerat omnis expedita laudantium porro, blanditiis nesciunt eveniet deleniti iusto dolor necessitatibus ";

export function DesktopGenerator() {
  const [selectedType, setSelectedType] = React.useState<Qtype>("url");
  const [selectFormat, setSelectedFormat] = React.useState("png");
  const [content, setContent] = React.useState(ctx);

  const formatLabels = { png: "png", jpeg: "jpeg", svg: "svg" };

  return (
    <section className="max-w-screen-lg mx-auto p-5 rounded-md grid grid-cols-[0.3fr_1fr_0.5fr] gap-3 bg-dark text-light">
      <aside>
        <h3 className="font-bold mb-3">QR Type</h3>
        <div className="flex flex-col space-y-2">
          {btnTypes.map((btn) => (
            <Button
              size="sm"
              radius="none"
              className="rounded-sm bg-mid-light text-dark"
              key={btn.type}
              onPress={() => setSelectedType(btn.type)}
            >
              {btn.title}
            </Button>
          ))}
        </div>
      </aside>

      <main>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold capitalize">{selectedType}</h4>
        </div>
        <section className="flex flex-col space-y-3">
          <Input
            placeholder="input here"
            radius="none"
            size="sm"
            className="rounded-md"
          />
          <div className="flex items-center gap-3">
            <Input
              placeholder="input here"
              radius="none"
              size="sm"
              className="rounded-md"
            />
            <Input
              placeholder="input here"
              radius="none"
              size="sm"
              className="rounded-md"
            />
          </div>
        </section>
      </main>

      <aside className="flex flex-col space-y-2">
        <Preview content={content} />
        <section className="flex flex-col space-y-2">
          <h4 className="font-semibold">Logo</h4>
          <div>
            <span className="border-2 text-sm text-center border-dashed border-tangerine bg-tangerine/30 p-3 rounded-md block">
              <Icons.fileEarmark className="fill-light w-5 h-5 inline-block mr-1" />
              Drag & drop or select image
            </span>
            <input type="file" name="" hidden />
          </div>
        </section>
        <ButtonGroup variant="solid">
          <Button>
            Download as <span className="uppercase">{selectFormat}</span>
          </Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly>
                <Icons.chevronBarExpand />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Download format options"
              selectedKeys={selectFormat}
              selectionMode="single"
              onSelectionChange={setSelectedFormat}
              className="max-w-[300px]"
            >
              <DropdownItem key="png">PNG</DropdownItem>
              <DropdownItem key="jpeg">JPEG</DropdownItem>
              <DropdownItem key="svg">SVG</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
      </aside>
    </section>
  );
}

function Preview({ content }: { content: string }) {
  const canvasRef = React.useRef(null);

  let qr = qrgenerator.default(4, "H");

  React.useEffect(() => {
    if (canvasRef.current) {
      qrcode.toCanvas(canvasRef.current, content, {
        errorCorrectionLevel: "H",
        width: 250,
        margin: 2,
        color: { dark: "#010599FF", light: "#FFBF60FF" },
      });
    }
  }, [content]);
  return (
    <div className="w-12 aspect-square">
      <canvas ref={canvasRef} width={250} height={250} />
    </div>
  );
}
