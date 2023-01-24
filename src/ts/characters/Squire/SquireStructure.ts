import { type Fighter } from "../Fighter/Fighter";
import { type CharacterStructure } from "../Character/CharacterStructure";

export interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}
