import { getPagesUnderRoute } from "nextra/context";
import { Cards, Card } from "nextra-theme-docs";
import { MdxFile } from "nextra";

export default function ConfiguringPrometheus() {
  const pages = getPagesUnderRoute("/deploying-prometheus").filter((page) => {
    return (
      page.kind === "MdxPage" && page.route !== "/deploying-prometheus/local"
    );
  });

  return (
    <Cards num={1}>
      {pages.map((element) => {
        const page = element as MdxFile;
        return (
          <Card
            children
            icon
            title={page.frontMatter?.short}
            href={page.route}
          />
        );
      })}
    </Cards>
  );
}
