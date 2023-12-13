import { odeServices } from "edifice-ts-client";

export default function usePreferences(name: string): Function[] {
  const getPreference = async () => {
    const res = await odeServices.conf().getPreference(name);
    return res;
  };

  const savePreference = async (value: any) => {
    const res = await odeServices
      .conf()
      .savePreference(name, JSON.stringify(value));
    return res;
  };

  return [getPreference, savePreference];
}
