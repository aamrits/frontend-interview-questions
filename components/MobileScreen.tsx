"use client";

import { useState } from "react"
import Link from "next/link"
import { technologies } from "@/lib/navigation"

export default function MobileScreen() {
    const [selectedCourse, setSelectedCourse] = useState(technologies[0]);

    return (
        <div className="relative">
            <div className="mx-auto w-full overflow-hidden bg-white shadow-2xl">
                {/* Hero Section */}
                <div
                    className={`relative h-72 transition-all duration-500 ${selectedCourse.heroGradient}`}
                >
                    {/* Decorative blobs */}
                    <div className="absolute -left-10 top-6 h-32 w-32 rounded-full bg-white/10" />
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-white/10" />

                    {/* Title */}
                    <div className="flex h-full flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl font-bold">
                            {selectedCourse.title}
                        </h1>

                        <p className="text-2xl font-semibold">
                            Interview Questions
                        </p>
                    </div>
                </div>

                {/* Bottom Sheet */}
                <div className="-mt-12 h-[calc(100vh-18rem+3rem)] rounded-t-[40px] bg-white px-5 py-6 relative z-10">
                    <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-gray-200" />

                    <div className="space-y-4">
                        {technologies.map((course) => {
                            const Icon = course.icon;

                            return (
                                <div
                                    key={course.id}
                                    onClick={() => setSelectedCourse(course)}
                                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 hover:shadow-md ${course.cardBgClass} ${selectedCourse.id === course.id
                                        ? "ring-2 ring-black/10"
                                        : ""
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                                                <Icon
                                                    size="2.2em"
                                                    className={course.iconClass}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {course.title}
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    {course.shortDescription}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Navigation link */}
                                        <Link
                                            href={course.href}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition-transform hover:scale-110">
                                                →
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <footer className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-xs text-gray-500 shadow-sm backdrop-blur">
                    Built with ❤️ by Amrit • © {new Date().getFullYear()}.
                </footer>
            </div>
        </div>
    );
}