import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-6xl items-center px-4">
        <div className="mr-4 flex">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              SV Enterprises
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
