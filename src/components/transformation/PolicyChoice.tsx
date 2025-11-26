const PolicyChoice = () => {
  return (
    <section id="policy-choice" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Policy Choice: The Transformation Fund
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Recognising the limitations, the Department of Trade, Industry and Competition (the dtic) has proposed establishing a dedicated Transformation Fund managed via a Special Purpose Vehicle (SPV). Key features of the Fund include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-6 text-red-600">Funding sources</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">a.</span>
                <span>Combining ESD contributions, EEIP funds, public interest commitments and government seed capital.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">b.</span>
                <span>Diverse resource collection to ensure sustainability and broad participation</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary p-10 rounded-lg border-2 border-primary">
            <h3 className="text-2xl font-bold mb-6 text-white">Transformation Fund Approach</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Coordinated national platform</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Outcome-focused with clear metrics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Systemic impact at scale</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Inclusive of all historically disadvantaged groups</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyChoice;