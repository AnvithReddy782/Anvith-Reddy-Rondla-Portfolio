"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import CommandPalette from "@/components/CommandPalette";

// Dynamic Imports with SSR disabled
const AIAssistant = dynamic(() => import("@/components/AIAssistant"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const PageLoader = dynamic(() => import("@/components/PageLoader"), { ssr: false });
const EasterEggs = dynamic(() => import("@/components/EasterEggs"), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PageLoader />
            <CustomCursor />
            <Navigation />
            <CommandPalette />
            <AIAssistant />
            <EasterEggs />
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </>
    );
}
