export const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className="flex h-16 w-full items-center md:text-base text-sm justify-center">
      <p className="text-gray-400">© {currentYear} Next.js Starter Kit. All rights reserved.</p>
    </footer>
  );
};
