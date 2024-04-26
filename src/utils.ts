export const extractNumber = (str: string) =>{
    const parts = str.split("/");
    return parts[parts.length - 2];
}