const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/maharashtra.geojson'), 'utf8'));

const DISTRICT_MAP = {
  'Ahmednagar': { id: 'ahilyanagar', name: 'Ahilyanagar', marathiName: 'अहिल्यानगर', region: 'Khandesh' },
  'Akola': { id: 'akola', name: 'Akola', marathiName: 'अकोला', region: 'Vidarbha' },
  'Amravati': { id: 'amravati', name: 'Amravati', marathiName: 'अमरावती', region: 'Vidarbha' },
  'Aurangabad': { id: 'chhatrapati-sambhajinagar', name: 'Chhatrapati Sambhajinagar', marathiName: 'छत्रपती संभाजीनगर', region: 'Marathwada' },
  'Beed': { id: 'beed', name: 'Beed', marathiName: 'बीड', region: 'Marathwada' },
  'Bhandara': { id: 'bhandara', name: 'Bhandara', marathiName: 'भंडारा', region: 'Vidarbha' },
  'Buldhana': { id: 'buldhana', name: 'Buldhana', marathiName: 'बुलढाणा', region: 'Vidarbha' },
  'Chandrapur': { id: 'chandrapur', name: 'Chandrapur', marathiName: 'चंद्रपूर', region: 'Vidarbha' },
  'Dhule': { id: 'dhule', name: 'Dhule', marathiName: 'धुळे', region: 'Khandesh' },
  'Gadchiroli': { id: 'gadchiroli', name: 'Gadchiroli', marathiName: 'गडचिरोली', region: 'Vidarbha' },
  'Gondia': { id: 'gondia', name: 'Gondia', marathiName: 'गोंदिया', region: 'Vidarbha' },
  'Hingoli': { id: 'hingoli', name: 'Hingoli', marathiName: 'हिंगोली', region: 'Marathwada' },
  'Jalgaon': { id: 'jalgaon', name: 'Jalgaon', marathiName: 'जळगाव', region: 'Khandesh' },
  'Jalna': { id: 'jalna', name: 'Jalna', marathiName: 'जालना', region: 'Marathwada' },
  'Kolhapur': { id: 'kolhapur', name: 'Kolhapur', marathiName: 'कोल्हापूर', region: 'Western Maharashtra' },
  'Latur': { id: 'latur', name: 'Latur', marathiName: 'लातूर', region: 'Marathwada' },
  'Nagpur': { id: 'nagpur', name: 'Nagpur', marathiName: 'नागपूर', region: 'Vidarbha' },
  'Nanded': { id: 'nanded', name: 'Nanded', marathiName: 'नांदेड', region: 'Marathwada' },
  'Nandurbar': { id: 'nandurbar', name: 'Nandurbar', marathiName: 'नंदुरबार', region: 'Khandesh' },
  'Nashik': { id: 'nashik', name: 'Nashik', marathiName: 'नाशिक', region: 'Khandesh' },
  'Osmanabad': { id: 'dharashiv', name: 'Dharashiv', marathiName: 'धाराशिव', region: 'Marathwada' },
  'Palghar': { id: 'palghar', name: 'Palghar', marathiName: 'पालघर', region: 'Konkan' },
  'Parbhani': { id: 'parbhani', name: 'Parbhani', marathiName: 'परभणी', region: 'Marathwada' },
  'Pune': { id: 'pune', name: 'Pune', marathiName: 'पुणे', region: 'Western Maharashtra' },
  'Raigad': { id: 'raigad', name: 'Raigad', marathiName: 'रायगड', region: 'Konkan' },
  'Ratnagiri': { id: 'ratnagiri', name: 'Ratnagiri', marathiName: 'रत्नागिरी', region: 'Konkan' },
  'Sangli': { id: 'sangli', name: 'Sangli', marathiName: 'सांगली', region: 'Western Maharashtra' },
  'Satara': { id: 'satara', name: 'Satara', marathiName: 'सातारा', region: 'Western Maharashtra' },
  'Sindhudurg': { id: 'sindhudurg', name: 'Sindhudurg', marathiName: 'सिंधुदुर्ग', region: 'Konkan' },
  'Solapur': { id: 'solapur', name: 'Solapur', marathiName: 'सोलापूर', region: 'Western Maharashtra' },
  'Thane': { id: 'thane', name: 'Thane', marathiName: 'ठाणे', region: 'Konkan' },
  'Wardha': { id: 'wardha', name: 'Wardha', marathiName: 'वर्धा', region: 'Vidarbha' },
  'Washim': { id: 'washim', name: 'Washim', marathiName: 'वाशीम', region: 'Vidarbha' },
  'Yavatmal': { id: 'yavatmal', name: 'Yavatmal', marathiName: 'यवतमाळ', region: 'Vidarbha' }
};

