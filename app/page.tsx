"use client"

import DesktopScreen from "@/components/DesktopScreen"
import MobileScreen from "@/components/MobileScreen"

export default function HomePage() {
  return (
    <>
      <div id="mobile_screen" className="block md:hidden">
        <MobileScreen />
      </div>

      <div id="desktop_screen" className="hidden md:block">
        <DesktopScreen />
      </div>
    </>
  );
}