"use client"

import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { RIASECResult } from "@/lib/type"


const chartConfig = {
  skor: {
    label: "Skor",
  },
  realistic: {
    label: "Realistic",
    color: "hsl(var(--chart-1))",
  },
  investigative: {
    label: "Investigative",
    color: "hsl(var(--chart-2))",
  },
  artistic: {
    label: "Artistic",
    color: "hsl(var(--chart-3))",
  },
  social: {
    label: "Social",
    color: "hsl(var(--chart-4))",
  },
  enterprising: {
    label: "Enterprising",
    color: "hsl(var(--chart-5))",
  },
  conventional: {
    label: "Conventional",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig

export function PieChartComponent({data}: {data: RIASECResult[]}) {
const chartData = data
  .filter((item) => item.skor > 0)
  .map((item) => ({
    kategori: item.nama_category.toLowerCase(),
    skor: item.skor,
    fill: `var(--color-${item.nama_category.toLowerCase()})`,
  }));

console.log(chartData)



  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Tes RIASEC</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="skor" hideLabel />}
            />
            <Pie data={chartData} dataKey="skor">
              <LabelList
                dataKey="kategori"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
