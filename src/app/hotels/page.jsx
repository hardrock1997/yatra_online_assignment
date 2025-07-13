import { Suspense } from "react";
import HotelsPageClient from "./HotelsPageClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HotelsPageClient />
    </Suspense>
  );
}