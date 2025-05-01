'use client'
import Link from 'next/link';
import { BsDiscord, BsPeople } from "react-icons/bs";
import RollingDigits from "../components/RollingDigits.jsx";
import React, { useState, useEffect } from "react";
import countMembers from "../backend/countMembers";

// Main component
export default function Home() {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const members = await countMembers();
      setMemberCount(members ? members : 0);
    };

    fetchData();
  }, []);

  // Sections Data
  const sections = [
    {
      id: "security",
      title: "Security",
      description: "Βουτήξτε στον κόσμο της ασφάλειας πληροφοριακών συστημάτων και μάθετε πώς να εντοπίζετε και να διορθώνετε ευπάθειες",
      imageSrc: "/security.jpg",
    },
    {
      id: "gamedev",
      title: "Game Development",
      description: "Εξερευνήστε τη δημιουργία παιχνιδιών από το μηδέν! Από την ανάπτυξη ιστοριών και σχεδιασμού μέχρι την κωδικοποίηση και την κυκλοφορία.",
      imageSrc: "/gaming.png",
    },
    {
      id: "cp",
      title: "Competitive Programming",
      description: "Βελτιώστε τις δεξιότητές σας στον προγραμματισμό μέσα από απαιτητικές ασκήσεις, αλγοριθμικά challenges και διαγωνισμούς.",
      imageSrc: "/maths.png",
    },
    {
      id: "hackathons",
      title: "Hackathons",
      description: "Λάβετε μέρος σε δημιουργικά hackathons, λύνοντας πραγματικά προβλήματα, μαθαίνοντας νέα εργαλεία και συναγωνιζόμενοι με άλλες ομάδες.",
      imageSrc: "/startup.png",
    },
    {
      id: "opensource",
      title: "Open Source",
      description: "Μάθετε πώς να συνεισφέρετε σε open source projects, να συνεργάζεστε με developers παγκοσμίως και να φτιάχνετε λογισμικό που κάνει τη διαφορά.",
      imageSrc: "/opensource.png",
    },
    {
      id: "3dart",
      title: "3D Art",
      description: "Εξερευνήστε τον κόσμο του 3D art, δημιουργώντας εντυπωσιακά μοντέλα, περιβάλλοντα και animations, ενώ μαθαίνετε νέα εργαλεία και τεχνικές.",
      imageSrc: "/3dart.png",
    }
  ];

  return (
    <main className="font-sans bg-white">
      {/* Navbar with linear gradient background */}
      <nav className="bg-gradient-to-r from-indigo-600 to-[rgb(119,42,172)] border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-50">
        <div>
          <img
            src="/images.png"
            alt="Logo"
            className="h-8 w-8 rounded-full" // Adjust size and shape as needed
          />
          <span className="text-xl font-bold text-white rgb(119,42,172)">DIT Coding Club</span>
        </div>
        <div className="space-x-4">
          <Link href="#security" className="text-white hover:text-indigo-200">Security</Link>
          <Link href="#gamedev" className="text-white hover:text-indigo-200">Game Dev</Link>
          <Link href="#cp" className="text-white hover:text-indigo-200">Competitive</Link>
          <Link href="#hackathons" className="text-white hover:text-indigo-200">Hackathons</Link>
          <Link href="#opensource" className="text-white hover:text-indigo-200">Open Source</Link>
        </div>
      </nav>

      {/* Hero Section with Background Image and Transparent Border */}
      <section
        className="text-center bg-gray-50 border shadow-sm rounded-xl p-8 m-6 min-h-screen flex items-center justify-center flex-col"
        style={{
          backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg')", // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.2)' // For transparency effect
        }}
      >
        <div className="border-4 border-transparent p-6 rounded-xl bg-white/70 bg-opacity-80 shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-[rgb(119,42,172)] bg-clip-text text-transparent">Καλώς ήρθες στο Coding Club!</h1>
          <p className="text-lg mb-6 text-gray-600">
            Μια δυναμική κοινότητα φοιτητών που μοιράζονται το πάθος τους για την τεχνολογία και τον προγραμματισμό!
          </p>
          <div className="mt-[6px] transform translate-y-[-10px]">🖥️ 👾 🤓 🚀</div>
          <a
            href="https://discord.gg/c34X34X6Jb"
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-[rgb(119,42,172)] text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition mb-6 inline-flex items-center gap-2"
          >
            <BsDiscord className="text-xl" />
            Join Discord
          </a>
          <div className="flex justify-center items-center mt-4">
            <div className="bg-gradient-to-r from-blue-600 to-[rgb(119,42,172)] text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition inline-flex items-center gap-2 shadow-lg">
              <BsPeople className="text-xl" />
              <span className="text-base font-medium">
                <RollingDigits result={memberCount} />
                <span className="ml-1">members</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="scroll-smooth">
        {sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            index={index} // Pass the index for alternating layout
            background="bg-gradient-to-r from-[#f0f4f8] to-[#cfd7e6]"
          />
        ))}
      </div>
    </main>
  );
}

function Section({ id, title, description, background, imageSrc, index }) {
  const isImageRight = index % 2 === 1;

  return (
    <section
      id={id}
      className={`${background} border border-gray-200 shadow-xl rounded-xl p-8 my-8 flex flex-col lg:flex-row ${isImageRight ? 'lg:flex-row-reverse' : ''} items-center`}
    >
      {/* Image */}
      <div
        className={`mt-8 lg:mt-0 w-64 ${isImageRight ? 'lg:ml-0 lg:mr-8' : 'lg:mr-0 lg:ml-8'}`}
      >
        <img
          src={imageSrc}
          alt={`${title} image`}
          className="w-full h-auto rounded-xl shadow-md transform hover:scale-105 transition-all"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <button className="bg-gradient-to-r from-indigo-600 to-[rgb(119,42,172)] text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition">
          Δες περισσότερα
        </button>
      </div>
    </section>
  );
}


