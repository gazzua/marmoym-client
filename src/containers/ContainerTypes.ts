interface ContainerPropsBase {
  dispatch?: Function
}

export namespace DefinitionListContainer {
  export interface Props extends ContainerPropsBase {
    defIds: any;
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