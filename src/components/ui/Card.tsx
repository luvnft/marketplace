import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Subtitle } from "./Typography";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  price: string;
  className?: string;
}

export default function Card({
  title,
  description,
  imageUrl,
  imageAlt = "Imagen del producto",
  price,
  className = "",
}: CardProps) {
  return (
    <div
      className={`card card-compact bg-base-100 shadow-xl ${className} group hover:cursor-pointer`}
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={250}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="card-body">
        <Subtitle className="card-title">{title}</Subtitle>
        <p>{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-primary text-lg font-bold">{`$${price}`}</div>
          <Button
            onClick={() => console.log("Comprar")}
          >
          Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
