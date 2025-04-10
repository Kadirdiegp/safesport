const https = require('https');
const fs = require('fs');
const path = require('path');

// Liste von Unsplash-Bildern für verschiedene Zwecke
const images = [
  {
    url: 'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'placeholder-1.jpg',
    description: 'Universitätsstudenten in einer modernen Bibliothek'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093458791-9ea44dec581e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'placeholder-2.jpg',
    description: 'Technologie-Labor mit Computerarbeitsplätzen'
  },
  {
    url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'placeholder-3.jpg',
    description: 'Student arbeitet an einer Anwendung auf dem Laptop'
  },
  {
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'project1.jpg',
    description: 'Smart Campus App Projekt'
  },
  {
    url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'project2.jpg',
    description: 'Virtual Reality Lernumgebung'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'project3.jpg',
    description: 'Nachhaltiger Campus'
  },
  {
    url: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'project4.jpg',
    description: 'Künstliche Intelligenz in der Gesundheitsforschung'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'project5.jpg',
    description: 'Studentisches Entrepreneurship Projekt'
  },
  {
    url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    fileName: 'project6.jpg',
    description: 'Blockchain für akademische Zertifikate'
  }
];

// Funktion zum Herunterladen eines Bildes
function downloadImage(imageObj) {
  return new Promise((resolve, reject) => {
    const fileName = path.join(__dirname, 'public', 'images', imageObj.fileName);
    
    // Überprüfen, ob das Verzeichnis existiert
    const dir = path.dirname(fileName);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(fileName);
    
    https.get(imageObj.url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Heruntergeladen: ${imageObj.fileName} - ${imageObj.description}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fileName, () => {}); // Lösche die teilweise heruntergeladene Datei
      console.error(`❌ Fehler beim Herunterladen von ${imageObj.fileName}: ${err.message}`);
      reject(err);
    });
  });
}

// Alle Bilder herunterladen
async function downloadAllImages() {
  console.log('🚀 Starte Download von Unsplash-Bildern...');
  
  try {
    // Sequenziell herunterladen, um Unsplash-Rate-Limits zu vermeiden
    for (const image of images) {
      await downloadImage(image);
    }
    console.log('✨ Alle Bilder wurden erfolgreich heruntergeladen!');
  } catch (error) {
    console.error('❌ Fehler beim Herunterladen der Bilder:', error);
  }
}

// Starte den Download-Prozess
downloadAllImages();
