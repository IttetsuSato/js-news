import { QiitaArea } from "@/features/qiita/qiita-area";
import { qiitaItemsSchema } from "@/schemas/qiita-item";

export default async function Home() {
  const items = qiitaItemsSchema.parse(
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

  return (
    <main>
      <div className="container">
        <QiitaArea items={items} />
      </div>
    </main>
  );
}
