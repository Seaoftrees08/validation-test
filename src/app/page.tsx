import { VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="color text-white">
            <VStack spacing='24px' className="mt-10">
                <Link href="/firstForm">最初のフォーム</Link>
                <Link href="/custumValidation">カスタムバリデーション</Link>
                <Link href="/asyncValidation">非同期バリデーション</Link>
            </VStack>
        </main>
    );
}
