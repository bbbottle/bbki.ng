declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const meta: {
    tags?: string[];
    title: string;
  };
}
