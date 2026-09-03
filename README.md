# 🚀 CentraleTech — Portail de Recrutement & Vitrine des Pôles (2026-2027)

> **École Centrale Casablanca** — *The new road to your TECH-PRO world*  
> Présidence du Club : **Anwar Mounir** (Mandat 2026-2027)

Bienvenue sur le dépôt du site vitrine et portail de recrutement de **CentraleTech**, le Hub d'Innovation & de Prototypage de l'École Centrale Casablanca.

Ce site a été conçu pour présenter aux élèves-ingénieurs (en particulier la nouvelle promotion 1A et les 2A) la vision du mandat 2026-2027, la gouvernance du club et l'ensemble des **4 Pôles Techniques** ouverts aux candidatures.

---

## 🛠️ Les 4 Pôles Techniques Ouverts au Recrutement

| Pôle | Leads & Mentors | Spécialités & Chantiers Clés | Stack Technique |
| :--- | :--- | :--- | :--- |
| **🤖 Robotique & FabLab** | Ahmad Moubarak TIEMTORE (Lead)<br>Yahya BARHOUN (Co-Lead)<br>Imane EL BANNOUNI | Conception CAO, Impression 3D / Découpe Laser, PCB KiCAD, Filtres de Kalman, Compétitions Nationales & TechDay | ROS 2, C/C++, Python, KiCAD, SolidWorks, Fusion 360, STM32 |
| **🧠 Data & IA** | Mouad EL KHAILI (Lead)<br>Allaoui Mohamed El MEHDI (Co-Lead)<br>Mame Lesse FAYE, Hadri Ahmed AMINE, Sennah HAMZA | Séries temporelles (ARIMA, LSTM), Modèles prédictifs boursiers, Pipelines RAG, Datathons & Hackathons IA | Python, PyTorch, TensorFlow, Scikit-Learn, LangChain, Hugging Face |
| **💻 Design & Dev Web** | Aymen LAOUINA (Lead)<br>Zhour MESKOUR (Co-Lead)<br>Cheikh Ahmed Tidiane Sarr NDIAYE | Plateforme boursière temps réel (Mock Trading), WebSockets, Sprints Open-Source, Design Systems & UI/UX | TypeScript, React, Next.js, Node.js, WebSockets, TailwindCSS, Figma |
| **🛡️ Cybersécurité** | Elise COULIBALY (Lead)<br>Imad ZOUHAIR (Co-Lead)<br>Yeints Andi LANKOUANDE, Ivan Emmanuel MALEU | Sécurité offensive & défensive, Compétitions CTF (Capture The Flag), Pentesting OWASP, Audits de code, Hardening | Kali Linux, Wireshark, Burp Suite, Metasploit, Ghidra, Docker |

---

## ⚡ Bouton Placeholder de Candidature : Comment brancher le vrai formulaire

Le site est équipé d'un système intelligent de bouton de candidature.

Dans `app.js`, à la ligne 12, se trouve la configuration globale :

```javascript
window.APPLICATION_CONFIG = {
  isLive: false, // Passer à true dès que le formulaire est prêt !
  formUrl: 'https://forms.gle/CentraleTechCandidature2026', // Coller le lien réel du Google Form ici
  mandateYear: '2026-2027'
};
```

- **Tant que `isLive: false`** : Un clic sur n'importe quel bouton de candidature (*Postuler au Club*, *Rejoindre la Robotique*, etc.) ouvre une boîte de dialogue interactive *"Candidatures Bientôt Ouvertes"* avec notification prioritaire pour les candidats.
- **Dès que `isLive: true`** : Tous les boutons redirigent instantanément et directement vers le lien de candidature Google Form ou Typeform fourni !

---

## 🖥️ Lancement en Local

Le site est 100% autonome et n'a aucune dépendance logicielle lourde :

### Option A : Double-clic
Ouvrir directement `index.html` dans n'importe quel navigateur moderne (Chrome, Edge, Firefox, Safari).

### Option B : Serveur Python
```bash
python -m http.server 8080
```
Puis se rendre sur [http://localhost:8080](http://localhost:8080).

### Option C : Serveur Node
```bash
npx serve .
```

---

## 📁 Structure du Projet

```
centraletech-recruitment-web/
├── index.html                  # Structure sémantique & composants interactifs
├── styles.css                  # Design system glassmorphism, thèmes de pôles, responsive
├── app.js                      # Moteur interactif, canvas animé, gestion de la modale
├── README.md                   # Documentation complète
├── .gitignore                  # Fichiers exclus de git
└── assets/
    └── images/
        ├── organigramme_hd.jpg # Organigramme complet nominatif 26-27 (4K)
        ├── organigramme_complet.png
        ├── poles/
        │   ├── pole_robotique.png
        │   ├── pole_data_ia.png
        │   ├── pole_dev_web.png
        │   └── pole_cybersecurite.png
        └── team/
            ├── bureau_executif.png
            ├── pole_communication.png
            └── pole_prospection_logistique.png
```

---
© 2026-2027 CentraleTech — École Centrale Casablanca. Tous droits réservés.
