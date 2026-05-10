"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  ["Home", "/"],
  ["The Path", "/path"],
  ["Library", "/library"],
  ["Practices", "/practices"],
  ["Community", "/community"],
  ["Insights", "/insights"],
  ["About", "/about"]
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <nav className="container flex min-h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
            ✦
          </span>
          <span className="font-serif text-xl font-semibold">Illuminators&apos; Path</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                pathname === href && "bg-muted text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {open ? (
        <div className="border-t bg-background lg:hidden">
          <div className="container grid gap-1 py-3">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium",
                  pathname === href ? "bg-muted text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
