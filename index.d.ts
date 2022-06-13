export interface OpenGraphResult {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url?: string };
}
export type OpenGraphRes = {
  error: boolean;
  result: OpenGraphResult | undefined;
  response: any;
};
declare const ogs: ({ url: string }) => Promise<OpenGraphRes>;
export default ogs;
