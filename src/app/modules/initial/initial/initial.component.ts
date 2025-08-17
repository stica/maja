import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Mailjet from 'node-mailjet';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InitialComponent {
  title = 'maja_tica';

  emailForm = this._formBuilder.group({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  private selectedCountryCode: string | null;
  private _mailjet: Mailjet;

  get languageSelected(): string {
    return this.selectedCountryCode ?? 'rs';
  }

  get seminarsFestivals(): string {
    switch(this.languageSelected) {
      case 'gb' :
        return 'Seminars and Festivals';
      case 'rs' :
        return 'Seminari i festivali';
      case 'de' :
        return 'Seminare und Festivals'
      default:
        return '';
    }
  }

  get home(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Home';
      case 'rs':
        return 'Početna';
      case 'de':
        return 'Startseite';
      default:
        return '';
    }
  }

  get about(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Biography';
      case 'rs':
        return 'Biografija';
      case 'de':
        return 'Biographie';
      default:
        return '';
    }
  }

  get portfolio(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Portfolio';
      case 'rs':
        return 'Portfolio';
      case 'de':
        return 'Portfolio';
      default:
        return '';
    }
  }

  get ytportfolio(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'YT Portfolio';
      case 'rs':
        return 'YT Portfolio';
      case 'de':
        return 'YT Portfolio';
      default:
        return '';
    }
  }

  get contact(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Contact';
      case 'rs':
        return 'Kontakt';
      case 'de':
        return 'Kontakt';
      default:
        return '';
    }
  }
  get name(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Name';
      case 'rs':
        return 'Ime';
      case 'de':
        return 'Name'; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get profession(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Profession';
      case 'rs':
        return 'Profesija';
      case 'de':
        return 'Beruf';
      default:
        return '';
    }
  }

  get professionValue(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Composer, Arranger, Conductor';
      case 'rs':
        return 'Kompozitor, Aranžer, Dirigent';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get email(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Email';
      case 'rs':
        return 'Email';
      case 'de':
        return 'Email'; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get number(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Phone number';
      case 'rs':
        return 'Broj telefona';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get contactMe(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Contact';
      case 'rs':
        return 'Kontaktiraj';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get messageSent(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Your message has been sent. Thank you!';
      case 'rs':
        return 'Vaša poruka je poslana. Hvala Vam!';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get yourName(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Your Name';
      case 'rs':
        return 'Vaše ime';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get yourEmail(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Your email';
      case 'rs':
        return 'Vaše email';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get subject(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Email subject';
      case 'rs':
        return 'Email subjekt';
      case 'de':
        return ''; // Handle the case for 'de' as needed
      default:
        return '';
    }
  }

  get message(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Message';
      case 'rs':
        return 'Poruka';
      case 'de':
        return 'Nachricht'; // Provide German translation
      default:
        return '';
    }
  }

  get sendMessage(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Send message';
      case 'rs':
        return 'Pošalji poruku';
      case 'de':
        return 'Nachricht senden'; // Provide German translation
      default:
        return '';
    }
  }

  get nameError(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Name is required field, enter more than three characters';
      case 'rs':
        return 'Ime je obavezno polje, molimo unesite više od tri karaktera';
      case 'de':
        return 'Name ist ein Pflichtfeld, geben Sie mehr als drei Zeichen ein'; // Provide German translation
      default:
        return '';
    }
  }

  get emailError(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Email is required field';
      case 'rs':
        return 'Email je obavezno polje';
      case 'de':
        return 'E-Mail ist ein Pflichtfeld'; // Provide German translation
      default:
        return '';
    }
  }

  get subjectError(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Subject is required field';
      case 'rs':
        return 'Email subjekt je obavezno polje';
      case 'de':
        return 'Betreff ist ein Pflichtfeld'; // Provide German translation
      default:
        return '';
    }
  }

  get messageError(): string {
    switch (this.languageSelected) {
      case 'gb':
        return 'Message is required field';
      case 'rs':
        return 'Poruka je obavezno polje';
      case 'de':
        return 'Nachricht ist ein Pflichtfeld'; // Provide German translation
      default:
        return '';
    }
  }


  get about1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Maja (Matić) Tica was born in Subotica (Serbia) on June 23rd, 1986.';
      case 'rs':
        return 'Maja (Matić) Tica, rođena  је 23.6.1986. god. u Subotici (Srbija).';
      case 'de':
        return 'Maja (Matić) Tica wurde 1986 in Subotica (Serbien/ehem.Yugoslawien) geboren.';
      default:
        return '';
    }
  }

  get about2(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'She obtained her primary and secondary musical education at the Music School in Subotica, \n at the Departments of Theory and Piano. \n She continued her education at the Academy of Arts in Banja Luka (BiH) at the \n Department of Composition in the class of prof. Slobodan Atanacković. \n During her studies she held the position of a teaching assistant at the Department of Composition. \n July 2010. she graduated at the Academy of Arts in Banja Luka in the class \n of Prof. Tatjana Milošević Mijanović. \n That same year, she earned a Master degree in Composition at the Academy of Arts in Banja Luka.';
      case 'rs':
        return 'Osnovno i srednje muzičko obrazovanje stekla je u Muzičkoj školi u Subotici \n na odsecima Teorija i Klavir. \n Po završetku srednje škole upisuje se na Akademiju umjetnosti u Banjaluci (BiH) na \n Odsjeku za Кompoziciju u klasi prof. Slobodana Atanackovića. \n Tokom studija aktivno radi sa studentima na Odsjeku za kompoziciji kao demonstrator. \n Jula 2010. god. diplomirala je na Akademiji umjetnosti u Banjaluci u klasi \n Prof.Tatjane Milošević Mijanović. \n Iste godine počinje da radi u Muzičkoj školi „Vlado Milošević” u Banjaluci na predmetima  Klavir i Uvod u komponovanje';
      case 'de':
        return 'Die musikalische Grundausbildung und ihre Klavierspieltechniken erwarb sie am Musikgymnasium ihrer Heimatstadt. Im Jahr 2005 ging sie nach Banja Luka (Bosnien und Herzegowina) und studierte an der dortigen Akademie der Künste Komposition. 2010 absolvierte Maja Tica ihr Masterstudium bei Professorin Dr. Tatjana Milosevic-Mijanovic. Nach dem Studium arbeitete sie die nächsten 10 Jahre an einer Musikschule in Banja Luka als Klavier- und Kompositionslehrerin.';
      default:
        return '';
    }
  }

  get about3(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'In 2019, Maja Tica moves to Germany and works as a composer, arranger and conductor in the chamber jazz orchestra Wittenberg Big Band (Lutherstadt Wittenberg, Germany) \n From 2022 to 2025, she worked as a piano teacher at the Music School in Wittenberg.';
      case 'rs':
        return '2011. god. na Akademiji umjetnosti u Banjaluci stiče zvanje master Kompozicije.\n 2019. godine seli se u Nemačku i počinje sa radom kao kompozitor, aranžer i dirigent \n u kamernom Jazz orkestru Wittenberg Big Band  (Lutherstadt Wittenberg, Nemačka).\n Od 2022. do 2025. zaposlena kao nastavnik klavira u Muzičkoj školi u Wittenbergu.';
      case 'de':
        return '2019 wechselt Maja Tica erneut ihren Wohnort, dieses Mal zieht sie mit ihrer Familie nach Deutschland. Mitte 2020 beginnt sie ihre Tätigkeit in der Wittenberger Big Band (Lutherstadt Wittenberg) als Komponistin, Arrangeurin und Dirigentin. Von 2022 bis 2025 war sie an der Musikschule in Lutherstadt Wittenberg als Klavierlehrerin tätig.';
      default:
        return '';
    }
  }

  get about4(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'She collaborated with ensembles and musicians such as Banja Luka String Quartet (BiH),\n Trag Etno Group (BIH), Belcanto Chamber Ensemble (BIH), Banja Luka Philharmonic (BiH),\n Libertango Quintet (BIH), Kalamos Wind Quintet (Zagreb, CRO),\n Wittenberg Big Band (Lutherstadt Wittenberg, DE), Rever Saxophon Quartet (Wien, AUT), Veljko Klenkovski (FRA), Darya Dadykina (UA), Vitalii Kyianytsia (UA), Osvaldo Redondo Alfaro (CR).';
      case 'rs':
        return 'Sarađivala je sa ansamblima i muzičarima kao što su Banjalučki gudački kvartet (BiH), \n Etno grupa Trag (BIH), kamerni ansambl Belcanto (BIH), Banjalučka filharmonija (BiH), kvintet Libertango (BIH), \n duvački kvintet Kalamos (Zagreb,CRO), Wittenberg Big Band (Lutherstadt Wittenberg, DE),\n Rever Saxophon Quartet (Wien,AUT), Veljko Klenkovski (FRA), Darya Dadykina (UA), Vitalii Kyianytsia (UA), Osvaldo Redondo Alfaro (CR).';
      case 'de':
        return 'Um sich als Komponistin zu verwirklichen, arbeitet sie häufig mit Künstlern aus ihrem eigenen und anderen künstlerischen Bereichen zusammen. Auch die Zusammenarbeit mit verschiedenen Kammerensembles findet sie immer sehr inspirierend. Sie komponiert Konzertmusik, kurze Stücke für Fernsehen und Rundfunk, Werbe-Jingles, Musik für Dokumentarfilme und Theaterstücke.';
      default:
        return '';
    }
  }

  get about5(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '';
      case 'rs':
        return '';
      case 'de':
        return 'Maja Tica beteiligt sich sehr gerne an Projekten, die sich mit Bildung und kultureller Bereicherung junger Menschen befassen. Ihre Werke wurden bisher in Serbien, Bosnien und Herzegowina, Kroatien, Deutschland, Österreich und Costa Rica konzertant aufgeführt.';
      default:
        return '';
    }
  }

  get work(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Work';
      case 'rs':
        return 'Dela';
      case 'de':
        return 'Werke';
      default:
        return '';
    }
  }

  get listOfWorks(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Concert music';
      case 'rs':
        return 'Koncertna muzika';
      case 'de':
        return 'Konzertmusik';
      default:
        return '';
    }
  }

  get workItem1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Rukovet” for mixed choir, 2004';
      case 'rs':
        return '„Rukovet” za mešoviti hor, 2004';
      case 'de':
        return '„Rukovet” für gemischten Chor, 2004';
      default:
        return '';
    }
  }

  get workItem2(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Bells” for piano, 2005';
      case 'rs':
        return '„Zvona” za klavir, 2005';
      case 'de':
        return '„Bells für Klavier” 2005';
      default:
        return '';
    }
  }


  get workItem3(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Suite intervalika” for piano, 2005';
      case 'rs':
        return '„Svita intervalika” za klavir, 2005';
      case 'de':
        return '„Suite Intervalika” für Klavier, 2005';
      default:
        return '';
    }
  }

  get workItem4(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Nefteno cupe” for mixed choir, 2006';
      case 'rs':
        return '„Nefteno čupe” za mešoviti hor, 2006';
      case 'de':
        return '„Nefteno cupe” für gemischten Chor, 2006';
      default:
        return '';
    }
  }


  get workItem5(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Milica and the coin” song for soprano and vibraphone, 2006';
      case 'rs':
        return '„Milica i novčić” solo pesma za sopran i vibrafon, 2006';
      case 'de':
        return '„Milica and the Coin” für Sopran und Vibraphon, 2006';
      default:
        return '';
    }
  }

  get workItem6(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Kaleidoscope” Variations for flute, clarinet and piano, 2007';
      case 'rs':
        return '„Kaleidoskop” varijacije za flautu, klarinet i klavir, 2007';
      case 'de':
        return '„Kaleidoskop” Variationen für Flöte, Klarinette und Klavier, 2007';
      default:
        return '';
    }
  }

  get workItem7(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Manufacere” electronics, 2008';
      case 'rs':
        return '„Manufacere” elektronika, 2008';
      case 'de':
        return '„Manufacere” für Elektronik, 2008 ';
      default:
        return '';
    }
  }

  get workItem8(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Modallan” for string quartet, 2008';
      case 'rs':
        return '„Modallan” za gudački kvartet, 2008';
      case 'de':
        return '„Modallan” für Streichquartett, 2008';
      default:
        return '';
    }
  }

  get workItem9(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Four symphonic portraits” for piano and orchestra, 2009';
      case 'rs':
        return '„Četiri simfonijska portreta” 2009 za klavir i simfonijski orkestar';
      case 'de':
        return '„Vier symphonische Porträts” für Klavier und Orchester, 2009';
      default:
        return '';
    }
  }

  get workItem10(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Aedea” for symphonic orchestra-inspired by folk epic ”Mali Radojica”, 2010';
      case 'rs':
        return '„Aedea” za simfonijski orkestar, 2010';
      case 'de':
        return '„Aedea” für Symphonieorchester, inspiriert vom Volksepos „Mali Radojica” 2010';
      default:
        return '';
    }
  }

  get workItem11(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Bagzz” for violin, 2011';
      case 'rs':
        return '„Bagzz” za violinu, 2011';
      case 'de':
        return '„Bagzz” für Violine, 2011';
      default:
        return '';
    }
  }

  get workItem12(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Insectument” for mezzosoprano, violin, clarinet and percussions, 2011';
      case 'rs':
        return '„Insectument” za mecosopran, violinu, klarinet i udaraljke, 2011';
      case 'de':
        return '„Insectument” für Mezzosopran, Violine, Klarinette und Schlagzeug, 2011';
      default:
        return '';
    }
  }


  get workItem13(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Kalamos fuga” for reed quintet/dedicated to reed Quintet ”Kalamos”, 2017';
      case 'rs':
        return '„Kalamos fuga” za obou, klarinet, tenor saksofon, bas klarinet i fagot, 2017';
      case 'de':
        return '„Kalamos fuga” für Rohrblattquintett/dem Rohrblattquintett „Kalamos” gewidmet, 2017';
      default:
        return '';
    }
  }

  get workItem14(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Carousel” for saxophone quartet and electronics, 2017';
      case 'rs':
        return '„Ringišpil” za kvartet saksofona i elektroniku, 2017';
      case 'de':
        return '„Carousel” für Saxophonquartett und Elektronik, 2017 ';
      default:
        return '';
    }
  }

  get workItem15(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Evening forplays” for piano four hands, 2021';
      case 'rs':
        return '„Večernje predigre” za klavir četvororučno, 2021';
      case 'de':
        return '„Abendvorspiele” für Klavier zu vier Händen, 2021';
      default:
        return '';
    }
  }

  get workItem16(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”L’amour de Satie” for tenor and piano, 2025';
      case 'rs':
        return '„L’amour de Satie” za tenor i klavir, 2025';
      case 'de':
        return '„L’amour de Satie” für Tenor und Klavier, 2025';
      default:
        return '';
    }
  }

  get workItem17(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Tuning for Poulenc” for oboe, bassoon and piano, 2025';
      case 'rs':
        return '„Tuning for Poulenc” za obou, fagot i klavir, 2025';
      case 'de':
        return '„Tuning for Poulenc” für Oboe, Fagott und Klavier, 2025';
      default:
        return '';
    }
  }

  
  
  get seminars(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Seminars';
      case 'rs':
        return 'Seminari';
      case 'de':
        return 'Seminare';
      default:
        return '';
    }
  }

  get seminar1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '15th International review of Composers 2006, Belgrade\norg: Goethe Institute, lect: prof. Reinhard Febel';
      case 'rs':
        return 'XV medjunarodna tribina kompozitora 2006, Beograd\norg. Goethe Institut, pred: Prof. Reinhard Febel';
      case 'de':
        return 'XV Internationales Komponistenforum 2006, Belgrad\norganisiert von Goethe-Institut, Vortrag von Prof. Reinhard Febel.';
      default:
        return '';
    }
  } 
  
  get seminar2(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Cherain summer music school for Roma children 2009\norg: Music Academy, Banja Luka';
      case 'rs':
        return 'Cherain summer music school for Roma children, 2009.\norg. Akademija umjetnosti, Banja Luka';
      case 'de':
        return 'Cherain summer music school for Roma children, 2009\norganisiert von der Akademie der Künste, Banja Luka.';
      default:
        return '';
    }
  }

  get seminar3(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Electronic Music Course 2011, Belgrade\norg: Association of Composers of Serbia, lect: Marko Nikodijević';
      case 'rs':
        return 'Kurs elektronske muzike 2011, Beograd\norg. Udruženje kompozitora Srbije, pred: Marko Nikodijević';
      case 'de':
        return 'Kurs für elektronische Musik 2011, Belgrad\norganisiert von der Vereinigung der Komponisten Serbiens, unter der Leitung von Marko Nikodijević.';
      default:
        return '';
    }
  }

  get seminar4(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Masterclass 2017, Banja Luka\norg: German Embassy in BIH, lect: Nikolai Brücher';
      case 'rs':
        return 'Masterklas, 2017. Banja Luka\norg. Nemacka ambasada u BiH, pred. Nikolai Brücher';
      case 'de':
        return 'Meisterklasse, 2017, Banja Luka\norganisiert von der Deutschen Botschaft in Bosnien und Herzegowina, geleitet von Nikolai Brücher.';
      default:
        return '';
    }
  }


  get festivals(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Festivals';
      case 'rs':
        return 'Festivali';
      case 'de':
        return 'Festivals';
      default:
        return '';
    }
  }

  get festivals1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '"Lazar Jovanović" solo singer competition 2004, Belgrade\nChamber ensembles category, 2nd prize';
      case 'rs':
        return 'Takmičenje solo-pevača "Lazar Jovanović" 2004, Beograd\nKategorija kamernih sastava, II nagrada';
      case 'de':
        return 'Wettbewerb für Solosänger "Lazar Jovanović" 2004, Belgrad.\nKategorie Kammermusik, 2. Platz.';
      default:
        return '';
    }
  }

  get festivals2(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '1st prize in the Chamber ensembles 4th category at the 11th Chamber Music Festival in Subotica, 2004.';
      case 'rs':
        return 'Osvojena I nagrada u IV kategoriji kamernih sastava na 11.Festivalu kamerne muzike 2004. godine u Subotici.';
      case 'de':
        return '1. Platz in der Kategorie Kammermusik beim 11. Kammermusikfestival 2004 in Subotica.';
      default:
        return '';
    }
  }

  get festivals3(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Chamber Music Festival 2004, Subotica\nChamber ensembles category, 1st prize';
      case 'rs':
        return '11. Festival kamerne muzike 2004, Subotica\n Kategorija kamernih sastava, I nagrada';
      case 'de':
        return '11. Kammermusikfestival 2004, Subotica\nKategorie Kammermusik, 1. Platz';
      default:
        return '';
    }
  }

  get festivals4(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '10th Musical Skills Tournament 2009, Kragujevac';
      case 'rs':
        return '10. Turnir muzičkih veština studenata muzičkih Akademija 2009, Kragujevac';
      case 'de':
        return '10. Turnier der musikalischen Fähigkeiten von Studenten der Musikhochschulen 2009, Kragujevac';
      default:
        return '';
    }
  }

  get festivals5(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '20th International review of Composers 2011, Belgrade ';
      case 'rs':
        return '20. Međunarodna tribina kompozitora 2011, Beograd';
      case 'de':
        return '20. Internationales Komponistenforum 2011, Belgrad';
      default:
        return '';
    }
  }

  get festivals6(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'International Piano Competition "ULJUS" 2021, Smederevo\nComposition category, 2nd prize';
      case 'rs':
        return 'VIII Internacionalno pijanističko takmičenje "ULJUS" 2021, Smederevo\nKategorija kompozicija, II nagrada';
      case 'de':
        return '8. Internationales Klavierwettbewerb "ULJUS" 2021, Smederevo\nKategorie Komposition, 2. Platz';
      default:
        return '';
    }
  }

  get movie(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Music for film';
      case 'rs':
        return 'Filmska muzika';
      case 'de':
        return 'Filmmusik';
      default:
        return '';
    }
  }

  get movie1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Shine in the darkness” documentary\nDirector: Nemanja Mirković, 2007';
      case 'rs':
        return '„Sjaj u tami” dokumentarni film – izbor muzike\nRežija: Nemanja Mirković, 2007';
      case 'de':
        return '„Shine in the Darkness” Dokumentarfilm\nRegie: Nemanja Mirković, 2007';
      default:
        return '';
    }
  }
  

  get movie2(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Breath of life” documentary\nDirector: Snježana Brezo, 2013';
      case 'rs':
        return '„Dah života” dokumentarni film – autorska muzika\nRežija: Snježana Brezo, 2013';
      case 'de':
        return '„Atem des Lebens” Dokumentarfilm\nRegie: Snježana Brezo, 2013';
      default:
        return '';
    }
  }

  get movie3(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Angel´s tears” documentary\nDirector: Snježana Brezo, 2018';
      case 'rs':
        return '„Suze anđela” dokumentarni film – izbor muzike\nRežija: Snježana Brezo, 2018';
      case 'de':
        return '„Engelstränen” Dokumentarfilm\nRegie: Snježana Brezo, 2018';
      default:
        return '';
    }
  }

  get theater(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Theater music';
      case 'rs':
        return 'Pozorišna muzika';
      case 'de':
        return 'Theatermusik';
      default:
        return '';
    }
  }

  get theater1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Traveling theater Šopalović " National Theater of Republika Srpska, Banja Luka\nWriter: Ljubomir Simović\nDirector: Vladimir Lazić, 2011';
      case 'rs':
        return '„Putujuće pozorište Šopalović” – autorska muzika\nAutor: Ljubomir Simović\nRežija: Vladimir Lazić\nNarodno pozorište Republike Srpske, Banja Luka, 2011';
      case 'de':
        return '„Putujuće pozorište Šopalović”\nAutor: Ljubomir Simović\nRegie: Vladimir Lazić\nNationaltheater Republike Srpske - Banja Luka, 2011';
      default:
        return '';
    }
  }

  get fieldWorks(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Field works';
      case 'rs':
        return 'Stručni radovi';
      case 'de':
        return 'Feldarbeiten';
      default:
        return '';
    }
  }

  get fieldWork1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Particello of the compositions ”Visant concert” and ”Oktoiha” by Ljubica Marić, 2011';
      case 'rs':
        return 'Partičelo orkestarskih kompozicija „Vizantijski koncert” i „Oktoiha” Ljubice Marić, 2011';
      case 'de':
        return 'Particello der Orchesterkompositionen „Vizantijski koncert” und „Oktoiha” von Ljubica Marić, 2011';
      default:
        return '';
    }
  }

  get orcestrations(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return 'Orchestration and arrangements:';
      case 'rs':
        return 'Orkestracija i aranžmani:';
      case 'de':
        return 'Arrangements und Orchestrierung:';
      default:
        return '';
    }
  }

  get orcestration1(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Three songs from Serbia” for female vocal duo and orchestra, 2022';
      case 'rs':
        return '„Tri pesme iz Srbije” za ženski vokalni duo i orkestar, 2022';
      case 'de':
        return '„Drei Lieder aus Serbien” für weibliches Gesangsduo und Orchester, 2022';
      default:
        return '';
    }
  }

  get orcestration2(): string {
    switch (this.selectedCountryCode) {
      case 'gb':
        return '”Splet bunjevačkih pesama” for female vocal and three-part mixed choir, 2023';
      case 'rs':
        return '„Splet bunjevačkih pesama” za ženski glas i mešoviti troglasni hor, 2023';
      case 'de':
        return '„Splet bunjevačkih pesama” für Frauenstimme und gemischten dreistimmigen Chor, 2023';
      default:
        return '';
    }
  }

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
  ) {
    this.selectedCountryCode = localStorage.getItem('countryCode');
    if (this.selectedCountryCode === null) {
      this.selectedCountryCode = 'de'
    }

    this._mailjet = new Mailjet({
      apiKey: 'edf177de6afcce0ebdd8a3194866aa27',
      apiSecret: '52d51178782cae5475c6056e5b5397af'
    });
  }

  selectLanguage(countryCode: string) {
    this.selectedCountryCode = countryCode;
    localStorage.setItem('countryCode', countryCode);
    this._changeDetectorRef.detectChanges();
  }

  sendEmail() {
    console.log(this.emailForm.value);

    const request = this._mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: this.emailForm.value.email,
              Name: this.emailForm.value.name
            },
            To: [
              {
                Email: "tica.srdjana@yahoo.com",
                Name: "Maja Tica"
              }
            ],
            Subject: this.emailForm.value.subject,
            TextPart: this.emailForm.value.message,
            HTMLPart: ""
          }
        ]
      })

    request
      .then((result: any) => {
        console.log(result.body)
      })
      .catch((err: any) => {
        console.log(err.statusCode)
      })
  }
}
