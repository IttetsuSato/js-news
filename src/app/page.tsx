import { Button } from "@/components/ui/button";
import { qiitaItemsSchema } from "@/schemas/qiita-item";

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
      <h1 className="text-3xl text-blue-500">Hello</h1>
      <Button variant="destructive">Bun!</Button>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </main>
  );
}
