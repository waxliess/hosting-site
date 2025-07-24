"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#080a1a]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0a0c1d]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Gizlilik Politikası</h1>
            <p className="text-xl text-slate-300 mb-8">
              Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-[#080a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 bg-[#0f1128]/80 overflow-hidden rounded-none">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <p className="text-slate-400">
                    Son güncelleme: 1 Mayıs 2023
                  </p>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Genel Bilgiler</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">1.1:</span> Bu Gizlilik Politikası, host.com web sitesi ve hizmetleri (bundan sonra "Site" olarak anılacaktır) aracılığıyla toplanan kişisel verilerin işlenmesi, kullanılması ve korunması hakkında bilgi vermek amacıyla hazırlanmıştır.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">1.2:</span> Host Hosting Hizmetleri (bundan sonra "Host" olarak anılacaktır), kullanıcıların gizliliğini korumayı ve kişisel verilerin güvenliğini sağlamayı taahhüt eder. Bu politika, hangi verilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklar.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Toplanan Veriler</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">2.1:</span> Host, hizmetlerini sağlamak için aşağıdaki kişisel verileri toplayabilir:
                      </p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Ad, soyad, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
                        <li>Fatura adresi, ödeme bilgileri ve vergi kimlik numarası gibi finansal bilgiler</li>
                        <li>Kullanıcı adı, şifre ve hesap tercihleri gibi hesap bilgileri</li>
                        <li>IP adresi, tarayıcı türü, cihaz bilgileri ve site kullanım istatistikleri gibi teknik veriler</li>
                        <li>Müşteri hizmetleri ile yapılan görüşmeler ve yazışmalar</li>
                      </ul>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">2.2:</span> Veriler, kullanıcının Site'ye kaydolması, hizmet satın alması, Site'yi kullanması veya müşteri hizmetleri ile iletişime geçmesi sırasında doğrudan kullanıcıdan veya otomatik olarak toplanabilir.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">2.3:</span> Host, çerezler ve benzer teknolojiler kullanarak kullanıcı deneyimini iyileştirmek, Site kullanımını analiz etmek ve hedefli reklamlar sunmak için bilgi toplayabilir. Çerezler hakkında daha fazla bilgi için Çerez Politikamıza bakabilirsiniz.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Verilerin Kullanımı</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">3.1:</span> Host, topladığı kişisel verileri aşağıdaki amaçlar için kullanabilir:
                      </p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Hosting hizmetleri, domain kayıtları ve diğer hizmetleri sağlamak</li>
                        <li>Hesap oluşturmak, yönetmek ve müşteri desteği sunmak</li>
                        <li>Ödemeleri işlemek ve faturalandırma yapmak</li>
                        <li>Hizmetler hakkında bilgilendirme yapmak ve teknik güncellemeler sağlamak</li>
                        <li>Site'yi ve hizmetleri geliştirmek, optimize etmek ve kişiselleştirmek</li>
                        <li>Güvenlik tehditlerine karşı koruma sağlamak ve dolandırıcılık faaliyetlerini önlemek</li>
                        <li>Yasal yükümlülükleri yerine getirmek</li>
                      </ul>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">3.2:</span> Host, kullanıcının açık rızası olmadan kişisel verileri pazarlama amaçlı kullanmaz. Kullanıcılar, pazarlama iletişimlerini tercihlerini güncelleyerek veya iletişimlerdeki abonelikten çıkma bağlantısını kullanarak durdurabilir.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Verilerin Paylaşımı</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">4.1:</span> Host, kişisel verileri aşağıdaki durumlarda üçüncü taraflarla paylaşabilir:
                      </p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Hizmet sağlayıcılar: Ödeme işlemcileri, müşteri destek hizmetleri, e-posta sağlayıcıları gibi hizmetleri sunmamıza yardımcı olan üçüncü taraf hizmet sağlayıcılar</li>
                        <li>İş ortakları: Domain kayıt kuruluşları, SSL sertifika sağlayıcıları gibi belirli hizmetleri sunmak için işbirliği yaptığımız şirketler</li>
                        <li>Yasal gereklilikler: Mahkeme kararı, yasal süreç veya diğer yasal yükümlülükler nedeniyle bilgi paylaşımı gerektiğinde</li>
                        <li>İş transferleri: Şirket birleşmesi, satın alma veya varlıkların satışı durumunda</li>
                      </ul>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">4.2:</span> Host, kişisel verileri paylaştığı üçüncü tarafların bu verileri korumak için uygun güvenlik önlemlerini almalarını sağlamak için makul adımlar atar.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Veri Güvenliği</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">5.1:</span> Host, kişisel verilerin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri uygular. Bu önlemler arasında şifreleme, güvenli sunucular, güvenlik duvarları ve düzenli güvenlik denetimleri yer alır.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">5.2:</span> Tüm önlemlere rağmen, internet üzerinden hiçbir veri iletiminin veya depolamasının %100 güvenli olmadığını unutmayın. Host, kişisel verilerin güvenliğini sağlamak için elinden geleni yapsa da, mutlak güvenlik garanti edilemez.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Kullanıcı Hakları</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">6.1:</span> Kullanıcılar, kişisel verileri ile ilgili aşağıdaki haklara sahiptir:
                      </p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>Erişim hakkı: Kişisel verilerinizin bir kopyasını talep etme hakkı</li>
                        <li>Düzeltme hakkı: Yanlış veya eksik kişisel verilerin düzeltilmesini talep etme hakkı</li>
                        <li>Silme hakkı: Belirli koşullar altında kişisel verilerin silinmesini talep etme hakkı</li>
                        <li>İşlemeyi kısıtlama hakkı: Belirli koşullar altında kişisel verilerin işlenmesini kısıtlama hakkı</li>
                        <li>Veri taşınabilirliği hakkı: Kişisel verilerin yapılandırılmış, yaygın olarak kullanılan ve makine tarafından okunabilir bir formatta alınmasını talep etme hakkı</li>
                        <li>İtiraz hakkı: Meşru menfaatler temelinde kişisel verilerin işlenmesine itiraz etme hakkı</li>
                      </ul>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">6.2:</span> Bu hakları kullanmak için, kullanıcılar info@host.com adresine e-posta göndererek veya hesap ayarları üzerinden Host ile iletişime geçebilir. Host, talepleri 30 gün içinde yanıtlamaya çalışacaktır.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Veri Saklama</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">7.1:</span> Host, kişisel verileri yalnızca toplandıkları amaç için gerekli olan süre boyunca saklar. Saklama süreleri, hizmet türüne, yasal gerekliliklere ve iş ihtiyaçlarına göre değişebilir.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">7.2:</span> Hesap kapatıldığında, Host kişisel verileri makul bir süre içinde siler veya anonimleştirir. Ancak, yasal yükümlülükleri yerine getirmek, anlaşmazlıkları çözmek veya politikalarını uygulamak için gerekli olan verileri saklama hakkını saklı tutar.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Politika Değişiklikleri</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">8.1:</span> Host, bu Gizlilik Politikasını zaman zaman güncelleyebilir. Politikada yapılan önemli değişiklikler, Site üzerinde bir bildirim yayınlanarak veya kayıtlı kullanıcılara e-posta gönderilerek duyurulacaktır.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">8.2:</span> Kullanıcıların, güncellenmiş politikayı düzenli olarak gözden geçirmeleri önerilir. Politika değişikliklerinden sonra Site'yi kullanmaya devam etmek, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm">
                    Bu gizlilik politikası ile ilgili sorularınız varsa, lütfen <a href="mailto:dev@erslly.dev" className="text-[#ff9800] hover:underline">contact@erslly.dev</a> adresinden bizimle iletişime geçin.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}