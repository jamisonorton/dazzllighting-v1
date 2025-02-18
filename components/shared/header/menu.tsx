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
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full-max-w-xs gap-1">
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
            Cart
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
