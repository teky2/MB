/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter, Character, Parva, WarDay } from '../types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'origin',
    spokeIndex: 0,
    title: 'THE ORIGIN',
    hindiTitle: 'वंशोत्पत्ति',
    subtitle: 'The River and The Throne',
    epoch: 'Treta-Dvapara Twilight',
    summary: 'The celestial descent of King Shantanu, the sacred waters of Goddess Ganga, and the birth of Devavrata, whose devotion would shape the destiny of Aryavarta.',
    philosophicalEssence: 'Destiny weaves through desires; kingdoms rise not on strength alone, but upon the oaths sworn in silence.',
    environment: 'cosmic',
    soundscape: 'drone',
    keyQuote: {
      hindi: 'नदियाँ अपना मार्ग नहीं भूलतीं, और नियति अपना हिसाब।',
      english: 'Rivers never forget their path, and destiny never forgets its debt.',
      speaker: 'Ganga'
    }
  },
  {
    id: 'bhishma_pratigya',
    spokeIndex: 1,
    title: 'BHISHMA PRATIGYA',
    hindiTitle: 'भीष्म प्रतिज्ञा',
    subtitle: 'The Terrible Vow of Renunciation',
    epoch: 'Hastinapur Court',
    summary: 'To fulfill his father Shantanu\'s unrequited love for Satyavati, Prince Devavrata renounces his crown and takes an unbreakable vow of lifelong celibacy, forever earning the name Bhishma.',
    philosophicalEssence: 'When loyalty to a promise eclipses righteousness toward the cosmos, righteousness itself is held hostage.',
    environment: 'palace',
    soundscape: 'sabha',
    keyQuote: {
      sanskrit: 'अपि त्रैलोक्यराज्यस्य हेतोः शंसामि ते नृप। न कामये महीपाल सत्येन च शपे विभो॥',
      hindi: 'चाहे तीनों लोकों का राज्य मिले, मैं सिंहासन और संतान दोनों का त्याग करता हूँ।',
      english: 'Even for sovereignty over the three realms, I shall never claim the throne nor father an heir.',
      speaker: 'Bhishma'
    }
  },
  {
    id: 'draupadi_swayamvar',
    spokeIndex: 2,
    title: 'DRAUPADI SWAYAMVAR',
    hindiTitle: 'द्रौपदी स्वयंवर',
    subtitle: 'The Piercing of the Matsya Yantra',
    epoch: 'Panchala Kingdom',
    summary: 'Disguised as Brahmins in hiding, Arjuna pierces the revolving eye of the golden fish looking only at its water reflection, claiming the fire-born princess Draupadi.',
    philosophicalEssence: 'Single-pointed concentration pierces illusion; focus is the bow, truth is the arrow.',
    environment: 'palace',
    soundscape: 'sabha',
    keyQuote: {
      hindi: 'जिसकी दृष्टि केवल लक्ष्य पर है, उसके लिए जल की परछाई भी आकाश बन जाती है।',
      english: 'To one whose gaze is fixed purely upon the mark, even a pool of water becomes the firmament.',
      speaker: 'Drupada'
    }
  },
  {
    id: 'indraprastha',
    spokeIndex: 3,
    title: 'INDRAPRASTHA & MAYA SABHA',
    hindiTitle: 'इन्द्रप्रस्थ एवं मयसभा',
    subtitle: 'The City of Miracles & Illusions',
    epoch: 'Khandavaprastha Transformed',
    summary: 'Granted a barren, scorched wilderness, the Pandavas summon Maya Danava to erect Indraprastha—a marvel of celestial engineering where water mimicked marble and floors reflected stars.',
    philosophicalEssence: 'The illusion of possession blinds the envious; what one builds with love, another covets with wrath.',
    environment: 'palace',
    soundscape: 'sabha',
    keyQuote: {
      hindi: 'जहाँ जल था, वहाँ भ्रम था; जहाँ भ्रम था, वहाँ अहंकार की हंसी थी।',
      english: 'Where there was water, there was illusion; where there was illusion, the laughter of pride echoed.',
      speaker: 'Narrator'
    }
  },
  {
    id: 'dyut_sabha',
    spokeIndex: 4,
    title: 'DYUT SABHA',
    hindiTitle: 'द्यूत सभा',
    subtitle: 'The Silence of the Elders',
    epoch: 'Hastinapur Royal Assembly',
    summary: 'Shakuni\'s loaded dice strip the Pandavas of wealth, kingdom, brothers, and freedom. When Draupadi is dragged into the assembly, the honored elders remain mute witnesses to dharma\'s desecration.',
    philosophicalEssence: 'A kingdom falls not by the wickedness of the cruel, but by the calculated silence of the wise.',
    environment: 'palace',
    soundscape: 'sabha',
    keyQuote: {
      hindi: 'सभा वही है जहाँ वृद्ध हों, और वृद्ध वे हैं जो धर्म का निर्णय करें। जो मौन रहे, वह सभा धर्महीन है।',
      english: 'An assembly exists where elders sit, and elders are those who speak righteousness. He who stays silent aids adharma.',
      speaker: 'Draupadi'
    }
  },
  {
    id: 'vanvas',
    spokeIndex: 5,
    title: 'VANVAS & AJNYATAVAS',
    hindiTitle: 'वनवास एवं अज्ञातवास',
    subtitle: 'Twelve Years of Ash, One Year of Shadow',
    epoch: 'Dwaitavana & Matsya Desha',
    summary: 'Twelve years in the harsh wilderness forged the Pandavas into ascetic warriors, followed by the thirteenth year living disguised in King Virata\'s palace under constant mortal peril.',
    philosophicalEssence: 'Suffering is the furnace where arrogance burns and the blade of endurance is tempered.',
    environment: 'battlefield',
    soundscape: 'wind',
    keyQuote: {
      hindi: 'धूप, धूल और वनों की अग्नि ने हमें राजा नहीं, तपस्वी बना दिया।',
      english: 'The sun, the dust, and the forest fire made us not kings, but ascetic seekers of truth.',
      speaker: 'Yudhishthira'
    }
  },
  {
    id: 'krishna_peace',
    spokeIndex: 6,
    title: "KRISHNA'S PEACE MISSION",
    hindiTitle: 'कृष्ण का शांति प्रस्ताव',
    subtitle: 'Five Villages for Peace',
    epoch: 'Hastinapur Council',
    summary: 'Krishna walks into the Kaurava court seeking only five villages to prevent global carnage. Duryodhana refuses even land equal to a needle\'s point and attempts to bind the Lord in chains.',
    philosophicalEssence: 'When pride refuses reconciliation, catastrophe is no longer a possibility—it becomes inevitable.',
    environment: 'palace',
    soundscape: 'sabha',
    keyQuote: {
      hindi: 'सूच्यग्रं नैव दास्यामि बिना युद्धेन केशव।',
      english: 'I shall not part with land the measure of a needle\'s tip without war, O Keshava.',
      speaker: 'Duryodhana'
    }
  },
  {
    id: 'kurukshetra',
    spokeIndex: 7,
    title: 'KURUKSHETRA',
    hindiTitle: 'कुरुक्षेत्र समरांगण',
    subtitle: 'The Field of Dharma and Destiny',
    epoch: 'Dharmakshetra Kurukshetra',
    summary: 'Eighteen Akshauhinis assemble upon the sacred plains of Kurukshetra. Kin faces kin, teachers face disciples, and the earth groans under the weight of destined annihilation.',
    philosophicalEssence: 'War is never fought outside before it has already devoured the human conscience within.',
    environment: 'battlefield',
    soundscape: 'battlefield',
    keyQuote: {
      sanskrit: 'धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥',
      hindi: 'हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे और पाण्डु के पुत्रों ने क्या किया?',
      english: 'O Sanjaya, assembled on the sacred plain of Kurukshetra eager to fight, what did my sons and the sons of Pandu do?',
      speaker: 'Dhritarashtra'
    }
  },
  {
    id: 'bhagavad_gita',
    spokeIndex: 8,
    title: 'BHAGAVAD GITA',
    hindiTitle: 'श्रीमद्भगवद्गीता',
    subtitle: 'The Song of Eternity Amidst Chaos',
    epoch: 'Between the Two Armies',
    summary: 'As Arjuna collapses in moral anguish seeing beloved grandsires and kinsmen across the lines, Krishna pauses mortal time to impart the ultimate wisdom of selfless action and cosmic reality.',
    philosophicalEssence: 'Act with devotion without clinging to the fruit; you are only the instrument of the cosmos.',
    environment: 'divine',
    soundscape: 'gita',
    keyQuote: {
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      hindi: 'तुम्हारा अधिकार केवल कर्म पर है, उसके फलों पर कभी नहीं। कर्म के फल की आसक्ति मत रखो, न ही अकर्मण्यता चुनो।',
      english: 'You have a right only to perform your duty, never to its fruits. Let not the fruit of action be your motive, nor cling to inaction.',
      speaker: 'Shri Krishna'
    }
  },
  {
    id: 'abhimanyu',
    spokeIndex: 9,
    title: 'ABHIMANYU — CHAKRAVYUHA',
    hindiTitle: 'अभिमन्यु और चक्रव्यूह',
    subtitle: 'Into the Concentric Maze of Death',
    epoch: 'Day 13 of the Great War',
    summary: 'A sixteen-year-old warrior breaches Drona\'s invincible circular formation alone, knowing only the path to enter. Trapped inside against seven Maharathis, he battles till his last breath with a broken chariot wheel.',
    philosophicalEssence: 'Some battles are fought not because victory is assured, but because courage demands standing tall when darkness surrounds.',
    environment: 'battlefield',
    soundscape: 'chakravyuha',
    keyQuote: {
      hindi: 'मैं चक्रव्यूह में प्रवेश करना जानता हूँ तात, बाहर निकलना नहीं। पर पीछे हटना मेरे कुल का धर्म नहीं।',
      english: 'I know how to breach the labyrinth, revered uncle, not how to exit. But retreat has never been the dharma of my bloodline.',
      speaker: 'Abhimanyu'
    }
  },
  {
    id: 'bhishma_fall',
    spokeIndex: 10,
    title: "BHISHMA'S FALL",
    hindiTitle: 'शरशय्या पर पितामह',
    subtitle: 'The Bed of Thousand Arrows',
    epoch: 'Day 10 Sunset',
    summary: 'Arjuna, shielded by Shikhandi, releases a storm of arrows that brings down the unconquered grandsire. Suspended on a bed of arrows, Bhishma awaits the auspicious Uttarayana sun to surrender his life breath.',
    philosophicalEssence: 'Even the greatest pillar of tradition must fall when it shields righteousness with complicity.',
    environment: 'sunset',
    soundscape: 'drone',
    keyQuote: {
      hindi: 'अर्जुन के बाण मुझे चुभते नहीं, वे तो मेरे थके हुए शरीर को शय्या दे रहे हैं।',
      english: 'Arjuna\'s arrows do not wound me; they grant rest to an old warrior who carried the weight of an empire too long.',
      speaker: 'Bhishma'
    }
  },
  {
    id: 'karna',
    spokeIndex: 11,
    title: 'KARNA',
    hindiTitle: 'दानवीर कर्ण',
    subtitle: 'The Sun Sets on the Uncrowned King',
    epoch: 'Day 17 Sunset',
    summary: 'Cursed by nature, abandoned by birth, stripped of celestial armor by Indra, and betrayed by his chariot wheel stuck in the earth, the tragic son of Surya faces his brother Arjuna in their final duel.',
    philosophicalEssence: 'Fate may deny you legitimacy, friendship may demand your destruction, yet nobility of spirit remains your own choice.',
    environment: 'sunset',
    soundscape: 'battlefield',
    keyQuote: {
      hindi: 'मित्रता का मूल्य मैंने अपने प्राणों से चुकाया है केशव। क्या यही मेरी नियति नहीं थी?',
      english: 'I have paid the price of friendship with my mortal breath, Keshava. Was this not the fate written on my brow?',
      speaker: 'Karna'
    }
  },
  {
    id: 'duryodhana_fall',
    spokeIndex: 12,
    title: "DURYODHANA'S FALL",
    hindiTitle: 'दुर्योधन का अंत',
    subtitle: 'The Muffled Thud of the Gada',
    epoch: 'Day 18 Twilight at Dvaipayana Lake',
    summary: 'The last survivor of the Kaurava brothers hides beneath the waters of Dvaipayana Lake. Confronted by Bhima in an earth-shattering mace duel, the king falls, his thighs shattered as retribution for Dyut Sabha.',
    philosophicalEssence: 'The throne forged in defiance of dharma crumbles into the mud from whence all mortals come.',
    environment: 'sunset',
    soundscape: 'battlefield',
    keyQuote: {
      hindi: 'मैंने एक राजा की तरह जिया, और एक क्षत्रिय की तरह वीरगति पा रहा हूँ। शोक मुझे नहीं, तुम्हें होगा।',
      english: 'I lived as a sovereign king, and I fall as a warrior upon the battlefield. Weep not for me, but for the wasteland you inherit.',
      speaker: 'Duryodhana'
    }
  },
  {
    id: 'the_end',
    spokeIndex: 13,
    title: 'THE END OF WAR',
    hindiTitle: 'महासंहार का सन्नाटा',
    subtitle: 'Ashwatthama\'s Night Raid & Gandhari\'s Curse',
    epoch: 'Midnight of Day 18',
    summary: 'Ashwatthama slaughters the sleeping Pandava camp in vengeance. The morning reveals a charnel ground of millions. Queen Gandhari gazes upon the ashes of her hundred sons and curses Krishna.',
    philosophicalEssence: 'In total war, there are no victors—only survivors standing in a graveyard of their own making.',
    environment: 'battlefield',
    soundscape: 'wind',
    keyQuote: {
      hindi: 'यदि मेरा सतीत्व सत्य है कृष्ण, तो जिस प्रकार तुमने मेरे कुल का संहार देखा, उसी प्रकार तुम्हारा यादव कुल भी परस्पर लड़कर नष्ट होगा।',
      english: 'If my devotion is pure, Krishna, then just as you watched my sons perish, so shall your own clan slaughter one another into oblivion.',
      speaker: 'Gandhari'
    }
  },
  {
    id: 'final_journey',
    spokeIndex: 14,
    title: 'THE FINAL JOURNEY',
    hindiTitle: 'महाप्रस्थान',
    subtitle: 'Ascent into the Timeless Snows',
    epoch: 'Himalayan Swargarohana',
    summary: 'Years later, after Krishna\'s departure, the aging Pandavas and Draupadi renounce Hastinapur and ascend Mount Meru. One by one they fall due to subtle mortal flaws, leaving only Yudhishthira and a loyal dog to reach heaven\'s gate.',
    philosophicalEssence: 'Even the righteous must shed their attachments before entering eternity; loyalty to the vulnerable outlives all crowns.',
    environment: 'himalayan',
    soundscape: 'wind',
    keyQuote: {
      hindi: 'यह कुत्ता मेरा साथी रहा है जब सबने साथ छोड़ दिया। इसके बिना मैं स्वर्ग में पैर नहीं रखूँगा।',
      english: 'This hound has walked with me when all others fell. Without him, I shall not step into the gates of paradise.',
      speaker: 'Yudhishthira'
    }
  }
];

