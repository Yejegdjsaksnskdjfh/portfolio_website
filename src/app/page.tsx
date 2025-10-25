import Image from "next/image";

export default function Home() {
  return (
        <Image
          className="dark:invert"
          src="/environment2.jpg"
          alt=" logo"
          width={100}
          height={20}
          priority
        />
  );
}
