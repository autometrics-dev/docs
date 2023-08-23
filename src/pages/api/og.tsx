import { NextApiRequest } from "next";
import { ImageResponse } from "next/server";
import AutometricsLogo from "./_AutometricsLogo";
import DottedPath from "./_DottedPath";
import { autometrics, init } from "autometrics";

export const config = {
  runtime: "edge",
};

init({
  pushGateway: "https://wercker.fmp.fiberplane.dev/",
  pushInterval: 0,
});

async function handler(req: NextApiRequest) {
  try {
    const fontData = await fetch(
      new URL("../../../public/resources/Inter-Bold.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(req.url as string);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Autometrics Docs";

    return new ImageResponse(
      <div
        style={{
          height: "630px",
          width: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <div style={{ position: "absolute", color: "white", display: "flex" }}>
          <h1
            style={{
              fontSize: 60,
              fontFamily: "Inter",
              wordWrap: "break-word",
              margin: "20px",
              zIndex: "1",
            }}
          >
            {title}
          </h1>
        </div>
        <div style={{ position: "absolute", top: "25%", display: "flex" }}>
          <AutometricsLogo />
        </div>

        <div style={{ display: "flex", zIndex: "-10" }}>
          <DottedPath />
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [{ name: "Inter", data: fontData, style: "normal" }],
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      return new Response("Failed to generate image", { status: 500 });
    }
  }
}

export default autometrics(handler);
