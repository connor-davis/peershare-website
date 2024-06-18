import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Icon from "@/assets/icon.png";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="grid w-full h-auto grid-cols-2 gap-3 p-3 lg:grid-cols-3">
      <Label className="text-lg font-bold text-primary">
        <img src={Icon} width={48} height={48} />
      </Label>
      <div className="items-center justify-center hidden space-x-3 lg:flex">
        <Link
          to="/"
          className="transition-all duration-300 text-muted-foreground hover:text-primary"
        >
          Home
        </Link>
        <Link
          to="/download"
          className="transition-all duration-300 text-muted-foreground hover:text-primary"
        >
          Download
        </Link>
      </div>
      <div className="items-center justify-end hidden lg:flex">
        <Link
          to="https://github.com/connor-davis/peershare"
          target="_blank"
          className="transition-all duration-300 text-muted-foreground hover:text-primary"
        >
          Github
        </Link>
      </div>

      <div className="flex items-center justify-end lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col w-full h-auto pt-10 space-y-3">
              <Link
                to="/"
                className="p-3 transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-muted"
              >
                Home
              </Link>
              <Link
                to="/download"
                className="p-3 transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-muted"
              >
                Download
              </Link>
              <Link
                to="https://github.com/connor-davis/peershare"
                target="_blank"
                className="p-3 transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-muted"
              >
                Github
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
