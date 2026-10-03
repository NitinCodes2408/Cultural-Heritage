const fs = require('fs');
const path = require('path');

const svgData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/generated_districts_svg.json'), 'utf8'));

const svgMap = {};
svgData.forEach(item => {
  svgMap[item.id] = item;
});

const DISTRICTS_DATA = [
  {
    id: 'gadchiroli',
    name: 'Gadchiroli',
    marathiName: 'गडचिरोली',
    slug: 'gadchiroli',
    region: 'Vidarbha',
    description: 'Deep forest district home to ancient Maria Gond and Madia communities preserving pure lost-wax Dhokra metal casting, natural Tussar silk cocoon harvesting, and sacred bamboo craft.',
    featuredCrafts: ['Dhokra Bell Metal Casting', 'Maria Gond Bamboo Weaving', 'Wild Tussar Silk Cultivation'],
    heritageCount: 14,
    artisanCount: 420,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 88, y: 55 },
    highlights: ['Ghotul Cultural Architecture', 'Lost-Wax Brass Figurines', 'Forest Fiber Ropes']
  },
  {
    id: 'chandrapur',
    name: 'Chandrapur',
    marathiName: 'चंद्रपूर',
    slug: 'chandrapur',
    region: 'Vidarbha',
    description: 'Heart of the Tadoba forest belt preserving indigenous terracotta kilns, Gond folk art traditions, and ancestral iron-smelting lore from ancient mining settlements.',
    featuredCrafts: ['Black Terracotta Pottery', 'Gond Earth Pigment Art', 'Traditional Blacksmithing'],
    heritageCount: 11,
    artisanCount: 240,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 78, y: 48 },
    highlights: ['Smoked Black Clay Pots', 'Forest Totem Murals', 'Tribal Hunting Implements']
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    marathiName: 'नागपूर',
    slug: 'nagpur',
    region: 'Vidarbha',
    description: 'Historic capital of the Bhonsles, known for traditional brass and copper utensil guilds, Sitabuldi handloom weavers, and royal zardozi embroidery.',
    featuredCrafts: ['Traditional Brass Casting', 'Vidarbha Handloom Weaving', 'Zardozi Embroidery'],
    heritageCount: 17,
    artisanCount: 650,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 72, y: 22 },
    highlights: ['Bhonsle Royal Brassware', 'Cotton Khadi Looms', 'Orange Peel Natural Dyes']
  },
  {
    id: 'wardha',
    name: 'Wardha',
    marathiName: 'वर्धा',
    slug: 'wardha',
    region: 'Vidarbha',
    description: 'Historic center of the Swadeshi hand-spinning movement, Sevagram khadi weaving, and traditional bio-dynamic handmade paper and pottery.',
    featuredCrafts: ['Sevagram Handspun Khadi', 'Handmade Rag Paper', 'Terracotta Pottery'],
    heritageCount: 12,
    artisanCount: 310,
    image: 'https://images.unsplash.com/photo-1606744888344-493238955de9?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 68, y: 32 },
    highlights: ['Charkha Cotton Spinning', 'Organic Dyeing', 'Khadi Guilds']
  },
  {
    id: 'bhandara',
    name: 'Bhandara',
    marathiName: 'भंडारा',
    slug: 'bhandara',
    region: 'Vidarbha',
    description: 'Celebrated as the "Brass City" of Vidarbha with generations of Kasar smiths casting heavy Kansa (bell metal) dinnerware and temple lamps using age-old sand moulds.',
    featuredCrafts: ['Kansa Bell Metal Dinnerware', 'Brass Temple Deepstambh', 'Tussar Kosa Silk Weaving'],
    heritageCount: 10,
    artisanCount: 460,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 82, y: 26 },
    highlights: ['Therapeutic Kansa Plates', 'Hand-Turned Brass Urns', 'Kosa Silk Cocoons']
  },
  {
    id: 'gondia',
    name: 'Gondia',
    marathiName: 'गोंदिया',
    slug: 'gondia',
    region: 'Vidarbha',
    description: 'Border district celebrated for wild Tussar silkworm farming (Kosa), lac bangle making, and intricate forest bamboo fishing traps along the Wainganga basin.',
    featuredCrafts: ['Kosa Wild Silk Weaving', 'Natural Lac Bangles', 'Bamboo Fishing Traps'],
    heritageCount: 9,
    artisanCount: 280,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 87, y: 20 },
    highlights: ['Kosa Cocoon Boiling', 'Tribal Lac Ornamentation', 'Wainganga Basin Crafts']
  },
  {
    id: 'amravati',
    name: 'Amravati',
    marathiName: 'अमरावती',
    slug: 'amravati',
    region: 'Vidarbha',
    description: 'Encompasses the Satpura highlands of Melghat where Korku and Gond tribes craft intricate structural bamboo lanterns, sustainable kitchenware, and teakwood totems.',
    featuredCrafts: ['Melghat Bamboo Craft', 'Korku Wood Carving', 'Natural Forest Resin Works'],
    heritageCount: 13,
    artisanCount: 380,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 62, y: 24 },
    highlights: ['Sliver Bamboo Baskets', 'Teakwood Ancestor Pillars', 'Wild Mahua Bark Pigments']
  },
  {
    id: 'akola',
    name: 'Akola',
    marathiName: 'अकोला',
    slug: 'akola',
    region: 'Vidarbha',
    description: 'Cotton hub known for traditional hand-blocked Khadi printing, hand-stitched patchwork quilts (Godhadi), and rural brass bell crafting in Patur.',
    featuredCrafts: ['Cotton Block Printing', 'Traditional Godhadi Quilting', 'Cast Cattle Bells'],
    heritageCount: 10,
    artisanCount: 290,
    image: 'https://images.unsplash.com/photo-1606744888344-493238955de9?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 55, y: 28 },
    highlights: ['Natural Indigo Print Blocks', 'Hand-Stitched Recycled Quilts', 'Patur Bell Smiths']
  },
  {
    id: 'buldhana',
    name: 'Buldhana',
    marathiName: 'बुलढाणा',
    slug: 'buldhana',
    region: 'Vidarbha',
    description: 'Cradle of the mystical Lonar meteorite lake, famous for Shegaon folk crafts, khadi handlooms, and black basalt rock carving traditions.',
    featuredCrafts: ['Basalt Stone Carving', 'Folk Terracotta Idols', 'Traditional Khadi Weaving'],
    heritageCount: 11,
    artisanCount: 320,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 48, y: 25 },
    highlights: ['Basalt Temple Sculpture', 'Lonar Mineral Pigments', 'Folk Pottery']
  },
  {
    id: 'washim',
    name: 'Washim',
    marathiName: 'वाशीम',
    slug: 'washim',
    region: 'Vidarbha',
    description: 'Ancient Vatsagulma capital of the Vakatakas, preserving ancient temple stone masonry, handspun coarse cotton blankets, and folk leather craft.',
    featuredCrafts: ['Vakataka Temple Stonework', 'Coarse Wool Ghongadi', 'Folk Leather Saddlery'],
    heritageCount: 8,
    artisanCount: 190,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 58, y: 38 },
    highlights: ['Ancient Temple Carving', 'Wool Loom Weaving', 'Traditional Saddles']
  },
  {
    id: 'yavatmal',
    name: 'Yavatmal',
    marathiName: 'यवतमाळ',
    slug: 'yavatmal',
    region: 'Vidarbha',
    description: 'Heartland of the Banjara and Kolam tribes, world-famous for vibrant Banjara needlecraft embroidery with mirrors, cowrie shells, and heavy silver jewellery.',
    featuredCrafts: ['Banjara Mirror Embroidery', 'Kolam Bamboo Basketry', 'Tribal Silver Ornaments'],
    heritageCount: 15,
    artisanCount: 540,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 67, y: 44 },
    highlights: ['Lembadi Needlecraft', 'Cowrie Shell Adornments', 'Traditional Loom Blankets']
  },
  {
    id: 'pune',
    name: 'Pune',
    marathiName: 'पुणे',
    slug: 'pune',
    region: 'Western Maharashtra',
    description: 'Home to the historic Tambat Ali lanes where Coppersmiths (Tambats) practice hand-beaten "matharkam" indentation on gleaming copperware, and the ceremonial Puneri Pagadi turbans are crafted.',
    featuredCrafts: ['Tambat Matharkam Beaten Copper', 'Puneri Pagadi Turban Craft', 'Cast Bell Metal Vessels'],
    heritageCount: 21,
    artisanCount: 520,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 30, y: 58 },
    highlights: ['Sound of Beaten Copper in Kasba Peth', 'Traditional Water Vessels (Ganga Jamuna)', 'Hand-Formed Khadi Turbans']
  },
  {
    id: 'satara',
    name: 'Satara',
    marathiName: 'सातारा',
    slug: 'satara',
    region: 'Western Maharashtra',
    description: 'Historic Maratha capital kingdom known for Wai copper smithies along the Krishna ghats, silver filigree royal ornaments, and handwoven Shindeshahi turbans.',
    featuredCrafts: ['Wai Copper & Brassware', 'Silver Filigree Jewellery', 'Traditional Turbans'],
    heritageCount: 16,
    artisanCount: 410,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 32, y: 68 },
    highlights: ['Krishna River Ghat Smiths', 'Chhatrapati Regalia Craft', 'Hand-Pressed Leather']
  },
  {
    id: 'sangli',
    name: 'Sangli',
    marathiName: 'सांगली',
    slug: 'sangli',
    region: 'Western Maharashtra',
    description: 'The classical musical instrument capital of Miraj, where master craftsmen hand-carve sitars, tanpuras, and sarods from seasoned gourds and tun wood for maestros worldwide.',
    featuredCrafts: ['Miraj Sitar & Tanpura Making', 'Turmeric Natural Dyeing', 'Khun Handloom Weaving'],
    heritageCount: 18,
    artisanCount: 490,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 38, y: 78 },
    highlights: ['Acoustic Gourd Carving', 'Bone & Wood Inlay', 'Miraj Instrument Guilds']
  },
  {
    id: 'solapur',
    name: 'Solapur',
    marathiName: 'सोलापूर',
    slug: 'solapur',
    region: 'Western Maharashtra',
    description: 'Renowned for world-famous Jacquard woven Solapuri Chaddar blankets with geometric motifs, heavy terry towels, and traditional handloom Guledgudd Khun fabric for traditional blouses.',
    featuredCrafts: ['Solapuri Jacquard Chaddar', 'Guledgudd Khun Handloom', 'Folk Leather Footwear'],
    heritageCount: 15,
    artisanCount: 950,
    image: 'https://images.unsplash.com/photo-1606744888344-493238955de9?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 50, y: 74 },
    highlights: ['GI-Tagged Chaddar Weaving', 'Dobby Loom Borders', 'Traditional Indigo & Terracotta Dyes']
  },
  {
    id: 'kolhapur',
    name: 'Kolhapur',
    marathiName: 'कोल्हापूर',
    slug: 'kolhapur',
    region: 'Western Maharashtra',
    description: 'Historic city renowned for handcrafted vegetable-tanned leather Kolhapuri chappals, traditional silver Saaj jewellery, hand-beaten bronze bell metal casting, and ancient akhada traditions.',
    featuredCrafts: ['Kolhapuri Hand-Braided Leather', 'Kolhapuri Saaj Silver Ornamentation', 'Bronze Bell Metal Foundry'],
    heritageCount: 25,
    artisanCount: 1250,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 34, y: 84 },
    highlights: ['Bakkal Natural Tanning', 'Hand-Braided Cord Work', '21-Pendant Saaj Necklace']
  },
  {
    id: 'palghar',
    name: 'Palghar',
    marathiName: 'पालघर',
    slug: 'palghar',
    region: 'Konkan',
    description: 'The sacred heartland of Warli tribal painting, where walls of red mud (karvi) and cow dung become canvases for white rice paste diagrams depicting fertility, cosmic circles, and the Tarpa dance.',
    featuredCrafts: ['Warli Sacred Painting', 'Tarpa Musical Craft', 'Wild Bamboo Basketry'],
    heritageCount: 16,
    artisanCount: 680,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 18, y: 38 },
    highlights: ['Lagnachak Chowk Ritual Murals', 'Tarpa Wind Instrument', 'Mud Plaster Preparation']
  },
  {
    id: 'thane',
    name: 'Thane',
    marathiName: 'ठाणे',
    slug: 'thane',
    region: 'Konkan',
    description: 'Historic coastal gateway preserving traditional Kalyan handlooms, salt-pan pottery, and indigenous wood carving of coastal boat guilds.',
    featuredCrafts: ['Salt-Glazed Coastal Pottery', 'Boatwright Wood Craft', 'Handloom Cotton Weaving'],
    heritageCount: 14,
    artisanCount: 380,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 20, y: 44 },
    highlights: ['Traditional Dhow Carving', 'Coastal Earthen Pots', 'Natural Reed Mats']
  },
  {
    id: 'mumbai-city',
    name: 'Mumbai City',
    marathiName: 'मुंबई शहर',
    slug: 'mumbai-city',
    region: 'Konkan',
    description: 'Island city preserving historic colonial stone masonry guilds, Crawford Market coppersmiths, Zari embroidery karkhanas, and heritage boat building.',
    featuredCrafts: ['Zari & Zardozi Embroidery', 'Heritage Stone Restoration', 'Koli Fishing Net Weaving'],
    heritageCount: 20,
    artisanCount: 920,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 18, y: 52 },
    highlights: ['Victorian Gothic Stonework', 'Gold Thread Karkhanas', 'Koli Traditional Nets']
  },
  {
    id: 'mumbai-suburban',
    name: 'Mumbai Suburban',
    marathiName: 'मुंबई उपनगर',
    slug: 'mumbai-suburban',
    region: 'Konkan',
    description: 'Vibrant cultural hub preserving Dharavi leathercraft and pottery kilns (Kumbharwada), Warli urban studio workshops, and cinematic set crafts.',
    featuredCrafts: ['Kumbharwada Terracotta Kilns', 'Handcrafted Fine Leather', 'Contemporary Warli Arts'],
    heritageCount: 18,
    artisanCount: 1100,
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 19, y: 48 },
    highlights: ['Ancestral Potters Wheel', 'Vegetable-Tanned Goods', 'Cultural Studios']
  },
  {
    id: 'raigad',
    name: 'Raigad',
    marathiName: 'रायगड',
    slug: 'raigad',
    region: 'Konkan',
    description: 'Capital of Chhatrapati Shivaji Maharaj Swarajya, home to traditional Mahad bronze bell founders, coconut coir weavers, and betel-nut carving.',
    featuredCrafts: ['Mahad Bell Metal Founding', 'Betel Nut (Supari) Carving', 'Coconut Coir Mats'],
    heritageCount: 17,
    artisanCount: 430,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 22, y: 56 },
    highlights: ['Fort Architecture Stonecraft', 'Miniature Supari Sculptures', 'Coastal Rope Weaving']
  },
  {
    id: 'ratnagiri',
    name: 'Ratnagiri',
    marathiName: 'रत्नागिरी',
    slug: 'ratnagiri',
    region: 'Konkan',
    description: 'Konkan coastal sanctuary preserving the rare Kaavi Kale red-ochre etching art on temple laterite walls, coconut shell delicate carving, and traditional coir weaving.',
    featuredCrafts: ['Kaavi Kale Red Murals', 'Coconut Shell Filigree', 'Natural Coir & Cane Mats'],
    heritageCount: 14,
    artisanCount: 210,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 23, y: 72 },
    highlights: ['Laterite Red Pigment Etching', 'Polished Coconut Cups', 'Ancestral Coastal Fiber']
  },
  {
    id: 'sindhudurg',
    name: 'Sindhudurg',
    marathiName: 'सिंधुदुर्ग',
    slug: 'sindhudurg',
    region: 'Konkan',
    description: 'Coastal cradle of the 300-year-old Sawantwadi lacquerware craft, royal Ganjifa playing cards painted with natural squirrel hair brushes, and the ancestral Pinguli Chitrakathi puppetry tradition.',
    featuredCrafts: ['Sawantwadi Lacquered Wood', 'Pinguli Chitrakathi Puppetry', 'Dashavatara Ganjifa Cards'],
    heritageCount: 19,
    artisanCount: 290,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 26, y: 92 },
    highlights: ['Royal Sawantwadi Durbar Heritage', 'Kalasri Puppet Guilds', 'Natural Tamarind Seed Lacquer']
  },
  {
    id: 'nashik',
    name: 'Nashik',
    marathiName: 'नाशिक',
    slug: 'nashik',
    region: 'Khandesh',
    description: 'Yeola town in Nashik district was patronized by the Peshwas to develop exceptional zari weaving skills, producing opulent Paithani sarees and heavy brassware for temples.',
    featuredCrafts: ['Yeola Handloom Paithani', 'Brass Pooja Vessels', 'Traditional Bell Metal Craft'],
    heritageCount: 18,
    artisanCount: 1100,
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 28, y: 32 },
    highlights: ['Asavali Vine Motifs', 'Pure Gold Thread Inlay', 'Temple Brass Smiths']
  },
  {
    id: 'dhule',
    name: 'Dhule',
    marathiName: 'धुळे',
    slug: 'dhule',
    region: 'Khandesh',
    description: 'Khandesh weaving center celebrated for coarse cotton floor rugs (Dhurries), handspun blankets, and tribal iron tools.',
    featuredCrafts: ['Khandeshi Handwoven Dhurries', 'Tribal Blacksmithing', 'Handloom Cotton Towels'],
    heritageCount: 11,
    artisanCount: 340,
    image: 'https://images.unsplash.com/photo-1606744888344-493238955de9?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 34, y: 20 },
    highlights: ['Geometric Loom Patterns', 'Natural Mineral Dyes', 'Agricultural Iron Tools']
  },
  {
    id: 'nandurbar',
    name: 'Nandurbar',
    marathiName: 'नंदुरबार',
    slug: 'nandurbar',
    region: 'Khandesh',
    description: 'Tribal borderland where the Bhil and Pawara communities create sacred Pithora wall paintings, carved wooden memorial poles (Gatha), and resonant bamboo wind instruments.',
    featuredCrafts: ['Pithora Sacred Wall Murals', 'Bhil Wooden Gatha Memorials', 'Forest Bamboo Flutes'],
    heritageCount: 12,
    artisanCount: 310,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 28, y: 15 },
    highlights: ['Horse of Baba Pithora', 'Natural Mahua Oil Pigments', 'Pawari Wind Instruments']
  },
  {
    id: 'jalgaon',
    name: 'Jalgaon',
    marathiName: 'जळगाव',
    slug: 'jalgaon',
    region: 'Khandesh',
    description: 'The gold city of Maharashtra, famous for fine 22k gold filigree jewelry, traditional banana fiber weaving, and handloom cotton quilts.',
    featuredCrafts: ['Khandesh Gold Filigree', 'Banana Pseudostem Fiber Weaving', 'Handloom Cotton Fabrics'],
    heritageCount: 14,
    artisanCount: 620,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 44, y: 18 },
    highlights: ['Traditional Gold Chokers', 'Eco-Friendly Plant Yarn', 'Rural Loom Guilds']
  },
  {
    id: 'ahilyanagar',
    name: 'Ahilyanagar',
    marathiName: 'अहिल्यानगर',
    slug: 'ahilyanagar',
    region: 'Khandesh',
    description: 'Historic Deccani crossroads known for handloom cotton saris, brassware casting, and traditional sugarcane fiber handicrafts.',
    featuredCrafts: ['Handloom Cotton Sarees', 'Cast Brass Pooja Ware', 'Agricultural Cane Crafts'],
    heritageCount: 16,
    artisanCount: 520,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 38, y: 48 },
    highlights: ['Temple Architecture Masonry', 'Natural Cotton Looms', 'Rural Metal Foundries']
  },
  {
    id: 'chhatrapati-sambhajinagar',
    name: 'Chhatrapati Sambhajinagar',
    marathiName: 'छत्रपती संभाजीनगर',
    slug: 'chhatrapati-sambhajinagar',
    region: 'Marathwada',
    description: 'Imperial weaving capital where royal Paithani silk saris with pure gold/silver zari borders and Persian-influenced Himroo & Mashru textiles have been hand-loomed since the Satavahana era.',
    featuredCrafts: ['Royal Paithani Silk Brocade', 'Himroo Cotton-Silk Weaving', 'Bidri Inlay Craft'],
    heritageCount: 22,
    artisanCount: 840,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 42, y: 44 },
    highlights: ['Muniya & Mor (Peacock) Motifs', 'Tapestry Weaving Technique', 'Ajanta Cave Heritage Pigments']
  },
  {
    id: 'jalna',
    name: 'Jalna',
    marathiName: 'जालना',
    slug: 'jalna',
    region: 'Marathwada',
    description: 'Historic trading hub of Marathwada known for traditional seed-bead embroidery, hand-forged agricultural implements, and coarse wool spinning.',
    featuredCrafts: ['Seed Bead Folk Embroidery', 'Hand-Forged Iron Implements', 'Coarse Wool Ghongadi'],
    heritageCount: 10,
    artisanCount: 270,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 50, y: 44 },
    highlights: ['Folk Bead Ornaments', 'Rural Blacksmith Foundries', 'Deccani Sheep Wool']
  },
  {
    id: 'parbhani',
    name: 'Parbhani',
    marathiName: 'परभणी',
    slug: 'parbhani',
    region: 'Marathwada',
    description: 'Godavari cotton belt renowned for traditional hand-dyed cotton fabrics, folk pottery, and rural musical instrument crafting.',
    featuredCrafts: ['Hand-Dyed Cotton Fabrics', 'Godavari Terracotta Pottery', 'Dholak & Sambal Craft'],
    heritageCount: 11,
    artisanCount: 230,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 56, y: 49 },
    highlights: ['Natural Vat Dyeing', 'Temple Percussion Instruments', 'Clay Grain Silos']
  },
  {
    id: 'hingoli',
    name: 'Hingoli',
    marathiName: 'हिंगोली',
    slug: 'hingoli',
    region: 'Marathwada',
    description: 'Pilgrim heartland preserving ancient wooden temple chariots (Rath) carving, traditional brass oil lamps, and handspun coarse textiles.',
    featuredCrafts: ['Temple Rath Wood Carving', 'Brass Samai Oil Lamps', 'Handspun Khadi Weaving'],
    heritageCount: 9,
    artisanCount: 190,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 62, y: 45 },
    highlights: ['Aundha Nagnath Temple Carving', 'Tiered Brass Lamps', 'Village Loom Weavers']
  },
  {
    id: 'nanded',
    name: 'Nanded',
    marathiName: 'नांदेड',
    slug: 'nanded',
    region: 'Marathwada',
    description: 'Godavari basin heritage center with a rich history of handspun Deccani woolen blankets (Ghongadi), traditional sword-sheathing arts, and rare wooden calligraphy pens.',
    featuredCrafts: ['Deccani Ghongadi Wool Weaving', 'Traditional Iron Smiths', 'Godavari Clay Artifacts'],
    heritageCount: 9,
    artisanCount: 180,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 62, y: 58 },
    highlights: ['Black Sheep Wool Blankets', 'Pith Loom Weaving', 'Spiritual Wood Turnery']
  },
  {
    id: 'beed',
    name: 'Beed',
    marathiName: 'बीड',
    slug: 'beed',
    region: 'Marathwada',
    description: 'Deccan plateau district preserving ancient leather water-pouch craft (Mot), hand-carved stone water troughs, and traditional Marathwada folk embroidery.',
    featuredCrafts: ['Traditional Leather Water Pouch Craft', 'Deccan Basalt Stonework', 'Folk Applique Quilts'],
    heritageCount: 12,
    artisanCount: 260,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 46, y: 56 },
    highlights: ['Heavy-Duty Tanned Leather', 'Stepwell Stone Masonry', 'Recycled Fabric Art']
  },
  {
    id: 'latur',
    name: 'Latur',
    marathiName: 'लातूर',
    slug: 'latur',
    region: 'Marathwada',
    description: 'Historic Rashtrakuta trading city celebrated for handloom silk weaving, traditional copper kitchen utensils, and Marathwada folk leathercraft.',
    featuredCrafts: ['Marathwada Handloom Silk', 'Hand-Hammered Copper Vessels', 'Handcrafted Leather Saddles'],
    heritageCount: 13,
    artisanCount: 310,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 56, y: 64 },
    highlights: ['Traditional Silk Borders', 'Pure Copper Handiware', 'Village Leather Guilds']
  },
  {
    id: 'dharashiv',
    name: 'Dharashiv',
    marathiName: 'धाराशिव',
    slug: 'dharashiv',
    region: 'Marathwada',
    description: 'Home to the ancient Dharashiv rock-cut caves, renowned for Tuljabhavani temple silver-embossing craft, traditional bronze cymbals (Taal), and folk stone carving.',
    featuredCrafts: ['Silver Sheet Embossing Craft', 'Bronze Taal & Jhanj Crafting', 'Basalt Cave Stone Masonry'],
    heritageCount: 15,
    artisanCount: 370,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    coordinates: { x: 48, y: 66 },
    highlights: ['Temple Silver Torans', 'Resonant Bell Metal Cymbals', 'Rock-Cut Sculpture']
  }
];

