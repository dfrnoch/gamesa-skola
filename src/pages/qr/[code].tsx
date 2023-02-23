import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "~/utils/api";

export default function QrCode() {
  const router = useRouter();
  const { code } = router.query;

  const res = api.spot.validateSpot.useMutation();

  useEffect(() => {
    (async () => {
      const data = await res.mutateAsync(code as string);
      if (data) {
        router.push("/");
      }
    })();
  }, [code]);

  return <div>Načítání</div>;
}
