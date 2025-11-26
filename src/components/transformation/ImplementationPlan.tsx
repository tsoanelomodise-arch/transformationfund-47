import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ImplementationPlan = () => {
  return (
    <section id="implementation" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Plan</h2>
          <p className="text-xl max-w-4xl mx-auto">
            The Transformation Fund will be implemented through phased, principle-based stages rather than rigid timelines. This ensures sequencing is aligned with institutional capacity and stakeholder readiness, while remaining flexible to adapt based on on-the-ground learning.
          </p>
        </div>

        <Tabs defaultValue="pre-launch" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/10 p-1 rounded-lg h-auto">
            <TabsTrigger 
              value="pre-launch" 
              className="text-sm px-4 py-3 data-[state=active]:bg-white data-[state=active]:text-primary transition-all"
            >
              Pre-Launch
            </TabsTrigger>
            <TabsTrigger 
              value="activation" 
              className="text-sm px-4 py-3 data-[state=active]:bg-white data-[state=active]:text-primary transition-all"
            >
              Activation
            </TabsTrigger>
            <TabsTrigger 
              value="scale-up" 
              className="text-sm px-4 py-3 data-[state=active]:bg-white data-[state=active]:text-primary transition-all"
            >
              Scale-Up
            </TabsTrigger>
            <TabsTrigger 
              value="institutionalisation" 
              className="text-sm px-4 py-3 data-[state=active]:bg-white data-[state=active]:text-primary transition-all"
            >
              Institutionalisation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pre-launch" className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Phase 1: Pre-Launch (Foundational Setup)</h3>
            <p className="leading-relaxed">
              In this preparatory phase, the Fund's special purpose vehicle (SPV) is established and capitalised with initial commitments from aligned contributors. The digital platform and telemetry infrastructure for data and performance tracking are designed and prototyped. This includes setting up the Transformation Index framework, key metrics and data systems, and basic automation for reporting. Critically, Phase 1 focuses on institutional alignment: engaging public-sector partners to ensure the Fund's mandate complements national programmes and onboarding initial private and DFI partners through MOUs.
            </p>
          </TabsContent>

          <TabsContent value="activation" className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Phase 2: Activation (Early Adoption)</h3>
            <p className="leading-relaxed">
              With fundamentals in place, the Fund launches initial programmes to deploy capital and capability support on a small scale. This phase tests the platform model in action: a first cohort of MSMEs or projects receive blended finance combined with technical support. The Fund's digital platform begins capturing telemetry data from these interventions, feeding into the Transformation Index.
            </p>
          </TabsContent>

          <TabsContent value="scale-up" className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Phase 3: Scale-Up (Expansion and Mainstreaming)</h3>
            <p className="leading-relaxed">
              After successful early adoption, the Fund enters an expansion phase, scaling up the volume of investments and the breadth of support services. The Fund's digital operating system is fully deployed nationwide, onboarding many more MSMEs onto the platform and extending the capability toolkits, including adding sector-specific modules for agriculture and manufacturing. Scale-up also entails institutional mainstreaming: integrating the Fund's activities with government initiatives, including coordinating with the Jobs Fund, sector Master Plans, or provincial development programmes to avoid duplication.
            </p>
          </TabsContent>

          <TabsContent value="institutionalisation" className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Phase 4: Institutionalisation (Sustainability & Policy Embedding)</h3>
            <p className="leading-relaxed mb-4">
              In the final phase, the Transformation Fund transitions from a special initiative into a permanent feature of South Africa's financial architecture. The governance model is firmly entrenched – for instance, the independent board and committees become long-standing bodies with succession plans, and possibly a statutory mandate is defined for the Fund.
            </p>
            <p className="leading-relaxed">
              In Phase 4, long-term funding streams are secured: for instance, budget allocations, or regulated contributions, such as a portion of B-BBEE enterprise development spend or DFI commitments, are programmatically channelled into the Fund, reducing reliance on ad-hoc fundraising.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ImplementationPlan;