export const PARVAS: Parva[] = [
  {
    number: 1,
    name: 'Adi Parva',
    devanagari: 'आदि पर्व',
    englishMeaning: 'The Book of the Beginning',
    chaptersCount: 236,
    shlokasCount: 8884,
    synopsis: 'Introduces the genesis of the Bharata dynasty, the ocean churning, the curse on King Parikshit, the birth of the Kuru princes, and the building of Indraprastha.',
    pivotalMoment: 'Devavrata\'s unbreakable vow of celibacy and the burning of Khandava forest.',
    prominentFigures: ['Shantanu', 'Ganga', 'Satyavati', 'Bhishma', 'Drona', 'Pandu', 'Dhritarashtra']
  },
  {
    number: 2,
    name: 'Sabha Parva',
    devanagari: 'सभा पर्व',
    englishMeaning: 'The Book of the Assembly Hall',
    chaptersCount: 81,
    shlokasCount: 2511,
    synopsis: 'Erection of the Maya Sabha, the Rajasuya sacrifice of Yudhishthira, Shishupala\'s demise, the rigged game of dice, and the disrobing of Draupadi.',
    pivotalMoment: 'Shakuni rolling the loaded dice and Draupadi challenging the dharma of the Hastinapur elders.',
    prominentFigures: ['Yudhishthira', 'Shakuni', 'Duryodhana', 'Draupadi', 'Krishna', 'Bhishma']
  },
  {
    number: 3,
    name: 'Vana Parva',
    devanagari: 'वन पर्व',
    englishMeaning: 'The Book of the Forest (Aranyaka)',
    chaptersCount: 315,
    shlokasCount: 11664,
    synopsis: 'The twelve years of forest exile. Contains philosophical discourses, Arjuna\'s penance for divine weapons (Pashupatastra), and the Yaksha Prashna.',
    pivotalMoment: 'Yudhishthira answering the enigmatic riddles of Dharma disguised as a crane at the enchanted pool.',
    prominentFigures: ['Yudhishthira', 'Arjuna', 'Yaksha / Dharma', 'Sage Markandeya', 'Jayadratha']
  },
  {
    number: 4,
    name: 'Virata Parva',
    devanagari: 'विराट पर्व',
    englishMeaning: 'The Book of Virata (Ajnyatavasa)',
    chaptersCount: 72,
    shlokasCount: 2050,
    synopsis: 'The thirteenth year of exile spent disguised in King Virata\'s court. The slaying of Kichaka by Bhima and Arjuna single-handedly defending the cattle of Virata.',
    pivotalMoment: 'Arjuna revealing his true identity as Brihannala by stringing Gandiva and unleashing the Sammohana weapon.',
    prominentFigures: ['Brihannala (Arjuna)', 'Kanka (Yudhishthira)', 'Ballava (Bhima)', 'Sairandhri (Draupadi)', 'Uttara']
  },
  {
    number: 5,
    name: 'Udyoga Parva',
    devanagari: 'उद्योग पर्व',
    englishMeaning: 'The Book of Effort / Mobilization',
    chaptersCount: 196,
    shlokasCount: 6698,
    synopsis: 'Both sides assemble their armies and allies. Krishna offers himself unarmed or his million Narayani soldiers. Krishna\'s diplomatic peace mission to Hastinapur.',
    pivotalMoment: 'Krishna revealing his cosmic form in the Hastinapur court when Duryodhana attempts to arrest him.',
    prominentFigures: ['Krishna', 'Sanjaya', 'Vidura', 'Duryodhana', 'Karna', 'Kunti']
  },
  {
    number: 6,
    name: 'Bhishma Parva',
    devanagari: 'भीष्म पर्व',
    englishMeaning: 'The Book of Bhishma',
    chaptersCount: 122,
    shlokasCount: 5884,
    synopsis: 'The first ten days of the Kurukshetra war under the supreme command of Bhishma. Contains the entire 700 verses of the Bhagavad Gita.',
    pivotalMoment: 'Bhishma falling on the tenth sunset pierced by hundreds of arrows shot by Arjuna through Shikhandi.',
    prominentFigures: ['Bhishma', 'Arjuna', 'Krishna', 'Shikhandi', 'Duryodhana']
  },
  {
    number: 7,
    name: 'Drona Parva',
    devanagari: 'द्रोण पर्व',
    englishMeaning: 'The Book of Drona',
    chaptersCount: 203,
    shlokasCount: 8909,
    synopsis: 'Days 11 to 15 under Acharya Drona\'s command. Formation of the Chakravyuha, the tragic death of Abhimanyu, Arjuna\'s vow to slay Jayadratha before sunset, and Ghatotkacha\'s midnight sacrifice.',
    pivotalMoment: 'Drona laying down his weapons in grief upon hearing the news of Ashwatthama\'s supposed demise.',
    prominentFigures: ['Drona', 'Abhimanyu', 'Jayadratha', 'Ghatotkacha', 'Karna', 'Dhrishtadyumna']
  },
  {
    number: 8,
    name: 'Karna Parva',
    devanagari: 'कर्ण पर्व',
    englishMeaning: 'The Book of Karna',
    chaptersCount: 96,
    shlokasCount: 4964,
    synopsis: 'Days 16 and 17 under Karna\'s supreme command. Bhima drinks Dushasana\'s blood in fulfillment of his oath. The climactic duel between Arjuna and Karna.',
    pivotalMoment: 'Karna\'s chariot wheel sinking into the mud and Arjuna releasing the Anjalika arrow at Krishna\'s command.',
    prominentFigures: ['Karna', 'Shalya', 'Arjuna', 'Bhima', 'Dushasana', 'Krishna']
  },
  {
    number: 9,
    name: 'Shalya Parva',
    devanagari: 'शल्य पर्व',
    englishMeaning: 'The Book of Shalya',
    chaptersCount: 65,
    shlokasCount: 3220,
    synopsis: 'Day 18. Shalya becomes commander and is slain by Yudhishthira. Duryodhana retreats into Dvaipayana Lake. The fateful mace duel with Bhima.',
    pivotalMoment: 'Bhima shattering Duryodhana\'s thighs with his mace as Balarama looks on in outrage.',
    prominentFigures: ['Shalya', 'Yudhishthira', 'Duryodhana', 'Bhima', 'Balarama']
  },
  {
    number: 10,
    name: 'Sauptika Parva',
    devanagari: 'सौप्तिक पर्व',
    englishMeaning: 'The Book of the Sleeping Warriors',
    chaptersCount: 18,
    shlokasCount: 870,
    synopsis: 'Ashwatthama, Kripacharya, and Kritavarma launch a nocturnal massacre upon the sleeping Pandava encampment, slaying Dhrishtadyumna, Shikhandi, and the five sons of Draupadi.',
    pivotalMoment: 'Ashwatthama releasing the Brahmashirsha weapon towards the womb of Uttara and receiving Krishna\'s three-thousand-year curse.',
    prominentFigures: ['Ashwatthama', 'Kripacharya', 'Draupadi', 'Arjuna', 'Krishna']
  },
  {
    number: 11,
    name: 'Stri Parva',
    devanagari: 'स्त्री पर्व',
    englishMeaning: 'The Book of the Women',
    chaptersCount: 27,
    shlokasCount: 775,
    synopsis: 'The lamentations of Gandhari, Kunti, Draupadi, and the widowed women of Aryavarta over the corpse-strewn battlefield of Kurukshetra. Gandhari curses Krishna and the Yadava race.',
    pivotalMoment: 'Kunti breaking her lifelong silence to reveal to the weeping Pandavas that Karna was their eldest brother.',
    prominentFigures: ['Gandhari', 'Kunti', 'Draupadi', 'Dhritarashtra', 'Krishna']
  },
  {
    number: 12,
    name: 'Shanti Parva',
    devanagari: 'शांति पर्व',
    englishMeaning: 'The Book of Peace',
    chaptersCount: 365,
    shlokasCount: 14732,
    synopsis: 'The crowning of Yudhishthira and his deep grief. Bhishma, lying on his bed of arrows, delivers the longest philosophical discourse on Rajadharma (statecraft), ethics, and Mokshadharma.',
    pivotalMoment: 'Bhishma illuminating the subtle dimensions of duty and leadership to a sorrowful Yudhishthira.',
    prominentFigures: ['Bhishma', 'Yudhishthira', 'Krishna', 'Vyasa', 'Narada']
  },
  {
    number: 13,
    name: 'Anushasana Parva',
    devanagari: 'अनुशासन पर्व',
    englishMeaning: 'The Book of Instructions',
    chaptersCount: 168,
    shlokasCount: 8000,
    synopsis: 'Continuation of Bhishma\'s final instructions, including the Vishnu Sahasranama (Thousand Names of Vishnu), charity, asceticism, and sacred conduct. Bhishma leaves his mortal body.',
    pivotalMoment: 'Bhishma chanting the thousand names of Narayana and releasing his soul during the winter solstice.',
    prominentFigures: ['Bhishma', 'Krishna', 'Yudhishthira']
  },
  {
    number: 14,
    name: 'Ashvamedhika Parva',
    devanagari: 'अश्वमेधिक पर्व',
    englishMeaning: 'The Book of the Horse Sacrifice',
    chaptersCount: 92,
    shlokasCount: 3320,
    synopsis: 'Yudhishthira performs the imperial Ashvamedha Yajna to purify the realm. Arjuna leads the sacrificial horse across all kingdoms. Krishna recounts the Anugita to Arjuna.',
    pivotalMoment: 'Arjuna\'s duel with his own son Babhruvahana in the kingdom of Manipura.',
    prominentFigures: ['Yudhishthira', 'Arjuna', 'Krishna', 'Babhruvahana', 'Uttara']
  },
  {
    number: 15,
    name: 'Ashramavasika Parva',
    devanagari: 'आश्रमवासिक पर्व',
    englishMeaning: 'The Book of the Hermitage',
    chaptersCount: 39,
    shlokasCount: 1506,
    synopsis: 'Dhritarashtra, Gandhari, and Kunti retire to the forest to live as hermits. They perish peacefully in a forest fire, followed by Vidura\'s passing into Yudhishthira.',
    pivotalMoment: 'Sage Vyasa briefly summoning the spirits of all fallen warriors from the waters of the Ganga for their grieving relatives.',
    prominentFigures: ['Dhritarashtra', 'Gandhari', 'Kunti', 'Vidura', 'Sanjaya']
  },
  {
    number: 16,
    name: 'Mausala Parva',
    devanagari: 'मौसल पर्व',
    englishMeaning: 'The Book of the Clubs',
    chaptersCount: 8,
    shlokasCount: 320,
    synopsis: 'Thirty-six years after the war, Gandhari\'s curse and the sages\' prophecy materialize. The Yadavas kill each other with iron clubs at Prabhasa. Krishna departs after being struck by hunter Jara\'s arrow.',
    pivotalMoment: 'Krishna smiling as the hunter\'s arrow strikes his lotus foot, concluding his earthly avatar.',
    prominentFigures: ['Krishna', 'Balarama', 'Jara', 'Arjuna', 'Vasudeva']
  },
  {
    number: 17,
    name: 'Mahaprasthanika Parva',
    devanagari: 'महाप्रस्थानिक पर्व',
    englishMeaning: 'The Book of the Great Journey',
    chaptersCount: 3,
    shlokasCount: 123,
    synopsis: 'The five Pandavas and Draupadi renounce everything to walk towards Mount Meru. Draupadi, Sahadeva, Nakula, Arjuna, and Bhima fall in succession due to their earthly attachments.',
    pivotalMoment: 'Yudhishthira refusing to enter Indra\'s chariot if his loyal canine companion is denied entry.',
    prominentFigures: ['Yudhishthira', 'Bhima', 'Arjuna', 'Draupadi', 'Dharma / The Dog']
  },
  {
    number: 18,
    name: 'Svargarohana Parva',
    devanagari: 'स्वर्गारोहण पर्व',
    englishMeaning: 'The Book of the Ascent to Heaven',
    chaptersCount: 5,
    shlokasCount: 209,
    synopsis: 'Yudhishthira\'s final trial in the afterlife. He chooses hell to stay with his suffering brothers, only to realize it was a divine illusion testing his pure compassion. He is reunited in eternal light.',
    pivotalMoment: 'The dissolution of all hatred and sorrow in the eternal realm of cosmic peace.',
    prominentFigures: ['Yudhishthira', 'Indra', 'Dharma', 'Krishna', 'Karna', 'Duryodhana']
  }
];

