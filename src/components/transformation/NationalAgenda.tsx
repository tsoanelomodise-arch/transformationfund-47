const NationalAgenda = () => {
  return (
    <section id="national-agenda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="bg-green-50 p-12 rounded-lg border-2 border-primary">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
              Advancing the National Agenda
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              The Fund is designed to drive South Africa's key economic and social priorities. It will support businesses to grow, create meaningful jobs and promote equitable participation in the economy.
            </p>
            
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              The four focus areas will be:
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-bold text-lg mb-1">Entrepreneurship and SMME development</p>
                  <p className="text-gray-700">to help small and medium enterprises to become competitive and sustainable businesses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-bold text-lg mb-1">Job creation and poverty reduction</p>
                  <p className="text-gray-700">to generate employment and enable more South Africans to participate meaningfully in the economy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-bold text-lg mb-1">Broadening black ownership and participation</p>
                  <p className="text-gray-700">to expand ownership and active participation of black South Africans in key sectors and value chains.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-bold text-lg mb-1">Strengthening social protection and economic resilience</p>
                  <p className="text-gray-700">to build capacity across enterprises to support a more resilient economy and stronger social safety nets.</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              This approach is fully aligned with the Constitution and B-BBEE framework while encouraging collaboration between government, corporates, DFIs and civil society to ensure that more opportunities are created in underserved and under-resourced communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalAgenda;