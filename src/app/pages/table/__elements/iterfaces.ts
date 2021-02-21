interface IElement {
  symbol: string;
  number: number;
  name: string;
  atomicMass: number;
  column: number;
  row: number;
  group: string;
  active: boolean;
}

export interface IElementsGridState {
  elements: IElement[];
}

export interface IMapDispatchToProps {
  ElementMouseEnter(item: object): void;
  ElementClick(itemName: string): void;
}

export interface IElementsGridProps
  extends IElementsGridState,
    IMapDispatchToProps {}
