import { WorkspaceElement, odeServices } from "edifice-ts-client";

const useWorkspaceFile = () => {
  // const get = () => {}
  const create = async (file: File) => {
    return await odeServices.workspace().saveFile(file);
  };

  // const put = () => {}

  const remove = async (file: WorkspaceElement) => {
    return await odeServices.workspace().deleteFile([file]);
  };

  return {
    // get,
    create,
    // put,
    remove,
  };
};

export default useWorkspaceFile;
