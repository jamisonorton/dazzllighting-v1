import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-red-500">
      <div className="border-t bg-black">
        <div className="wrapper flex-between text-white">
          <div className="wrapper text-red-500 text-2xl">Information</div>
          <div className="wrapper text-red-500 text-2xl">Products</div>
          <div className="wrapper text-red-500 text-2xl">Our Store</div>
          <div className="wrapper text-red-500 text-2xl">Get in Touch</div>
        </div>
      </div>
      <div className="wrapper flex-between">
        <div className="p-5 flex-start text-white">
          @{currentYear} {APP_NAME}. All Rights Reserved
        </div>
        <div className="p-5 space-x-2 text-white">
          Privacy Policy | Terms of Service | ADA Standards
        </div>
      </div>
    </footer>
  );
};

export default Footer;
