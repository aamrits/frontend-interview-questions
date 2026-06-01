import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {
    currentDocument: string;
}

export default function Navigation({
    currentDocument,
}: Props) {
    return (
        <Tabs value={currentDocument}>
            <TabsList className="bg-(--color-green) dark:bg-transparent p-2 flex flex-wrap h-15 mb-2.5">
                {navigation.map((item) => (
                    <TabsTrigger
                        className="text-base text-white hover:text-white data-[state=active]:hover:text-black p-3"
                        key={item.slug}
                        value={item.slug}
                        asChild
                    >
                        <Link href={`/${item.slug}`}>
                            {item.label}
                        </Link>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}

