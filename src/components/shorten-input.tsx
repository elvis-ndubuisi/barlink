"use client";
import { Input, ModalContent } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { Icons } from "./icons";
// import confetti from 'canvas-confetti';

export function ShortenInput() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex items-center gap-4">
        <Button isIconOnly radius="sm" size="lg" onPress={onOpen}>
          <Icons.settings className="w-6 h-6" />
        </Button>
        <Input
          isClearable
          type="text"
          label="Enter loooooooog url"
          size="sm"
          labelPlacement="inside"
          variant="flat"
          onClear={() => console.log("input cleared")}
          className="hover:outline-tertiary focus-within:outline-primary bg-card-bg text-main"
        />

        <Button
          size="lg"
          radius="sm"
          className="font-medium bg-tertiary text-main"
        >
          Shorten It!
        </Button>
      </div>
      <span className="text-xs text-center font-medium">
        The shortened URL will be valid for only 30days.{" "}
        <Link href="/" className="text-tertiary underline hover:no-underline">
          Register
        </Link>{" "}
        to specify custom duration
      </span>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-bg2">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Customize URL</ModalHeader>
              <ModalBody>
                <Input
                  type="url"
                  label="custom link address"
                  // placeholder=""
                  labelPlacement="inside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://btn.js.org/
                      </span>
                    </div>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
