"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Posso solicitar cidadania morando fora do país?",
    answer: "Não, você precisa residir por pelo menos 1 ano no país de destino.",
  },
  {
    question: "Posso solicitar cidadania sem nenhum parentesco com o país?",
    answer: "Não, você precisa ter algum traço de origem daquele país.",
  },
  {
    question: "Quanto tempo leva para obter a cidadania?",
    answer:
      "O tempo varia de acordo com o país, mas geralmente leva entre 6 meses e 2 anos após a submissão da documentação completa.",
  },
  {
    question: "Quais documentos são necessários para a solicitação?",
    answer:
      "Os documentos mais comuns incluem certidões de nascimento, casamento, antecedentes criminais e comprovantes de residência. Consulte o consulado para uma lista completa.",
  },
];

