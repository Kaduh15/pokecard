import { W, w } from "windstitch";

export const CardBg = w.div(
  `
    h-64
    w-48
    rounded-xl
    flex
    flex-col
    justify-between
    items-center
    p-4
    duration-1000
`,
  {
    variants: {
      type: {
        normal: "bg-zinc-500 hover:bg-zinc-600",
        grass: "bg-green-500 hover:bg-green-600",
        fire: "bg-red-500 hover:bg-red-600",
        water: "bg-blue-500 hover:bg-blue-600",
        bug: "bg-lime-500 hover:bg-lime-600",
        poison: "bg-purple-500 hover:bg-purple-600",
        electric: "bg-yellow-500 hover:bg-yellow-600",
        fairy: "bg-pink-500 hover:bg-pink-600",
      },
      legendary: (yes: boolean): string => {
        return yes ? "border-orange-500 border-8" : "";
      },
    },
    defaultVariants: {
      type: "normal",
      legendary: false,
    },
  }
);

export const PokeId = w.span(
  `
  text-bold
  text-2xl
  duration-1000
`,
  {
    variants: {
      type: {
        normal: "text-zinc-800",
        grass: "text-green-800",
        fire: "text-red-800",
        water: "text-blue-800",
        bug: "text-lime-800",
        poison: "text-purple-800",
        electric: "text-yellow-800",
        fairy: "text-pink-800",
      },
    },
    defaultVariants: {
      type: "normal",
    },
  }
);
