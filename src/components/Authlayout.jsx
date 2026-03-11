import { ReactNode } from "react";
import medicalBg from "../assets/medical-bg.png";

// interface AuthLayoutProps {
//   children: ReactNode;
// }
// : AuthLayoutProps
const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Left - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={medicalBg}
          alt="Hospital OPD"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 flex flex-col items-center justify-center text-primary-foreground p-10">
          <h2 className="font-heading text-4xl font-bold mb-4 text-center">
            OPD Management System
          </h2>
          <p className="text-lg opacity-90 text-center max-w-md">
            Streamline your outpatient department with efficient patient
            management, scheduling, and records.
          </p>
        </div>
      </div>
      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md animate-fade-in">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
