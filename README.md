# Grundlagen der LLM/AI-Verwendung in der Medizin

Ein interaktiver Lernkurs für die Charlotte Fresenius Hochschule - University of Psychology

## Übersicht

Dieser Kurs führt Studierende und medizinische Fachkräfte durch die wichtigsten Aspekte der Anwendung von Künstlicher Intelligenz und Large Language Models in der medizinischen Praxis. Der Kurs ist vollständig in HTML/CSS/JavaScript implementiert und kann lokal ausgeführt werden.

## Kursstruktur

### Modul 1: Einführung in AI/LLM
- Grundlagen der Künstlichen Intelligenz und Machine Learning
- Funktionsweise von Large Language Models
- Anwendungsbereiche in der Medizin
- Prompt Design und Best Practices
- **Dauer:** ~30 Minuten
- **Assessment:** 5 Multiple-Choice-Fragen

### Modul 2: Tumordokumentation Case Study
- Praktisches Fallbeispiel: LLM-System zur Tumordokumentation
- Interaktive Case Study mit OnkoTutor
- PDF-Download: LLMsTumordokuArtikel.pdf
- Podcast-Referenz verfügbar
- **Dauer:** ~30 Minuten
- **Assessment:** 4 Multiple-Choice-Fragen

### Modul 3: PENDA Studie
- Reale Anwendung von AI-Copiloten in der Primärversorgung (Kenia)
- Ergebnisse und Erkenntnisse aus der Praxis
- PDF-Download: penda_studyreport.pdf
- Podcast-Referenz verfügbar
- **Dauer:** ~30 Minuten
- **Assessment:** 4 Multiple-Choice-Fragen

### Modul 4: Ethik in AI Healthcare
- Ethische Aspekte der AI-Anwendung im Gesundheitswesen
- TIME Study: Deskilling-Problematik
- PDF-Download: TIMEStudy_Deskilling.pdf
- Link zu EthikKIReflect GPT für Diskussionen
- **Dauer:** ~30 Minuten
- **Assessment:** 5 Multiple-Choice-Fragen

## Funktionen

### ✅ Vollständig implementierte Features
- **Responsive Design:** Optimiert für Desktop und Mobile
- **Progress Tracking:** Automatische Speicherung des Fortschritts
- **Assessment System:** Multiple-Choice-Fragen mit 60% Mindestpunktzahl
- **Certificate Generation:** Automatische Zertifikatserstellung bei Kursabschluss
- **Module Navigation:** Nahtlose Navigation zwischen Modulen
- **Corporate Design:** Charlotte Fresenius Branding und Farbschema
- **Interactive Elements:** Links zu externen Ressourcen und GPTs
- **Download Center:** Alle Referenzdokumente verfügbar

### 🎯 Lernziele
Nach Abschluss des Kurses können Teilnehmer:
- Grundlagen von AI, ML und LLMs verstehen
- Praktische Anwendungsfälle in der Medizin identifizieren
- AI-gestützte Dokumentationssysteme bewerten
- Ethische Aspekte beim AI-Einsatz reflektieren
- Verantwortungsvolle Entscheidungen über AI-Technologien treffen

## Installation und Ausführung

### Voraussetzungen
- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Python 3.x (für lokalen Server)
- Internetverbindung für externe Links

### Lokale Ausführung

1. **Dateien extrahieren:**
   ```bash
   # Alle Kursdateien in einen Ordner entpacken
   cd llm-medicine-course/
   ```

2. **HTTP Server starten:**
   ```bash
   # Python HTTP Server (empfohlen)
   python3 -m http.server 8080
   
   # Alternative: Node.js
   npx http-server -p 8080
   ```

3. **Kurs öffnen:**
   - Browser öffnen und zu `http://localhost:8080` navigieren
   - Kurs beginnt automatisch mit der Übersichtsseite

### Wichtiger Hinweis
⚠️ **CORS-Beschränkungen:** Der Kurs muss über einen HTTP-Server ausgeführt werden. Das direkte Öffnen der `index.html` Datei im Browser funktioniert nicht aufgrund von Browser-Sicherheitsrichtlinien.

## Technische Details

### Dateistruktur
```
llm-medicine-course/
├── index.html              # Hauptseite
├── css/
│   └── main.css            # Styling und Corporate Design
├── js/
│   └── course.js           # Kurs-Logik und Interaktivität
├── modules/
│   ├── module1.html        # Modul 1 Inhalt
│   ├── module2.html        # Modul 2 Inhalt
│   ├── module3.html        # Modul 3 Inhalt
│   └── module4.html        # Modul 4 Inhalt
├── assets/
│   ├── ai-medical-analysis.png
│   ├── ai-ml-hierarchy.png
│   └── llm-workflow.png
├── downloads/
│   ├── LLMsTumordokuArtikel.pdf
│   ├── penda_studyreport.pdf
│   ├── ethicsinAIHealth.pdf
│   └── TIMEStudy_Deskilling.pdf
└── README.md               # Diese Datei
```

### Technologie-Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS mit Charlotte Fresenius Corporate Design
- **Storage:** LocalStorage für Fortschrittsspeicherung
- **Responsive:** Mobile-first Design Approach

### Browser-Kompatibilität
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Pädagogisches Konzept

### Lernmethodik
- **Interaktives Lernen:** Kombination aus Theorie und Praxis
- **Case-Based Learning:** Reale Fallbeispiele aus der medizinischen Praxis
- **Progressive Disclosure:** Aufbauende Komplexität über die Module
- **Assessment-Driven:** Regelmäßige Lernzielkontrollen

### Zeitplanung
- **Gesamtdauer:** ~2 Stunden
- **Modulzeit:** Je ~30 Minuten
- **Flexibilität:** Pausierung und Fortsetzung jederzeit möglich

## Support und Wartung

### Häufige Probleme
1. **Module laden nicht:** HTTP-Server verwenden, nicht file:// Protokoll
2. **Fortschritt nicht gespeichert:** LocalStorage im Browser aktivieren
3. **Zertifikat nicht generiert:** Alle Module mit mindestens 60% abschließen

### Anpassungen
- **Inhalte:** Module HTML-Dateien bearbeiten
- **Styling:** CSS-Datei anpassen
- **Fragen:** JavaScript-Datei für Assessment-Logik

## Lizenz und Copyright

© 2025 Charlotte Fresenius Hochschule - University of Psychology

Dieser Kurs wurde entwickelt für die Ausbildung in den Grundlagen der LLM/AI-Verwendung in der Medizin.

## Kontakt

Für Fragen oder Support wenden Sie sich an die Charlotte Fresenius Hochschule.

---

**Viel Erfolg beim Lernen!** 🎓

