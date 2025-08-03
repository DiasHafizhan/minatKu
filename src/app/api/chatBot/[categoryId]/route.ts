import { prisma } from "@/lib/prisma";
import { together } from "@/lib/together";
import { NextRequest, NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/src/resources.js";
import { Prisma } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const categoryResultwithItems = Prisma.validator<Prisma.CategoryResultInclude>()({
  items: true,
});

type CategoryResultwithItems = Prisma.CategoryResultGetPayload<{
  include: typeof categoryResultwithItems;
}>;

const generatedMessageParams = (
  hasil: CategoryResultwithItems | null
): ChatCompletionMessageParam[] => {

  const instructions = `Anda adalah seorang penasihat karier profesional yang membantu siswa sekolah menengah memilih mata pelajaran yang paling sesuai berdasarkan minat dan kekuatan mereka. Anda juga memberikan wawasan tentang jalur karier potensial dan peluang pekerjaan di masa depan yang berkaitan dengan pilihan mata pelajaran mereka. Selalu jawab dalam Bahasa Indonesia, dan jangan menjawab pertanyaan di luar topik pendidikan dan karier.`;

  const context = hasil
    ? `
Gunakan data hasil  analisis minat dari siswa  sebagai referensi saat menjawab pertanyaan siswa 

 data hasil kategori  minat siswa : 
${hasil.items.sort((a, b) => b.skor - a.skor).slice(0,3)
  .map((item,index) => {
    return `
      Kategori ${index + 1} :
      - Nama Kategori: ${item.nama_category ?? 'Tidak diketahui'}
      - Deskripsi Kategori: ${item.deskripsi_category ?? 'Tidak tersedia'}
      - Rekomendasi mata pelajaran : ${item.rekomendasi_mata_pelajaran.join(", ")}
    `
  }).join(' ')}

.
`
    : `Data hasil belum tersedia. Jawablah secara umum berdasarkan informasi karier dan pendidikan.`;

  return [
    {
      role: 'system',
      content: `${instructions}
      ${context}`,
    },
  ];
};


export async function POST(request: NextRequest, context: { params: Promise<{ categoryId: string }> }) {
  try {
    const {categoryId} = await context.params 

    const kategori: CategoryResultwithItems | null = await prisma.categoryResult.findFirst({
      where: {
        id: parseInt(categoryId),
      },
      include: {
        items: true
      }
    })

    const {message}: {message: ChatCompletionMessageParam[]} = await request.json()
    console.log(`message : ${message}`)
    const initialMessage = generatedMessageParams(kategori)[0]
    const promtChat = [initialMessage, ...message]
    console.log(promtChat)
    const chatBot = await together.chat.completions.create({
      messages: promtChat,
      model: 'meta-llama/Llama-3-70b-chat-hf'
    })
    const response = chatBot.choices[0].message.content
    return NextResponse.json({message: response}, {status: 200})
  } catch (error) {
    return NextResponse.json({
      error: 'server error' + error
    }, 
    {
      status: 500
    })
  }
}