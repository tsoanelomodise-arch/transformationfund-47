import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import problemSpaceImg from "@/assets/problemspace.jpg";
import opportunitySpaceImg from "@/assets/opportunityspace.jpg";

const WhySection = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why the Transformation Fund?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            South Africa's transformation efforts have been fragmented, compliance-driven, and insufficient to address systemic inequality. The Transformation Fund represents a bold shift: a coordinated, outcome-focused mechanism that engineers inclusive growth at scale.
          </p>
        </div>

        <Tabs defaultValue="problem" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8 p-2 bg-muted/50 rounded-full h-auto">
            <TabsTrigger 
              value="problem" 
              className="rounded-full px-8 py-3 text-base font-bold data-[state=active]:bg-blue data-[state=active]:text-blue-foreground data-[state=active]:shadow-md transition-all"
            >
              Problem Space
            </TabsTrigger>
            <TabsTrigger 
              value="opportunity"
              className="rounded-full px-8 py-3 text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
            >
              Opportunity
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="problem" className="mt-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-blue">Problem Space</h3>
              <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
                <img 
                  src={problemSpaceImg} 
                  alt="Problem Space visualization" 
                  className="w-full rounded-lg shadow-md"
                />
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      Understanding the Challenges We Face
                    </h3>
                    <p className="text-blue-900/80 leading-relaxed text-lg">
                      South Africa continues to face deep-rooted inequalities in its economy. Despite decades of Broad-Based Black Economic Empowerment (B-BBEE) policy, many black-owned small, medium, and micro enterprises (SMMEs) still struggle to access meaningful financial resources.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Traditional Enterprise and Supplier Development (ESD) programmes are fragmented and uneven in impact: contributions are made across the private sector, but the support often fails to reach those most excluded, particularly in township and rural economies.
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At the same time, many black entrepreneurs do not only lack capital, but they also lack critical support such as access to markets, guidance and the skills needed for scaling. Moreover, there is limited coordination in how existing transformation resources are allocated. Multiple funding streams (from ESD programmes, Equity Equivalent Investment Programme (EEIP) contributions, and other initiatives) operate separately, reducing overall efficiency.
                </p>
                <p>
                  Finally, there is no single way to measure transformation outcomes in a consistent and clear way. Without a central benchmark, it is difficult to track whether economic empowerment goals are genuinely being met or not.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="opportunity" className="mt-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-accent">Opportunity Space</h3>
              <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
                <img 
                  src={opportunitySpaceImg} 
                  alt="Opportunity Space visualization" 
                  className="w-full rounded-lg shadow-md"
                />
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The proposed Transformation Fund offers a strong opportunity to change how South Africa finances its economic transformation. By centralising transformation funding, the Fund will combine and use resources from multiple sources such as ESD contributions, Equity Equivalent Investment Programmes (EEIP), public interest commitments and government allocations. This pooled approach will enable larger-scale investments, making capital more accessible and usable for underserved majority-black enterprises, especially in townships and rural areas.
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Beyond financing, the Fund will provide a full range of support: debt, equity, grants and guidance all in one place. This means not only investing in enterprises, but also building their capacity, strengthening business models and connecting them to markets. Critically, it also offers a clearer and accountable structure. Through a planned Transformation Fund Index, the Fund aims to benchmark performance, track impact and show how well it is delivering on socio-economic transformation.
                </p>
                <p>
                  Finally, the Fund's design promotes broad collaboration, where public, private and development sectors will work together to drive lasting transformation rather than isolated wins.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WhySection;