import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-wide text-foreground">Hängr</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent mt-0.5">
            Nordic Luxury
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs tracking-[0.2em] uppercase text-muted-foreground bg-transparent hover:bg-transparent hover:text-foreground data-[state=open]:bg-transparent data-[state=open]:text-foreground focus:bg-transparent">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[260px] gap-1 p-3">
                  <ShopLink to="/" hash="products" label="The Collection" />
                  <ShopLink to="/" hash="products" label="Classic" />
                  <ShopLink to="/" hash="products" label="Signature" />
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/gift"
                        className="block px-3 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground hover:bg-cream rounded-sm transition-colors"
                      >
                        Gift Sets
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/about"
                  className="px-4 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/journal"
                  className="px-4 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Journal
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/gift"
                  className="px-4 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gift
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <CartDrawer />
      </div>
    </header>
  );
}

function ShopLink({ to, hash, label }: { to: "/"; hash?: string; label: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          hash={hash}
          className="block px-3 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground hover:bg-cream rounded-sm transition-colors"
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
