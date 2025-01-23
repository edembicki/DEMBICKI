"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { benefitOne } from "@/components/data";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { Modal } from "antd";
import Image from "next/image";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  return (
    <>
      <Container>
        <section id="home">
          <Hero />
        </section>
        <hr style={{ border: "1px solid rgb(255 116 6 / 12%)" }}></hr>
        <section id="servicos">
          <Benefits data={benefitOne} />
        </section>
        <hr style={{ border: "1px solid rgb(255 116 6 / 12%)" }}></hr>
        <section id="duvidas">
          <SectionTitle title="Brasil"></SectionTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={showModal}
            >
              <CursorArrowRaysIcon className="h-6 w-6 text-red-500" />{" "}
              &nbsp;&nbsp; Naturalização
            </p>
            <br></br>
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={showModal2}
            >
              <CursorArrowRaysIcon className="h-6 w-6 text-red-500" />{" "}
              &nbsp;&nbsp; Passaporte
            </p>
          </div>
        </section>
        <br></br>
        <hr style={{ border: "1px solid rgb(255 116 6 / 12%)" }}></hr>
      </Container>

      <Modal
        title=""
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
      >
        <div className="flex justify-center">
          <Image
            src="/img/natura.png" // Replace with the actual path to your PNG image
            alt="Experience Image"
            width={700}
            height={400}
          />
        </div>
      </Modal>
      <Modal
        title=""
        visible={isModalVisible2}
        onCancel={handleCancel2}
        footer={null}
        centered
        width={800}
      >
        <div className="flex justify-center">
          <Image
            src="/img/passport_1.png" // Replace with the actual path to your PNG image
            alt="Experience Image"
            width={400}
            height={800}
          />
          <Image
            src="/img/passport_2.png" // Replace with the actual path to your PNG image
            alt="Experience Image"
            width={400}
            height={800}
          />
        </div>
      </Modal>
    </>
  );
}
