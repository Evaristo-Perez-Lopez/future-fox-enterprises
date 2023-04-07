/**
 * Status: start | notfound | found
*/
export const useStatus = () => useState<string>('status', () => 'start')