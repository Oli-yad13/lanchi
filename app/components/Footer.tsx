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
            
            {/* Play Store Coming Soon */}
            <div className="mt-6 flex flex-col">
              <p className="text-gray-400 text-sm mb-2">Coming Soon On</p>
              <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 w-fit">
                <Image 
                  src="/google-play-icon.svg" 
                  alt="Google Play Store" 
                  width={40} 
                  height={40} 
                  className="mr-2"
                />
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-gray-400 mb-4">Branding</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Identity</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Strategy</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Design</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-400 mb-4">Achievements</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Awards</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Recognition</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Partners</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-400 mb-4">Website</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Development</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Maintenance</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">SEO</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Blog</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Downloads</Link></li>
                <li><Link href="#" className="text-white hover:text-teal-400 transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Social icons */}
          <div className="mt-8 md:mt-0 flex flex-col space-y-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
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