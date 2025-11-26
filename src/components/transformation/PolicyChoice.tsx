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
          <div className="bg-green-600 p-10 rounded-lg border-2 border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Funding sources</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3 font-bold">a.</span>
                <span>Combining ESD contributions, EEIP funds, public interest commitments and government seed capital.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">b.</span>
                <span>Diverse resource collection to ensure sustainability and broad participation</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600 p-10 rounded-lg border-2 border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Governance structure</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3 font-bold">a.</span>
                <span>The SPV will be governed by a Board of Directors (appointed by the Minister), plus an Oversight Committee made up of representatives from both the public and private sectors.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">b.</span>
                <span>The Fund will be separate: contributions will be held in a dedicated account, with proceeds monitored and reinvested for maximum impact.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600 p-10 rounded-lg border-2 border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Investment approach</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3 font-bold">a.</span>
                <span>The Fund will offer a mix of financial products like equity, debt and grants, to meet different needs.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">b.</span>
                <span>Other forms of support such as guidance, mentorship and market access will also form part of this approach in order to assist black-owned businesses to grow sustainably.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">c.</span>
                <span>Specific focus will be on underserved areas, particularly township and rural enterprises, which will be given a priority.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">d.</span>
                <span>Target sectors include productive and labour-intensive areas in economic sectors such as services, agriculture, tourism, among others.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600 p-10 rounded-lg border-2 border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Tax and regulatory incentives</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3 font-bold">a.</span>
                <span>Contributions to the Fund are mostly tax-exempt under section 56(1)(h) of the Income Tax Act.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">b.</span>
                <span>Donors may claim a deduction under section 18A once a confirmation of receipt is issued.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">c.</span>
                <span>Contributors will sign Participation Agreements with the SPV that regulate contributions and investment terms.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600 p-10 rounded-lg border-2 border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Accountability and measurement</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3 font-bold">a.</span>
                <span>A Transformation Index will be developed to measure outcomes, track inclusivity and check alignment with B-BBEE goals.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">b.</span>
                <span>The SPV will be tax-exempt, enabling funds to be fully re-invested in beneficiary enterprises.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">c.</span>
                <span>Transparency is built into the design: annual reporting on fund performance, investments and social impact is expected.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600 p-10 rounded-lg border-2 border-green-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Policy alignment</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="mr-3 font-bold">a.</span>
                <span>The Fund is based on existing B-BBEE legislation (no extra B-BBEE requirements are imposed on contributors beyond existing obligations).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">b.</span>
                <span>It also aligns with the constitutional and policy goal to correct historical economic exclusion and promote inclusive growth.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyChoice;