import { zennArticleSchema } from "@/schemas/zenn-article";
import { FunctionComponent } from "react";
import { zennAPIBaseURL, zennBaseURL } from "../../../constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Date } from "@/components/ui/date";
import { Badge } from "@/components/ui/badge";

export type ZennItemProps = {
  slug: string;
};

export const ZennItem: FunctionComponent<ZennItemProps> = async ({ slug }) => {
  const requestUrl = new URL(`api/articles/${slug}`, zennBaseURL);

  const { article } = zennArticleSchema.parse(
    await fetch(requestUrl.href).then((res) => res.json()),
  );

  const articleUrl = new URL(article.path, zennBaseURL);
  return (
    <Card key={article.id}>
      <Link href={articleUrl.href}>
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>
            <Date date={article.published_at} format="yyyy/MM/dd" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4"></div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <div>{`${article.liked_count} likes`}</div>
            {article.topics.map((topic) => (
              <Badge key={topic.id}>{topic.name}</Badge>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};
