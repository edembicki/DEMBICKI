import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Nossos Serviços de Cidadania e Vistos",
  desc: "Oferecemos uma gama de serviços especializados para facilitar o processo de obtenção de cidadania e vistos em diversos países. Nossa equipe de especialistas está pronta para ajudar você em todas as etapas, garantindo um processo rápido e eficiente.",
  image: benefitOneImg, // Imagem ilustrativa do serviço
  bullets: [
    {
      title: "Consultoria Personalizada",
      desc: "Analisamos seu caso individualmente para identificar o melhor caminho para obter a cidadania ou visto desejado.",
      icon: <FaceSmileIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Assessoria em Documentação",
      desc: "Auxiliamos na coleta, organização e validação dos documentos necessários para o processo de cidadania ou visto.",
      icon: <ChartBarSquareIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Preenchimento de Formulários e Submissão",
      desc: "Cuidamos do preenchimento correto de todos os formulários e realizamos a submissão junto aos órgãos responsáveis.",
      icon: <CursorArrowRaysIcon className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Apoio no Processo de Entrevistas",
      desc: "Preparamos você para entrevistas consulares, garantindo que você esteja bem informado e preparado para o que esperar.",
      icon: <FaceSmileIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Consultoria para Vistos de Trabalho e Estudo",
      desc: "Orientação e suporte na obtenção de vistos de trabalho, estudo e outros tipos específicos, dependendo das suas necessidades.",
      icon: <CursorArrowRaysIcon className="h-6 w-6 text-purple-500" />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
