import { QiitaArea } from "@/features/qiita/qiita-area";
import { ZennArea } from "@/features/zenn/zenn-area";
import { qiitaItemsSchema } from "@/schemas/qiita-item";
import { zennArticlesSchema } from "@/schemas/zenn-article";

export default async function Home() {
  const qiitaArticles = qiitaItemsSchema.parse(
    await fetch(
      "https://qiita.com/api/v2/items?per_page=4&query='フロントエンド'",
      {
        headers: {
          Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 600 },
      },
    ).then((res) => res.json()),
  );

  const zennArticles = zennArticlesSchema.parse(
    await fetch("https://zenn.dev/api/articles?count=4", {
      next: { revalidate: 600 },
    }).then((res) => res.json()),
  );
  console.log({ articles: zennArticles });

  return (
    <main>
      <div className="container">
        <QiitaArea items={qiitaArticles} />
        <ZennArea items={zennArticles.articles} />
      </div>
    </main>
  );
}
