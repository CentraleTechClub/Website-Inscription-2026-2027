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

## ⚡ Formulaire Officiel de Candidature

Le formulaire de candidature pour le mandat 2026-2027 est branché en direct sur la plateforme :

- **Lien officiel :** [Microsoft Forms CentraleTech](https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=eF-Del-2XEmV2BIjjDk9eiSMIvigBCxFiZrnXrNQQRRUOVRHVVczU0ZSNFU5RkdISkM4Szc0VDZQSy4u)
- **QR Code mobile :** Disponible dans `assets/images/qr_code_candidature.png` et affiché sur la bannière d'inscription.
- **Configuration dans `app.js` :** `window.APPLICATION_CONFIG.isLive = true`. Tous les boutons du site redirigent directement vers le formulaire.

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
