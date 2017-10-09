interface ContainerPropsBase {
  dispatch?: Function,
  match?: any;
}

export namespace DefinitionListContainer {
  export interface Props extends ContainerPropsBase {
    definitions: any;
  }
}

export namespace RootContainer {
  export interface Props extends ContainerPropsBase {
  }
}

export namespace MastheadContainer {
  export interface Props {
    history: any;
    handleClickAddTerm: any;
    masthead: any;
    location: any;
    dispatch: any;
  }
}