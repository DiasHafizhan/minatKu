import { Statement } from "@/types/type";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function riasec(data: Statement[]) {
  let result = { Realistic: 0, Investigative: 0, Artistic: 0, Social: 0, Enterprising: 0, Conventional: 0 };
 
  data.forEach((item) => {
    if (item.answer === true) {
      if (item.type === "Realistic") {
        result.Realistic += 1;
      } else if (item.type === "Investigative") {
        result.Investigative += 1;
      } else if (item.type === "Artistic") {
        result.Artistic += 1;
      } else if (item.type === "Social") {
        result.Social += 1;
      } else if (item.type === "Enterprising") {
        result.Enterprising += 1;
      } else if (item.type === "Conventional") {
        result.Conventional += 1;
      }
    }
  });

  const total = 5;
  type PersonalityType = keyof typeof result;
  let percentage: { [key: string]: number } = {};

  (Object.keys(result) as PersonalityType[]).forEach(type => {
    percentage[type] = (result[type] / total) * 100;
  });



  return  percentage
}