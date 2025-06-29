import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  description: ReactNode;
  href: string;
};

export const LinkCard = ({ title, description, href }: Props) => (
  <Link
    href={href}
    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p>
  </Link>
);
