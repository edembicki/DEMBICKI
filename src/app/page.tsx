import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <section id="home">
        <Hero />
      </section>
      <hr style={{ border: "1px solid rgb(255 116 6 / 12%)" }}></hr>
      <section id="servicos">
        <Benefits data={benefitOne} />
      </section>
      <hr style={{ border: "1px solid rgb(255 116 6 / 12%)" }}></hr>
      {/* <section id="duvidas">
        <SectionTitle title="Perguntas Frequentes">
          Respondemos às dúvidas mais comuns para facilitar sua decisão e
          esclarecer o processo. Ter essas respostas aqui pode aumentar a
          confiança no serviço e reduzir a necessidade de suporte.
        </SectionTitle>
        <Faq />
      </section> */}
      <hr style={{ border: "1px solid rgb(255 116 6 / 12%)" }}></hr>
    </Container>
  );
}
