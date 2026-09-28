import { FEATURES } from "@/lib/features";
import Setu from "@/components/setu/Setu";
import SetuPro from "@/components/setu/SetuPro";

export const metadata = { title: "Setu — TRINETRA" };

/**
 * `/setu`, behind NEXT_PUBLIC_FF_SETU_PRO.
 *
 * With the flag off this is the existing map, unchanged — the prime directive.
 * With it on, the three-class coordinate model, the resolution chain, the
 * unplaced panel and the class-preserving exports (DEC-061, DEC-062).
 */
export default function Page() {
  return FEATURES.setuPro ? <SetuPro /> : <Setu />;
}
