"use client";

import Link from "next/link";
import { FC } from "react";

interface TitleLinkProps {
  title: string;
  id: number;
}

export const TitleLink: FC<TitleLinkProps> = ({ title, id }) => {
  return <Link href={`/product-server-ver/ ${id}`}>
    <h2>{title}</h2>
    </Link>;
};