// Attach SVG paths and centers
const mergedDistricts = DISTRICTS_DATA.map(d => {
  const svg = svgMap[d.id];
  if (!svg) {
    console.warn(`Missing SVG for district ${d.id}`);
  }
  return {
    ...d,
    heroImage: d.image,
    svgPath: svg ? svg.path : '',
    svgCenter: svg ? svg.center : { x: d.coordinates.x * 10, y: d.coordinates.y * 7.8 }
  };
});

console.log('Total merged districts:', mergedDistricts.length);

const tsContent = `import { District, Region } from './types';

export const DISTRICTS: District[] = ${JSON.stringify(mergedDistricts, null, 2)};

export const REGIONS: { id: string; name: string; marathiName: string; count: number }[] = [
  { id: 'all', name: 'All Maharashtra', marathiName: 'संपूर्ण महाराष्ट्र', count: 36 },
  { id: 'Konkan', name: 'Konkan', marathiName: 'कोकण', count: 7 },
  { id: 'Western Maharashtra', name: 'Western Maharashtra', marathiName: 'पश्चिम महाराष्ट्र', count: 5 },
  { id: 'Marathwada', name: 'Marathwada', marathiName: 'मराठवाडा', count: 8 },
  { id: 'Vidarbha', name: 'Vidarbha', marathiName: 'विदर्भ', count: 11 },
  { id: 'Khandesh', name: 'Khandesh', marathiName: 'खान्देश', count: 5 },
];

export function getDistrictBySlug(slug: string): District | undefined {
  const normalized = slug.toLowerCase().trim();
  return DISTRICTS.find(
    (d) => d.slug.toLowerCase() === normalized || d.id.toLowerCase() === normalized
  );
}

export function getAllDistricts(): District[] {
  return DISTRICTS;
}

export function getAllDistrictSlugs(): string[] {
  return DISTRICTS.map((d) => d.slug);
}
`;

fs.writeFileSync(path.join(__dirname, '../data/districts.ts'), tsContent, 'utf8');
console.log('Successfully wrote data/districts.ts with 36 districts!');
