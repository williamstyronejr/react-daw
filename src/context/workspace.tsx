import * as React from "react";

interface State {
  tracks: Array<any>;
}

const initState: State = {
  tracks: [
    {
      src: "test",
    },
  ],
};

const WorkSpaceContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initState,
  dispatch: () => {},
});

function workSpaceReducer(
  state: State,
  action: { type: String; payload?: any }
): State {
  switch (action.type) {
    default:
      throw new Error(`Unsupport action type, ${action.type}`);
  }
}

export function WorkSpaceProvider(props: React.PropsWithChildren) {
  const [state, dispatch] = React.useReducer(workSpaceReducer, initState);
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <WorkSpaceContext.Provider value={value} {...props} />;
}

export function useWorkSpaceContext() {
  const context = React.useContext(WorkSpaceContext);
  if (!context)
    throw new Error("WorkspaceContext must be inside of WorkspaceProvider");

  const { state } = context;

  return {
    state,
  };
}