const minLng = 72.654608, maxLng = 80.898357;
const minLat = 15.606125, maxLat = 22.033719;
const midLat = (minLat + maxLat) / 2;
const cosLat = Math.cos(midLat * Math.PI / 180);

const svgWidth = 1000;
const svgHeight = 780;
const padding = 35;

const geoWidth = (maxLng - minLng) * cosLat;
const geoHeight = maxLat - minLat;

const scaleX = (svgWidth - 2 * padding) / geoWidth;
const scaleY = (svgHeight - 2 * padding) / geoHeight;
const scale = Math.min(scaleX, scaleY);

// Centering offsets
const finalWidth = geoWidth * scale;
const finalHeight = geoHeight * scale;
const offsetX = padding + (svgWidth - 2 * padding - finalWidth) / 2;
const offsetY = padding + (svgHeight - 2 * padding - finalHeight) / 2;

function project(lng, lat) {
  const x = offsetX + (lng - minLng) * cosLat * scale;
  const y = offsetY + (maxLat - lat) * scale;
  return [Number(x.toFixed(1)), Number(y.toFixed(1))];
}

function coordsToSvgPath(coords, type) {
  if (type === 'Polygon') {
    return coords.map(ring => {
      return ring.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${project(pt[0], pt[1]).join(' ')}`).join(' ') + ' Z';
    }).join(' ');
  } else if (type === 'MultiPolygon') {
    return coords.map(poly => {
      return poly.map(ring => {
        return ring.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${project(pt[0], pt[1]).join(' ')}`).join(' ') + ' Z';
      }).join(' ');
    }).join(' ');
  }
  return '';
}

function calculateCentroid(coords, type) {
  let sumX = 0, sumY = 0, count = 0;
  function add(pt) {
    const [x, y] = project(pt[0], pt[1]);
    sumX += x;
    sumY += y;
    count++;
  }
  if (type === 'Polygon') {
    coords[0].forEach(add);
  } else if (type === 'MultiPolygon') {
    coords.forEach(poly => poly[0].forEach(add));
  }
  return { x: Number((sumX / count).toFixed(1)), y: Number((sumY / count).toFixed(1)) };
}

const districtsOutput = [];

data.features.forEach(f => {
  const dName = f.properties.district;
  if (dName === 'Mumbai') {
    const mumbaiRing = f.geometry.coordinates[0];
    
    // Split Mumbai coords into south (City) and north (Suburban)
    const cityCoords = [];
    const suburbanCoords = [];
    
    mumbaiRing.forEach(pt => {
      if (pt[1] <= 19.01) {
        cityCoords.push(pt);
      } else {
        suburbanCoords.push(pt);
      }
    });

    // To ensure both are valid closed polygons if needed or use distinct subpaths
    const center = calculateCentroid(f.geometry.coordinates, f.geometry.type);

    districtsOutput.push({
      id: 'mumbai-city',
      name: 'Mumbai City',
      marathiName: 'मुंबई शहर',
      region: 'Konkan',
      path: coordsToSvgPath(f.geometry.coordinates, f.geometry.type),
      center: { x: Number((center.x - 4).toFixed(1)), y: Number((center.y + 7).toFixed(1)) }
    });

    districtsOutput.push({
      id: 'mumbai-suburban',
      name: 'Mumbai Suburban',
      marathiName: 'मुंबई उपनगर',
      region: 'Konkan',
      path: coordsToSvgPath(f.geometry.coordinates, f.geometry.type),
      center: { x: Number((center.x + 2).toFixed(1)), y: Number((center.y - 7).toFixed(1)) }
    });
  } else if (DISTRICT_MAP[dName]) {
    const info = DISTRICT_MAP[dName];
    const path = coordsToSvgPath(f.geometry.coordinates, f.geometry.type);
    const center = calculateCentroid(f.geometry.coordinates, f.geometry.type);
    districtsOutput.push({
      id: info.id,
      name: info.name,
      marathiName: info.marathiName,
      region: info.region,
      path: path,
      center: center
    });
  }
});

console.log('Total processed districts:', districtsOutput.length);
fs.writeFileSync(path.join(__dirname, '../data/generated_districts_svg.json'), JSON.stringify(districtsOutput, null, 2));
