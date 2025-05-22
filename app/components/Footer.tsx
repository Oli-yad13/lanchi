"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and tagline section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.svg" 
                alt="Lanchi Logo" 
                width={100} 
                height={30} 
                className="mr-2"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-light mb-1">Health Insurance Designed </h3>
              <h3 className="text-xl font-light">for Ethiopian Women</h3>
            </div>
            
            {/* App Store Buttons (Coming Soon) */}
            <div className="mt-6 flex flex-col">
              <p className="text-gray-400 text-sm mb-2">Coming Soon On</p>
              <div className="flex items-center gap-4">
                {/* Google Play Button */}
                <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 w-fit">
                  <Image 
                    src="/google-play-icon.svg" 
                    alt="Google Play Store" 
                    width={40} 
                    height={40} 
                    className="mr-2"
                  />
                </div>
                {/* iOS App Store Button */}
                <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 w-fit">
                  <Image 
                    src="/apple-app-store-icon.svg"
                    alt="Apple App Store" 
                    width={40} 
                    height={40} 
                    className="mr-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* New Homepage Links */}
            <div>
              <h4 className="text-gray-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white hover:text-teal-400 transition">Home</Link></li>
                <li><Link href="#features" className="text-white hover:text-teal-400 transition">What We Cover</Link></li>
                <li><Link href="#why-stand-out" className="text-white hover:text-teal-400 transition">Why Lanchi Stands Out</Link></li>
                <li><Link href="#target-audience" className="text-white hover:text-teal-400 transition">Who Is For Us</Link></li>
              </ul>
            </div>
            
            {/* Keep Achievements and Resources sections if needed, otherwise remove them too */}
             <div>
              <h4 className="text-gray-400 mb-4">Achievements</h4>
              <ul className="space-y-2">
                <li><span className="text-white">Awards</span></li>
                <li><span className="text-white">Recognition</span></li>
                <li><span className="text-white">Partners</span></li>
              </ul>
            </div>
            
             <div>
              <h4 className="text-gray-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><span className="text-white">Blog</span></li>
                <li><span className="text-white">Downloads</span></li>
                <li><Link href="/contact" className="text-white hover:text-teal-400 transition">Contact</Link></li>
              </ul>
            </div>

          </div>
          
          {/* Social icons */}
          <div className="mt-8 md:mt-0 flex flex-col space-y-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition">
              {/* LinkedIn Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition">
              {/* Facebook Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition">
              {/* TikTok Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Legal notice */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">Legal notices</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;