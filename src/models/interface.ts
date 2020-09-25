export interface Stats {
  base_stat: number;
  stat: Stat;
}

export interface Stat {
  name: string;
}

export interface Ability {
  name: string;
}

export interface Abilities {
  ability: Ability;
}

export interface Pokemon {
  name: String;
  id: number;
  height?: number;
  weight?: number;
  types?: [];
  abilities?: Abilities[];
  stats?: Stats[];
}

export interface PokemonAction {
  type: string;
  pokemon: Pokemon[];
}
export interface InitialPokemonState {
  pokemon: Pokemon[];
}
