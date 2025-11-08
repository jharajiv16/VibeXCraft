import React from "react";
import { Code } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 sm:px-20 xl:px-32 py-12 mt-20 border-t border-border text-muted-foreground">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-border pb-8">
        <div className="md:max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#9B5CF5] to-[#00E0FF] shadow-[0_0_12px_rgba(0,224,255,0.4)]">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#9B5CF5] via-[#00E0FF] to-[#9B5CF5] bg-clip-text text-transparent">
              VibeXCraft
            </span>
          </div>
          <p className="mt-4 text-sm">
            Experience the next generation of AI creation tools with VibeXCraft.
            Create smarter, faster, and better.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-10 w-full md:w-auto">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              Subscribe to our newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-border rounded-lg px-3 py-2 text-sm w-64 focus:ring-2 ring-primary outline-none"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-center mt-6">
        © 2025 VibeXCraft. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
