import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/cs/sluzby/${slug}`);
}
