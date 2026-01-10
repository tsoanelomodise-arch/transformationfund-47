import Navigation from "@/components/transformation/Navigation";
import Footer from "@/components/transformation/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#007847] to-[#005a35] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About the Transformation Fund</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              South Africa's bold answer to building an economy that works for everyone.
            </p>
          </div>
        </section>

        {/* Tabbed Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="building" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 md:mb-12 bg-transparent gap-2 md:gap-3 h-auto p-0">
                <TabsTrigger 
                  value="building" 
                  className="bg-blue-600 text-white hover:bg-blue-700 data-[state=active]:bg-blue-700 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-3 px-4 md:py-4 md:px-6 font-semibold text-sm md:text-base whitespace-normal"
                >
                  Building the Future
                </TabsTrigger>
                <TabsTrigger 
                  value="growth" 
                  className="bg-red-500 text-white hover:bg-red-600 data-[state=active]:bg-red-600 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-3 px-4 md:py-4 md:px-6 font-semibold text-sm md:text-base whitespace-normal"
                >
                  More Than Growth
                </TabsTrigger>
                <TabsTrigger 
                  value="why" 
                  className="bg-green-600 text-white hover:bg-green-700 data-[state=active]:bg-green-700 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-3 px-4 md:py-4 md:px-6 font-semibold text-sm md:text-base whitespace-normal"
                >
                  Why Transform?
                </TabsTrigger>
                <TabsTrigger 
                  value="path" 
                  className="bg-yellow-500 text-white hover:bg-yellow-600 data-[state=active]:bg-yellow-600 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-3 px-4 md:py-4 md:px-6 font-semibold text-sm md:text-base whitespace-normal"
                >
                  A New Path
                </TabsTrigger>
                <TabsTrigger 
                  value="promise" 
                  className="bg-gray-800 text-white hover:bg-gray-900 data-[state=active]:bg-gray-900 data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all rounded-lg py-3 px-4 md:py-4 md:px-6 font-semibold text-sm md:text-base whitespace-normal"
                >
                  Our Promise
                </TabsTrigger>
              </TabsList>

              <TabsContent value="building" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Building the Future Together</h2>
                
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
                  The Transformation Fund is South Africa's bold answer to the question: How do we build an economy that works for everyone? We're not just another funding mechanism—we're a national movement to engineer inclusive economic growth at scale.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <section className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                      <span className="text-blue-600 mr-2">•</span>Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      A South Africa where economic opportunity is accessible to all, where black-owned enterprises thrive, and where transformation creates shared prosperity that strengthens our nation.
                    </p>
                  </section>

                  <section className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                      <span className="text-blue-600 mr-2">•</span>Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      To pool resources, coordinate efforts, and create systemic impact by providing bundled support—capital, capability, and market access—to empowered enterprises across South Africa.
                    </p>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="why" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">Why Transform?</h2>
                
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-10">
                  South Africa stands at a crossroads. Despite decades of democracy, economic inequality persists, unemployment remains stubbornly high, and too many talented entrepreneurs lack the resources to succeed. The current approach isn't working—we need systemic change.
                </p>

                <div className="space-y-6">
                  <section className="flex gap-6 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                    <div className="flex-shrink-0 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-600 mb-3">Economic Imperative</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Our economy cannot reach its full potential when the majority of our population is excluded from meaningful participation. Transformation isn't just morally right—it's economically essential.
                      </p>
                    </div>
                  </section>

                  <section className="flex gap-6 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                    <div className="flex-shrink-0 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-600 mb-3">Social Stability</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Inclusive economic growth builds social cohesion and stability. When people have opportunities to build businesses, create jobs, and generate wealth, entire communities thrive.
                      </p>
                    </div>
                  </section>

                  <section className="flex gap-6 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                    <div className="flex-shrink-0 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-600 mb-3">Unlocking Potential</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        South Africa has incredible entrepreneurial talent. The Transformation Fund unlocks this potential by removing barriers and providing the support entrepreneurs need to succeed.
                      </p>
                    </div>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="path" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">A New Path Forward</h2>
                
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-10">
                  The Transformation Fund represents a paradigm shift—from fragmented, compliance-driven efforts to coordinated, outcome-based systemic change. We're charting a new path that learns from the past while building for the future.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <section className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-yellow-600 mb-6">The Old Way</h3>
                    <ul className="space-y-3 text-gray-700 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Fragmented funding mechanisms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Compliance-focused approach</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Capital without capability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>No coordination or scale</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Limited market access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Unclear impact measurement</span>
                      </li>
                    </ul>
                  </section>

                  <section className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-yellow-600 mb-6">The New Way</h3>
                    <ul className="space-y-3 text-gray-700 text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Pooled national platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Outcome-driven transformation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Bundled support (capital + capability + markets)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Coordinated systemic impact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Guaranteed market opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>Real-time impact tracking</span>
                      </li>
                    </ul>
                  </section>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mt-8">
                  This new path doesn't just fund businesses—it builds an ecosystem where empowered enterprises can thrive, creating jobs, generating wealth, and transforming communities.
                </p>
              </TabsContent>

              <TabsContent value="growth" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">More Than Growth</h2>
                
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
                  The Transformation Fund is about more than GDP numbers and balance sheets. It's about building a South Africa where prosperity is shared, where talent is nurtured regardless of background, and where economic participation creates dignity and opportunity.
                </p>

                <div className="space-y-6">
                  <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">
                      <span className="text-red-500 mr-2">•</span>Creating Jobs That Matter
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Every job created through the Fund represents a family lifted, a community strengthened, and a future secured. We target 1 million+ jobs over 10 years—not just any jobs, but quality employment with dignity and growth potential.
                    </p>
                  </section>

                  <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">
                      <span className="text-red-500 mr-2">•</span>Building Generational Wealth
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      By supporting black ownership and enterprise development, we're helping families build assets that can be passed down, creating generational wealth that transforms communities for decades to come.
                    </p>
                  </section>

                  <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">
                      <span className="text-red-500 mr-2">•</span>Empowering Women and Youth
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Special focus on women-owned enterprises and youth entrepreneurship ensures that those historically most excluded from economic opportunity become drivers of transformation.
                    </p>
                  </section>

                  <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-red-500 mb-4">
                      <span className="text-red-500 mr-2">•</span>Developing Rural Economies
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Transformation must reach beyond urban centers. The Fund supports rural enterprise development, bringing economic opportunity to communities that have been left behind.
                    </p>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="promise" className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Promise</h2>
                
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
                  The Transformation Fund makes a solemn commitment to all South Africans: we will deploy resources with integrity, measure impact with transparency, and create transformation that is real, measurable, and sustainable.
                </p>

                <div className="space-y-6">
                  <section className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      <span className="text-gray-800 mr-2">•</span>Accountability
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Every rand deployed is tracked, every outcome measured, every impact reported. We hold ourselves accountable to the people of South Africa.
                    </p>
                  </section>

                  <section className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      <span className="text-gray-800 mr-2">•</span>Integrity
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      We operate with the highest ethical standards, ensuring resources reach those who need them most and are used for maximum impact.
                    </p>
                  </section>

                  <section className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      <span className="text-gray-800 mr-2">•</span>Transparency
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Real-time tracking and public reporting mean every South African can see exactly where resources go and what impact they create.
                    </p>
                  </section>

                  <section className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      <span className="text-gray-800 mr-2">•</span>Partnership
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      We work hand-in-hand with entrepreneurs, communities, and stakeholders to ensure our approach remains responsive, effective, and aligned with the needs of those we serve.
                    </p>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
