import uemLogo from "../assets/PNG/uemBackgroundLogo.svg";


export const Registration = () => {
  return (
    <div className="flex flex-col container mx-auto xl:py-32 lg:py-16 py-8 px-4">
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
      {/* ================= IMPORTANT DATES ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-3xl text-2xl">
        Important Dates
        <span className="text-base lg:text-xl font-semibold ml-2">
          (Tentative)
        </span>
      </h1>

      <ul className="list-disc ml-6 mt-8 text-sm lg:text-xl space-y-3">
        <li>
          Paper Submission Opens:{" "}
          <span className="font-bold">10 February 2027</span>
        </li>

        <li>
          Full Paper Submission Deadline:{" "}
          <span className="font-bold">05 March 2027</span>
        </li>

        <li>
          First Review Notification:{" "}
          <span className="font-bold">15 March 2027</span>
        </li>

        <li>
          Camera-Ready Submission:{" "}
          <span className="font-bold">31 March 2027</span>
        </li>

        <li>
          Author Registration Deadline:{" "}
          <span className="font-bold">05 April 2027</span>
        </li>

        <li>
          Conference Dates:{" "}
          <span className="font-bold">15–17 April 2027</span>
        </li>
      </ul>


      {/* ================= REVIEW PROCESS ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-3xl text-2xl mt-16">
        Review Process
      </h1>

      <ul className="list-disc ml-6 mt-8 text-sm lg:text-xl space-y-3">
        <li>Double-Blind Peer Review</li>

        <li>
          Minimum Three Independent Reviewers per Paper
        </li>

        <li>
          Plagiarism Check (Similarity below the prescribed threshold)
        </li>

        <li>
          Technical Program Committee Recommendation
        </li>

        <li>
          Final Editorial Decision by the Program Chairs
        </li>
      </ul>


      {/* ================= REVIEWER'S LIST ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-3xl text-2xl mt-16">
        Reviewer&apos;s List
      </h1>

      <div className="overflow-x-auto mt-8">
        <table className="w-full border-collapse border border-gray-300 text-sm lg:text-lg">

          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left">
                Sl. No.
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Name
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Affiliation
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border border-gray-300 px-4 py-3">1</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Utpal Nandi
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Vidyasagar University, Midnapore
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">2</td>
              <td className="border border-gray-300 px-4 py-3">
                Mr. Somnath Maji
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Maulana Abul Kalam Azad University of Technology
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">3</td>
              <td className="border border-gray-300 px-4 py-3">
                Mr. Sushobhan Khatua
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Maulana Abul Kalam Azad University of Technology
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">4</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Angshuman Jana
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Indian Institute of Information Technology, Guwahati, India
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">5</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Nanda Dulal Jana
              </td>
              <td className="border border-gray-300 px-4 py-3">
                NIT Durgapur
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">6</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Tarun Biswas
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Indian Institute of Information Technology, Ranchi
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">7</td>
              <td className="border border-gray-300 px-4 py-3">
                Dr. Sk Subidh Ali
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Indian Institute of Technology, Bhilai
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">8</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Kangkana Bora
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Cotton University, India
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">9</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Achyuth Sarkar
              </td>
              <td className="border border-gray-300 px-4 py-3">
                NIT Arunachal Pradesh
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">10</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Somenath Chakraborty
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The West Virginia University Institute of Technology
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">11</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Anjan Bandyopadhyay
              </td>
              <td className="border border-gray-300 px-4 py-3">
                KIIT, Bhubaneswar
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">12</td>
              <td className="border border-gray-300 px-4 py-3">
                Prof. (Dr.) Soumadip Ghosh
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Sister Nivedita University, India
              </td>
            </tr>

          </tbody>
        </table>
      </div>


      {/* ================= PUBLICATION CHAIRS ================= */}
      <h1 className="font-bold xl:text-5xl lg:text-3xl text-2xl mt-16">
        Publication Chairs
      </h1>

      <div className="overflow-x-auto mt-8">
        <table className="w-full border-collapse border border-gray-300 text-sm lg:text-lg">

          <thead>
            <tr className="bg-gray-100">

              <th className="border border-gray-300 px-4 py-3 text-left">
                Name
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Designation
              </th>

              <th className="border border-gray-300 px-4 py-3 text-left">
                Affiliation
              </th>

            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border border-gray-300 px-4 py-3">
                Dr. Saurav Mallik
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Assistant Research Professor
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Department of Biological Sciences, University of Texas at El
                Paso, USA
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">
                Dr. Péricles Miranda
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Faculty Member
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Universidade Federal Rural de Pernambuco (UFRPE), Brazil
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-3">
                Dr. Tapas Si
              </td>

              <td className="border border-gray-300 px-4 py-3">
                Professor &amp; Associate Dean (Research)
              </td>

              <td className="border border-gray-300 px-4 py-3">
                University of Engineering &amp; Management, Jaipur, Rajasthan,
                India
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};