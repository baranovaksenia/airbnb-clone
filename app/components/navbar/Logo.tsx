"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
	const router = useRouter();

	return (
		<Image
			alt="airbnb logo"
			src="/images/logo.png"
			height="100"
			width="100"
			className="
				hidden
				md:block
				cursor-pointer
			"
		/>
	);
}
