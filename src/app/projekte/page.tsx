"use client";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Erweiterte Projektdaten für die Projektdetailseite
const allProjects = [
  {
    id: 1,
    title: 'SafeSport-Beratungsapp',
    category: 'Mobile Entwicklung',
    description: 'Eine sichere Plattform, die Betroffenen sexualisierter Gewalt im Sport umfassende Unterstützung bietet.',
    fullDescription: 'Die SafeSport-Beratungsapp schafft einen geschützten digitalen Raum für Betroffene sexualisierter Gewalt im Sport. Mit Ende-zu-Ende-verschlüsselter Kommunikation, anonymen Beratungsmöglichkeiten und einem umfangreichen Ressourcen-Hub können Betroffene jederzeit und überall Hilfe finden. Die App verbindet Nutzer direkt mit qualifizierten Beratungsstellen, bietet regelmäßig aktualisierte Informationen zu Selbsthilfegruppen und ermöglicht optional den Austausch in einer moderierten Community. Fortschrittliche Sicherheitsfeatures wie Tarn-Modus und Notfall-Exit garantieren maximalen Schutz der Privatsphäre.',
    image: '/images/project1.jpg',
    tags: ['React Native', 'Ende-zu-Ende-Verschlüsselung', 'UX/UI-Design'],
    team: ['Prof. Dr. Mira Schmidt', 'Julia Weber', 'Thomas Müller'],
    progress: 80,
  },
  {
    id: 2,
    title: 'Frühwarnsystem mit KI',
    category: 'Künstliche Intelligenz',
    description: 'Ein ethisch entwickeltes KI-System zur Erkennung von Risikofaktoren und Verbesserung von Präventionsmaßnahmen.',
    fullDescription: 'Das Frühwarnsystem mit KI analysiert anonymisierte Kommunikations- und Organisationsstrukturen in Sportverbänden, um potenzielle Risikofaktoren für sexualisierte Gewalt zu identifizieren. Das System wurde mit besonderem Fokus auf ethische Grundsätze und Datenschutz entwickelt. Es unterstützt Verantwortliche bei der Implementierung zielgerichteter Präventionsmaßnahmen und der Schaffung sicherer Sportumgebungen. Durch kontinuierliches Feedback von Experten und betroffenen Gruppen wird das System stetig verbessert, ohne dabei stigmatisierende Vorhersagen über Einzelpersonen zu treffen. Das Projekt beinhaltet umfangreiche Schulungen für alle Anwender, um ethisch verantwortungsvolle Nutzung zu gewährleisten.',
    image: '/images/project2.jpg',
    tags: ['Ethische KI', 'Datenschutz', 'Prävention'],
    team: ['Prof. Dr. Anna Müller', 'Dr. David Klein', 'Sarah Wagner'],
    progress: 65,
  },
  {
    id: 3,
    title: 'Transparente Sporträume',
    category: 'Architektur & Raumgestaltung',
    description: 'Innovative Raumkonzepte für sichere Sportumgebungen ohne Kompromisse bei Privatsphäre und Funktionalität.',
    fullDescription: 'Das Projekt "Transparente Sporträume" entwickelt architektonische Lösungen, die Sicherheit durch Transparenz fördern ohne die notwendige Privatsphäre in Umkleide- und Sanitärbereichen zu beeinträchtigen. Durch intelligente Raumaufteilung, optimierte Sichtachsen und durchdachte Beleuchtungskonzepte werden potenzielle Gefahrenbereiche minimiert. Das Konzept integriert subtile Sicherheitselemente, die nicht als überwachend wahrgenommen werden, sondern das Wohlbefinden aller Sportlerinnen und Sportler fördern. In Zusammenarbeit mit Sportvereinen wurden Pilotprojekte initiiert, die bereits positive Rückmeldungen von Trainern, Eltern und Sportlern erhalten haben. Alle Konzepte werden durch partizipative Designprozesse entwickelt, die die Bedürfnisse aller Beteiligten berücksichtigen.',
    image: '/images/project3.jpg',
    tags: ['Partizipatives Design', 'Raumpsychologie', 'Sicherheitsarchitektur'],
    team: ['Prof. Dr. Markus Bauer', 'Dipl.-Ing. Laura Winter', 'Max Schmidt'],
    progress: 90,
  },
  {
    id: 4,
    title: 'VR-Präventionstraining',
    category: 'VR/AR',
    description: 'Immersive Trainingsumgebung für Sportpersonal zum Erkennen und angemessenen Reagieren auf Grenzüberschreitungen.',
    fullDescription: 'Das VR-Präventionstraining versetzt Trainer, Betreuer und Vereinsverantwortliche in realistische Szenarien, in denen sie Warnsignale erkennen und angemessen auf Verdachtsfälle reagieren lernen. Mit einem KI-gestützten adaptiven Dialogsystem reagiert die Simulation auf unterschiedliche Handlungsansätze der Teilnehmer und bietet individuelles Feedback. Das Training wurde in Zusammenarbeit mit Sportpsychologen, Präventionsexperten und Betroffenenverbänden entwickelt, um maximale Praxisrelevanz zu gewährleisten. Begleitende Evaluationsstudien zeigen signifikante Verbesserungen in der Handlungssicherheit und Interventionsbereitschaft der Teilnehmer. Ein begleitendes Reflexionsmodul unterstützt die Vertiefung und den Transfer in die eigene Praxis.',
    image: '/images/project4.jpg',
    tags: ['Immersives Lernen', 'Adaptive Szenarien', 'Transferpädagogik'],
    team: ['Dr. Julia Weber', 'Christian Fritz', 'Maria Santos'],
    progress: 75,
  },
  {
    id: 5,
    title: 'Sicheres Meldesystem',
    category: 'Datensicherheit',
    description: 'Ein hochsicheres, barrierefreies System für vertrauliche Meldungen von Übergriffen und Grenzverletzungen.',
    fullDescription: 'Das sichere Meldesystem kombiniert modernste Verschlüsselungstechnologien mit einer besonders nutzerfreundlichen, barrierefreien Oberfläche. Betroffene können zwischen verschiedenen Kontaktoptionen wählen - von vollständiger Anonymität bis hin zu direkter Vermittlung an qualifizierte Ansprechpersonen. Das System wurde mit besonderem Fokus auf Zugänglichkeit entwickelt und ist für Menschen mit unterschiedlichen Beeinträchtigungen optimiert. Eine besondere Innovation ist die "Vertrauensperson"-Funktion, die es ermöglicht, eine Vertrauensperson sicher in den Prozess einzubinden, ohne die Vertraulichkeit zu gefährden. Alle Daten werden dezentral und sicher gespeichert, mit voller Kontrolle der Betroffenen über ihre persönlichen Informationen.',
    image: '/images/project5.jpg',
    tags: ['Barrierefreiheit', 'Digitale Selbstbestimmung', 'Kryptographie'],
    team: ['Dr. Michael Schneider', 'Sophia Beck', 'Jan Hoffmann'],
    progress: 65,
  },
  {
    id: 6,
    title: 'Transparente Trainerqualifikation',
    category: 'Digitale Zertifizierung',
    description: 'Ein innovatives System zur fälschungssicheren Dokumentation von Präventionsschulungen und Qualifikationen.',
    fullDescription: 'Das Projekt "Transparente Trainerqualifikation" entwickelt ein dezentrales System, das Qualifikationen im Bereich Prävention sexualisierter Gewalt fälschungssicher dokumentiert. Vereine und Verbände können unkompliziert den Schulungsstand ihrer Mitarbeitenden überprüfen, ohne dass sensible persönliche Daten preisgegeben werden. Das System fördert eine Kultur der Transparenz und erhöht gleichzeitig den Anreiz für kontinuierliche Weiterbildung durch ein innovatives Anerkennungssystem. Besonders hervorzuheben ist die Integration eines "Community of Practice"-Ansatzes, der den regelmäßigen Erfahrungsaustausch zwischen geschulten Personen fördert und so zur nachhaltigen Implementierung von Präventionsmaßnahmen beiträgt. Die Plattform wurde in Pilotprojekten mit Landesportbünden erfolgreich getestet.',
    image: '/images/project6.jpg',
    tags: ['Dezentrale Zertifizierung', 'Datensouveränität', 'Qualitätssicherung'],
    team: ['Prof. Dr. Thomas Berg', 'Nina Wolf', 'Alexander Fischer'],
    progress: 55,
  },
];

