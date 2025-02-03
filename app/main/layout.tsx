import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Home({children}:PropsWithChildren) {
    return (<div>
        <Link href="/" className="hover:underline">Home</Link>
        Ana sayfa layout
        {children}
    </div>)
}