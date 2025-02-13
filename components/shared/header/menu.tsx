import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import UserButton from "./user-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    title: "Lighting",
    href: "/lighting",
  },
  {
    title: "Bulbs",
    href: "/bulbs",
  },
];

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full-max-w-xs gap-1">
        {links.map((item) => (
          <Button asChild variant="ghost" key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname.includes(item.href) ? "" : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          </Button>
        ))}
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <ChevronLeft />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <Button asChild variant="ghost">
              <Link href="/permanent">Lighting</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/bulbs">Bulbs</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/stringlights">String Lights</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/patio">Patio Lights</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
