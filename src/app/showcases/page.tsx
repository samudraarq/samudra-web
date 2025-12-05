import Chip from "@/components/common/chip";
import { showcases } from "@/data/showcases";
import Link from "next/link";

const Page = () => {
  return (
    <div className="custom-container pt-24">
      <h2>Showcases</h2>

      <div className="pt-16">
        <main>
          <div className="space-y-16 mt-8">
            {showcases.map((showcase) => (
              <div key={showcase.id}>
                <h3 className="mb-3">
                  <Link href={showcase.url}>{showcase.title}</Link>
                </h3>
                <p className="mb-4">{showcase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {showcase.technologies.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default Page;
