import { useState } from "react";

const TheoryOfChange = () => {
  const [activeTab, setActiveTab] = useState('pooling');

  const tabs = [
    { id: 'pooling', label: 'Pooling and targeting', color: '#FE0000' },
    { id: 'capital', label: 'Capital and capability', color: '#0000FE' },
    { id: 'outcome', label: 'Outcome-based support', color: '#FEB81C' },
    { id: 'network', label: 'Network effects', color: '#007848' }
  ];

  return (
    <section id="theory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Theory of Change
          </h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium text-white transition-all ${
                  activeTab === tab.id ? 'opacity-100' : 'opacity-60'
                }`}
                style={{ backgroundColor: tab.color }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg">
            {activeTab === 'pooling' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#FE0000' }}>Pooling and targeting</h3>
                <p className="text-gray-700 text-lg mb-4">
                  The Transformation Fund brings together fragmented funding mechanisms from government, the private sector and development finance institutions (DFIs) into one coordinated platform. Consolidation of these resources will help to eliminate unnecessary duplication which has been ineffective in achieving the desired transformation outcomes. This coordinated approach is designed to ensure that the allocated resources achieve greater impact and that more designated beneficiaries can participate meaningfully into the mainstream economy.
                </p>
                <p className="text-gray-700 text-lg">
                  Unlike current initiatives, the Fund will target and focus on high-impact economic sectors and value chains that can result in meaningful change. This will ensure that critical funding reaches target beneficiaries, most of which are black-owned businesses, women, youth and rural entrepreneurs who can make a lasting contribution to South Africa's inclusive economy.
                </p>
              </div>
            )}
            {activeTab === 'capital' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0000FE' }}>Capital and capability</h3>
                <p className="text-gray-700 text-lg mb-4">
                  The primary purpose of the Fund is to provide businesses with the necessary finance they need to grow and build sustainable operations. This funding can take the form of grants, loans or equity, depending on the needs of the enterprise.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                  However, the Fund goes beyond providing capital. It also capacities entrepreneurs with the technical skills, tools and support they need to become more competitive. These include training, mentorship, business management tools and access to markets by connecting businesses with customers, suppliers and partners both locally and internationally.
                </p>
                <p className="text-gray-700 text-lg">
                  This holistic approach will ensure that black-owned enterprises are both financially and technically resourced to become resilient and successful, in order to create job opportunities for many people in the country.
                </p>
              </div>
            )}
            {activeTab === 'outcome' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#FEB81C' }}>Outcome-based support</h3>
                <p className="text-gray-700 text-lg mb-4">
                  The Fund will measure success through the real impact it creates, rather than simply tracking compliance or how much money was disbursed. It will focus on tangible outcomes such as business growth, job creation, improved competitiveness and the meaningful participation of women, youth and rural communities in the economy.
                </p>
                <p className="text-gray-700 text-lg">
                  The Fund will also make use of a monitoring system called the Transformation Index, which will track progress and ensure accountability. This Index will measure the impact of the Fund's interventions and help ensure that every investment delivers real transformation. Regular performance monitoring and data tracking will support transparency and show how businesses and communities are benefiting, contributing to a more equitable economy.
                </p>
              </div>
            )}
            {activeTab === 'network' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#007848' }}>Network effects</h3>
                <p className="text-gray-700 text-lg mb-4">
                  The Transformation Fund will leverage the power of collaborations and partnerships to maximise impact. It will bring together beneficiaries, corporates, government, development finance institutions (DFIs) and civil society into a connected ecosystem. These partnerships will enable businesses to share knowledge, access opportunities and strengthen their position within value chains.
                </p>
                <p className="text-gray-700 text-lg">
                  Through these collaborations, the Fund will extend its impact beyond individual businesses. It will create lasting growth, broader opportunities, and more resilient networks across the economy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheoryOfChange;