import { Artisan, StatMetric } from './types';

export const ARTISANS: Artisan[] = [
  {
    id: 'artisan-ramdas-mashe',
    name: 'Ramdas Jivya Mashe',
    marathiName: 'रामदास जिव्या मशे',
    craft: 'Warli Indigenous Painting',
    craftMarathi: 'वारली आदिवासी चित्रकला',
    district: 'Palghar',
    location: 'Ganjad Village, Dahanu, Palghar',
    bio: 'Carrying forward the master legacy of his father, the legendary Padma Shri Jivya Soma Mashe. Ramdas paints the rhythmic sacred cosmologies of nature, village harvest rituals, and sacred spirit circles using pure rice paste on hand-treated earth surfaces.',
    quote: 'Our paintings are not just designs for decoration. Every triangle is a mountain, every circle is the sun or moon, and every stroke connects human beings with the forest.',
    experienceYears: 38,
    generation: '4th Generation Living Master',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    heritageItemId: 'warli-sacred-art',
    specialty: 'Sacred Chowk Ritual Murals & Tarpa Cosmic Circles'
  },
  {
    id: 'artisan-narayan-bhandari',
    name: 'Narayan Ganpat Bhandari',
    marathiName: 'नारायण गणपत भंडारी',
    craft: 'Tambat Matharkam Copperware',
    craftMarathi: 'तांबट माथारकाम तांब्या-पितळेची भांडी',
    district: 'Pune',
    location: 'Kasba Peth, Pune',
    bio: 'Working out of the historic 300-year-old Tambat Ali quarter in Pune. Master craftsman Narayan has been shaping and hammering copper water urns (Ganga Jamuna) and decorative hand-beaten vessels using rhythmic indentations.',
    quote: 'When the hammer strikes copper in rhythm, the metal sings. Each indentation (mathar) strengthens the vessel and gives it light that never dulls.',
    experienceYears: 46,
    generation: '5th Generation Tambat Guild Master',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    heritageItemId: 'pune-tambat-copperware',
    specialty: 'Hand-Hammered Matharkam Copper Samai & Water Vessels'
  },
  {
    id: 'artisan-parshuram-gangavane',
    name: 'Parshuram Vishram Gangavane',
    marathiName: 'परशुराम विश्राम गंगावणे',
    craft: 'Pinguli Chitrakathi & Shadow Puppetry',
    craftMarathi: 'पिंगुळी चित्रकथी व कळसूत्री बाहुल्या',
    district: 'Sindhudurg',
    location: 'Pinguli Village, Kudal, Sindhudurg',
    bio: 'Padma Shri recipient and custodian of the Thakar Adivasi Kala Aangan museum in Pinguli. He single-handedly preserved the rare 500-year-old Chitrakathi scroll painting and wooden string puppetry traditions from the brink of extinction.',
    quote: 'Our ancestors entertained Chhatrapati Shivaji Maharaj. We carry their stories not in books, but in our hands, our puppets, and our songs.',
    experienceYears: 52,
    generation: '7th Generation Custodian',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    heritageItemId: 'pinguli-chitrakathi-puppetry',
    specialty: 'Dashavatara Scroll Painting & Wooden String Marionettes'
  },
  {
    id: 'artisan-sumati-nagpure',
    name: 'Sumatitai Nagpure',
    marathiName: 'सुमतीताई नागपुरे',
    craft: 'Royal Paithani Tapestry Weaving',
    craftMarathi: 'राजेशाही पैठणी विणकाम',
    district: 'Chhatrapati Sambhajinagar',
    location: 'Paithan, Chhatrapati Sambhajinagar',
    bio: 'Master weaver who has dedicated 40 years to the intricate hand-interlocking tapestry weaving on wooden pit looms, recreating ancient Satavahana-era peacock and lotus motifs with pure mulberry silk and electroplated gold zari.',
    quote: 'A real Paithani is woven thread by thread without machines. It takes months of silent patience, but it lives for a hundred years in a family.',
    experienceYears: 42,
    generation: '3rd Generation Pit-Loom Weaver',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    heritageItemId: 'paithani-silk-brocade',
    specialty: 'Mor-Bangadi (Peacock & Bangle) & Asavali Zari Borders'
  }
];

export const CULTURAL_STATS: StatMetric[] = [
  {
    label: 'Geographical Districts',
    marathiLabel: 'जिल्हे',
    value: '36',
    description: 'Documented across Konkan, Western Maharashtra, Marathwada, Vidarbha & Khandesh'
  },
  {
    label: 'Documented Traditions',
    marathiLabel: 'सांस्कृतिक परंपरा',
    value: '140+',
    description: 'Indigenous crafts, handlooms, lost-wax metallurgy, folk paintings & puppetry guilds'
  },
  {
    label: 'Living Heritage Artisans',
    marathiLabel: 'हस्तकला कारागीर',
    value: '8,500+',
    description: 'Active generational practitioners, guild masters, and indigenous knowledge keepers'
  },
  {
    label: 'Centuries of Living Lore',
    marathiLabel: 'वारशाचा इतिहास',
    value: '2,000+',
    description: 'Uninterrupted lineage extending from the Satavahanas to Maratha royal courts'
  }
];
