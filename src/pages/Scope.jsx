import uemLogo from "../assets/PNG/uemBackgroundLogo.svg";

export const Scope = () => {
  return (
    <div className="scope-main container mx-auto lg:py-[6rem] py-6 flex flex-col lg:flex-row">


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


      {/* WRAPPER FOR THE HEADING AND THE BULLET POINTS */}
      <div
        className="
          flex flex-col
          2xl:w-[50%]
          lg:w-[70%]
          lg:ml-[2rem]
          lg:mr-[1rem]
          w-full
          mb-4
        "
      >
        <div className="mb-8">
          <p
            className="
              lg:text-xl
              text-sm
              leading-relaxed
              text-justify
            "
          >
            ICEAS 2027 welcomes original contributions addressing theoretical
            advances, algorithm development, system design, applications, case
            studies, experimental research, industrial innovations, and
            interdisciplinary studies in Artificial Intelligence and Intelligent
            Computing.
          </p>

          <p
            className="
              lg:text-xl
              text-sm
              leading-relaxed
              text-justify
              mt-4
            "
          >
            The conference emphasizes research that improves the transparency,
            efficiency, trustworthiness, and autonomy of intelligent systems.
          </p>
        </div>
        {/* MAIN HEADING */}
        <h1
          className="
            font-bold
            relative
            lg:mb-6
            lg:text-3xl
            text-xl
          "
        >
          Conference Tracks (ICEAS-2027)
        </h1>

        {/* ================= TRACK 1 ================= */}
        <h2
          className="
            font-bold
            relative
            lg:mb-3
            lg:text-2xl
            text-lg
          "
        >
          Track 1
        </h2>

        <h3
          className="
            font-semibold
            lg:text-xl
            text-base
            mb-3
          "
        >
          Explainable, Trustworthy and Responsible Artificial Intelligence
        </h3>

        <p className="font-semibold lg:text-xl text-base mb-2">
          Topics include:
        </p>

        <ul className="list-disc lg:text-xl ml-6 text-sm space-y-1 mb-8">
          <li>Explainable Artificial Intelligence (XAI)</li>
          <li>Interpretable Machine Learning</li>
          <li>Responsible AI</li>
          <li>Trustworthy AI</li>
          <li>Fairness and Bias Mitigation</li>
          <li>Explainable Deep Learning</li>
          <li>Human-Centered AI</li>
          <li>Explainable NLP</li>
          <li>Explainable Computer Vision</li>
          <li>Explainable Reinforcement Learning</li>
          <li>AI Governance</li>
          <li>Privacy-Preserving AI</li>
          <li>AI Ethics</li>
          <li>AI Assurance</li>
          <li>Trust Evaluation</li>
        </ul>

        {/* ================= TRACK 2 ================= */}
        <h2
          className="
            font-bold
            relative
            lg:mb-3
            lg:text-2xl
            text-lg
          "
        >
          Track 2
        </h2>

        <h3
          className="
            font-semibold
            lg:text-xl
            text-base
            mb-3
          "
        >
          Advanced Optimization and Intelligent Computing
        </h3>

        <p className="font-semibold lg:text-xl text-base mb-2">
          Topics include:
        </p>

        <ul className="list-disc lg:text-xl ml-6 text-sm space-y-1 mb-8">
          <li>Mathematical Optimization</li>
          <li>Evolutionary Computing</li>
          <li>Metaheuristics</li>
          <li>Swarm Intelligence</li>
          <li>Bayesian Optimization</li>
          <li>Neural Architecture Search</li>
          <li>Hyperparameter Optimization</li>
          <li>Convex and Non-Convex Optimization</li>
          <li>Distributed Optimization</li>
          <li>Large-Scale Optimization</li>
          <li>Quantum Optimization</li>
          <li>Optimization under Uncertainty</li>
          <li>AI-Driven Optimization</li>
          <li>Intelligent Algorithms</li>
          <li>Resource-Efficient AI</li>
        </ul>

        {/* ================= TRACK 3 ================= */}
        <h2
          className="
            font-bold
            relative
            lg:mb-3
            lg:text-2xl
            text-lg
          "
        >
          Track 3
        </h2>

        <h3
          className="
            font-semibold
            lg:text-xl
            text-base
            mb-3
          "
        >
          Agentic AI, Autonomous Systems and Intelligent Decision Making
        </h3>

        <p className="font-semibold lg:text-xl text-base mb-2">
          Topics include:
        </p>

        <ul className="list-disc lg:text-xl ml-6 text-sm space-y-1">
          <li>Agentic AI</li>
          <li>Autonomous AI Agents</li>
          <li>Multi-Agent Systems</li>
          <li>LLM-Based Agents</li>
          <li>RAG Agents</li>
          <li>AI Planning</li>
          <li>Autonomous Decision-Making</li>
          <li>Tool-Using Agents</li>
          <li>Collaborative Agents</li>
          <li>AI Workflow Automation</li>
          <li>Human-Agent Collaboration</li>
          <li>Autonomous Robotics</li>
          <li>AI for Scientific Discovery</li>
          <li>Agent Security</li>
          <li>Intelligent Autonomous Systems</li>
        </ul>
      </div>

      
    </div>
  );
};