export const WAR_DAYS: WarDay[] = [
  {
    day: 1,
    title: 'The Clarion Call of Kurukshetra',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Sarvatomukha Vyuha (All-Facing Circle)',
    pandavaFormation: 'Vajra Vyuha (Thunderbolt Formation)',
    atmosphere: 'dawn',
    keyEvents: [
      'Conch shells blown across the plains of Kurukshetra',
      'Arjuna hesitates; the Gita is revealed in the quietude between armies',
      'Yudhishthira dismounts to touch the feet of Bhishma, Drona, and Kripa',
      'Uttara, prince of Matsya, is slain by Shalya'
    ],
    fallenWarriors: ['Uttara Kumara', 'Shweta'],
    summary: 'The battle begins with devastating casualties on the Pandava side. Bhishma sweeps through enemy lines like a raging conflagration.',
    tacticalNote: 'Bhishma\'s impenetrable circle repels every coordinated Pandava charge.'
  },
  {
    day: 2,
    title: 'Arjuna vs. Bhishma',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Garuda Vyuha (Eagle Formation)',
    pandavaFormation: 'Krauncha Vyuha (Heron Formation)',
    atmosphere: 'raging',
    keyEvents: [
      'Arjuna engages Bhishma in a duel of celestial archery',
      'Satyaki shatters the chariot of Drona\'s charioteer',
      'Bhima wreaks havoc on Kalinga regiments'
    ],
    fallenWarriors: ['King of Kalinga', 'Prince Bhanumat'],
    summary: 'Pandavas recover their footing through the razor precision of Arjuna and the berserker fury of Bhima.',
    tacticalNote: 'Krauncha Vyuha\'s wings surround the eagle beak formation of the Kauravas.'
  },
  {
    day: 3,
    title: "Krishna's Sudarshana Awakening",
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Garuda Vyuha',
    pandavaFormation: 'Ardha-Chandra Vyuha (Crescent Moon)',
    atmosphere: 'raging',
    keyEvents: [
      'Bhishma unleashes terrifying divine astras',
      'Seeing Arjuna hesitate against his grandsire, Krishna leaps off chariot with a wheel to slay Bhishma himself',
      'Arjuna drops weapons and holds Krishna\'s feet in desperate plea'
    ],
    fallenWarriors: ['Thousands of foot soldiers and cavalry'],
    summary: 'Bhishma proves unstoppable. Krishna\'s brief divine intervention forces Arjuna to recommit to his warrior vow.',
    tacticalNote: 'The crescent moon formation attempts to cut off Kaurava supply wagons.'
  },
  {
    day: 4,
    title: 'The Wrath of Vrikodara',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Vyala Vyuha (Serpent Formation)',
    pandavaFormation: 'Mandala Vyuha (Circular Defensive)',
    atmosphere: 'grim',
    keyEvents: [
      'Bhima slays eight brothers of Duryodhana with his iron mace',
      'Ghatotkacha summons nocturnal illusions throwing Kaurava ranks into confusion',
      'Bhishma wounds Bhima with swift arrows'
    ],
    fallenWarriors: ['8 Sons of Dhritarashtra including Vivinsati'],
    summary: 'Duryodhana weeps over his fallen brothers. Bhima begins the systematic fulfillment of his oath sworn in the dice hall.',
    tacticalNote: 'Ghatotkacha\'s aerial attacks shatter the serpent formation.'
  },
  {
    day: 5,
    title: 'The Clash of Arch-Mentors',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Makara Vyuha (Crocodile Formation)',
    pandavaFormation: 'Syena Vyuha (Falcon Formation)',
    atmosphere: 'raging',
    keyEvents: [
      'Drona slaughters Satyaki\'s forces',
      'Bhishma and Arjuna battle until the sky is blocked with arrow flights',
      'Satyaki is rescued by Bhima from near death'
    ],
    fallenWarriors: ['Multiple kings from central provinces'],
    summary: 'Drona displays why he is considered the master of celestial arms, pinning the Pandava army back.',
    tacticalNote: 'Syena Vyuha darts through the armored scales of the Makara formation.'
  },
  {
    day: 6,
    title: 'The Carnage in the Dust',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Krauncha Vyuha',
    pandavaFormation: 'Makara Vyuha',
    atmosphere: 'devastating',
    keyEvents: [
      'Dhrishtadyumna gets surrounded; Bhima fights single-handedly inside Kaurava ranks',
      'Duryodhana is severely wounded by Bhima',
      'Kripacharya rescues the bleeding Kaurava king'
    ],
    fallenWarriors: ['Commanders of Panchala infantry'],
    summary: 'A day of unmitigated slaughter with neither side securing decisive strategic victory.',
    tacticalNote: 'Both armies suffer immense breakdown of chain-of-command in thick dust.'
  },
  {
    day: 7,
    title: 'The Triumph of Drona',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Mandala Vyuha',
    pandavaFormation: 'Vajra Vyuha',
    atmosphere: 'twilight',
    keyEvents: [
      'Drona dominates Dhrishtadyumna, cutting his bow thrice',
      'Sankha, son of King Virata, is slain by Drona',
      'Bhima slays nine more Kaurava brothers'
    ],
    fallenWarriors: ['Sankha (Prince of Matsya)'],
    summary: 'Drona proves invincible on Day 7, driving fear into the hearts of the Pandava ranks.',
    tacticalNote: 'Kaurava circular defense resists deep penetration.'
  },
  {
    day: 8,
    title: 'The Death of Iravan',
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Kurma Vyuha (Turtle Formation)',
    pandavaFormation: 'Trishula Vyuha (Trident Formation)',
    atmosphere: 'grim',
    keyEvents: [
      'Iravan, son of Arjuna and Naga princess Ulupi, decimates Shakuni\'s cavalry',
      'Alambusha the Rakshasa is summoned to assassinate Iravan',
      'Ghatotkacha loses his composure in fury at his brother\'s demise'
    ],
    fallenWarriors: ['Iravan (Arjuna\'s son)'],
    summary: 'Arjuna sheds tears over Iravan\'s death. The war extracts its first blood sacrifice from the next generation.',
    tacticalNote: 'The trident formation pierces the armored turtle carapace.'
  },
  {
    day: 9,
    title: "Krishna's Second Ultimatum",
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Sarvatobhadra Vyuha (All-Fortified)',
    pandavaFormation: 'Naksatramandala (Constellation)',
    atmosphere: 'raging',
    keyEvents: [
      'Bhishma unleashes weapons of cosmic destruction, killing twenty thousand Pandava soldiers in two hours',
      'Krishna leaps from chariot again, whip in hand, ready to destroy Bhishma',
      'Bhishma bows with folded hands welcoming release at Krishna\'s hands'
    ],
    fallenWarriors: ['Mass Pandava cavalry and infantry'],
    summary: 'Pandavas realize Bhishma cannot be vanquished by ordinary warfare. Yudhishthira visits Bhishma\'s camp at midnight to ask how he may be defeated.',
    tacticalNote: 'Bhishma reveals to the Pandavas that he will lay down his bow before Shikhandi.'
  },
  {
    day: 10,
    title: "The Fall of the Patriarch",
    commanderKaurava: 'Bhishma Pitamah',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Asura Vyuha',
    pandavaFormation: 'Deva Vyuha',
    atmosphere: 'sunset',
    keyEvents: [
      'Arjuna places Shikhandi in front of his chariot',
      'True to his vow, Bhishma lowers his weapons seeing Shikhandi',
      'Arjuna releases a relentless shower of arrows behind Shikhandi',
      'Bhishma falls from his chariot at sunset, suspended entirely on arrows'
    ],
    fallenWarriors: ['Bhishma Pitamah (Incapacitated on Sharashayya)'],
    summary: 'The grand patriarch of the Kuru dynasty falls. Both armies cease fighting to weep and pay homage to the fallen colossus.',
    tacticalNote: 'Arjuna shoots three arrows into the earth to produce a spring of Ganga water for Bhishma\'s thirst.'
  },
  {
    day: 11,
    title: 'The Elevation of Acharya Drona',
    commanderKaurava: 'Guru Drona',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Shakata Vyuha (Cart Formation)',
    pandavaFormation: 'Krauncha Vyuha',
    atmosphere: 'raging',
    keyEvents: [
      'Drona takes supreme command and promises Duryodhana he will capture Yudhishthira alive',
      'Arjuna arrives just in time to thwart Drona\'s capture of the king',
      'Karna enters the battle for the first time after Bhishma\'s fall'
    ],
    fallenWarriors: ['Numerous Pandava division leaders'],
    summary: 'The nature of the war shifts from honorable combat to frantic tactical assassination.',
    tacticalNote: 'Drona requires Arjuna to be lured away to capture Yudhishthira.'
  },
  {
    day: 12,
    title: 'The Samsaptaka Conspiracy',
    commanderKaurava: 'Guru Drona',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Garuda Vyuha',
    pandavaFormation: 'Ardha-Chandra Vyuha',
    atmosphere: 'raging',
    keyEvents: [
      'King Susharma and the Samsaptaka oath-bound warriors lure Arjuna to the southern end of the battlefield',
      'King Bhagadatta riding the war elephant Supratika unleashes Vaishnavastra',
      'Krishna steps forward and absorbs the divine missile onto his chest as a garland'
    ],
    fallenWarriors: ['King Bhagadatta (Slain by Arjuna)'],
    summary: 'Arjuna slays Bhagadatta, removing one of the most formidable Kaurava titans.',
    tacticalNote: 'The Samsaptakas deliberately sacrifice themselves to keep Arjuna away from the central front.'
  },
  {
    day: 13,
    title: 'The Chakravyuha & Abhimanyu',
    commanderKaurava: 'Guru Drona',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Chakravyuha (Concentric Wheel Formation)',
    pandavaFormation: 'Fragmented Offensive',
    atmosphere: 'devastating',
    keyEvents: [
      'With Arjuna drawn away, Drona activates the impenetrable Chakravyuha',
      'Sixteen-year-old Abhimanyu enters the labyrinth alone',
      'Jayadratha holds off the four older Pandavas at the entrance using Shiva\'s boon',
      'Six Maharathis surround and kill Abhimanyu in violation of all warrior codes'
    ],
    fallenWarriors: ['Abhimanyu (Arjuna\'s son)', 'Lakshmana (Duryodhana\'s son)'],
    summary: 'The tragic centerpiece of the great war. Abhimanyu fights like a storm god before falling to treachery.',
    tacticalNote: 'Jayadratha\'s one-day boon halts Bhima and Yudhishthira from following Abhimanyu inside.'
  },
  {
    day: 14,
    title: 'Arjuna\'s Vow & Midnight Carnage',
    commanderKaurava: 'Guru Drona',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Padma & Shakata Double Vyuha',
    pandavaFormation: 'Spearhead Assault',
    atmosphere: 'somber',
    keyEvents: [
      'Arjuna vows to kill Jayadratha before sunset or immolate himself in fire',
      'Krishna creates a solar eclipse illusion, luring Jayadratha out of hiding',
      'Arjuna decapitates Jayadratha so his head falls into his father\'s lap',
      'War extends into midnight under torchlight; Ghatotkacha forces Karna to expend the Vasava Shakti'
    ],
    fallenWarriors: ['Jayadratha', 'Ghatotkacha (Bhima\'s son)', 'Alambusha'],
    summary: 'Day 14 witnessed both sunset vengeance and the harrowing midnight torchlight assault.',
    tacticalNote: 'Karna is forced to expend the divine spear meant for Arjuna to save the Kaurava army from Ghatotkacha.'
  },
  {
    day: 15,
    title: 'The Silence of Drona',
    commanderKaurava: 'Guru Drona',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Vajra Vyuha',
    pandavaFormation: 'Shringataka Vyuha',
    atmosphere: 'grim',
    keyEvents: [
      'Drona unleashes Brahmastra, killing countless soldiers',
      'Bhima kills an elephant named Ashwatthama; Yudhishthira proclaims: "Ashwatthama hatah, iti gajah"',
      'Drona meditates and abandons his weapons in grief',
      'Dhrishtadyumna beheads Drona on the battlefield'
    ],
    fallenWarriors: ['Guru Drona', 'Drupada', 'Virata'],
    summary: 'The venerable teacher falls through deception. Ashwatthama swears unholy vengeance.',
    tacticalNote: 'The moral fabric of the war disintegrates completely.'
  },
  {
    day: 16,
    title: 'The Command of Radheya',
    commanderKaurava: 'Karna',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Makara Vyuha',
    pandavaFormation: 'Ardha-Chandra Vyuha',
    atmosphere: 'raging',
    keyEvents: [
      'Karna assumes supreme command, with Shalya as his charioteer',
      'Bhima overpowers and kills multiple Kaurava princes',
      'Karna disarms Nakula and Sahadeva but spares them due to his promise to Kunti'
    ],
    fallenWarriors: ['Dozens of Kaurava princes'],
    summary: 'Karna dominates the battlefield with effortless brilliance, holding to his promise to Queen Kunti.',
    tacticalNote: 'Psychological discord between Karna and Shalya weakens the Kaurava command.'
  },
  {
    day: 17,
    title: 'The Destiny of Karna & Blood Oath',
    commanderKaurava: 'Karna',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Surya Vyuha',
    pandavaFormation: 'Rudra Vyuha',
    atmosphere: 'sunset',
    keyEvents: [
      'Bhima tears open Dushasana\'s chest and fulfills his vow to drink his blood for Draupadi\'s humiliation',
      'Climactic duel between Karna and Arjuna',
      'Karna\'s chariot wheel sinks into earth; curses rob him of Brahmastra mantras',
      'Arjuna releases the Anjalika arrow on Krishna\'s urging; Karna falls at sunset'
    ],
    fallenWarriors: ['Karna', 'Dushasana'],
    summary: 'The two greatest archers duel with weapons that tear the skies. The tragic hero Karna falls as Surya sinks below the horizon.',
    tacticalNote: 'Karna\'s wheel trapped in the soil represents the convergence of Parashurama\'s, the Brahmin\'s, and the Earth\'s curses.'
  },
  {
    day: 18,
    title: 'The Last Stand at Dvaipayana',
    commanderKaurava: 'Shalya / Duryodhana',
    commanderPandava: 'Dhrishtadyumna',
    kauravaFormation: 'Broken Ranks',
    pandavaFormation: 'Final Encirclement',
    atmosphere: 'twilight',
    keyEvents: [
      'Yudhishthira slays Shalya before noon',
      'Sahadeva slays Shakuni, avenging the dice game',
      'Duryodhana hides under Dvaipayana lake; taunted into mace duel by Yudhishthira',
      'Bhima shatters Duryodhana\'s thighs in a titanic gada battle'
    ],
    fallenWarriors: ['Shalya', 'Shakuni', 'Duryodhana (Mortally wounded)'],
    summary: 'The 18-day war ends with only three Kauravas left alive: Ashwatthama, Kripa, and Kritavarma.',
    tacticalNote: 'The war of millions culminates in a singular 1-on-1 duel between Bhima and Duryodhana.'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'krishna',
    name: 'Shri Krishna',
    devanagari: 'श्रीकृष्ण',
    title: 'The Supreme Strategist & Divine Charioteer',
    side: 'Neutral/Divine',
    lineage: 'Yaduvamshi (Son of Vasudeva and Devaki)',
    divineOrigin: 'Avatar of Lord Vishnu',
    weapons: ['Sudarshana Chakra', 'Kaumodaki Gada', 'Sharnga Bow'],
    vowOrDharma: 'To establish Dharma without raising a weapon in battle.',
    biography: 'The spiritual heart of the Mahabharata. Unarmed throughout the conflict, he steers Arjuna\'s chariot (Partha Sarathi) and reveals the eternal wisdom of the Bhagavad Gita.',
    fatalFlawOrTragedy: 'Witness to the unavoidable annihilation of both the Kuru and Yadava dynasties.',
    keyMoments: [
      'Protected Draupadi\'s dignity during Dyut Sabha',
      'Peace mission to Hastinapur demanding five villages',
      'Revealed the Vishwaroopa (Cosmic Form) to Arjuna on Day 1',
      'Accepted Gandhari\'s curse with a serene smile'
    ],
    relationships: [
      { relation: 'Dear Friend & Guide', character: 'Arjuna' },
      { relation: 'Divine Devotee', character: 'Draupadi' },
      { relation: 'Cousin & Adversary', character: 'Duryodhana' },
      { relation: 'Revered Elder', character: 'Bhishma' }
    ]
  },
  {
    id: 'arjuna',
    name: 'Arjuna',
    devanagari: 'अर्जुन',
    title: 'The Peerless Archer (Savyasachi)',
    side: 'Pandava',
    lineage: 'Son of Kunti and King Pandu',
    divineOrigin: 'Incarnation of Indra / Nara',
    weapons: ['Gandiva Bow', 'Pashupatastra', 'Brahmashirsha', 'Akshaya Tunir'],
    vowOrDharma: 'Unwavering focus; sworn to kill Jayadratha before sunset or perish.',
    biography: 'The third Pandava brother, trained by Drona to become the greatest archer in the three worlds. Savyasachi—able to loose arrows with both hands with equal velocity.',
    fatalFlawOrTragedy: 'Grief-stricken by the necessity of slaying his beloved grandfather Bhishma and mentor Drona.',
    keyMoments: [
      'Pierced the Matsya Yantra to win Draupadi',
      'Fought Lord Shiva in the form of Kirata to win the Pashupatastra',
      'Received the Bhagavad Gita from Krishna at Kurukshetra',
      'Defeated Karna in their fateful sunset duel'
    ],
    relationships: [
      { relation: 'Charioteer & Soulmate', character: 'Krishna' },
      { relation: 'Beloved Son', character: 'Abhimanyu' },
      { relation: 'Rival & Half-Brother', character: 'Karna' },
      { relation: 'Revered Guru', character: 'Drona' }
    ]
  },
  {
    id: 'karna',
    name: 'Karna',
    devanagari: 'कर्ण',
    title: 'The Tragic Titan (Radheya / Danaveer)',
    side: 'Kaurava',
    lineage: 'Eldest son of Kunti, raised by charioteer Adhiratha',
    divineOrigin: 'Son of Surya (Sun God)',
    weapons: ['Vijaya Bow', 'Vasava Shakti', 'Brahmastra'],
    vowOrDharma: 'Never refuse charity to any living soul at morning prayer; unwavering loyalty to Duryodhana.',
    biography: 'Born with divine gold armor (Kavacha) and earrings (Kundala). Cast adrift on the Ganga by an unwed Kunti, he faced lifelong scorn as a Suta-putra despite unmatched valour.',
    fatalFlawOrTragedy: 'Bound by gratitude to support Duryodhana even when knowing the Kaurava cause defied Dharma.',
    keyMoments: [
      'Gave away his celestial Kavacha and Kundala to Indra in disguise',
      'Promised Kunti to spare all four Pandavas except Arjuna',
      'Chariot wheel trapped in Kurukshetra soil during final confrontation',
      'Died at sunset as an uncrowned sovereign of honor'
    ],
    relationships: [
      { relation: 'Eternal Patron & Friend', character: 'Duryodhana' },
      { relation: 'Secret Mother', character: 'Kunti' },
      { relation: 'Destined Rival & Brother', character: 'Arjuna' },
      { relation: 'Charioteer & Critic', character: 'Shalya' }
    ]
  },
  {
    id: 'bhishma',
    name: 'Bhishma Pitamah',
    devanagari: 'भीष्म पितामह',
    title: 'The Great Grandsire of Aryavarta',
    side: 'Kaurava',
    lineage: 'Son of King Shantanu and Goddess Ganga',
    divineOrigin: 'Eighth Vasu (Prabhas)',
    weapons: ['Praswapastra', 'Brahmastra', 'Celestial Bow'],
    vowOrDharma: 'Lifelong celibacy and eternal servitude to whoever sits upon the Hastinapur throne.',
    biography: 'Devavrata took the terrible vow (Bhishma Pratigya) to renounce the crown and all heirs. Blessed with Iccha-Mrityu (death at will), he commanded the Kaurava armies for the first 10 days.',
    fatalFlawOrTragedy: 'His vow to serve the throne paralyzed him during Draupadi\'s public humiliation.',
    keyMoments: [
      'Swore the terrifying vow of celibacy before the fishermen king',
      'Faced his own teacher Parashurama in combat to an honorable standstill',
      'Fell on Day 10 upon a bed of arrows shot by Arjuna',
      'Delivered the Shanti Parva discourses on righteousness before passing'
    ],
    relationships: [
      { relation: 'Beloved Grandsons', character: 'Arjuna & Pandavas' },
      { relation: 'Father', character: 'Shantanu' },
      { relation: 'Nemesis Reborn', character: 'Amba / Shikhandi' }
    ]
  },
  {
    id: 'duryodhana',
    name: 'Duryodhana',
    devanagari: 'दुर्योधन',
    title: 'The Unyielding Sovereign of Hastinapur',
    side: 'Kaurava',
    lineage: 'Eldest son of King Dhritarashtra and Queen Gandhari',
    divineOrigin: 'Incarnation of Kali (the age of strife)',
    weapons: ['Iron Gada (Mace)', 'Vajra-hardened Body'],
    vowOrDharma: 'Refusal to yield even a needle-point of land to the Pandavas without war.',
    biography: 'Proud, charismatic, fiercely ambitious, and deeply loyal to his friends. Master of mace combat under Balarama, whose envy of the Pandavas precipitated the Kurukshetra apocalypse.',
    fatalFlawOrTragedy: 'Uncontrolled pride and envy that made him deaf to all counsel of peace.',
    keyMoments: [
      'Crowned Karna king of Anga to counter Arjuna\'s pride',
      'Arranged the Dyut Sabha with Shakuni\'s loaded dice',
      'Refused Krishna\'s peace proposal for five villages',
      'Fought Bhima to the death at Dvaipayana Lake'
    ],
    relationships: [
      { relation: 'Steadfast Comrade', character: 'Karna' },
      { relation: 'Cunning Maternal Uncle', character: 'Shakuni' },
      { relation: 'Mace Rival', character: 'Bhima' },
      { relation: 'Doting Father', character: 'Dhritarashtra' }
    ]
  },
  {
    id: 'draupadi',
    name: 'Draupadi',
    devanagari: 'द्रौपदी',
    title: 'The Fire-Born Queen (Yajnaseni / Panchali)',
    side: 'Pandava',
    lineage: 'Born from the sacrificial fire of King Drupada',
    divineOrigin: 'Incarnation of Goddess Shachi / Bharati',
    weapons: ['Moral Invective', 'Indomitable Spirit', 'Truth'],
    vowOrDharma: 'Swore not to tie her unbound hair until washed in Dushasana\'s heart-blood.',
    biography: 'Emerging radiant and fierce from the sacred yajna flames, she became the wife of the five Pandavas. Her humiliation in the dice hall catalyzed the destruction of the Kuru dynasty.',
    fatalFlawOrTragedy: 'Carried the wounds of betrayal by an entire hall of silent patriarchs.',
    keyMoments: [
      'Chose Arjuna at her Swayamvar in Panchala',
      'Challenged the legal and moral legitimacy of Yudhishthira\'s wager in Dyut Sabha',
      'Endured twelve years of forest hardships and harassment by Jayadratha and Kichaka',
      'Tied her hair after eighteen days of war when Bhima fulfilled her oath'
    ],
    relationships: [
      { relation: 'Divine Protector & Brother', character: 'Krishna' },
      { relation: 'Avenging Husband', character: 'Bhima' },
      { relation: 'Soulmate Husband', character: 'Arjuna' },
      { relation: 'Righteous Husband', character: 'Yudhishthira' }
    ]
  },
  {
    id: 'abhimanyu',
    name: 'Abhimanyu',
    devanagari: 'अभिमन्यु',
    title: 'The Unconquered Lion Cub of Kurukshetra',
    side: 'Pandava',
    lineage: 'Son of Arjuna and Subhadra (Krishna\'s sister)',
    divineOrigin: 'Incarnation of Varchas (son of Soma)',
    weapons: ['Roudra Bow', 'Chariot Wheel', 'Celestial Sword'],
    vowOrDharma: 'To fear no foe, regardless of numbers or odds.',
    biography: 'Learned the art of entering the Chakravyuha while still in his mother\'s womb listening to Arjuna. At age sixteen, on Day 13, he breached the formation alone and wreaked havoc on the Kaurava forces.',
    fatalFlawOrTragedy: 'Never learned the method to exit the Chakravyuha, as Subhadra fell asleep before Arjuna could explain it.',
    keyMoments: [
      'Breached Drona\'s Chakravyuha alone when no other warrior could enter',
      'Slain Duryodhana\'s son Lakshmana with a single arrow',
      'Fought seven Maharathis simultaneously with a broken chariot wheel',
      'His unborn son Parikshit survived to continue the entire royal line'
    ],
    relationships: [
      { relation: 'Proud Father', character: 'Arjuna' },
      { relation: 'Divine Uncle & Teacher', character: 'Krishna' },
      { relation: 'Beloved Wife', character: 'Uttara' }
    ]
  },
  {
    id: 'bhima',
    name: 'Bhima',
    devanagari: 'भीम',
    title: 'The Indomitable Vrikodara',
    side: 'Pandava',
    lineage: 'Second son of Kunti and King Pandu',
    divineOrigin: 'Son of Vayu (Wind God)',
    weapons: ['Massive Iron Gada (Mace)', 'Unarmed Brute Strength'],
    vowOrDharma: 'Sworn to slaughter all 100 Kaurava brothers, break Duryodhana\'s thighs, and tear open Dushasana.',
    biography: 'Possessor of the strength of ten thousand elephants. Fierce in combat, tender toward his family, and the sworn executor of retribution for every insult heaped upon Draupadi.',
    fatalFlawOrTragedy: 'Prone to unrestrained rage; consumed by his immense appetite and brutal oaths.',
    keyMoments: [
      'Survived poison and naga bites in boyhood',
      'Slain Bakasura, Hidimba, Kichaka, and Jarasandha in hand-to-hand combat',
      'Systematically killed all 100 Kaurava brothers in the 18 days',
      'Shattered Duryodhana\'s thighs in the final duel at Dvaipayana Lake'
    ],
    relationships: [
      { relation: 'Protector & Devoted Husband', character: 'Draupadi' },
      { relation: 'Rival & Equal', character: 'Duryodhana' },
      { relation: 'Son by Hidimbi', character: 'Ghatotkacha' }
    ]
  },
  {
    id: 'yudhishthira',
    name: 'Yudhishthira',
    devanagari: 'युधिष्ठिर',
    title: 'Dharmaraja (Emperor of Truth)',
    side: 'Pandava',
    lineage: 'Eldest son of Kunti and King Pandu',
    divineOrigin: 'Son of Yama / Dharma',
    weapons: ['Mahendra Spear', 'Truth (Satya)'],
    vowOrDharma: 'To adhere strictly to truth and righteous law under every circumstance.',
    biography: 'The moral anchor of the Pandavas. Unshakably calm, scholarly, and compassionate. His single moral failure at the dice table cost his family their empire, leading to 13 years of penance.',
    fatalFlawOrTragedy: 'Addiction to the wager of dice; muttered the half-lie that broke Drona\'s spirit.',
    keyMoments: [
      'Answered the Yaksha\'s questions to revive his dead brothers',
      'Conducted the glorious Rajasuya Yajna in Indraprastha',
      'Uttered "Ashwatthama hatah..." to disable Guru Drona on Day 15',
      'Ascended to heaven accompanied by the faithful dog of Dharma'
    ],
    relationships: [
      { relation: 'Father & Ultimate Judge', character: 'Dharma / Yama' },
      { relation: 'Patient Guide', character: 'Krishna' },
      { relation: 'Fierce Champion Brother', character: 'Bhima' }
    ]
  },
  {
    id: 'drona',
    name: 'Guru Drona',
    devanagari: 'द्रोणाचार्य',
    title: 'The Master of Celestial Weaponry',
    side: 'Kaurava',
    lineage: 'Son of Sage Bharadvaja',
    divineOrigin: 'Incarnation of Brihaspati',
    weapons: ['Brahmashirsha', 'Vajra', 'Divine Bow'],
    vowOrDharma: 'Loyalty to the royal house that fed his family; oath to make Arjuna unequaled.',
    biography: 'The royal preceptor who taught archery and martial sciences to both Kauravas and Pandavas. Bound by poverty in youth, he accepted service under Dhritarashtra and commanded the war from Day 11 to 15.',
    fatalFlawOrTragedy: 'Demanded Ekalavya\'s thumb to preserve Arjuna\'s supremacy; blinded by parental love for Ashwatthama.',
    keyMoments: [
      'Trained the Kuru princes in the art of war',
      'Constructed the lethal Chakravyuha on Day 13',
      'Annihilated armies with Brahmastra until persuaded to drop weapons by false news',
      'Slain in meditation by Dhrishtadyumna'
    ],
    relationships: [
      { relation: 'Favorite Pupil', character: 'Arjuna' },
      { relation: 'Beloved Son', character: 'Ashwatthama' },
      { relation: 'Childhood Friend turned Enemy', character: 'Drupada' }
    ]
  },
  {
    id: 'shakuni',
    name: 'Shakuni',
    devanagari: 'शकुनि',
    title: 'The Architect of the Great Dice Game',
    side: 'Kaurava',
    lineage: 'Prince of Gandhara, brother of Queen Gandhari',
    divineOrigin: 'Incarnation of Dvapara Yuga',
    weapons: ['Loaded Bone Dice (Pasha)', 'Chariot Archery', 'Psychological Warfare'],
    vowOrDharma: 'Avenging the ruin and starvation of his family by destroying the Kuru dynasty from within.',
    biography: 'The master manipulator whose dice, carved from his father\'s bones, moved strictly to his will. Guided Duryodhana\'s every move from the lacquer house to the dice assembly.',
    fatalFlawOrTragedy: 'Consumed entirely by ancestral vengeance until it consumed his own sons and kingdom.',
    keyMoments: [
      'Incited the construction of the Lakshagriha (House of Lac)',
      'Stripped Yudhishthira of empire in the Dyut Sabha',
      'Advised Duryodhana to reject Krishna\'s peace mission',
      'Slain by Sahadeva on the final eighteenth day of Kurukshetra'
    ],
    relationships: [
      { relation: 'Devoted Nephew & Pawn', character: 'Duryodhana' },
      { relation: 'Sister', character: 'Gandhari' },
      { relation: 'Nemesis who slayed him', character: 'Sahadeva' }
    ]
  },
  {
    id: 'ashwatthama',
    name: 'Ashwatthama',
    devanagari: 'अश्वत्थामा',
    title: 'The Cursed Immortal (Chiranjivi)',
    side: 'Kaurava',
    lineage: 'Son of Guru Drona and Kripi',
    divineOrigin: 'Avatar of Rudra (Shiva\'s Wrath)',
    weapons: ['Brahmashirsha Astra', 'Narayana Astra', 'Sword of Shiva'],
    vowOrDharma: 'Vengeance for his father\'s unjust death on the battlefield.',
    biography: 'Born with a luminous divine gem in his forehead protecting him from hunger, thirst, and weapons. Driven mad with grief after Drona\'s fall, he conducted the midnight slaughter of the Pandava camp.',
    fatalFlawOrTragedy: 'Turned the ultimate cosmic weapon toward an unborn child (Parikshit) in pure vindictiveness.',
    keyMoments: [
      'Unleashed Narayana Astra on Pandava armies',
      'Conducted the nocturnal raid slaying Dhrishtadyumna and Draupadi\'s sons',
      'Gem torn from his forehead as penalty by Krishna',
      'Cursed to wander the earth alone, rotting in leperous wounds until the end of Kali Yuga'
    ],
    relationships: [
      { relation: 'Revered Father', character: 'Drona' },
      { relation: 'Allied Survivor', character: 'Kripacharya' },
      { relation: 'Divine Avenger who cursed him', character: 'Krishna' }
    ]
  },
  {
    id: 'gandhari',
    name: 'Gandhari',
    devanagari: 'गांधारी',
    title: 'The Blindfolded Queen of Ascetic Power',
    side: 'Kaurava',
    lineage: 'Princess of Gandhara, daughter of King Subala',
    divineOrigin: 'Incarnation of Mati (Divine Intellect)',
    weapons: ['Tapasya (Ascetic Vision)', 'Unflinching Righteousness'],
    vowOrDharma: 'Wore a silk blindfold for life in solidarity with her sightless husband Dhritarashtra.',
    biography: 'A woman of terrifying ascetic spiritual power. When Duryodhana came before her each morning for blessings of victory, she replied only: "Yato Dharmastato Jayah" (Where there is Dharma, there is victory).',
    fatalFlawOrTragedy: 'Could not deter her husband\'s blind partiality or her son\'s suicidal arrogance.',
    keyMoments: [
      'Blindfolded herself upon her betrothal to King Dhritarashtra',
      'Refused to grant Duryodhana an unconditional blessing of victory',
      'Walked the ash-strewn battlefield of Kurukshetra weeping in Stri Parva',
      'Cursed Krishna with the extinction of the Yadava dynasty'
    ],
    relationships: [
      { relation: 'Blind Husband', character: 'Dhritarashtra' },
      { relation: 'Firstborn Son', character: 'Duryodhana' },
      { relation: 'Deceiver Brother', character: 'Shakuni' },
      { relation: 'Revered God whom she cursed', character: 'Krishna' }
    ]
  },
  {
    id: 'kunti',
    name: 'Kunti (Pritha)',
    devanagari: 'कुन्ती',
    title: 'The Mother of Titans',
    side: 'Pandava',
    lineage: 'Yadava princess, sister of Vasudeva, Queen of Pandu',
    divineOrigin: 'Incarnation of Siddhi',
    weapons: ['Sage Durvasa\'s Mantra', 'Iron Will'],
    vowOrDharma: 'To protect the Pandavas through every storm and trial.',
    biography: 'Gifted a boon by Sage Durvasa allowing her to summon any deity to father a child. Tested it in virgin youth, conceiving Karna with Surya, whom she set adrift on the river in fear of social disgrace.',
    fatalFlawOrTragedy: 'Kept the secret of Karna\'s birth until his death, forcing brothers to slaughter brother.',
    keyMoments: [
      'Summoned Dharma, Vayu, and Indra to father the three eldest Pandavas',
      'Commanded her sons unwittingly: "Share whatever you have brought among yourselves"',
      'Visited Karna on the Ganga bank pleading with him to join his brothers',
      'Revealed Karna\'s identity during the funeral rites in Stri Parva'
    ],
    relationships: [
      { relation: 'Abandoned Eldest Son', character: 'Karna' },
      { relation: 'Righteous Son', character: 'Yudhishthira' },
      { relation: 'Hero Son', character: 'Arjuna' },
      { relation: 'Divine Nephew', character: 'Krishna' }
    ]
  },
  {
    id: 'dhritarashtra',
    name: 'Dhritarashtra',
    devanagari: 'धृतराष्ट्र',
    title: 'The Blind Sovereign of Hastinapur',
    side: 'Kaurava',
    lineage: 'Son of Vichitravirya / Sage Vyasa',
    divineOrigin: 'Incarnation of King Hamsa',
    weapons: ['Strength of Iron Hug', 'Royal Scepter'],
    vowOrDharma: 'Paralyzed between his love for his sons and his obligation to the throne.',
    biography: 'Denied the throne initially due to congenital blindness, he assumed regency when Pandu died. His doting partiality toward Duryodhana caused him to ignore every warning from Vidura and Bhishma.',
    fatalFlawOrTragedy: 'His emotional blindness far exceeded his physical blindness.',
    keyMoments: [
      'Permitted the catastrophic dice game in his royal court',
      'Listened to Sanjaya\'s clairvoyant commentary of the 18 days of Kurukshetra',
      'Crushed the iron statue of Bhima in despairing rage after the war',
      'Died in a quiet forest fire in the Himalayas'
    ],
    relationships: [
      { relation: 'Faithful Wife', character: 'Gandhari' },
      { relation: 'Precious Son', character: 'Duryodhana' },
      { relation: 'Wise Counselor Half-Brother', character: 'Vidura' },
      { relation: 'Clairvoyant Charioteer', character: 'Sanjaya' }
    ]
  },
  {
    id: 'vidura',
    name: 'Vidura',
    devanagari: 'विदुर',
    title: 'The Voice of Uncompromising Conscience',
    side: 'Neutral/Divine',
    lineage: 'Son of Sage Vyasa and a royal maidservant',
    divineOrigin: 'Incarnation of Dharma (cursed by Sage Mandavya)',
    weapons: ['Vidura Niti (Moral Statecraft)', 'Bow broken before battle'],
    vowOrDharma: 'To speak absolute truth to power without malice or self-interest.',
    biography: 'Prime minister of Hastinapur whose counsel (Vidura Niti) stands as one of the greatest treatises on governance and ethics. Snapped his bow in half and refused to fight in the civil war.',
    fatalFlawOrTragedy: 'Forced to watch the kingdom destroy itself despite warning them at every milestone.',
    keyMoments: [
      'Warned Yudhishthira in Mleccha code to escape the Lacquer House (Lakshagriha)',
      'Vehemently protested Draupadi\'s humiliation in the Dyut Sabha',
      'Hosted Krishna in his humble dwelling instead of Duryodhana\'s golden palace',
      'Passed his life energy into Yudhishthira in his forest hermitage'
    ],
    relationships: [
      { relation: 'Half-Brother & King', character: 'Dhritarashtra' },
      { relation: 'Divine Guest', character: 'Krishna' },
      { relation: 'Spiritual Mirror', character: 'Yudhishthira' }
    ]
  },
  {
    id: 'nakula',
    name: 'Nakula',
    devanagari: 'नकुल',
    title: 'The Graceful Swordsman of Madri',
    side: 'Pandava',
    lineage: 'Son of Madri and King Pandu',
    divineOrigin: 'Son of Ashvini Kumara (Nasatya)',
    weapons: ['Twin Celestial Swords', 'Equestrian Mastery'],
    vowOrDharma: 'Unquestioning devotion to his elder brothers and royal horses.',
    biography: 'Renowned as the most handsome man in Aryavarta. Master of veterinary sciences and swordsmanship. In Virata\'s court, he served disguised as Granthika, the master of the royal stables.',
    fatalFlawOrTragedy: 'Pride in his own physical beauty caused him to be the first brother to fall on the climb to heaven.',
    keyMoments: [
      'Conquered the western kingdoms during the Rajasuya campaign',
      'Served as Granthika in Virata kingdom',
      'Slew three sons of Karna on Day 16 of Kurukshetra',
      'Fell on Mount Meru due to vanity in his own elegance'
    ],
    relationships: [
      { relation: 'Twin Brother', character: 'Sahadeva' },
      { relation: 'Second Mother', character: 'Kunti' },
      { relation: 'Chivalrous Brother', character: 'Arjuna' }
    ]
  },
  {
    id: 'sahadeva',
    name: 'Sahadeva',
    devanagari: 'सहदेव',
    title: 'The Silent Astrologer of Destiny',
    side: 'Pandava',
    lineage: 'Son of Madri and King Pandu',
    divineOrigin: 'Son of Ashvini Kumara (Dasra)',
    weapons: ['Curved Scythe / Axe', 'Astrological Foresight'],
    vowOrDharma: 'Sworn to slay Shakuni, the architect of the dice game.',
    biography: 'The youngest Pandava was endowed with prophetic vision into past, present, and future, but was cursed that if he revealed what he knew without being asked, his head would split into fragments.',
    fatalFlawOrTragedy: 'Knew the entire tragedy of Kurukshetra before it occurred, yet was bound by cosmic law to remain silent.',
    keyMoments: [
      'Chose the auspicious date for the Pandavas to begin the war',
      'Served disguised as Tantipala, the keeper of cows in Virata',
      'Fulfilled his solemn vow by decapitating Shakuni on Day 18',
      'Fell on Mount Meru due to pride in his intellectual foresight'
    ],
    relationships: [
      { relation: 'Twin Brother', character: 'Nakula' },
      { relation: 'Sworn Nemesis', character: 'Shakuni' },
      { relation: 'Wise Elder', character: 'Yudhishthira' }
    ]
  },
  {
    id: 'dushasana',
    name: 'Dushasana',
    devanagari: 'दुःशासन',
    title: 'The Ruthless Enforcer of Hastinapur',
    side: 'Kaurava',
    lineage: 'Second son of Dhritarashtra and Gandhari',
    divineOrigin: 'Demonic manifestation of unbridled brutality',
    weapons: ['Battle Bow', 'Heavy Club'],
    vowOrDharma: 'Blind, violent execution of Duryodhana\'s orders.',
    biography: 'Duryodhana\'s primary enforcer who dragged Draupadi by her hair into the Dyut Sabha and attempted to disrobe her before the silent court. Met the most terrifying death in epic history.',
    fatalFlawOrTragedy: 'Complete absence of conscience or remorse in serving malice.',
    keyMoments: [
      'Dragged Draupadi into the royal assembly by her hair',
      'Attempted to strip Draupadi until Krishna intervened with an infinite ream of cloth',
      'Commanded the vanguard on multiple days of the war',
      'Killed by Bhima on Day 17 in fulfillment of his terrible vow'
    ],
    relationships: [
      { relation: 'Elder Brother & Idol', character: 'Duryodhana' },
      { relation: 'Executioner', character: 'Bhima' }
    ]
  }
];
