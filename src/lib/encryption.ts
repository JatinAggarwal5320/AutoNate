import Cryptr from "cryptr";

let cryptrInstance: Cryptr | null = null;

const getCryptr = () => {
  if (!cryptrInstance) {
    const key = process.env.ENCRYPTION_KEY;
    if (!key) throw new Error("ENCRYPTION_KEY environment variable is not set");
    cryptrInstance = new Cryptr(key);
  }
  return cryptrInstance;
};

export const encrypt = (text: string) => getCryptr().encrypt(text);
export const decrypt = (text: string) => getCryptr().decrypt(text);
