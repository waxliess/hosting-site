"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu"
import MobileMenu from "./mobile-menu"
import { motion } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  }

  return (
    <>
      <motion.div 
        className="bg-[#0a0b17] py-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex justify-end items-center text-sm px-4">
          <div className="flex gap-6">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Phone className="h-3 w-3 text-[#ff9800]" />
              <span className="text-white text-xs">+994 888 88 88</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Mail className="h-3 w-3 text-[#ff9800]" />
              <span className="text-white text-xs">contact@feqan.com.tr</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <header className="sticky top-0 z-40 w-full  border-[#1e2142] bg-[#0a0c1d]/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image src="/server-5.png" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold text-[#ff9800]">Host</span>
            </Link>
          </motion.div>
          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                  <Link href="/" className="text-white hover:text-[#ff9800] px-1 py-2 text-sm font-medium transition-colors duration-200">
                    Anasayfa
                  </Link>
                </motion.div>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                  <NavigationMenuTrigger className="text-white hover:text-[#ff9800] text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                    Sunucu
                  </NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <motion.ul 
                    className="grid gap-2 p-4 md:w-[380px] lg:w-[480px] lg:grid-cols-2 bg-[#0a0c1d]/95 backdrop-blur-md border border-[#1e2142] rounded-lg shadow-xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    <motion.li className="row-span-3" variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#111827] to-[#0a0c1d] p-5 no-underline outline-none focus:shadow-md transition-all duration-200 hover:scale-[1.02] border border-[#1e2142]/50"
                          href="/"
                        >
                          <div className="mb-2 mt-3 text-base font-medium text-white">Web Hosting</div>
                          <p className="text-xs leading-tight text-gray-300">
                            Yüksek performanslı ve ekonomik web hosting çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/service/cpanel-webhosting"
                        >
                          <div className="text-xs font-medium leading-none">cPanel Hosting</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            cPanel kontrol panelli web hosting çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/service/plesk-webhosting"
                        >
                          <div className="text-xs font-medium leading-none">Plesk Hosting</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Plesk kontrol panelli web hosting çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                      </NavigationMenuLink>
                    </motion.li>
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                  <NavigationMenuTrigger className="text-white hover:text-[#ff9800] text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                    Oyun Sunucuları{" "}
                    <span className="ml-1 rounded bg-[#ff9800] px-1 py-0.5 text-xs text-black">YENİ</span>
                  </NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <motion.ul 
                    className="grid w-[380px] gap-2 p-4 md:w-[480px] md:grid-cols-2 lg:w-[560px] bg-[#0a0c1d]/95 backdrop-blur-md border border-[#1e2142] rounded-lg shadow-xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/service/game/minecraft-server"
                        >
                          <div className="text-xs font-medium leading-none">Minecraft Sunucuları</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Özel Minecraft sunucu çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/service/game/csgo-server"
                        >
                          <div className="text-xs font-medium leading-none">CS:GO Sunucuları</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Profesyonel CS:GO sunucu çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/service/game/gta-fivem-server"
                        >
                          <div className="text-xs font-medium leading-none">GTA V Sunucuları</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Özel GTA V FiveM sunucu çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/service/game/ark-server"
                        >
                          <div className="text-xs font-medium leading-none">ARK Sunucuları</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Yüksek performanslı ARK sunucu çözümleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                  <NavigationMenuTrigger className="text-white hover:text-[#ff9800] text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                    Veri Merkezi
                  </NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <motion.ul 
                    className="grid gap-2 p-4 md:w-[380px] bg-[#0a0c1d]/95 backdrop-blur-md border border-[#1e2142] rounded-lg shadow-xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/"
                        >
                          <div className="text-xs font-medium leading-none">Veri Merkezi Özellikleri</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Veri merkezimizin teknik özellikleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/"
                        >
                          <div className="text-xs font-medium leading-none">Altyapı</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Teknik altyapı ve donanım özellikleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/"
                        >
                          <div className="text-xs font-medium leading-none">Güvenlik</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Veri merkezi güvenlik önlemleri
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                  <NavigationMenuTrigger className="text-white hover:text-[#ff9800] text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                    Kurumsal
                  </NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent>
                  <motion.ul 
                    className="grid gap-2 p-4 md:w-[380px] bg-[#0a0c1d]/95 backdrop-blur-md border border-[#1e2142] rounded-lg shadow-xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/support/about-us"
                        >
                          <div className="text-xs font-medium leading-none">Hakkımızda</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Şirketimiz hakkında bilgi
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                      </NavigationMenuLink>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-[#1a1d3a] hover:text-white focus:bg-[#1a1d3a] focus:text-white text-white"
                          href="/"
                        >
                          <div className="text-xs font-medium leading-none">Kariyer</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-300 mt-1">
                            Kariyer fırsatları
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </motion.li>
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Button className="hidden bg-[#ff9800] text-black hover:bg-[#ff7b00] text-sm font-medium px-3 py-2 md:block">
                Müşteri Paneli
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="outline"
                className="lg:hidden border-[#1e2142] hover:bg-[#1a1d3a] hover:text-white ml-2"
                onClick={toggleMobileMenu}
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
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Menü</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
