import Link from "next/link";
import React from "react";

interface buttonTypes {
  body: string;
  href: string;
  title?: string;
}

const Button = ({ href, body, title }: buttonTypes) => {
  return (
    <Link passHref href={href}>
      <a className="Button" title={title}>
        {body}
      </a>
    </Link>
  );
};

export default Button;
