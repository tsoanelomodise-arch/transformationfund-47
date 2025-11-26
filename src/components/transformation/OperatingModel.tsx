import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OperatingModel = () => {
  return (
    <section id="operating-model" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Operating Model</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            The Transformation Fund will serve as a central platform that connects government, DFIs, corporates and civil society with businesses that need support. The Fund has been designed to deliver integrated assistance through three main streams:
          </p>
        </div>

        <Tabs defaultValue="capital" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-gray-100 p-1 rounded-lg h-auto">
            <TabsTrigger 
              value="capital" 
              className="text-sm px-4 py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all"
            >
              Access to Capital
            </TabsTrigger>
            <TabsTrigger 
              value="capability" 
              className="text-sm px-4 py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all"
            >
              Access to Capability
            </TabsTrigger>
            <TabsTrigger 
              value="markets" 
              className="text-sm px-4 py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all"
            >
              Access to Markets
            </TabsTrigger>
            <TabsTrigger 
              value="index" 
              className="text-sm px-4 py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all"
            >
              Transformation Index
            </TabsTrigger>
          </TabsList>

          <TabsContent value="capital" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Access to Capital</h3>
            <p className="text-gray-700 leading-relaxed">
              This pillar provides the financial engine of the model - aggregating public and private funds into a pooled transformation vehicle. The Fund deploys a mix of patient capital instruments, including concessionary debt, equity and grants, targeted at historically excluded entrepreneurs and projects. Crucially, this capital is conditional and catalytic, designed to crowd in additional investment and incentivise capability uptake.
            </p>
          </TabsContent>

          <TabsContent value="capability" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Access to Capability</h3>
            <p className="text-gray-700 leading-relaxed">
              This pillar provides a platform-based "capability stack" of non-financial services that equip enterprises to use capital effectively and compete in markets. Through a hybrid digital and in-person platform, emerging businesses can access critical capabilities on demand – from business and financial management tools, technical training and mentorship, production technology and infrastructure, to compliance and quality certification support.
            </p>
          </TabsContent>

          <TabsContent value="markets" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Access to Markets</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even with capital and capability, small businesses cannot thrive without reliable demand. The Access to Markets pillar therefore focuses on opening market opportunities and ensuring revenue for empowered firms. This involves both public and private sector market alignment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              On the public side, the Fund will coordinate with government procurement and industrial programmes, such as sector masterplans, to plug capable small suppliers into value chains. On the private side, the model leverages buyer councils and off-take agreements – essentially convening large corporates and value-chain anchors committed to sourcing from Fund-supported enterprises.
            </p>
          </TabsContent>

          <TabsContent value="index" className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformation Index and Telemetry</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cutting across all the three functional pillars is a robust data backbone – the Transformation Index and telemetry system – which continuously measures, aggregates and reports on transformation outcomes. Every firm engaged through the Fund and even decentralised initiatives, will (auto) feed into a central data repository capturing metrics such as: capability uptake in the form of metrics such as percentage of workflows digitised and quality compliance rates; financial performance data such as revenue growth, and profit margins; risk indicators such as probability of default, and credit spread movements; market outcomes indicators such as export volumes, on-time delivery and defect rates; and inclusion outcomes such as jobs created, demographics of ownership, and geographic reach.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These indicators are synthesized into a Transformation Index, an innovative dashboard that provides a composite view of how effectively capital, capability, and market access are translating into tangible developmental results.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OperatingModel;