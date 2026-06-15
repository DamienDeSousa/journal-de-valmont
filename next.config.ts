import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Autorise les fichiers .md / .mdx à servir de pages (blog / journal).
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  // Plugins remark/rehype éventuels à ajouter ici.
});

export default withMDX(nextConfig);
