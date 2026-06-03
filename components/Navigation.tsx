import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface Props {
    currentDocument: string;
}

export default function Navigation({
    currentDocument,
}: Props) {
    return (
        <>
            {/* For mobile screens */}
            <div className="grid grid-cols-2 gap-4 sm:hidden">
                {navigation.map((item) => (
                    <Button
                        key={item.slug}
                        asChild
                        className={
                            currentDocument === item.slug
                                ? "bg-(--color-red) text-white"
                                : "border-(--color-red)"
                        }
                        variant={
                            currentDocument === item.slug
                                ? "default"
                                : "outline"
                        }
                    >
                        <Link href={`/${item.slug}`}>
                            {item.label}
                        </Link>
                    </Button>
                ))}
            </div>

            {/* For other screens */}
            <div className="hidden sm:block">
                <Tabs value={currentDocument}>
                    <TabsList className="bg-(--color-red) dark:bg-transparent p-1 flex flex-wrap h-15 mb-2.5">
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
            </div>
        </>

    );
}

