import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

const AboutModal = ({ open, onClose }: AboutModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">About</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <Tabs defaultValue="building" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="building">Building the Future Together</TabsTrigger>
              <TabsTrigger value="why">Why Transform?</TabsTrigger>
              <TabsTrigger value="path">A New Path Forward</TabsTrigger>
              <TabsTrigger value="growth">More Than Economic Growth</TabsTrigger>
              <TabsTrigger value="promise">Our Promise</TabsTrigger>
            </TabsList>

            <TabsContent value="building" className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-4">Building the Future Together</h3>
              
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                The Transformation Fund is South Africa's bold answer to the question: How do we build an economy that works for everyone? We're not just another funding mechanism—we're a national movement to engineer inclusive economic growth at scale.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Our Vision</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A South Africa where economic opportunity is accessible to all, where black-owned enterprises thrive, and where transformation creates shared prosperity that strengthens our nation.
                  </p>
                </section>

                <section className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Our Mission</h4>
                  <p className="text-gray-700 leading-relaxed">
                    To pool resources, coordinate efforts, and create systemic impact by providing bundled support—capital, capability, and market access—to empowered enterprises across South Africa.
                  </p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="why" className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                South Africa stands at a crossroads. Despite decades of democracy, economic inequality persists, unemployment remains stubbornly high, and too many talented entrepreneurs lack the resources to succeed. The current approach isn't working—we need systemic change.
              </p>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Economic Imperative</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our economy cannot reach its full potential when the majority of our population is excluded from meaningful participation. Transformation isn't just morally right—it's economically essential.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Stability</h3>
                <p className="text-gray-700 leading-relaxed">
                  Inclusive economic growth builds social cohesion and stability. When people have opportunities to build businesses, create jobs, and generate wealth, entire communities thrive.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unlocking Potential</h3>
                <p className="text-gray-700 leading-relaxed">
                  South Africa has incredible entrepreneurial talent. The Transformation Fund unlocks this potential by removing barriers and providing the support entrepreneurs need to succeed.
                </p>
              </section>
            </TabsContent>

            <TabsContent value="path" className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund represents a paradigm shift—from fragmented, compliance-driven efforts to coordinated, outcome-based systemic change. We're charting a new path that learns from the past while building for the future.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Old Way</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Fragmented funding mechanisms</li>
                    <li>Compliance-focused approach</li>
                    <li>Capital without capability</li>
                    <li>No coordination or scale</li>
                    <li>Limited market access</li>
                    <li>Unclear impact measurement</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The New Way</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Pooled national platform</li>
                    <li>Outcome-driven transformation</li>
                    <li>Bundled support (capital + capability + markets)</li>
                    <li>Coordinated systemic impact</li>
                    <li>Guaranteed market opportunities</li>
                    <li>Real-time impact tracking</li>
                  </ul>
                </section>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This new path doesn't just fund businesses—it builds an ecosystem where empowered enterprises can thrive, creating jobs, generating wealth, and transforming communities.
              </p>
            </TabsContent>

            <TabsContent value="growth" className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund is about more than GDP numbers and balance sheets. It's about building a South Africa where prosperity is shared, where talent is nurtured regardless of background, and where economic participation creates dignity and opportunity.
              </p>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creating Jobs That Matter</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every job created through the Fund represents a family lifted, a community strengthened, and a future secured. We target 1 million+ jobs over 10 years—not just any jobs, but quality employment with dignity and growth potential.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building Generational Wealth</h3>
                <p className="text-gray-700 leading-relaxed">
                  By supporting black ownership and enterprise development, we're helping families build assets that can be passed down, creating generational wealth that transforms communities for decades to come.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empowering Women and Youth</h3>
                <p className="text-gray-700 leading-relaxed">
                  Special focus on women-owned enterprises and youth entrepreneurship ensures that those historically most excluded from economic opportunity become drivers of transformation.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Developing Rural Economies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transformation must reach beyond urban centers. The Fund supports rural enterprise development, bringing economic opportunity to communities that have been left behind.
                </p>
              </section>
            </TabsContent>

            <TabsContent value="promise" className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund makes a solemn commitment to all South Africans: we will deploy resources with integrity, measure impact with transparency, and create transformation that is real, measurable, and sustainable.
              </p>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accountability</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every rand deployed is tracked, every outcome measured, every impact reported. We hold ourselves accountable to the people of South Africa.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We operate with the highest ethical standards, ensuring resources reach those who need them most and are used for maximum impact.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time tracking and public reporting mean every South African can see exactly where resources go and what impact they create.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work hand-in-hand with entrepreneurs, communities, and stakeholders to ensure our approach remains responsive, effective, and aligned with the needs of those we serve.
                </p>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;