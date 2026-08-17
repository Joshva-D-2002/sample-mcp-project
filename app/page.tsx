import Image from "next/image";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side: Branding Banner (Desktop) */}
      <div className="hidden lg:flex lg:w-5/12 bg-slate-900 relative overflow-hidden flex-col justify-between p-12 select-none">
        <div className="absolute inset-0 z-0">
          <img
            alt="Abstract geometric pattern"
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJBGIdgA9BxXsJgWcEXL1W89VwNTasAIdfPiuBzLI1OcsCphNHEiY07ApPoUrSXPpanqIXetdupuQwtT9EMSi82f1jz1UrPsxQYHc6BXJqGWaOYfmr-nf2yylzRRiPxLseaXPlh2naYUl6GHmTPRhCOloJI8v874KsvE5h-ItAKEJC65fzd_cvfinBlqtwmlMXegtc6CRs5evrH5M0oWEtPJxeQGuga9P4dwK13nVHJoIoS7_860"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20" />
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <span className="text-2xl text-white font-bold tracking-tight">
            MinimalApp
          </span>
        </div>

        <div className="relative z-10 text-white mb-8">
          <h2 className="text-4xl font-bold leading-tight mb-4 text-white">
            Empower your workflow
            <br />
            with precision.
          </h2>
          <p className="text-lg text-slate-300 max-w-md">
            Join thousands of enterprise teams using MinimalApp to streamline
            their operations and accelerate growth.
          </p>
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-7/12 lg:px-20 xl:px-32 bg-surface-container-lowest">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Mobile Logo (hidden on desktop) */}
          <div className="lg:hidden mb-8 text-center">
            <span className="text-2xl text-primary font-bold tracking-tight">
              MinimalApp
            </span>
          </div>

          <div className="flex flex-col items-start mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-on-surface">
              Welcome Back
            </h1>
            <p className="text-base text-on-surface-variant mt-1">
              Sign in to continue
            </p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
