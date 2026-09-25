import { useEffect } from "react";

const assetPathPrefix = "/assets";
const imgLinkedin11 = `${assetPathPrefix}/69b36.png`;
const imgLine2 = `${assetPathPrefix}/0d66a.svg`;
const imgLine3 = `${assetPathPrefix}/2742d.svg`;
const imgLine6 = `${assetPathPrefix}/fdf75.svg`;
const imgLine4 = `${assetPathPrefix}/b0fbd.svg`;
const imgLine5 = `${assetPathPrefix}/304c8.svg`;
const imgLine7 = `${assetPathPrefix}/14fe6.svg`;
const imgLine8 = `${assetPathPrefix}/90841.svg`;
const imgLine1 = `${assetPathPrefix}/975b9.svg`;
const imgVector = `${assetPathPrefix}/0c97b.svg`;

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).dataset.delay ?? "0";
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" style={{ width: 1440, minHeight: "100dvh" }} data-node-id="1:2" data-name="Wireframe - 1">
      {/* Page 5 - Contact */}
      <div className="absolute contents left-0 top-[4050px]" data-node-id="1:19" data-name="Page-5">
        <div className="absolute bg-[#141a20] h-[929px] left-0 top-[4050px] w-[1440px]" />
        <div className="absolute bg-[#081019] h-[90px] left-0 top-[4889px] w-[1440px]" />
        <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight h-[16px] leading-[normal] left-[951px] text-[#a1a1a1] text-[13px] top-[4921px] w-[305px]">{`LAS PINAS CITY, PHILIPPINES `}</p>
        <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[normal] left-[185px] text-[32px] text-white top-[4191px] tracking-[0.64px] whitespace-nowrap">{`Let's talk about your next release`}</p>
        <p data-animate data-delay="200" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal leading-[normal] left-[185px] text-[13px] text-white top-[4249px] tracking-[0.26px] whitespace-nowrap">{`Available for QA roles and project engagements. Send a message or reach out directly. `}</p>
        <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[185px] text-[#3ac592] text-[13px] top-[4125px] whitespace-nowrap">03</p>
        <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight h-[410px] leading-[normal] left-[264px] text-[#a1a1a1] text-[13px] top-[4125px] w-[55px]">CONTACT</p>
        <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight h-[16px] leading-[normal] left-[142px] text-[#a1a1a1] text-[13px] top-[4921px] w-[343px]">GENNY LOU D. DIAZ - QUALITY ASSURANCE TESTER</p>
        <div className="absolute h-[393px] left-[210px] top-[4134px] w-[43px]">
          <div className="absolute bottom-full left-0 right-0 top-[-0.25%]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
        <a className="absolute block cursor-pointer h-[33px] left-[185px] top-[4286px] w-[36px]" href="https://www.linkedin.com/in/gennyloudiaz/" target="_blank">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="33" src={imgLinkedin11} width="36" />
        </a>
        <a className="absolute bg-[#2d926f] block cursor-pointer h-[33px] left-[235px] rounded-[5px] top-[4286px] w-[85px]" href="https://www.linkedin.com/in/gennyloudiaz/" target="_blank" />
        <a data-animate data-delay="300" className="[word-break:break-word] absolute block cursor-pointer font-['Roboto:Regular'] font-normal leading-[0] left-[248px] text-[14px] text-white top-[4295px] whitespace-nowrap" href="https://diazgennylou@gmail.com" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
          <p className="leading-[normal]">Email Me</p>
        </a>
      </div>

      {/* Page 3 - Work Experience */}
      <div className="absolute contents left-0 top-[2184px]" data-node-id="1:32" data-name="Page-3">
        <div className="absolute bg-[#0d151d] h-[1866px] left-0 top-[2184px] w-[1440px]" />
        <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[normal] left-[150px] text-[32px] text-white top-[2357px] whitespace-nowrap">Six years embedded in delivery teams</p>
        <p data-animate data-delay="200" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal leading-[normal] left-[150px] text-[13px] text-white top-[2415px] w-[628px]">{`From application development into dedicated QA — testing with a builder's understanding of how software actually breaks.`}</p>
        <div className="absolute contents left-[150px] top-[2291px]">
          <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[150px] text-[#3ac592] text-[13px] top-[2291px] w-[21px]">02</p>
          <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[229px] text-[#a1a1a1] text-[13px] top-[2291px] w-[136px]">WORK EXPERIENCE</p>
          <div className="absolute h-0 left-[174.99px] top-[2299.57px] w-[43px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine3} />
            </div>
          </div>
        </div>

        <div className="absolute contents left-[111px] top-[2494px]">
          <div className="absolute bg-[#141a20] border border-[#353535] border-solid h-[1401px] left-[112px] rounded-[20px] top-[2494px] w-[1210px]" />

          {/* Manual QA Tester */}
          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[normal] left-[422px] text-[20px] text-white top-[2546px] whitespace-nowrap">Manual QA Tester</p>
          <p data-animate data-delay="50" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal leading-[100.1449966430664%] left-[150px] text-[#a1a1a1] text-[13px] top-[2559px] tracking-[0.39px] w-[119px]">2024 - PRESENT</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[1.321] left-[150px] text-[#3ac592] text-[13px] top-[2592px] tracking-[0.39px] w-[184px]">Software Delivery Team</p>
          <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2600px] tracking-[-0.52px] w-[858px]">Own functional, regression and end-to-end testing across web applications in a Scrum delivery cadence.</p>
          <p data-animate data-delay="130" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2639px] tracking-[-0.52px] whitespace-nowrap">Author and maintain test plans, test cases and traceability against user stories and acceptance criteria.</p>
          <p data-animate data-delay="160" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2678px] tracking-[-0.91px] w-[858px]">Manual testing perform high-impact regression, smoke, and API testing for Integrated banking applications.</p>
          <p data-animate data-delay="190" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2717px] tracking-[-0.52px] w-[858px]">Facilitate UAT with business stakeholders, consolidating feedback into actionable, prioritized tickets.</p>
          <p data-animate data-delay="220" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[421px] text-[#3ac592] text-[12px] top-[2751px] tracking-[0.36px] w-[63px]">BANKING</p>
          <p data-animate data-delay="240" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[503px] text-[#3ac592] text-[12px] top-[2751px] tracking-[0.36px] w-[87px]">API TESTING</p>
          <p data-animate data-delay="260" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[609px] text-[#3ac592] text-[12px] top-[2751px] tracking-[0.36px] w-[111px]">TEST EXECUTION</p>
          <p data-animate data-delay="280" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[739px] text-[#3ac592] text-[12px] top-[2751px] tracking-[0.36px] w-[111px]">TEST DATA</p>

          <div className="absolute flex h-[4px] items-center justify-center left-[112px] top-[2795px] w-[1211px]">
            <div className="flex-none rotate-[0.19deg]">
              <div className="h-0 relative w-[1211.007px]">
                <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine6} /></div>
              </div>
            </div>
          </div>

          {/* Ecosystem Officer */}
          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[normal] left-[422px] text-[20px] text-white top-[2824px] whitespace-nowrap">{`Ecosystem Officer & QA Engineer`}</p>
          <p data-animate data-delay="50" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal leading-[100.1449966430664%] left-[150px] text-[#a1a1a1] text-[13px] top-[2853px] tracking-[0.39px] whitespace-nowrap">2022 - 2024</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[1.321] left-[150px] text-[#3ac592] text-[13px] top-[2886px] tracking-[0.39px] w-[184px]">Ecosystem Officer</p>
          <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2878px] tracking-[-0.91px] w-[829px]">Led all application testing; including monthly regression, usability, and performance audits for the Device Department; performed all testing of 2k+ Mobile and Table Devices.</p>
          <p data-animate data-delay="130" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2929px] tracking-[-0.91px] w-[825px]">Technical Liaison, a primary technical contact between local enterprise partners (ex: Home Credit) and developers in China at HQ; resolved critical blockers for the Payment API, OAuth/Login, and Push Notifications.</p>
          <p data-animate data-delay="160" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[422px] text-[#a1a1a1] text-[13px] top-[2990px] tracking-[-0.91px] w-[863px]">Partnered with Business Analysts to create a working model of complex user workflows, troubleshoot issues, and run User Experience Journey campaigns to promote ecosystem adoption.</p>
          <p data-animate data-delay="190" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[422px] text-[#3ac592] text-[12px] top-[3051px] tracking-[0.36px] w-[63px]">2K+ APPS</p>
          <p data-animate data-delay="210" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[504px] text-[#3ac592] text-[12px] top-[3051px] tracking-[0.36px] w-[115px]">FUNCTIONAL/UX</p>
          <p data-animate data-delay="230" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[638px] text-[#3ac592] text-[12px] top-[3051px] tracking-[0.36px] w-[111px]">UAT ECOSYSTEM</p>
          <p data-animate data-delay="250" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[928px] text-[#3ac592] text-[12px] top-[3051px] tracking-[0.36px] w-[191px]">USER EXPERIENCE JOURNEY</p>
          <p data-animate data-delay="270" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[1119px] text-[#3ac592] text-[12px] top-[3051px] tracking-[0.36px] w-[191px]">CAMPAIGN SUPPORT</p>
          <p data-animate data-delay="290" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[768px] text-[#3ac592] text-[12px] top-[3051px] tracking-[0.36px] w-[141px]">HMS SUPPORT CORE</p>

          <div className="absolute flex h-[4px] items-center justify-center left-[112px] top-[3120px] w-[1211px]">
            <div className="flex-none rotate-[0.19deg]">
              <div className="h-0 relative w-[1211.007px]">
                <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine6} /></div>
              </div>
            </div>
          </div>

          {/* Application Developer */}
          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[normal] left-[421px] text-[20px] text-white top-[3156px] whitespace-nowrap">Application Developer</p>
          <p data-animate data-delay="50" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal leading-[0] left-[149px] text-[#a1a1a1] text-[13px] top-[3160px] tracking-[0.39px] w-[98px]">
            <span className="leading-[100.1449966430664%]">2019 - 202</span>
            <span className="leading-[100.1449966430664%] tracking-[2.4px]">0</span>
          </p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[1.321] left-[149px] text-[#3ac592] text-[13px] top-[3193px] tracking-[0.39px] w-[184px]">Development Exposure</p>
          <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.20499420166016%] left-[421px] text-[#a1a1a1] text-[13px] top-[3210px] tracking-[-0.52px] w-[858px]">{`Built and supported small application features, giving QA work a developer's read on root cause using Ruby on rails infrastructure through use of MVC architecture-based structures. `}</p>
          <p data-animate data-delay="130" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.20499420166016%] left-[421px] text-[#a1a1a1] text-[13px] top-[3262px] tracking-[-0.52px] w-[858px]">Optimized for an agile/scrum environment, using Ubuntu, Git/GitLab and CMS Solutions for rapid deployment of production code.</p>
          <p data-animate data-delay="160" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.20499420166016%] left-[421px] text-[#a1a1a1] text-[13px] top-[3314px] tracking-[-0.52px] whitespace-nowrap">Used version control, branching and code review practices alongside engineering teams.</p>
          <p data-animate data-delay="190" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.20499420166016%] left-[421px] text-[#a1a1a1] text-[13px] top-[3349px] tracking-[-0.52px] w-[858px]">Translated business requirements into technical specs and testable acceptance criteria.</p>
          <p data-animate data-delay="220" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[422px] text-[#3ac592] text-[12px] top-[3402px] tracking-[0.36px] w-[99px]">GIT/GITLAB</p>
          <p data-animate data-delay="240" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[544px] text-[#3ac592] text-[12px] top-[3402px] tracking-[0.36px] w-[34px]">CMS</p>
          <p data-animate data-delay="260" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[601px] text-[#3ac592] text-[12px] top-[3402px] tracking-[0.36px] w-[111px]">RUBY ON RAILS</p>
          <p data-animate data-delay="280" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[735px] text-[#3ac592] text-[12px] top-[3402px] tracking-[0.36px] w-[62px]">UBUNTU</p>
          <p data-animate data-delay="300" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[820px] text-[#3ac592] text-[12px] top-[3402px] tracking-[0.36px] w-[62px]">REDMINE</p>
          <p data-animate data-delay="320" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[905px] text-[#3ac592] text-[12px] top-[3402px] tracking-[0.36px] w-[110px]">CROSS-BROWSER</p>

          <div className="absolute flex h-[4px] items-center justify-center left-[111px] top-[3481px] w-[1211px]">
            <div className="flex-none rotate-[0.19deg]">
              <div className="h-0 relative w-[1211.007px]">
                <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine6} /></div>
              </div>
            </div>
          </div>

          {/* QA Tester / Application Support */}
          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[normal] left-[421px] text-[20px] text-white top-[3531px] whitespace-nowrap">QA Tester / Application Support</p>
          <p data-animate data-delay="50" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal leading-[0] left-[149px] text-[#a1a1a1] text-[13px] top-[3535px] tracking-[0.39px] w-[98px]">
            <span className="leading-[100.1449966430664%]">2019 - 202</span>
            <span className="leading-[100.1449966430664%] tracking-[2.4px]">0</span>
          </p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold leading-[1.321] left-[149px] text-[#3ac592] text-[13px] top-[3568px] tracking-[0.39px] w-[184px]">{`Web & CMS Projects`}</p>
          <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[421px] text-[#a1a1a1] text-[13px] top-[3599px] tracking-[-0.91px] w-[858px]">Validated CMS-driven content releases and publishing workflows across staging and production environments.</p>
          <p data-animate data-delay="130" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[421px] text-[#a1a1a1] text-[13px] top-[3638px] tracking-[-0.91px] whitespace-nowrap">Executed cross-browser and responsive testing to keep experiences consistent on Chrome, Edge, Safari and Firefox.</p>
          <p data-animate data-delay="160" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[421px] text-[#a1a1a1] text-[13px] top-[3677px] tracking-[-0.91px] w-[858px]">Partnered with developers on Ruby on Rails applications, verifying fixes and reviewing changes via Git/GitLab.</p>
          <p data-animate data-delay="190" className="[word-break:break-word] absolute font-['Roboto_Mono:Medium'] font-medium leading-[100.1449966430664%] left-[421px] text-[#a1a1a1] text-[13px] top-[3716px] tracking-[-0.91px] w-[858px]">Contributed UI/UX observations that improved form usability, error messaging and accessibility of key journeys.</p>
          <p data-animate data-delay="220" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[421px] text-[#3ac592] text-[12px] top-[3769px] tracking-[0.36px] w-[99px]">CROSS-BROWSER</p>
          <p data-animate data-delay="240" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[543px] text-[#3ac592] text-[12px] top-[3769px] tracking-[0.36px] w-[34px]">CMS</p>
          <p data-animate data-delay="260" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[591px] text-[#3ac592] text-[12px] top-[3769px] tracking-[0.36px] w-[62px]">REDMINE</p>
          <p data-animate data-delay="280" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[676px] text-[#3ac592] text-[12px] top-[3769px] tracking-[0.36px] w-[110px]">CROSS-BROWSER</p>
          <p data-animate data-delay="300" className="[word-break:break-word] absolute font-['Roboto_Mono:SemiBold'] font-semibold leading-[1.321] left-[809px] text-[#3ac592] text-[12px] top-[3769px] tracking-[0.36px] w-[201px]">TEST CASE CREATION</p>
        </div>
      </div>

      {/* Page 2 - Services */}
      <div className="absolute contents left-0 top-[1130px]" data-node-id="1:93" data-name="Page-2">
        <div className="absolute bg-[#070e16] h-[1055.031px] left-0 top-[1130px] w-[1440px]" />
        <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[44.179px] leading-[normal] left-[120px] text-[32px] text-white top-[1323.12px] w-[635px]">Quality work, defined by outcomes</p>
        <div data-animate data-delay="200" className="[word-break:break-word] absolute font-['Roboto_Mono:Regular'] font-normal h-[53.646px] leading-[0] left-[120px] text-[13px] text-white top-[1384.01px] w-[628px]">
          <p className="leading-[normal] mb-0">Practical QA support for product teams that need coverage they can trust and documentation they can hand to anyone.</p>
          <p className="leading-[normal]">​</p>
        </div>
        <div className="absolute contents left-[120px] top-[1253.67px]">
          <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight h-[17.882px] leading-[normal] left-[120px] text-[#3ac592] text-[13px] top-[1253.67px] w-[21px]">{`01 `}</p>
          <p data-animate className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight h-[17.882px] leading-[normal] left-[199px] text-[#a1a1a1] text-[13px] top-[1253.67px] w-[68px]">SERVICES</p>
          <div className="absolute flex h-0 items-center justify-center left-[144.99px] top-[1262.68px] w-[43.002px]">
            <div className="flex-none skew-x-[0.32deg]">
              <div className="h-0 relative w-[43.002px]">
                <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine4} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute contents left-[158px] top-[1481.03px]">
          <div className="absolute bg-[#141a20] border border-[#353535] border-solid h-[607.984px] left-[161px] rounded-[20px] top-[1481.03px] w-[1121px]" />
          <div className="absolute flex h-[607.981px] items-center justify-center left-[522px] top-[1481.03px] w-[1.756px]">
            <div className="flex-none rotate-[89.83deg] skew-x-[0.19deg]">
              <div className="h-0 relative w-[607.983px]">
                <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine5} /></div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[607.981px] items-center justify-center left-[930.5px] top-[1481.03px] w-[1.756px]">
            <div className="flex-none rotate-[89.83deg] skew-x-[0.19deg]">
              <div className="h-0 relative w-[607.983px]">
                <div className="absolute inset-[-0.5px_0]"><img alt="" className="block max-w-none size-full" src={imgLine7} /></div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[2.115px] items-center justify-center left-[158px] top-[1778.8px] w-[1124px]">
            <div className="flex-none rotate-[0.11deg] skew-x-[0.01deg]">
              <div className="h-0 relative w-[1124.002px]">
                <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine8} /></div>
              </div>
            </div>
          </div>

          {/* Service items */}
          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[22.089px] leading-[normal] left-[190px] text-[16px] text-white top-[1565.7px] w-[260px]">{`Manual & Functional Testing`}</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Light'] font-light h-[53.646px] leading-[99.95500183105469%] left-[190px] text-[13px] text-white top-[1604.7px] tracking-[-0.13px] w-[304px]">Requirement-driven test plans, test cases and exploratory sessions that surface defects before your users do.</p>
          <div data-animate data-delay="130" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto_Mono:Medium'] font-medium h-[17.882px] justify-center leading-[0] left-[190px] text-[#3ac592] text-[13px] top-[1696.41px] w-[282px]">
            <p className="leading-[100.05500030517578%]">TEST PLANS EXPLORATORY DEFECT TRIAGE</p>
          </div>

          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[22.089px] leading-[normal] left-[575px] text-[16px] text-white top-[1565.7px] w-[260px]">{`Regression & Release QA`}</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Light'] font-light h-[71.528px] leading-[99.95500183105469%] left-[575px] text-[13px] text-white top-[1604.7px] tracking-[-0.13px] w-[304px]">Maintained regression suites and release checklists that keep every sprint shippable without last-minute surprises.</p>
          <div data-animate data-delay="130" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto_Mono:Medium'] font-medium h-[17.882px] justify-center leading-[0] left-[575px] text-[#3ac592] text-[13px] top-[1696.41px] w-[282px]">
            <p className="leading-[100.05500030517578%]">REGRESSION SMOKE PACKS SIGN-OFF</p>
          </div>

          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[22.089px] leading-[normal] left-[960px] text-[16px] text-white top-[1561.89px] w-[260px]">UAT Facilitation</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Light'] font-light h-[71.528px] leading-[99.95500183105469%] left-[960px] text-[13px] text-white top-[1599.95px] tracking-[-0.13px] w-[304px]">Coordinating business users through structured UAT cycles: scripts, walkthroughs, issue logging and closure.</p>
          <div data-animate data-delay="130" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto_Mono:Medium'] font-medium h-[35.764px] justify-center leading-[0] left-[960px] text-[#3ac592] text-[13px] top-[1692.03px] w-[282px]">
            <p className="leading-[100.05500030517578%]">UAT SCRIPTS STAKEHOLDER DEMOS SIGN-OFF MATRIX</p>
          </div>

          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[22.089px] leading-[normal] left-[190px] text-[16px] text-white top-[1864.42px] w-[260px]">{`API & Integration Testing`}</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Light'] font-light h-[53.646px] leading-[99.95500183105469%] left-[190px] text-[13px] text-white top-[1903.42px] tracking-[-0.13px] w-[304px]">Endpoint validation across payload, status, schema and negative paths, plus end-to-end integration verification.</p>
          <div data-animate data-delay="130" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto_Mono:Medium'] font-medium h-[17.882px] justify-center leading-[0] left-[190px] text-[#3ac592] text-[13px] top-[1995.13px] w-[282px]">
            <p className="leading-[100.05500030517578%]">REST POSTMAN CONTRACT CHECKS</p>
          </div>

          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[22.089px] leading-[normal] left-[575px] text-[16px] text-white top-[1864.42px] w-[260px]">Automation with Playwright</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Light'] font-light h-[53.646px] leading-[99.95500183105469%] left-[575px] text-[13px] text-white top-[1903.42px] tracking-[-0.13px] w-[304px]">Converting stable manual flows into Playwright scripts so repetitive checks run fast and consistently.</p>
          <div data-animate data-delay="130" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto_Mono:Medium'] font-medium h-[17.882px] justify-center leading-[0] left-[575px] text-[#3ac592] text-[13px] top-[1995.13px] w-[282px]">
            <p className="leading-[100.05500030517578%]">PLAYWRIGHT E2E FLOWS CI RUNS</p>
          </div>

          <p data-animate data-delay="0" className="[word-break:break-word] absolute font-['Roboto_Mono:Bold'] font-bold h-[22.089px] leading-[normal] left-[960px] text-[16px] text-white top-[1865.37px] w-[260px]">{`Data & Backend Validation`}</p>
          <p data-animate data-delay="80" className="[word-break:break-word] absolute font-['Roboto_Mono:Light'] font-light h-[71.528px] leading-[99.95500183105469%] left-[960px] text-[13px] text-white top-[1904.38px] tracking-[-0.13px] w-[304px]">SQL queries to verify data integrity, reconcile records and prove the UI matches what the database actually stores.</p>
          <div data-animate data-delay="130" className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto_Mono:Medium'] font-medium h-[17.882px] justify-center leading-[0] left-[960px] text-[#3ac592] text-[13px] top-[1996.08px] w-[282px]">
            <p className="leading-[100.05500030517578%]">SQL DATA INTEGRITY REPORTS</p>
          </div>
        </div>
      </div>

      {/* Page 1 - Hero */}
      <div className="absolute content-stretch flex flex-col h-[1128px] items-start left-0 top-0 w-[1440px]" data-node-id="1:124" data-name="Page-1">
        <div className="content-stretch flex flex-col h-[1141px] items-start relative shrink-0 w-full">
          <div className="h-[1130px] relative shrink-0 w-[1440px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 1130' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-37.15 35.9 -45.749 -47.342 1648.5 -127)'><stop stop-color='rgba(49,158,120,1)' offset='0'/><stop stop-color='rgba(38,122,95,1)' offset='0.25'/><stop stop-color='rgba(28,86,71,1)' offset='0.5'/><stop stop-color='rgba(17,50,46,1)' offset='0.75'/><stop stop-color='rgba(12,32,34,1)' offset='0.875'/><stop stop-color='rgba(7,14,22,1)' offset='1'/></radialGradient></defs></svg>\")" }} />

          <ul data-animate data-delay="300" className="[word-break:break-word] absolute block font-['Reddit_Mono:Regular'] font-normal leading-[0] left-[179px] text-[#3ac592] text-[12px] top-[232px] w-[152px]">
            <li className="list-disc ms-[18px]">
              <span className="leading-[normal]">{` OPEN FOR FREELANCE`}</span>
            </li>
          </ul>

          <p data-animate data-delay="400" className="[word-break:break-word] absolute font-['Reddit_Mono:SemiBold'] font-semibold h-[200px] leading-[0] left-[166px] text-[48px] text-white top-[266px] w-[678px]">
            <span className="leading-[normal]">{`Manual QA Tester who ships releases `}</span>
            <span className="leading-[normal] text-[#3ac592]">nobody has to roll back.</span>
          </p>

          <p data-animate data-delay="500" className="[word-break:break-word] absolute font-['Reddit_Mono:SemiBold'] font-semibold leading-[normal] left-[167px] text-[#a1a1a1] text-[15px] top-[496px] w-[512px]">Im Genny Lou D. Diaz — six years of hands-on software quality assurance across functional, regression, UAT and API testing, backed by application-development experience and an eye for UI/UXdetail.</p>

          <p data-animate data-delay="600" className="[word-break:break-word] absolute font-['Reddit_Mono:SemiBold'] font-semibold leading-[normal] left-[166px] text-[#2d926f] text-[15px] top-[464px] whitespace-nowrap">Manual QA + Web Developer</p>

          <div data-animate data-delay="350" className="[word-break:break-word] absolute font-['Reddit_Mono:SemiBold'] font-semibold leading-[0] left-[calc(50%+110px)] text-[#a1a1a1] text-[0px] top-[419px] tracking-[-0.56px] whitespace-nowrap">
            <p className="leading-[100.92999267578125%] mb-0 text-[#3ac592] text-[14px] whitespace-pre">BASED IN</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[14px] whitespace-pre">Las Pinas City, Philippines</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[14px] whitespace-pre">​</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[#3ac592] text-[14px] whitespace-pre">EDUCATION</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[14px] whitespace-pre">BS-IT Multimedia Design and Animation</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[14px] whitespace-pre">​</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[#3ac592] text-[14px] whitespace-pre">LANGUAGES</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[14px] whitespace-pre">Tagalog, English</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[14px] whitespace-pre">​</p>
            <p className="leading-[100.92999267578125%] mb-0 text-[#3ac592] text-[14px] whitespace-pre">{`AVAILABLE FOR `}</p>
            <p className="leading-[100.92999267578125%] text-[14px] whitespace-pre">Freelance / Part-Time QA Projects / Full-Time</p>
          </div>

          {/* Stats */}
          <div className="absolute h-[98.969px] left-[167px] top-[681px] w-[1091px]">
            <div data-animate data-delay="700" className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Light'] font-light h-[20px] justify-center leading-[0] left-[57.5px] text-[15px] text-center text-white top-[38px] tracking-[-0.45px] w-[99px]">
              <p className="leading-[99.95999908447266%]">YEARS IN QA</p>
            </div>
            <div data-animate data-delay="720" className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[53.673px] items-center justify-center left-[29.96px] top-[71.84px] w-[39.919px]">
              <div className="flex-none rotate-1">
                <div className="[word-break:break-word] flex flex-col font-['Padauk:Bold'] h-[53px] justify-center leading-[0] not-italic relative text-[36px] text-center text-white tracking-[-1.08px] w-[39px]">
                  <p className="leading-[99.95999908447266%]">6+</p>
                </div>
              </div>
            </div>
            <div data-animate data-delay="740" className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Light'] font-light h-[20px] justify-center leading-[0] left-[317.5px] text-[15px] text-center text-white top-[38px] tracking-[-0.45px] w-[171px]">
              <p className="leading-[99.95999908447266%]">RELEASES SIGNED OFF</p>
            </div>
            <div data-animate data-delay="760" className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[53.969px] items-center justify-center left-[260.46px] top-[71.98px] w-[56.916px]">
              <div className="flex-none rotate-1">
                <div className="[word-break:break-word] flex flex-col font-['Padauk:Bold'] h-[53px] justify-center leading-[0] not-italic relative text-[36px] text-center text-white tracking-[-1.08px] w-[56px]">
                  <p className="leading-[99.95999908447266%]">40+</p>
                </div>
              </div>
            </div>
            <div data-animate data-delay="780" className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[54.493px] items-center justify-center left-[597.46px] top-[71.25px] w-[86.912px]">
              <div className="flex-none rotate-1">
                <div className="[word-break:break-word] flex flex-col font-['Padauk:Bold'] h-[53px] justify-center leading-[0] not-italic relative text-[36px] text-center text-white tracking-[-1.08px] w-[86px]">
                  <p className="leading-[99.95999908447266%]">1.2K+</p>
                </div>
              </div>
            </div>
            <div data-animate data-delay="800" className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[53.306px] items-center justify-center left-[895.46px] top-[71.65px] w-[18.922px]">
              <div className="flex-none rotate-1">
                <div className="[word-break:break-word] flex flex-col font-['Padauk:Bold'] h-[53px] justify-center leading-[0] not-italic relative text-[36px] text-center text-white tracking-[-1.08px] w-[18px]">
                  <p className="leading-[99.95999908447266%]">3</p>
                </div>
              </div>
            </div>
            <div data-animate data-delay="760" className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Light'] font-light h-[20px] justify-center leading-[0] left-[638.5px] text-[15px] text-center text-white top-[38px] tracking-[-0.45px] w-[171px]">
              <p className="leading-[99.95999908447266%]">TEST CASES AUTHORED</p>
            </div>
            <div data-animate data-delay="790" className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Light'] font-light h-[20px] justify-center leading-[0] left-[981px] text-[15px] text-center text-white top-[38px] tracking-[-0.45px] w-[198px]">
              <p className="leading-[99.95999908447266%]">AGILE SQUADS SUPPORTED</p>
            </div>
          </div>

          <div className="absolute flex h-0 items-center justify-center left-[165px] top-[696px] w-[1091px]">
            <div className="flex-none rotate-180">
              <div className="h-0 relative w-[1091px]">
                <div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine1} /></div>
              </div>
            </div>
          </div>

          {/* Skills strip */}
          <div className="absolute bg-[#0b1217] border border-[#0e2c22] border-solid h-[247px] left-0 overflow-clip top-[881px] w-[1440px]">
            <div className="absolute h-[138px] left-[163px] top-[43px] w-[231px]">
              <div data-animate className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] left-[34.5px] text-[#3ac592] text-[15px] text-center top-[-8px] w-[69px]">
                <p className="leading-[normal]">TESTING</p>
              </div>
              <div className="absolute h-[18px] left-0 rounded-[1px] top-[23px] w-[83px]">
                <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[83px]" />
                <p data-animate data-delay="50" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[7px] text-[#3ac592] text-[8px] top-[4px] w-[68px]">Manual Testing</p>
              </div>
              <div className="absolute h-[55px] left-[94px] rounded-[1px] top-[23px] w-[98px]">
                <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-[4px] rounded-[3px] top-0 w-[110px]" />
                <p data-animate data-delay="70" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[14px] text-[#3ac592] text-[8px] top-[4px] w-[89px]">Functional Testing</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] rounded-[4px] top-[49px] w-[99px]">
                <p data-animate data-delay="90" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Regression Testing</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] right-[120px] rounded-[4px] top-[75px]">
                <p data-animate data-delay="110" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Cross-browser Testing</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] rounded-[4px] top-[101px] w-[102px]">
                <p data-animate data-delay="130" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Exploratory Testing</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-[106px] rounded-[4px] top-[49px] w-[20px]">
                <p data-animate data-delay="100" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[2.5px] text-[#3ac592] text-[8px] top-[4px] whitespace-nowrap">UAT</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-[133px] py-[3px] rounded-[4px] top-[49px] w-[63px]">
                <p data-animate data-delay="120" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">API Testing</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-[111px] py-[3px] rounded-[4px] top-[101px] w-[89px]">
                <p data-animate data-delay="150" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Defect Management</p>
              </div>
            </div>

            <div className="absolute h-[138px] left-[598px] top-[43px] w-[231px]">
              <div data-animate className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] left-[57px] text-[#3ac592] text-[15px] text-center top-[-8px] w-[114px]">
                <p className="leading-[normal]">{`TOOLS & TECH`}</p>
              </div>
              <div className="absolute h-[18px] left-0 top-[23px] w-0">
                <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[63px]" />
                <p data-animate data-delay="60" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[7px] text-[#3ac592] text-[8px] top-[4px] w-[68px]">Playwright</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] rounded-[3px] top-[49px] w-[69px]">
                <p data-animate data-delay="80" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Git / Gitlab</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] rounded-[3px] top-[75px] w-[45px]">
                <p data-animate data-delay="100" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Postman</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-[75px] py-[3px] rounded-[3px] top-[49px] w-[76px]">
                <p data-animate data-delay="90" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Ruby on Rails</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-[100px] py-[3px] rounded-[3px] top-[23px] w-[69px]">
                <p data-animate data-delay="70" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Azure DevOps</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-[72px] rounded-[3px] top-[23px] w-[20px]">
                <p data-animate data-delay="65" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[2.5px] text-[#3ac592] text-[8px] top-[4px] whitespace-nowrap">SQL</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-[160px] py-[3px] rounded-[3px] top-[49px] w-[25px]">
                <p data-animate data-delay="110" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">CMS</p>
              </div>
            </div>

            <div className="absolute h-[138px] left-[1033px] top-[43px] w-[231px]">
              <div data-animate className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['JetBrains_Mono:Regular'] font-normal justify-center leading-[0] left-[70.5px] text-[#3ac592] text-[15px] text-center top-[-12px] w-[141px]">
                <p className="leading-[normal]">WAYS OF WORKING</p>
              </div>
              <div className="absolute h-[18px] left-0 top-[23px] w-0">
                <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-0 rounded-[3px] top-0 w-[73px]" />
                <p data-animate data-delay="60" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[7px] text-[#3ac592] text-[8px] top-[4px] w-[68px]">Agile / Scrum</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] rounded-[3px] top-[49px] w-[95px]">
                <p data-animate data-delay="80" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Test Documentation</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-0 py-[3px] rounded-[3px] top-[75px] w-[110px]">
                <p data-animate data-delay="100" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">Requirements Analysis</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid content-stretch flex h-[18px] items-center justify-center left-[116px] py-[3px] rounded-[3px] top-[75px] w-[76px]">
                <p data-animate data-delay="110" className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] relative shrink-0 text-[#3ac592] text-[8px] whitespace-nowrap">UI/UX Review</p>
              </div>
              <div className="absolute bg-[#070e16] border border-[#353535] border-solid h-[18px] left-[82px] rounded-[3px] top-[23px] w-[25px]">
                <p data-animate data-delay="70" className="[word-break:break-word] absolute font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] left-[2.5px] text-[#3ac592] text-[8px] top-[4px] whitespace-nowrap">SDLC</p>
              </div>
            </div>
          </div>

          <a data-animate data-delay="650" className="[word-break:break-word] absolute block font-['Roboto_Mono:Regular'] font-normal h-[17px] leading-[0] left-[188px] text-[#3ac592] text-[13px] top-[612px] w-[141px]" href="https://www.linkedin.com/in/gennyloudiaz/" target="_blank">
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">Start Conversation</p>
          </a>
          <div className="absolute flex h-[39.14px] items-center justify-center left-[172px] top-[602px] w-[182px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="border-2 border-[#3ac592] border-solid h-[39.14px] relative rounded-[19.57px] w-[182px]" />
            </div>
          </div>
          <div className="absolute flex h-[26px] items-center justify-center left-[166px] top-[227px] w-[182px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="border border-[#3ac592] border-solid h-[26px] relative rounded-[19.57px] w-[182px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Background vector */}
      <div className="absolute h-[1179px] left-0 top-[-1px] w-[1747px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>

      {/* Sticky nav */}
      <div className="absolute bottom-0 h-[1242px] left-0 pointer-events-none top-[-9px]">
        <div className="[word-break:break-word] bg-[#060b11] border border-[#0e2c22] border-solid cursor-pointer h-[105px] leading-[0] overflow-clip pointer-events-auto sticky text-left top-0 w-[1440px] whitespace-nowrap">
          <button className="absolute block font-['JetBrains_Mono:Regular'] font-normal left-[1131px] text-[#a1a1a1] text-[16px] top-[36px]">
            <p className="leading-[normal]">CONTACT</p>
          </button>
          <button className="absolute block font-['JetBrains_Mono:Regular'] font-normal left-[913px] text-[#a1a1a1] text-[16px] top-[36.5px]">
            <p className="leading-[normal]">EXPERIENCE</p>
          </button>
          <button className="absolute block font-['JetBrains_Mono:Regular'] font-normal left-[735px] text-[#a1a1a1] text-[16px] top-[36px]">
            <p className="leading-[normal]">SERVICES</p>
          </button>
          <button className="absolute block font-['JetBrains_Mono:Bold'] font-bold left-[146px] text-[0px] text-white top-[34px]">
            <p>
              <span className="leading-[normal] text-[20px]">{`GENNY LOU D. DIAZ `}</span>
              <span className="[word-break:break-word] font-['JetBrains_Mono:ExtraLight'] font-extralight leading-[normal] text-[#3ac592] text-[15px]">- QA Engineer</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
