import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper flex-between">
        <div className="p-5 flex-left">
          <span className="p-5 justify-items-start">
            @{currentYear} {APP_NAME}. All Rights Reserved
          </span>
          <span className="p-5 justify-items-end">
            Privacy Policy | Terms of Service | ADA Standards
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
