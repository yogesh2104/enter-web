import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import ContactForm from "./contact-form";
import { siteInfo } from "@/lib/site-info";
import { useEffect, useState } from "react";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <img className="w-14 h-14" src={siteInfo.siteLogo}/>
    </Link>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <div className="flex flex-col gap-4 mt-8 p-4">
          <Link to="/" className="text-lg font-medium hover:text-gray-300">Home</Link>
          <Link to="/products" className="text-lg font-medium hover:text-gray-300">Service</Link>
          <Link to="/resources" className="text-lg font-medium hover:text-gray-300">About</Link>
          <Sheet>
            <SheetTrigger className="text-lg font-medium cursor-pointer hover:text-gray-300 text-start">Contact</SheetTrigger>
            <SheetContent side="right" className="w-screen md:max-w-[40vw] m-auto">
                <ContactForm/>
            </SheetContent>
          </Sheet>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    const openContact = searchParams.get('open-contact');
    if (openContact === 'true') {
      setIsContactDialogOpen(true);
    }
  }, [searchParams]);

   const handleCloseDialog = () => {
    setIsContactDialogOpen(!isContactDialogOpen);
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('open-contact');
    navigate(`${currentUrl.pathname}${currentUrl.search}`, { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className={`flex items-center justify-between h-16 px-4 mx-auto ${siteInfo.classes["max-container-width"]}`}>
        <Logo />
        <div className="hidden md:flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-8">
            {siteInfo?.mainLink.map(
                (item) => (
                  <a href={item?.link}  className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                ),
              )}
            <Sheet open={isContactDialogOpen} onOpenChange={handleCloseDialog}>
              <SheetTrigger asChild >
                <p className="text-sm cursor-pointer font-medium hover:text-primary transition-colors duration-200 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </p>
              </SheetTrigger>
              <SheetContent side="right" className="w-screen md:max-w-[40vw] m-auto">
                <SheetTitle>
                  <span className="sr-only">Title</span>
                </SheetTitle>
                 <ContactForm/>
              </SheetContent>
            </Sheet>
           
          </nav>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;