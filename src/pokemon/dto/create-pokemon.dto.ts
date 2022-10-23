import { Prisma } from '@prisma/client';

export default class CreatePokemonDto implements Prisma.PokemonCreateInput {
  name: string;
  height: number;
  images?: Prisma.ImageCreateNestedManyWithoutPokemonInput;
}
