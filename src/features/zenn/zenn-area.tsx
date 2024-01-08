import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Date } from "@/components/ui/date";
import { Typography } from "@/components/ui/typography";
import { ZennArticle } from "@/schemas/zenn-article";
import Link from "next/link";
import { FunctionComponent } from "react";
import { zennBaseURL } from "../../../constants";

export type ZennAreaProps = {
  items: ZennArticle[];
};
export const ZennArea: FunctionComponent<ZennAreaProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Typography variant="h2">Zenn</Typography>
        <Link href={zennBaseURL}>もっと見る</Link>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Card key={item.id}>
            <Link href={new URL(item.path, zennBaseURL)}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <Date date={item.published_at} format="yyyy/MM/dd" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4"></div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <div>{`${item.liked_count} likes`}</div>
                  {/* {item..map((tag) => (
                    <Badge key={tag.name}>{tag.name}</Badge>
                  ))} */}
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
