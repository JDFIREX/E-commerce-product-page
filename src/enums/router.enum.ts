export enum RouterEnum {
  COLLECTIONS = "collections",
  MEN = "men",
  WOMEN = "women",
  ABOUT = "about",
  CONTACT = "contact"
}

export namespace RouterEnumHelper {
  export const getValue = (value: string): RouterEnum => {
    return RouterEnum[value] as RouterEnum;
  };
}
