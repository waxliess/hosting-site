"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfService() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Hizmet Şartları</h1>
            <p className="text-xl text-slate-300 mb-8">
              Hizmetlerimizi kullanırken uymanız gereken şartlar ve koşullar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Content */}
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
                    <h2 className="text-2xl font-bold text-white mb-4">Taraflar</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">1.1:</span> İşbu sözleşme, host.com markası altında faaliyet gösteren Host Hosting Hizmetleri (bundan sonra "Hizmet Sağlayıcı" olarak anılacaktır) ile host.com web sitesinde (bundan sonra "Site" olarak anılacaktır) belirtilen yeni müşteri kayıt formu aracılığıyla kayıt işlemi gerçekleştiren kişi ya da kurum (bundan sonra "Müşteri" olarak anılacaktır) arasında, Site üzerinden sunulan hizmetlerin kullanımına ilişkin olarak imzalanmış sayılacaktır.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">1.2:</span> Taraflar, işbu sözleşmede belirtilen bilgilerin doğruluğunu beyan, kabul ve taahhüt ederler. Sözleşme, müşterinin hizmeti satın alması ve/veya Site'yi kullanmaya başlaması ile birlikte yürürlüğe girer.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Konu</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">2.1:</span> İşbu sözleşme, müşterinin Site üzerinde gerçekleştirdiği işlemleri, verdiği siparişleri ve gönderdiği mesajların kayıt sürecinde sağladığı bilgilere dayanarak; müşterinin yapabileceği veya yapamayacağı işlemleri, siparişlerindeki tercihleri doğrultusunda alacağı hizmetleri ve bu hizmetler karşılığında Host'a ödeyeceği ücretleri düzenler. Bu hizmetler ve işlem tanımları aşağıda belirtilmiştir.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">2.2:</span> Üyelik bilgileri, müşteri tarafından üyelik sırasında beyan edilen verilerdir. Yapılacak tüm işlemler bu bilgilere dayanılarak gerçekleştirileceğinden, müşterinin bu bilgileri eksiksiz, doğru ve güncel olarak sağladığı kabul edilir.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">2.3:</span> Host, kayıt, satın alma veya diğer işlemler sırasında; güvenlik protokolleri kapsamında hesap onayı, bildirim veya bülten gönderimi amacıyla e-posta adresi, cep telefonu numarası gibi iletişim bilgilerinin paylaşılmasını talep edebilir. Bu bilgilerin doğruluğu, doğrulama kodu veya benzeri yöntemlerle teyit edilerek hizmetlere erişim sağlanır.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Sorumluluklar</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">3.1:</span> Host, müşterinin talebi doğrultusunda sipariş edilen hizmetleri sağlamayı taahhüt eder. Siparişin kabul edildiğine dair onay mesajı ile birlikte Host, ilgili ücreti tahsil ettiğini kabul eder ve siparişte belirtilen hizmeti sunacağını garanti eder.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">3.2:</span> Ödeme şekli ve KDV farkları, sipariş sırasında belirtilen toplam tutar üzerinden hesaplanır. Müşteri, aylık veya yıllık ödeme tercihlerine göre Host tarafından bildirilen ücretleri ödemeyi taahhüt eder.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">3.3:</span> Siparişin kabul edilmesi ve işlemlerin onaylanmasının ardından hizmet başlatılır. Hesap ve şifrelerin güvenliği müşterinin sorumluluğundadır. Bu bilgilerden kaynaklanan her türlü kayıp veya zarardan müşteri sorumludur.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Hizmet Kullanım Koşulları</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">4.1:</span> Müşteri, Host tarafından sağlanan hizmetleri yalnızca yasal amaçlar için kullanabilir. Hizmetlerin yasadışı içerik barındırmak, spam göndermek, kötü amaçlı yazılım dağıtmak veya başkalarının haklarını ihlal etmek için kullanılması kesinlikle yasaktır.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">4.2:</span> Host, sunucularının kaynaklarının aşırı kullanımını veya diğer müşterilerin hizmet kalitesini etkileyecek şekilde kullanılmasını engelleme hakkını saklı tutar. CPU, bellek, disk alanı ve bant genişliği kullanımı makul sınırlar içinde olmalıdır.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">4.3:</span> Müşteri, aldığı hizmet kapsamında Host'un yapacağı tüm beyan ve uyarılara uymayı taahhüt eder. Ayrıca müşteri, kendisine sağlanan hizmetleri üçüncü taraflara ücretli veya ücretsiz, sınırlı veya sınırsız bir şekilde dağıtamaz ve satamaz.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Fesih ve İptal</h2>
                    
                    <div className="space-y-4 text-slate-300">
                      <p>
                        <span className="font-semibold text-[#ff9800]">5.1:</span> Müşteri, hizmet sözleşmesini istediği zaman sonlandırabilir. Host, hizmet şartlarının ihlali durumunda veya yasal zorunluluklar nedeniyle hizmeti askıya alma veya sonlandırma hakkını saklı tutar.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-[#ff9800]">5.2:</span> Tüm hosting paketlerinde 30 gün para iade garantisi sunulmaktadır. Hizmetten memnun kalınmaması durumunda, ilk 30 gün içinde iade talep edilebilir. Domain kayıtları iade kapsamına girmemektedir.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm">
                    Bu hizmet şartları ile ilgili sorularınız varsa, lütfen <a href="mailto:dev@erslly.dev" className="text-[#ff9800] hover:underline">contact@feqan.dev</a> adresinden bizimle iletişime geçin.
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