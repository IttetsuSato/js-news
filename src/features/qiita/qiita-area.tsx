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
import { QiitaItem } from "@/schemas/qiita-item";
import Link from "next/link";
import { FunctionComponent } from "react";

export type QiitaAreaProps = {
  items: QiitaItem[];
};
export const QiitaArea: FunctionComponent<QiitaAreaProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Typography variant="h2">Qiita</Typography>
        <Link href="https://qiita.com/">もっと見る</Link>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Card key={item.id}>
            <Link href={item.url}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <Date date={item.updated_at} format="yyyy/MM/dd" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4"></div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <div>{`${item.likes_count} likes`}</div>
                  {item.tags.map((tag) => (
                    <Badge key={tag.name}>{tag.name}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
