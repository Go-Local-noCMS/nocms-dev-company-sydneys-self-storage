import { StorageHeroSearch } from "@/components/StorageHeroSearch";
import { StorageProcess } from "@/components/StorageProcess";
import { StorageFeatureGrid } from "@/components/StorageFeatureGrid";
import { StorageTestimonials } from "@/components/StorageTestimonials";
import { StorageCTABanner } from "@/components/StorageCTABanner";

export default function HomePage() {
  return (
    <main>
      <StorageHeroSearch />
      <StorageProcess />
      <StorageFeatureGrid />
      <StorageTestimonials />
      <StorageCTABanner />
    </main>
  );
}
