"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

type SubMenuItem = {
  title: string
  description?: string
  href: string
}

type MenuItem = {
  title: string
  href?: string
  badge?: string
  submenu?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  { title: "Anasayfa", href: "/" },
  {
    title: "Sunucu",
    submenu: [
      {
        title: "cPanel Hosting",
        description: "cPanel kontrol panelli web hosting çözümleri",
        href: "/service/cpanel-webhosting",
      },
      {
        title: "Plesk Hosting",
        description: "Plesk kontrol panelli web hosting çözümleri",
        href: "/service/plesk-webhosting",
      },
    ],
  },
  {
    title: "Oyun Sunucuları",
    badge: "YENİ",
    submenu: [
      {
        title: "Minecraft Sunucuları",
        description: "Özel Minecraft sunucu çözümleri",
        href: "/service/game/minecraft-server",
      },
      {
        title: "CS:GO Sunucuları",
        description: "Profesyonel CS:GO sunucu çözümleri",
        href: "/service/game/csgo-server",
      },
      {
        title: "GTA V Sunucuları",
        description: "Özel GTA V FiveM sunucu çözümleri",
        href: "/service/game/gta-fivem-server",
      },
      {
        title: "ARK Sunucuları",
        description: "Yüksek performanslı ARK sunucu çözümleri",
        href: "/service/game/ark-server",
      },
    ],
  },
  {
    title: "Veri Merkezi",
    submenu: [
      {
        title: "Veri Merkezi Özellikleri",
        description: "Veri merkezimizin teknik özellikleri",
        href: "/",
      },
      {
        title: "Altyapı",
        description: "Teknik altyapı ve donanım özellikleri",
        href: "/",
      },
      {
        title: "Güvenlik",
        description: "Veri merkezi güvenlik önlemleri",
        href: "/",
      },
    ],
  },
  {
    title: "Kurumsal",
    submenu: [
      {
        title: "Hakkımızda",
        description: "Şirketimiz hakkında bilgi",
        href: "/support/about-us",
      },
      {
        title: "Kariyer",
        description: "Kariyer fırsatları",
        href: "/",
      },
    ],
  },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(title)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black bg-opacity-80 lg:hidden" 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-[#0a0c1d] p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-end">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-[#1a1d3a]" onClick={onClose}>
                  <span className="sr-only">Kapat</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              className="mt-4 space-y-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="w-full bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium">Müşteri Paneli</Button>
              </motion.div>
            </motion.div>

            <nav className="mt-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={item.title} 
                    className=" border-[#1e2142] pb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {item.href ? (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between rounded-md bg-black p-3 text-white hover:bg-[#111]"
                          onClick={onClose}
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="ml-1 rounded bg-[#ff9800] px-1 py-0.5 text-xs text-black">{item.badge}</span>
                          )}
                          <ChevronRight className="h-5 w-5" />
                        </Link>
                      </motion.div>
                    ) : (
                      <>
                        <motion.button
                          className="flex w-full items-center justify-between rounded-md bg-black p-3 text-white hover:bg-[#111]"
                          onClick={() => toggleSubmenu(item.title)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="ml-1 rounded bg-[#ff9800] px-1 py-0.5 text-xs text-black">{item.badge}</span>
                          )}
                          <motion.div
                            animate={{ rotate: openSubmenu === item.title ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {item.submenu && openSubmenu === item.title && (
                            <motion.ul 
                              className="mt-1 space-y-1 pl-4"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <motion.li 
                                  key={subItem.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.05 * subIndex }}
                                >
                                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                      href={subItem.href}
                                      className="block rounded-md p-2 text-white hover:bg-[#1a1d3a]"
                                      onClick={onClose}
                                    >
                                      <div className="font-medium">{subItem.title}</div>
                                      {subItem.description && (
                                        <p className="mt-1 text-sm text-gray-400">{subItem.description}</p>
                                      )}
                                    </Link>
                                  </motion.div>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div 
              className="mt-8 border-t border-[#1e2142] pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center gap-3 text-white"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#ff9800]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+994 888 88 88</span>
              </motion.div>
              <motion.div 
                className="mt-2 flex items-center gap-3 text-white"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#ff9800]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>contact@feqan.com.tr</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