export default function Projekte() {
  return (
    <>
      <Layout>
        {/* Header */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-black to-gray-900 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center relative"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                SafeSport Projekte
              </h1>
              <p className="text-xl text-gray-300">
                Innovative Forschungs- und Entwicklungsprojekte zur Prävention sexualisierter Gewalt im Sport
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-10 bg-gray-900 border-b border-gray-800 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3 relative">
              <Button variant="outline" className="bg-gray-800 text-gray-200 border-gray-700 hover:bg-red-900 hover:text-white">
                Alle Projekte
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:bg-red-900/20 hover:text-red-300">
                Mobile Apps
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:bg-red-900/20 hover:text-red-300">
                Künstliche Intelligenz
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:bg-red-900/20 hover:text-red-300">
                Architektur
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:bg-red-900/20 hover:text-red-300">
                Virtual Reality
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:bg-red-900/20 hover:text-red-300">
                Datensicherheit
              </Button>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {allProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-xl group hover:shadow-red-900/20 transition-all duration-300 relative"
                >
                  {/* Project Image */}
                  <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
                      <div 
                        className="h-full bg-gradient-to-r from-red-700 to-red-500" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    
                    {/* Image Placeholder (würde durch echte Bilder ersetzt) */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-red-500 opacity-50 text-5xl group-hover:scale-110 transition-transform duration-300">
                        {project.id}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-red-900/20 text-red-400 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">{project.progress}% abgeschlossen</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-800 text-xs text-gray-400 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gray-800 text-gray-200 hover:bg-red-900 hover:text-white border-none">
                      Projekt ansehen
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </Layout>
    </>
  );
}
