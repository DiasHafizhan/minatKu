export interface RIASECResult {
  nama_category: string; // Contoh: "Enterprising"
  deskripsi_category: string; // Contoh: "Senang memimpin, berwirausaha, dan meyakinkan orang lain."
  skor: number; // Contoh: 80
  alasan_kecocokan: string; // Contoh: "Skor tinggi menunjukkan Anda sangat tertarik pada kegiatan kepemimpinan dan wirausaha."
  rekomendasi_mata_pelajaran: string[]; // Contoh: ["Ekonomi", "Geografi"]
}