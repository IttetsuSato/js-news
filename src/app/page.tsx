import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { qiitaItemsSchema } from "@/schemas/qiita-item";
import Link from "next/link";

export default async function Home() {
  const items = qiitaItemsSchema.parse(
    await fetch("https://qiita.com/api/v2/items?per_page=4", {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }).then((res) => res.json()),
  );

  return (
    <main>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Card key={item.id}>
            <Link href={item.url}>
              <Typography variant="h2">{item.title}</Typography>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
