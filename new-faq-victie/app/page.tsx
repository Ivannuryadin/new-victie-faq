import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ClockIcon,
  MegaphoneIcon,
  GlobeIcon,
  BarChartIcon,
  UsersIcon,
  SparklesIcon,
  SearchIcon,
  MoonIcon,
  BellIcon,
  UserIcon,
  ChevronDownIcon,
  PenToolIcon,
  ShieldCheckIcon,
  HandCoinsIcon,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-800">
        <Link
          className="flex items-center justify-center text-3xl font-extrabold"
          href="#"
        >
          Victie
        </Link>
        <nav className="hidden lg:flex gap-6 sm:gap-8 items-center">
          <Link
            className="text-base font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-base font-medium hover:underline underline-offset-4"
            href="#"
          >
            FAQ
          </Link>
          <div className="relative">
            <Button
              variant="ghost"
              className="text-base font-medium flex items-center gap-1 px-2"
            >
              Genre
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
            {/* Dropdown content would go here */}
          </div>
          <Link
            className="text-base font-medium hover:underline underline-offset-4"
            href="/"
          >
            Keuntungan
          </Link>
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-9 pr-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600 w-[200px]"
              placeholder="Cari buku / author"
              type="search"
            />
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoonIcon className="h-6 w-6" />
            <span className="sr-only">Toggle dark mode</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <BellIcon className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <UserIcon className="h-6 w-6" />
            <span className="sr-only">User profile</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="min-h-screen bg-black py-12 px-4">
          <div className="w-full max-w-3xl mx-auto py-12 px-4 md:px-6">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#DD7b8d]">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h1>
              <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Temukan jawaban atas pertanyaan umum Anda di sini.
              </p>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl mt-15 text-[#DD7b8d]">
              FAQ Saldo Penulis
            </h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Apa keuntungan yang didapat oleh penulis?
                </AccordionTrigger>
                <AccordionContent className=" text-white">
                  Penulis akan mendapatkan 80% keuntungan dari penjualan bab
                  berbayar, sementara untuk bab gratis penulis akan mendapat
                  keuntungan dari penayangan iklan, dimana untuk keuntungan
                  iklan akan dibayarkan setiap tanggal 25 pada setiap bulannya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Kapan saya bisa menarik saldo pendapatan?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Saldo pendapatan bisa ditarik 3 hari setelah saldo masuk ke
                  akun penulis. Sebagai ilustrasi, jika saldo kamu masuk pada
                  tanggal 1 Oktober, maka saldo baru akan bisa ditarik pada
                  tanggal 4 Oktober.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Berapa lama proses penarikan saldo?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Saldo yang penulis cairkan akan langsung sampai ke rekening
                  penulis di hari yang sama. Namun untuk hari libur, kemungkinan
                  akan dikirim pada hari kerja selanjutnya.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Apakah ada potongan pada saat penarikan saldo oleh penulis?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Tidak, potongan sudah dilakukan sebelum saldo memasuki akun
                  penulis. Hanya dikenakan biaya admin sebesar Rp 5.000. Sebagai
                  ilustrasi, apabila penulis A mendapatkan penghasilan sebesar
                  Rp 50.000 saat pembelian karya, maka ketika saldo memasuki
                  akun penulis saldo akan berjumlah Rp 40.000. Selanjutnya saat
                  penulis A menarik saldo ke rekening bank penulis, maka saldo
                  akan dipotong sebesar Rp 5.000 sehingga saldo bersih penulis
                  adalah Rp 35.000.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  Adakah jumlah minimal penarikan saldo bagi penulis?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Ya, untuk menarik saldo ke rekening bank penulis, perlu
                  minimal Rp 100.000 saat saldo akan ditarik.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl mt-20 text-[#DD7b8d]">
              FAQ Content Guidelines
            </h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Apakah karya NSFW diperbolehkan di Victie?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  Karya NSFW secara umum tidak diperbolehkan, tetapi terdapat
                  beberapa pengecualian yang dapat dilihat di bawah.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Seperti apa cover yang diperbolehkan oleh Victie?
                </AccordionTrigger>
                <AccordionContent className="text-white space-y-4">
                  Cover yang diperbolehkan oleh Victie yang{" "}
                  <span className="text-[#DD7b8d]">
                    tidak mengandung ketelanjangan, pornografi, kekerasan pada
                    anak, SARA, dan kekerasan berlebihan.
                  </span>{" "}
                  <br />
                  <span className="text-[#DD7b8d]">
                    A. Gambar Ketelanjangan (Nudity)
                  </span>{" "}
                  Tidak diperbolehkan menampilkan alat kelamin secara eksplisit,
                  baik dalam keadaan diam atau bergerak (misalnya dalam video).
                  Ketelanjangan total atau parsial yang menonjolkan bagian tubuh
                  yang dianggap sensitif seperti payudara, bokong, atau alat
                  kelamin untuk tujuan seksual atau eksplisit dilarang keras.
                  Pose sensual atau provokatif yang bertujuan untuk
                  membangkitkan hasrat seksual dianggap sebagai pelanggaran,
                  meskipun subjek dalam gambar tidak sepenuhnya telanjang.{" "}
                  <br />
                  <span className="text-[#DD7b8d]">
                    B. Konten yang Menampilkan Aktivitas Seksual
                  </span>{" "}
                  Gambar yang menampilkan hubungan seksual(baik antar manusia
                  atau dengan objek lain) tidak diizinkan. Simulasi atau
                  ilustrasi aktivitas seksualjuga dilarang, termasuk adegan
                  erotis yang tidak sepenuhnya eksplisit tetapi jelas merujuk
                  pada hubungan seksual. Pose seksual yang berlebihan, termasuk
                  mencium dengan berlebihan atau sentuhan fisik yang sugestif,{" "}
                  <br />
                  <span className="text-[#DD7b8d]">
                    C. Konten Kekerasan Seksual atau Penghinaan{" "}
                  </span>{" "}
                  Gambar yang menampilkan kekerasan seksualatau pelecehan dalam
                  bentuk apapun tidak diperbolehkan. Ini termasuk gambar yang
                  menggambarkan pemerkosaan, kekerasan fisik atau psikologis
                  dalam konteks seksual. Penghinaan seksual yang menampilkan
                  perempuan atau laki-laki dalam keadaan terhina secara seksual
                  atau diperlakukan dengan tidak hormat, bahkan jika itu adalah
                  gambar yang difabrikasi atau dibuat secara digital. <br />
                  <span className="text-[#DD7b8d]">
                    D. Tidak Memiliki Nilai Seni atau Budaya yang Jelas{" "}
                  </span>{" "}
                  Gambar ketelanjangan atau seksual yang tidak memiliki konteks
                  seni, budaya, atau pendidikan yang jelas dianggap melanggar
                  peraturan. Sebagai contoh, karya seni klasik yang menampilkan
                  ketelanjangan bisa diizinkan selama jelas merupakan bagian
                  dari ekspresi seni atau pendidikan, bukan semata-mata untuk
                  tujuan seksual. <br />
                  <span className="text-[#DD7b8d]">
                    E. Gambar dengan Pakaian Minim atau Provokatif Meskipun
                    mungkin tidak sepenuhnya telanjang
                  </span>
                  , gambar dengan pakaian yang terlalu minim atau menggoda dalam
                  konteks yang provokatif dapat dianggap sebagai konten yang
                  tidak pantas. Kostum yang menonjolkan bagian-bagian tubuh
                  sensitif dengan sengaja untuk memprovokasi hasrat seksual juga
                  tidak diperbolehkan. <br />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Batasan konten seperti apa yang diperbolehkan oleh Victie?
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-[#DD7b8d]">
                    <li>
                      Konten seksual diperbolehkan jika digambarkan secara
                      eksplisit dengan penggunaan kalimat yang rapi dan tidak
                      sembarangan. Konten terkait harus memiliki alur yang
                      jelas, dan adanya konten seksual harus dikarenakan
                      kepentingan dalam alur cerita. <br />
                    </li>
                    <li>
                      Konten SARA sama sekali tidak diizinkan di Victie. Seperti
                      penghinaan terhadap agama tertentu, pelecehan, dan juga
                      ujaran kebencian. <br />
                    </li>
                    <li>
                      Plagiarisme ditentang keras oleh Victie dan akan langsung
                      mendapat terminasi permanen pada akun penulis, serta
                      penangguhan pendapatan penulis. <br />
                    </li>
                    <li>
                      Konten LGBT tidak diizinkan pada Victie. Yang berkaitan
                      tentang: hubungan sesama jenis, transgender dan berbagai
                      hal yang menunjukan penyimpangan orientasi seksual. <br />
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="py-16 md:py-8 lg:py-18 bg-gray-950 text-gray-300 text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-base leading-relaxed">
            <div className="space-y-2">
              <p>
                Victie, developed by{" "}
                <span className="text-blue-400 font-semibold">
                  LGN Developer
                </span>
              </p>
              <p>Kontak Kami:</p>
              <p>+62 859-2013-5766</p>
              <p>+62 859-2013-5767</p>
              <p>+62 859-2013-5768</p>
              <p>support@victie.com</p>
            </div>
            <div className="space-y-2">
              <p>Alamat:</p>
              <p>Jl. Menjangan III no. 77,</p>
              <p>Pondok Ranji, Ciputat Timur,</p>
              <p>Tangerang Selatan, Banten</p>
            </div>
          </div>
          <p className="mt-12 text-sm">&copy; 2025 Victie.com</p>
          <Link className="text-blue-400 hover:underline text-sm" href="#">
            Kebijakan Privasi
          </Link>
        </div>
      </footer>
    </div>
  );
}
