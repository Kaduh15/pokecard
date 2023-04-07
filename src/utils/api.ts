export async function api<T>(url: string): Promise<T> {
  const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json() as Promise<T>

}

export type ResponsePokemon = {
  id: number;
  name: string;
  sprites: Sprites;
  types: Type[];
};

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}