import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "../hooks/use-toast";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    setIsDarkMode(newDarkMode);
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("spaloma.v1@gmail.com");
      toast({
        title: "Email copied!",
        description: "spaloma.v1@gmail.com has been copied to your clipboard.",
      });
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err);
      toast({
        title: "Copy failed",
        description: "Unable to copy email to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            Santiago
            <span className="text-glow text-foreground"> Palomares </span>{" "}
          </span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              copyEmailToClipboard();
            }}
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full transition-colors duration-300 focus:outline-none"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
              <Moon className="h-6 w-6 text-blue-900" />
            )}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                copyEmailToClipboard();
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-foreground/20">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                  <Moon className="h-6 w-6 text-blue-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
