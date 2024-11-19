import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <section id="contato">
          <div className="text-sm text-center text-gray-600 dark:text-gray-400" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <span>Copyright © {new Date().getFullYear()}. Dembicki assessoria.</span>
            <img src="https://i.postimg.cc/8zZHWKS8/svgviewer-png-output.png" width={50} style={{marginBottom: '-4rem'}}/>
          </div>
        </section>
      </Container>
    </div>
  );
}
