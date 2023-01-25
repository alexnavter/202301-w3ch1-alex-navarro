import { type CharacterCardStructure } from "./CharacterCardStructure";

class CharacterCard implements CharacterCardStructure {
  element: Element;

  constructor(mensaje: string) {
    this.element = document.createElement("div");
    document.querySelector(".app")?.appendChild(this.element);
    this.element.innerHTML = `<p>${mensaje}</p>`;
  }
}

export default CharacterCard;
