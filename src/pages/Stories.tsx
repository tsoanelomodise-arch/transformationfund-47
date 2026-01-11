import { useState } from "react";
import Navigation from "@/components/transformation/Navigation";
import Footer from "@/components/transformation/Footer";

const Stories = () => {
  const [activeStory, setActiveStory] = useState('thandi');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Stories of Transformation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Real journeys of entrepreneurs who transformed their lives and communities through the Fund's support.
          </p>
        </div>
      </section>

      {/* Story Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setActiveStory('thandi')}
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeStory === 'thandi' 
                  ? 'bg-primary shadow-lg scale-105' 
                  : 'bg-primary/60 hover:bg-primary/80'
              }`}
            >
              Thandi's Journey
            </button>
            <button
              onClick={() => setActiveStory('thabo')}
              className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                activeStory === 'thabo' 
                  ? 'shadow-lg scale-105' 
                  : 'opacity-60 hover:opacity-80'
              }`}
              style={{ backgroundColor: '#0000FE' }}
            >
              Thabo's Story
            </button>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeStory === 'thandi' && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Thandi's Journey: From Exclusion to Entrepreneurship
              </h2>
              
              <img 
                src="/images/thandis-journey.jpg" 
                alt="Thandi's Journey - From Exclusion to Entrepreneurship" 
                className="w-full h-auto rounded-2xl shadow-xl"
                width="800"
                height="450"
                loading="lazy"
              />
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thandi, a young woman from a rural village, faces multiple barriers — limited finance, markets, 
                and networks. With bundled support from the Transformation Fund, she is able to launch a 
                sustainable business, employ others, and participate in new value chains.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-bold text-primary text-lg mb-2">Access to Capital</h3>
                  <p className="text-muted-foreground">
                    Received startup funding and working capital to launch her business
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-bold text-primary text-lg mb-2">Skills Development</h3>
                  <p className="text-muted-foreground">
                    Participated in business training and mentorship programs
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-bold text-primary text-lg mb-2">Market Access</h3>
                  <p className="text-muted-foreground">
                    Connected to supply chains and new customer networks
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="font-bold text-primary text-xl mb-3">Impact Achieved</h3>
                <p className="text-muted-foreground text-lg">
                  Thandi's business now employs 8 people from her community and has become a key supplier in the regional agricultural value chain.
                </p>
              </div>
            </div>
          )}

          {activeStory === 'thabo' && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Thabo's Story: Scaling Up a Black Industrialist
              </h2>
              
              <img 
                src="/images/thabos-story.jpg" 
                alt="Thabo's Story - Scaling Up a Black Industrialist" 
                className="w-full h-auto rounded-2xl shadow-xl"
                width="800"
                height="450"
                loading="lazy"
              />
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thabo, an ambitious entrepreneur, has proven demand but lacks capital and supply chain access. 
                Through Fund support, he expands operations, integrates into OEM supplier networks, and 
                demonstrates the potential of industrialisation driven by black entrepreneurs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-bold text-primary text-lg mb-2">Scale-Up Capital</h3>
                  <p className="text-muted-foreground">
                    Secured growth funding to expand manufacturing capacity
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-bold text-primary text-lg mb-2">Supply Chain Integration</h3>
                  <p className="text-muted-foreground">
                    Connected to OEM networks and major industrial buyers
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4"></div>
                  <h3 className="font-bold text-primary text-lg mb-2">Technical Excellence</h3>
                  <p className="text-muted-foreground">
                    Achieved quality certifications and technical standards
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="font-bold text-primary text-xl mb-3">Impact Achieved</h3>
                <p className="text-muted-foreground text-lg">
                  Thabo's company has grown from 15 to 120 employees and now supplies components to three major automotive manufacturers.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
