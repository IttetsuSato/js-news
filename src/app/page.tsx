import { Button } from "@/components/ui/button";

export default async function Home() {
  const schema = await fetch("https://qiita.com/api/v2/schema").then((res) =>
    res.json(),
  );

  console.log({ schema: schema.properties.item });
  const items = await fetch("https://qiita.com/api/v2/items", {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  }).then((res) => res.json());

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
