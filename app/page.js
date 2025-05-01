import Link from 'next/link';
//change
export default function Home() {
  return (
    <main className="font-sans bg-white">
      {/* Navbar with linear gradient background */}
      <nav className="bg-gradient-to-r from-indigo-600 to-[rgb(119,42,172)] border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-xl font-bold text-white rgb(119,42,172)" >DIT Coding Club</div>
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
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Universit%C3%A4t_von_Athen.jpg/960px-Universit%C3%A4t_von_Athen.jpg')", // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.6)' // For transparency effect
        }}
      >
        {/* Container with Transparent Border for Title, Description, and Button */}
        <div className="border-4 border-transparent p-6 rounded-xl bg-white bg-opacity-80 shadow-lg">
          {/* Larger Title */}
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-800">Καλώς ήρθες στο Coding Club</h1>
          {/* Description below the Title */}
          <p className="text-lg mb-6 text-gray-600">
            μια δυναμική κοινότητα φοιτητών που μοιράζονται το πάθος τους για την τεχνολογία και τον προγραμματισμό! 
            <p>🖥️ 👾 🤓 🚀</p>
          </p>
          <p></p>
          {/* 'μπες' Button */}
          <a
            href="https://discord.com/invite/your-discord-link"
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-[rgb(119,42,172)] text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition mb-6"
          >
            μπες
          </a>
        </div>
      </section>

      {/* Sections */}
      <div className="scroll-smooth">
        <Section
          id="security"
          title="Security"
          description="Βουτήξτε στον κόσμο της ασφάλειας πληροφοριακών συστημάτων και μάθετε πώς να εντοπίζετε και να διορθώνετε ευπάθειες"
          background="bg-gradient-to-r from-[#f0f4f8] to-[#cfd7e6]"
        />
        <Section
          id="gamedev"
          title="Game Development"
          description="Εξερευνήστε τη δημιουργία παιχνιδιών από το μηδέν! Από την ανάπτυξη ιστοριών και σχεδιασμού μέχρι την κωδικοποίηση και την κυκλοφορία."
          background="bg-gradient-to-r from-[#f0f4f8] to-[#cfd7e6]"
        />
        <Section
          id="cp"
          title="Competitive Programming"
          description="Βελτιώστε τις δεξιότητές σας στον προγραμματισμό μέσα από απαιτητικές ασκήσεις, αλγοριθμικά challenges και διαγωνισμούς."
          background="bg-gradient-to-r from-[#f0f4f8] to-[#cfd7e6]"
        />
        <Section
          id="hackathons"
          title="Hackathons"
          description="Λάβετε μέρος σε δημιουργικά hackathons, λύνοντας πραγματικά προβλήματα, μαθαίνοντας νέα εργαλεία και συναγωνιζόμενοι με άλλες ομάδες."
          background="bg-gradient-to-r from-[#f0f4f8] to-[#cfd7e6]"
        />
        <Section
          id="opensource"
          title="Open Source"
          description="Μάθετε πώς να συνεισφέρετε σε open source projects, να συνεργάζεστε με developers παγκοσμίως και να φτιάχνετε λογισμικό που κάνει τη διαφορά."
          background="bg-gradient-to-r from-[#f0f4f8] to-[#cfd7e6]"
        />
      </div>
    </main>
  );
}

function Section({ id, title, description, background }) {
  return (
    <section
      id={id}
      className={`${background} border border-gray-200 shadow-sm rounded-xl p-6 min-h-screen flex flex-col justify-between items-center`}
    >
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="mb-4 text-gray-600 text-center">{description}</p>
      </div>
      {/* 'περισσότερα' Button Right Below the Description */}
      <button className="self-start bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition">
        περισσότερα
      </button>
    </section>
  );
}
