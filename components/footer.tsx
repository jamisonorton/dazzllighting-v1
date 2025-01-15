import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper flex-between">
        <div className="p-5 flex-start">
          @{currentYear} {APP_NAME}. All Rights Reserved
        </div>
        <div className="p-5 space-x-2">
          Privacy Policy | Terms of Service | ADA Standards
        </div>
      </div>
    </footer>
  );
};

export default Footer;
