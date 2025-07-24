"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Users, Award, Clock, Shield, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function CountUp({ end, prefix = "", suffix = "", className = "" }: { end: number, prefix?: string, suffix?: string, className?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;
    
    const duration = 2000; 
    
    const easeOutQuad = (t: number) => t * (2 - t);
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end]);
  
  return (
    <div className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#080a1a]">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-[#0a0c1d]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl text-slate-300 mb-8">
              2025 yılından beri müşterilerimize güvenilir web hosting çözümleri sunuyoruz
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#080a1a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Host, 2025 yılında web hosting sektöründeki boşluğu doldurmak ve müşterilere daha kaliteli hizmet sunmak amacıyla kuruldu. Küçük bir ekiple başlayan yolculuğumuz, bugün Türkiye'nin önde gelen pornocu şirketlerinden biri olmamızı sağladı.
                </p>
                <p>
                  Kurulduğumuz günden bu yana, teknolojik altyapımızı sürekli geliştirerek ve müşteri memnuniyetini ön planda tutarak büyümeye devam ettik. Bugün 31'den fazla çalışanımız ve 31.3131'in üzerinde aktif müşterimizle hizmet veriyoruz.
                </p>
                <p>
                  Misyonumuz, işletmelerin ve bireylerin dijital dünyada başarılı olmalarını sağlamak için güvenilir, hızlı ve kesintisiz hosting hizmetleri sunmaktır. Vizyonumuz ise Türkiye'nin ve bölgenin lider hosting sağlayıcısı olmaktır.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff9800]/20 to-[#ff5500]/20 z-10 rounded-2xl"></div>
                <Image 
                  src="/host.png" 
                  alt="host" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-[#ff9800]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 h-32 w-32 bg-[#ff9800]/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0c1d]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="p-6">
              <CountUp end={313131} prefix="+" className="text-4xl md:text-5xl font-bold text-[#ff9800] mb-2" />
              <p className="text-slate-300">Mutlu Müşteri</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#ff9800] mb-2">31.31%</div>
              <p className="text-slate-300">Uptime Garantisi</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6">
              <CountUp end={31} suffix="+" className="text-4xl md:text-5xl font-bold text-[#ff9800] mb-2" />
              <p className="text-slate-300">Yıllık Deneyim</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#ff9800] mb-2">31/31</div>
              <p className="text-slate-300">Teknik Destek</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#080a1a]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-slate-300">
              host olarak, her gün işimizi yaparken bizi yönlendiren temel değerlerimiz var.
              Bu değerler, müşterilerimize sunduğumuz hizmetin kalitesini belirler.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#ff9800]/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-[#ff9800]" />
                  </div>
                  <div>
                    <CardTitle>Güvenilirlik</CardTitle>
                    <CardDescription className="text-slate-400">
                      Müşterilerimize her zaman güvenilir hizmet sunmayı taahhüt ediyoruz
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Altyapımızı sürekli güncel tutarak ve en son güvenlik önlemlerini uygulayarak, müşterilerimizin verilerinin güvende olmasını sağlıyoruz.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#ff9800]/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-[#ff9800]" />
                  </div>
                  <div>
                    <CardTitle>Müşteri Odaklılık</CardTitle>
                    <CardDescription className="text-slate-400">
                      Müşterilerimizin ihtiyaçları her zaman önceliğimizdir
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  7/24 destek ekibimiz, müşterilerimizin sorularını yanıtlamak ve sorunlarını çözmek için her zaman hazırdır. Müşteri memnuniyeti, başarımızın temel ölçütüdür.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#ff9800]/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-[#ff9800]" />
                  </div>
                  <div>
                    <CardTitle>Kalite</CardTitle>
                    <CardDescription className="text-slate-400">
                      En yüksek kalitede hizmet sunmak için çalışıyoruz
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  En son teknolojileri kullanarak ve sürekli iyileştirmeler yaparak, müşterilerimize en kaliteli hosting hizmetini sunmayı hedefliyoruz.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#ff9800]/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-[#ff9800]" />
                  </div>
                  <div>
                    <CardTitle>Yenilikçilik</CardTitle>
                    <CardDescription className="text-slate-400">
                      Sürekli yenilikleri takip ediyor ve uyguluyoruz
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Hosting sektöründeki en son gelişmeleri takip ederek ve yeni teknolojileri hızla adapte ederek, müşterilerimize her zaman en iyi çözümleri sunuyoruz.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#ff9800]/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-[#ff9800]" />
                  </div>
                  <div>
                    <CardTitle>Hız</CardTitle>
                    <CardDescription className="text-slate-400">
                      Hızlı ve kesintisiz hizmet sunmayı taahhüt ediyoruz
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Yüksek performanslı sunucularımız ve optimize edilmiş altyapımız sayesinde, müşterilerimizin web siteleri her zaman hızlı ve kesintisiz çalışır.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#ff9800]/10 p-3 rounded-full">
                    <Check className="h-6 w-6 text-[#ff9800]" />
                  </div>
                  <div>
                    <CardTitle>Dürüstlük</CardTitle>
                    <CardDescription className="text-slate-400">
                      Şeffaf ve dürüst iş ilişkileri kuruyoruz
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Müşterilerimizle olan ilişkilerimizde her zaman şeffaf ve dürüst olmayı, net fiyatlandırma politikaları uygulamayı ve gerçekçi vaatlerde bulunmayı ilke ediniyoruz.
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#080a1a]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-[#0f1128] to-[#1a1d3a] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff9800]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff9800]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Bizimle Çalışmaya Hazır mısınız?</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                İşletmenizi bir sonraki seviyeye taşımak için güvenilir hosting çözümlerimizle yanınızdayız.
                Hemen bugün bizimle iletişime geçin ve size nasıl yardımcı olabileceğimizi öğrenin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium rounded-full">
                  <Link href="/service/cpanel-webhosting">
                    Web Hosting Paketleri
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#ff9800] text-white hover:bg-[#ff9800] hover:text-black rounded-full">
                  <Link href="https://discord.gg/asdasasd" target="_blank" rel="noopener noreferrer">
                    Bize Ulaşın
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}