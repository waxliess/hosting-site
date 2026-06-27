import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0c1d] py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src="/server-5.png" alt="Treas Host Logo" width={40} height={40} />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#ff9800]">host</span>
                <span className="text-xl font-bold text-[#ff9800]"></span>
              </div>
            </Link>
            <p className="mb-4 text-slate-400">
              %100 SSD disk depolama ile yüksek performanslı web hosting çözümleri sunuyoruz.
            </p>
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#ff9800]" />
                <span className="text-slate-300">+994 888 88 88</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#ff9800]" />
                <span className="text-slate-300">contact@feqan.com.tr</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#ff9800]" />
                <span className="text-slate-300">Türkiye</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Hizmetler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/service/game/gta-fivem-server" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Oyun Sunucuları
                </Link>
              </li>
              <li>
                <Link href="/service/cpanel-webhosting" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Web Hosting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/terms-of-service" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Hizmet Şartları
                </Link>
              </li>
              <li>
                <Link href="/support/privacy-policy" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Teslimat ve İade Politikası
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Adil Kullanım Politikası
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Genel Destek Politikası
                </Link>
              </li>
              <li>
                <Link href="/support/about-us" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  Veri Saklama
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-[#ff9800] transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Şirket Bilgileri</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">
                Bilgi Teknolojileri Kurumu
              </li>
              <li className="text-slate-400">
                Tam Ünvan: asdasdsd
              </li>
              <li className="text-slate-400">
                Vergi Dairesi: adasadsads
              </li>
              <li className="text-slate-400">
                Vergi Numarası: 88888888
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400">© 2025 host. Tüm hakları saklıdır.</p>
              <p className="text-slate-400 text-sm mt-1">
                Site <Link href="https://feqan.com.tr/" className="text-[#ff9800] hover:underline">@feqan</Link> tarafından geliştirildi ve tasarlandı.
              </p>
            </div>
            
            <div className="flex gap-4 items-center">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
  
}
