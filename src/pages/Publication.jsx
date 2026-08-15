import uemLogo from "../assets/PNG/uemBackgroundLogo.svg";


export const Publication = () => {
  return (
    <div className="flex flex-col container mx-auto xl:py-32 lg:py-16 py-8">
      {/* FIXED BACKGROUND LOGO - stays centered & stable on scroll */}
      <img
        src={uemLogo}
        alt=""
        aria-hidden="true"
        className="
          fixed
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[50%]
          max-w-[300px]
          opacity-1
          pointer-events-none
          select-none
          -z-10
        "
      />
      {/* ================= PUBLICATION ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-2xl text-lg">
        Publication
      </h1>

      <p className="mt-10 text-sm lg:text-xl leading-relaxed">
        Accepted and presented papers will be considered for publication in
        the <span className="font-bold">
          Springer Communications in Computer and Information Science (CCIS)
        </span>{" "}
        proceedings, subject to:
      </p>

      <ul className="list-disc ml-6 mt-4 text-sm lg:text-xl space-y-2">
        <li>Springer editorial approval</li>
        <li>Peer-review quality</li>
        <li>Authors' compliance with formatting requirements</li>
        <li>Conference quality standards</li>
      </ul>

      <p className="mt-6 text-sm lg:text-xl leading-relaxed">
        All papers will undergo a rigorous{" "}
        <span className="font-bold">
          double-blind peer-review process
        </span>{" "}
        conducted by international experts.
      </p>


      {/* ================= KEYNOTE THEMES ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-2xl text-lg mt-16">
        Keynote Themes
      </h1>

      <p className="mt-6 text-sm lg:text-xl leading-relaxed">
        The conference will feature keynote talks from distinguished
        researchers and industry leaders on topics such as:
      </p>

      <ul className="list-disc ml-6 mt-4 text-sm lg:text-xl space-y-2">
        <li>Future of Explainable AI</li>
        <li>Agentic Artificial Intelligence</li>
        <li>Foundation Models and Large Language Models</li>
        <li>Autonomous Intelligent Systems</li>
        <li>Optimization for AI</li>
        <li>AI Safety and Responsible AI</li>
        <li>Generative AI</li>
        <li>AI for Healthcare</li>
        <li>Industrial AI</li>
        <li>AI in Smart Cities</li>
      </ul>


      {/* ================= TARGET AUDIENCE ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-2xl text-lg mt-16">
        Target Audience
      </h1>

      <ul className="list-disc ml-6 mt-6 text-sm lg:text-xl space-y-2">
        <li>Researchers</li>
        <li>Faculty Members</li>
        <li>Scientists</li>
        <li>PhD Scholars</li>
        <li>PG Students</li>
        <li>Industry Professionals</li>
        <li>AI Engineers</li>
        <li>Data Scientists</li>
        <li>Software Engineers</li>
        <li>Government Organizations</li>
        <li>Startups</li>
        <li>Innovation Centers</li>
      </ul>

    </div>
  );
};