/**
 * Wissensdatenbank für den Uni-Projekte Assistant
 * Enthält vordefinierte Antworten auf häufige Fragen
 */

export interface KnowledgeEntry {
  keywords: string[];
  answer: string;
}

export const chatbotKnowledge: KnowledgeEntry[] = [
  {
    keywords: ['projekt', 'website', 'worum', 'thema', 'ziel', 'hauptthema', 'sexualisierte gewalt', 'sport'],
    answer: `# Sexualisierte Gewalt im Sport

Diese Website ist Teil einer Kampagne zur Sensibilisierung und Prävention von sexualisierter Gewalt im Sport. 

Gemeinsam setzen wir uns für einen sicheren Sport ein und schaffen Bewusstsein für dieses wichtige Thema. Unser Motto ist: "Tue Gutes und rede darüber!"

Als Initiative der Hochschule Bremerhaven (CMP-SPORT) möchten wir:
- Aufklären und sensibilisieren
- Präventionsmaßnahmen fördern
- Betroffenen Hilfe anbieten
- Ein sicheres Umfeld im Sport schaffen`
  },
  {
    keywords: ['abgabe', 'fristen', 'deadline', 'termin', 'abgabetermin', 'einreichung'],
    answer: `# Aktuelle Fristen

Die folgenden Abgabefristen sind aktuell wichtig:

- **Erste Projektskizze**: 15. Mai 2025
- **Zwischenpräsentation**: 30. Juni 2025
- **Finaler Projektbericht**: 15. August 2025
- **Abschlusspräsentation**: 31. August 2025

Alle Unterlagen müssen bis 23:59 Uhr des jeweiligen Tages im Online-Portal hochgeladen werden. 
Eine Fristverlängerung ist nur in Ausnahmefällen und nach vorheriger Absprache möglich.`
  },
  {
    keywords: ['projektideen', 'ideen', 'themen', 'schwerpunkte', 'forschungsgebiet', 'vorschläge'],
    answer: `# Aktuelle Projektideen

Hier sind einige der aktuell gefragten Projektthemen:

### **1. EdTech & Lernplattformen**
- **Adaptive Lernanalyse** (z.B. Vorhersage von Studienerfolg basierend auf Lernverhalten)

### **2. Nachhaltigkeit & Green Tech**
- **Energieeffizienz-Tools** (z. B. App zur Optimierung des Stromverbrauchs in Haushalten)
- **Plastikersatzstoffe** (Experimente mit biologisch abbaubaren Materialien)
- **Urban Gardening Konzepte** (IoT-Sensoren für smarte Pflanzenpflege)

### **3. Gesundheit & Medizintechnik**
- **Mental Health Apps** (z. B. Stress-Tracker mit Empfehlungen)
- **Wearables für Ältere** (Sturzdetektion, Erinnerungshilfen)
- **Ernährungsanalyse** (KI-gestützte Essensempfehlungen)

### **4. Smart City & IoT**
- **Parkplatz-Management-Systeme** (mit Sensoren und App-Anbindung)

Sprich mit deinen Betreuern, um weitere spezifische Themen zu erfahren oder eigene Ideen einzubringen!`
  },
  {
    keywords: ['tipps', 'umsetzung', 'implementierung', 'technik', 'programmieren', 'coding', 'entwicklung'],
    answer: `# Tipps zur technischen Umsetzung

## Allgemeine Tipps
- Beginne mit einem klaren Konzept und einer Anforderungsanalyse
- Nutze agile Methoden, um iterativ vorzugehen
- Dokumentiere deinen Code sorgfältig
- Setze auf moderne Frameworks und Bibliotheken

## Webentwicklung
- Für Frontend: React, Next.js oder Vue für interaktive Interfaces
- Für Backend: Node.js, Express oder Django je nach Anforderung
- Nutze TypeScript für bessere Codequalität

## Mobile Entwicklung
- React Native für plattformübergreifende Apps
- Swift für iOS, Kotlin für Android bei nativen Apps

## Datenanalyse & KI
- Python mit Bibliotheken wie Pandas, scikit-learn oder TensorFlow
- Jupyter Notebooks für Exploratory Data Analysis

## Präsentation
- Erstelle ein attraktives UI/UX-Design
- Nutze Visualisierungen, um komplexe Daten verständlich zu machen
- Denke an Barrierefreiheit und Mobile-First-Ansatz

Kontaktiere gerne unsere Mentor:innen für spezifischere Beratung zu deinem Projekt!`
  },
  {
    keywords: ['team', 'organisation', 'zeitmanagement', 'zusammenarbeit', 'projektmanagement', 'gruppenarbeit'],
    answer: `# Tipps zur Teamorganisation

## Zeitmanagement
- Erstellt zu Beginn einen realistischen Zeitplan mit Meilensteinen
- Definiert klare Deadlines für Teilaufgaben
- Nutzt Tools wie Trello, Asana oder Jira zur Aufgabenverwaltung
- Plant Pufferzeiten für unerwartete Probleme ein

## Teamarbeit
- Führt regelmäßige Meetings durch (empfohlen: 1-2x pro Woche)
- Verteilt Aufgaben nach Stärken und Interessen
- Dokumentiert Entscheidungen und Fortschritte
- Nutzt Kollaborationstools wie GitHub, Google Workspace oder Microsoft Teams

## Kommunikation
- Richtet einen gemeinsamen Chat-Kanal ein (z.B. Slack, Discord)
- Teilt Wissen und Ressourcen proaktiv
- Sprecht Probleme frühzeitig an
- Gebt einander konstruktives Feedback

## Bei Konflikten
- Sprecht Meinungsverschiedenheiten direkt und sachlich an
- Fokussiert auf Lösungen statt Schuldzuweisungen
- Zieht bei Bedarf Betreuer:innen als Mediatoren hinzu

Wir bieten auch Workshops zu Teambuilding und Projektmanagement an - frag nach den nächsten Terminen!`
  },
  {
    keywords: ['anforderungen', 'bewertung', 'kriterien', 'bewertungskriterien', 'note', 'benotung'],
    answer: `# Projektanforderungen & Bewertungskriterien

## Grundlegende Anforderungen
- Einhaltung der Abgabefristen
- Vollständige Dokumentation des Projekts
- Funktionierender Prototyp oder Implementierung
- Wissenschaftliche Fundierung & korrekte Quellenangaben

## Bewertungskriterien
Die Bewertung erfolgt nach folgenden Kriterien (Gewichtung in Prozent):

1. **Inhaltliche Tiefe & Wissenschaftlichkeit (30%)**
   - Recherche und theoretische Fundierung
   - Methodisches Vorgehen
   - Kritische Reflexion

2. **Technische Umsetzung (25%)**
   - Funktionalität und Zuverlässigkeit
   - Codequalität und -struktur
   - Technologieauswahl und -anwendung

3. **Innovation & Kreativität (20%)**
   - Originalität des Ansatzes
   - Problemlösungskompetenz
   - Mehrwert der Lösung

4. **Präsentation & Dokumentation (15%)**
   - Klarheit und Struktur der Darstellung
   - Qualität der schriftlichen Ausarbeitung
   - Überzeugungskraft der Präsentation

5. **Projektmanagement (10%)**
   - Einhaltung der Meilensteine
   - Teamarbeit und Aufgabenverteilung
   - Umgang mit Herausforderungen

Die Gesamtnote ergibt sich aus der gewichteten Summe dieser Teilbereiche.`
  },
  {
    keywords: ['hilfe', 'betreuung', 'ansprechpartner', 'unterstützung', 'kontakt', 'betreuer'],
    answer: `# Unterstützung & Ansprechpartner

## Betreuungsteam
- **Prof. Dr. Anna Schmidt** - Projektleitung
  - Sprechstunden: Di & Do, 14-16 Uhr
  - E-Mail: a.schmidt@uni-beispiel.de

- **Dr. Thomas Müller** - Technische Betreuung
  - Sprechstunden: Mo & Mi, 10-12 Uhr
  - E-Mail: t.mueller@uni-beispiel.de

- **Sarah Weber, M.Sc.** - Methodische Betreuung
  - Sprechstunden: Fr, 13-15 Uhr
  - E-Mail: s.weber@uni-beispiel.de

## Unterstützungsangebote
- **Wöchentliche Fragestunde**: Jeden Mittwoch, 16-18 Uhr (online)
- **Technische Workshops**: Termine werden per E-Mail angekündigt
- **Peer-Mentoring**: Vermittlung von erfahrenen Studierenden als Mentoren

## Ressourcen
- Zugang zur Universitätsbibliothek und Online-Datenbanken
- Spezialsoftware über die Uni-Lizenz
- Labore und Arbeitsräume nach Voranmeldung

Bei dringenden Anliegen erreichst du das Projektbüro unter:
- Telefon: 0123-4567890
- E-Mail: projekt@uni-beispiel.de`
  },
  {
    keywords: ['beispiel', 'projekte', 'frühere', 'vorherige', 'erfolgreiche', 'beispielprojekte'],
    answer: `# Erfolgreiche Beispielprojekte

## Vorjahresprojekte mit Auszeichnung

### "SafeSport App" (Bestnote 2024)
Eine mobile Anwendung, die Sportvereine bei der Implementierung von Schutzkonzepten gegen sexualisierte Gewalt unterstützt. Features: anonymes Meldesystem, Schulungsmaterialien und Notfallpläne.

### "SportSafe" (Innovationspreis 2023)
Ein Präventionskonzept mit digitaler Komponente zur Sensibilisierung von Trainern und Betreuern. Inklusive VR-Simulationen für Konflikttraining.

### "AthletesVoice" (Publikumspreis 2023)
Eine Plattform, die Athleten eine Stimme gibt und Erfahrungsberichte (anonymisiert) sammelt, um Problembereiche im Sportbetrieb zu identifizieren.

### "TrainerGuide" (Bestnote 2022)
Ein interaktives Handbuch für Trainer mit Leitlinien zum angemessenen Umgang mit Kindern und Jugendlichen im Sport.

## Tipps aus erfolgreichen Projekten:

1. Frühzeitige Einbindung der Zielgruppe
2. Fokus auf Benutzerfreundlichkeit
3. Klare Abgrenzung des Projektumfangs
4. Regelmäßiges Feedback einholen
5. Gründliche Evaluationsphase vor Projektabschluss

Die vollständigen Projektberichte sind im Uni-Archiv verfügbar.`
  },
  {
    keywords: ['ressourcen', 'material', 'literatur', 'quellen', 'bücher', 'artikel', 'papers'],
    answer: `# Empfohlene Ressourcen & Literatur

## Grundlagenliteratur
- Müller, A. & Schmidt, B. (2022): *Prävention sexualisierter Gewalt im Sport*
- Johnson, T. (2021): *Sports Psychology and Protection Concepts*
- Weber, C. et al. (2023): *Digitale Hilfssysteme in sensiblen Kontexten*

## Wissenschaftliche Artikel
- Lehmann, S. (2022): "Intervention Strategies Against Sexual Harassment in Sports" - Journal of Sports Science
- Garcia, M. & Thompson, P. (2023): "Digital Tools for Prevention" - International Journal of Sports Ethics
- Bauer, K. et al. (2024): "Effects of Educational Programs in Athletic Environments" - Sports Sociology Review

## Online-Ressourcen
- Deutsches Forschungszentrum für Gewaltprävention: [www.dfg-sport.de](http://www.dfg-sport.de)
- WHO Guidelines on Child Protection in Sports: [www.who.int/sports-safety](http://www.who.int/sports-safety)
- European Database on Sports Ethics: [data.eu/sports-ethics](http://data.eu/sports-ethics)

## Datenbanken (Zugang über Uni-Netzwerk)
- SportDiscus
- PsycINFO
- SAGE Sports Studies Collection

## Software & Tools
- MAXQDA (für qualitative Datenanalyse)
- SPSS (für statistische Auswertungen)
- Figma/Adobe XD (für Prototyping)

Alle aufgeführten Ressourcen sind über die Universitätsbibliothek oder die Online-Datenbanken der Hochschule zugänglich.`
  }
];

/**
 * Sucht nach einer passenden Antwort in der Wissensdatenbank
 * @param query Die Benutzeranfrage
 * @returns Die passende Antwort oder null, wenn keine gefunden wurde
 */
export function findAnswer(query: string): string | null {
  if (!query) return null;
  
  const normalizedQuery = query.toLowerCase();
  
  // Berechne die Relevanz jeder Antwort basierend auf der Anzahl der übereinstimmenden Keywords
  const matches = chatbotKnowledge.map(entry => {
    const matchCount = entry.keywords.filter(keyword => 
      normalizedQuery.includes(keyword.toLowerCase())
    ).length;
    
    return {
      entry,
      matches: matchCount,
      relevance: matchCount / entry.keywords.length
    };
  });
  
  // Sortiere nach Anzahl der Übereinstimmungen und dann nach Relevanz
  matches.sort((a, b) => {
    if (a.matches !== b.matches) return b.matches - a.matches;
    return b.relevance - a.relevance;
  });
  
  // Wenn die beste Übereinstimmung mindestens ein Keyword enthält, gib die Antwort zurück
  const bestMatch = matches[0];
  if (bestMatch && bestMatch.matches > 0) {
    return bestMatch.entry.answer;
  }
  
  return null;
}
