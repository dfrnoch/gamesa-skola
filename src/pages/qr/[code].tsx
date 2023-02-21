import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function QrCode() {
  const router = useRouter();
  const { code } = router.query;

  const res = api.game.checkQrCode.useQuery(code as string);

  if (res.isLoading) return <div>načítání</div>;

  if (!res.data) return window.location.replace("/");

  return <div>{res.data?.name}</div>;
}
