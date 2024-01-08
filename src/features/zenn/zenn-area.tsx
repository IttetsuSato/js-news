import { Typography } from "@/components/ui/typography";
import { ZennArticles } from "@/schemas/zenn-articles";
import Link from "next/link";
import { FunctionComponent } from "react";
import { zennBaseURL } from "../../../constants";
import { ZennItem } from "./zenn-item";

export type ZennAreaProps = {
  zennArticles: ZennArticles;
};
export const ZennArea: FunctionComponent<ZennAreaProps> = ({
  zennArticles,
}) => {
  const items = zennArticles.articles;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Typography variant="h2">Zenn</Typography>
        <Link href={zennBaseURL}>もっと見る</Link>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <ZennItem key={item.id} slug={item.slug} />
        ))}
      </div>
    </div>
  );
};
