"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import React, { useState } from "react";

const Banner: React.FC<{}> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [type, setType] = useState("");
  const handleOpenModal = async (type: string) => {
    if (type === "momo") {
      setType("/donatemomo.jpg");
    }
    if (type === "fb") {
      setType("/linkfb.png");
    }
    if (type === "zalo") {
      setType("/linkzalo.jpg");
    }
    if (type === "vcb") {
      setType("/donatevcb.jpg");
    }
    onOpen();
  };
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[70px] z-[20] h-[calc(100svh + 120px)] p-10">
      <div className="flex flex-col justify-center text-center gap-3">
        <div className="justify-center flex">
          <Image
            className="rounded-full border-2 "
            priority
            src="/logo.png"
            height={200}
            width={200}
            alt="muoi"
          />
        </div>

        <div className="flex">
          <div className="flex flex-col gap-6 ml-6 mt-6 cursor-pointer tracking-tighter text-5xl font-bold text-white max-w-[600px] w-auto h-auto">
            Muội nè
          </div>
        </div>
        <div className="flex justify-center items-center  gap-2">
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
            <div>Donate🫰</div>
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
                  className="rounded-md border-2 animate-pulse p-2"
                />
                <div className="text-xl ">Mở QR 🙏</div>
              </div>
            </div>
            <div
              className="border-1 p-3 rounded-xl bg-pink-300"
              onClick={() => handleOpenModal("vcb")}
            >
              <div className="flex items-center gap-5">
                <Image
                  height={50}
                  width={50}
                  src={"/vcb.png"}
                  alt="vcb"
                  className="rounded-md border-2 animate-pulse p-2"
                />
                <div className="text-xl ">Mở Bank 🏧</div>
              </div>
            </div>
            {/* <div
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
            </div> */}
          </div>
        </div>
        <div className="text-md flex justify-center">
          <div className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-5xl font-semibold text-white max-w-[600px] w-auto h-auto">
            <div>Liên hệ🫸</div>
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
                  <div className="p-3 flex justify-center  gap-4 font-mono">
                    <Image
                      alt="donate"
                      src={type}
                      height={180}
                      width={180}
                      className="rounded-md border-2"
                    />
                    <div className="flex items-center justify-center flex-col">
                      <div>Quét QR</div>
                      <Image
                        alt=""
                        height={150}
                        width={150}
                        src={"/scan.gif"}
                      />
                    </div>
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
