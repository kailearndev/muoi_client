"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import Link from "next/link";

const Banner: React.FC<{}> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [type, setType] = useState("");
  const handleOpenModal = (type: string) => {
    if (type === "momo") {
      setType("/donatemomo.jpg");
    }
    if (type === "fb") {
      setType("/linkfb.png");
    }
    if (type === "zalo") {
      setType("/linkzalo.jpg");
    }
    onOpen();
  };
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[70px] z-[20] h-full] p-10">
      <div className="flex flex-col justify-center text-center gap-3">
        <div className="justify-center flex">
          <Image
            className="rounded-full border-2"
            priority
            src="/logo.png"
            height={200}
            width={200}
            alt="Ibrahim Memon"
          />
        </div>

        <div className="flex">
          <div className="flex flex-col gap-6 ml-6 mt-6 cursor-pointer tracking-tighter text-5xl font-bold text-white max-w-[600px] w-auto h-auto">
            Muội nè
          </div>
        </div>
        <div className="flex justify-center items-center animate-pulse gap-2">
          <Image
            src="/200w.gif"
            height={100}
            width={100}
            alt="chill"
            className="rounded-xl bg-transparent"
          />
        </div>

        <div className="text-md flex justify-center">
          <div className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-5xl font-semibold text-white max-w-[600px] w-auto h-auto">
            <div>Donate⭐</div>
            <div
              className="border-1 p-3 rounded-xl bg-pink-300"
              onClick={() => handleOpenModal("momo")}
            >
              <div className="flex items-center gap-5">
                <Image
                  height={50}
                  width={50}
                  src={"/momo.webp"}
                  alt="momo"
                  className="rounded-md border-2 animate-pulse"
                />
                <div className="text-xl ">Nhấn zô đây 👈</div>
              </div>
            </div>
            <div
              className="border-1 p-3 rounded-xl bg-pink-300"
              onClick={() => handleOpenModal("fb")}
            >
              <div className="flex items-center gap-5">
                <Image
                  height={50}
                  width={50}
                  src={"/fb.webp"}
                  alt="fb"
                  className="rounded-md border-2 animate-pulse"
                />
                <div className="text-xl ">Facebook 💭</div>
              </div>
            </div>
            <div
              className="border-1 p-3 rounded-xl bg-pink-300"
              onClick={() => handleOpenModal("zalo")}
            >
              <div className="flex items-center gap-5">
                <Image
                  height={50}
                  width={50}
                  src={"/icon-zalo.png"}
                  alt="momo"
                  className="rounded-md border-2 animate-pulse"
                />
                <div className="text-xl ">Zalo 🙌</div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur"
          className="bg-white rounded-3xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="p-5 flex justify-center items-center gap-7 font-mono">
                    <Image
                      alt="donate"
                      src={type}
                      height={120}
                      width={120}
                      className="rounded-md border-2"
                    />
                    <Image alt="" height={150} width={150} src={"/scan.gif"} />
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Banner;
