"use client";

import Link from "next/link";
import styles from "./Book.module.css";

interface IBookProps {
  display_name: string;
  id: string;
}

export default function Book({ display_name, id }: IBookProps) {
  return (
    <div className={styles.book}>
      <Link href={`/list/${id}`}>
        {display_name}
      </Link>
    </div>
  );
}

export const runtime = "edge";
