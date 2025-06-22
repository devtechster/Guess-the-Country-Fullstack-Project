import { Country, CategoryType } from '../types/Country';

// Country data organized by regions
const countryData: Record<CategoryType, Country[]> = {
  europe: [
    { name: 'Germany', code: 'DE', flag: 'https://flagcdn.com/w320/de.png', region: 'Europe' },
    { name: 'France', code: 'FR', flag: 'https://flagcdn.com/w320/fr.png', region: 'Europe' },
    { name: 'Italy', code: 'IT', flag: 'https://flagcdn.com/w320/it.png', region: 'Europe' },
    { name: 'Spain', code: 'ES', flag: 'https://flagcdn.com/w320/es.png', region: 'Europe' },
    { name: 'United Kingdom', code: 'GB', flag: 'https://flagcdn.com/w320/gb.png', region: 'Europe' },
    { name: 'Netherlands', code: 'NL', flag: 'https://flagcdn.com/w320/nl.png', region: 'Europe' },
    { name: 'Poland', code: 'PL', flag: 'https://flagcdn.com/w320/pl.png', region: 'Europe' },
    { name: 'Sweden', code: 'SE', flag: 'https://flagcdn.com/w320/se.png', region: 'Europe' },
    { name: 'Norway', code: 'NO', flag: 'https://flagcdn.com/w320/no.png', region: 'Europe' },
    { name: 'Switzerland', code: 'CH', flag: 'https://flagcdn.com/w320/ch.png', region: 'Europe' },
    { name: 'Ukraine', code: 'UA', flag: 'https://flagcdn.com/w320/ua.png', region: 'Europe' },
    { name: 'Czech Republic', code: 'CZ', flag: 'https://flagcdn.com/w320/cz.png', region: 'Europe' },
    { name: 'Slovakia', code: 'SK', flag: 'https://flagcdn.com/w320/sk.png', region: 'Europe' },
    { name: 'Austria', code: 'AT', flag: 'https://flagcdn.com/w320/at.png', region: 'Europe' },
    { name: 'Belgium', code: 'BE', flag: 'https://flagcdn.com/w320/be.png', region: 'Europe' },
    { name: 'Denmark', code: 'DK', flag: 'https://flagcdn.com/w320/dk.png', region: 'Europe' },
    { name: 'Finland', code: 'FI', flag: 'https://flagcdn.com/w320/fi.png', region: 'Europe' },
    { name: 'Greece', code: 'GR', flag: 'https://flagcdn.com/w320/gr.png', region: 'Europe' },
    { name: 'Hungary', code: 'HU', flag: 'https://flagcdn.com/w320/hu.png', region: 'Europe' },
    { name: 'Ireland', code: 'IE', flag: 'https://flagcdn.com/w320/ie.png', region: 'Europe' },
    { name: 'Portugal', code: 'PT', flag: 'https://flagcdn.com/w320/pt.png', region: 'Europe' },
    { name: 'Romania', code: 'RO', flag: 'https://flagcdn.com/w320/ro.png', region: 'Europe' },
    { name: 'Bulgaria', code: 'BG', flag: 'https://flagcdn.com/w320/bg.png', region: 'Europe' },
    { name: 'Croatia', code: 'HR', flag: 'https://flagcdn.com/w320/hr.png', region: 'Europe' },
    { name: 'Slovenia', code: 'SI', flag: 'https://flagcdn.com/w320/si.png', region: 'Europe' },
    { name: 'Lithuania', code: 'LT', flag: 'https://flagcdn.com/w320/lt.png', region: 'Europe' },
    { name: 'Latvia', code: 'LV', flag: 'https://flagcdn.com/w320/lv.png', region: 'Europe' },
    { name: 'Estonia', code: 'EE', flag: 'https://flagcdn.com/w320/ee.png', region: 'Europe' },
    { name: 'Serbia', code: 'RS', flag: 'https://flagcdn.com/w320/rs.png', region: 'Europe' },
    { name: 'Bosnia and Herzegovina', code: 'BA', flag: 'https://flagcdn.com/w320/ba.png', region: 'Europe' },
    { name: 'North Macedonia', code: 'MK', flag: 'https://flagcdn.com/w320/mk.png', region: 'Europe' },
    { name: 'Albania', code: 'AL', flag: 'https://flagcdn.com/w320/al.png', region: 'Europe' },
    { name: 'Montenegro', code: 'ME', flag: 'https://flagcdn.com/w320/me.png', region: 'Europe' },
    { name: 'Moldova', code: 'MD', flag: 'https://flagcdn.com/w320/md.png', region: 'Europe' },
    { name: 'Belarus', code: 'BY', flag: 'https://flagcdn.com/w320/by.png', region: 'Europe' },
    { name: 'Luxembourg', code: 'LU', flag: 'https://flagcdn.com/w320/lu.png', region: 'Europe' },
    { name: 'Malta', code: 'MT', flag: 'https://flagcdn.com/w320/mt.png', region: 'Europe' },
    { name: 'Cyprus', code: 'CY', flag: 'https://flagcdn.com/w320/cy.png', region: 'Europe' },
    { name: 'Iceland', code: 'IS', flag: 'https://flagcdn.com/w320/is.png', region: 'Europe' },
    { name: 'Russia', code: 'RU', flag: 'https://flagcdn.com/w320/ru.png', region: 'Europe' },
  ],
  'middle-east': [
    { name: 'Saudi Arabia', code: 'SA', flag: 'https://flagcdn.com/w320/sa.png', region: 'Middle East' },
    { name: 'Iran', code: 'IR', flag: 'https://flagcdn.com/w320/ir.png', region: 'Middle East' },
    { name: 'Turkey', code: 'TR', flag: 'https://flagcdn.com/w320/tr.png', region: 'Middle East' },
    { name: 'Israel', code: 'IL', flag: 'https://flagcdn.com/w320/il.png', region: 'Middle East' },
    { name: 'United Arab Emirates', code: 'AE', flag: 'https://flagcdn.com/w320/ae.png', region: 'Middle East' },
    { name: 'Jordan', code: 'JO', flag: 'https://flagcdn.com/w320/jo.png', region: 'Middle East' },
    { name: 'Lebanon', code: 'LB', flag: 'https://flagcdn.com/w320/lb.png', region: 'Middle East' },
    { name: 'Qatar', code: 'QA', flag: 'https://flagcdn.com/w320/qa.png', region: 'Middle East' },
    { name: 'Kuwait', code: 'KW', flag: 'https://flagcdn.com/w320/kw.png', region: 'Middle East' },
    { name: 'Iraq', code: 'IQ', flag: 'https://flagcdn.com/w320/iq.png', region: 'Middle East' },
    { name: 'Syria', code: 'SY', flag: 'https://flagcdn.com/w320/sy.png', region: 'Middle East' },
    { name: 'Yemen', code: 'YE', flag: 'https://flagcdn.com/w320/ye.png', region: 'Middle East' },
    { name: 'Oman', code: 'OM', flag: 'https://flagcdn.com/w320/om.png', region: 'Middle East' },
    { name: 'Bahrain', code: 'BH', flag: 'https://flagcdn.com/w320/bh.png', region: 'Middle East' },
    { name: 'Palestine', code: 'PS', flag: 'https://flagcdn.com/w320/ps.png', region: 'Middle East' },
    { name: 'Georgia', code: 'GE', flag: 'https://flagcdn.com/w320/ge.png', region: 'Middle East' },
    { name: 'Armenia', code: 'AM', flag: 'https://flagcdn.com/w320/am.png', region: 'Middle East' },
    { name: 'Azerbaijan', code: 'AZ', flag: 'https://flagcdn.com/w320/az.png', region: 'Middle East' },
  ],
  africa: [
    { name: 'Nigeria', code: 'NG', flag: 'https://flagcdn.com/w320/ng.png', region: 'Africa' },
    { name: 'South Africa', code: 'ZA', flag: 'https://flagcdn.com/w320/za.png', region: 'Africa' },
    { name: 'Egypt', code: 'EG', flag: 'https://flagcdn.com/w320/eg.png', region: 'Africa' },
    { name: 'Kenya', code: 'KE', flag: 'https://flagcdn.com/w320/ke.png', region: 'Africa' },
    { name: 'Morocco', code: 'MA', flag: 'https://flagcdn.com/w320/ma.png', region: 'Africa' },
    { name: 'Ghana', code: 'GH', flag: 'https://flagcdn.com/w320/gh.png', region: 'Africa' },
    { name: 'Ethiopia', code: 'ET', flag: 'https://flagcdn.com/w320/et.png', region: 'Africa' },
    { name: 'Algeria', code: 'DZ', flag: 'https://flagcdn.com/w320/dz.png', region: 'Africa' },
    { name: 'Tunisia', code: 'TN', flag: 'https://flagcdn.com/w320/tn.png', region: 'Africa' },
    { name: 'Tanzania', code: 'TZ', flag: 'https://flagcdn.com/w320/tz.png', region: 'Africa' },
    { name: 'Libya', code: 'LY', flag: 'https://flagcdn.com/w320/ly.png', region: 'Africa' },
    { name: 'Sudan', code: 'SD', flag: 'https://flagcdn.com/w320/sd.png', region: 'Africa' },
    { name: 'Uganda', code: 'UG', flag: 'https://flagcdn.com/w320/ug.png', region: 'Africa' },
    { name: 'Angola', code: 'AO', flag: 'https://flagcdn.com/w320/ao.png', region: 'Africa' },
    { name: 'Mozambique', code: 'MZ', flag: 'https://flagcdn.com/w320/mz.png', region: 'Africa' },
    { name: 'Madagascar', code: 'MG', flag: 'https://flagcdn.com/w320/mg.png', region: 'Africa' },
    { name: 'Cameroon', code: 'CM', flag: 'https://flagcdn.com/w320/cm.png', region: 'Africa' },
    { name: 'Ivory Coast', code: 'CI', flag: 'https://flagcdn.com/w320/ci.png', region: 'Africa' },
    { name: 'Mali', code: 'ML', flag: 'https://flagcdn.com/w320/ml.png', region: 'Africa' },
    { name: 'Burkina Faso', code: 'BF', flag: 'https://flagcdn.com/w320/bf.png', region: 'Africa' },
    { name: 'Niger', code: 'NE', flag: 'https://flagcdn.com/w320/ne.png', region: 'Africa' },
    { name: 'Senegal', code: 'SN', flag: 'https://flagcdn.com/w320/sn.png', region: 'Africa' },
    { name: 'Chad', code: 'TD', flag: 'https://flagcdn.com/w320/td.png', region: 'Africa' },
    { name: 'Guinea', code: 'GN', flag: 'https://flagcdn.com/w320/gn.png', region: 'Africa' },
    { name: 'Rwanda', code: 'RW', flag: 'https://flagcdn.com/w320/rw.png', region: 'Africa' },
    { name: 'Benin', code: 'BJ', flag: 'https://flagcdn.com/w320/bj.png', region: 'Africa' },
    { name: 'Burundi', code: 'BI', flag: 'https://flagcdn.com/w320/bi.png', region: 'Africa' },
    { name: 'Togo', code: 'TG', flag: 'https://flagcdn.com/w320/tg.png', region: 'Africa' },
    { name: 'Sierra Leone', code: 'SL', flag: 'https://flagcdn.com/w320/sl.png', region: 'Africa' },
    { name: 'Liberia', code: 'LR', flag: 'https://flagcdn.com/w320/lr.png', region: 'Africa' },
    { name: 'Central African Republic', code: 'CF', flag: 'https://flagcdn.com/w320/cf.png', region: 'Africa' },
    { name: 'Mauritania', code: 'MR', flag: 'https://flagcdn.com/w320/mr.png', region: 'Africa' },
    { name: 'Eritrea', code: 'ER', flag: 'https://flagcdn.com/w320/er.png', region: 'Africa' },
    { name: 'Gambia', code: 'GM', flag: 'https://flagcdn.com/w320/gm.png', region: 'Africa' },
    { name: 'Botswana', code: 'BW', flag: 'https://flagcdn.com/w320/bw.png', region: 'Africa' },
    { name: 'Namibia', code: 'NA', flag: 'https://flagcdn.com/w320/na.png', region: 'Africa' },
    { name: 'Gabon', code: 'GA', flag: 'https://flagcdn.com/w320/ga.png', region: 'Africa' },
    { name: 'Lesotho', code: 'LS', flag: 'https://flagcdn.com/w320/ls.png', region: 'Africa' },
    { name: 'Guinea-Bissau', code: 'GW', flag: 'https://flagcdn.com/w320/gw.png', region: 'Africa' },
    { name: 'Equatorial Guinea', code: 'GQ', flag: 'https://flagcdn.com/w320/gq.png', region: 'Africa' },
    { name: 'Mauritius', code: 'MU', flag: 'https://flagcdn.com/w320/mu.png', region: 'Africa' },
    { name: 'Eswatini', code: 'SZ', flag: 'https://flagcdn.com/w320/sz.png', region: 'Africa' },
    { name: 'Djibouti', code: 'DJ', flag: 'https://flagcdn.com/w320/dj.png', region: 'Africa' },
    { name: 'Comoros', code: 'KM', flag: 'https://flagcdn.com/w320/km.png', region: 'Africa' },
    { name: 'Cape Verde', code: 'CV', flag: 'https://flagcdn.com/w320/cv.png', region: 'Africa' },
    { name: 'São Tomé and Príncipe', code: 'ST', flag: 'https://flagcdn.com/w320/st.png', region: 'Africa' },
    { name: 'Seychelles', code: 'SC', flag: 'https://flagcdn.com/w320/sc.png', region: 'Africa' },
  ],
  'latin-america': [
    { name: 'Brazil', code: 'BR', flag: 'https://flagcdn.com/w320/br.png', region: 'Latin America' },
    { name: 'Argentina', code: 'AR', flag: 'https://flagcdn.com/w320/ar.png', region: 'Latin America' },
    { name: 'Mexico', code: 'MX', flag: 'https://flagcdn.com/w320/mx.png', region: 'Latin America' },
    { name: 'Colombia', code: 'CO', flag: 'https://flagcdn.com/w320/co.png', region: 'Latin America' },
    { name: 'Chile', code: 'CL', flag: 'https://flagcdn.com/w320/cl.png', region: 'Latin America' },
    { name: 'Peru', code: 'PE', flag: 'https://flagcdn.com/w320/pe.png', region: 'Latin America' },
    { name: 'Venezuela', code: 'VE', flag: 'https://flagcdn.com/w320/ve.png', region: 'Latin America' },
    { name: 'Ecuador', code: 'EC', flag: 'https://flagcdn.com/w320/ec.png', region: 'Latin America' },
    { name: 'Uruguay', code: 'UY', flag: 'https://flagcdn.com/w320/uy.png', region: 'Latin America' },
    { name: 'Costa Rica', code: 'CR', flag: 'https://flagcdn.com/w320/cr.png', region: 'Latin America' },
    { name: 'Guatemala', code: 'GT', flag: 'https://flagcdn.com/w320/gt.png', region: 'Latin America' },
    { name: 'Bolivia', code: 'BO', flag: 'https://flagcdn.com/w320/bo.png', region: 'Latin America' },
    { name: 'Paraguay', code: 'PY', flag: 'https://flagcdn.com/w320/py.png', region: 'Latin America' },
    { name: 'Honduras', code: 'HN', flag: 'https://flagcdn.com/w320/hn.png', region: 'Latin America' },
    { name: 'Nicaragua', code: 'NI', flag: 'https://flagcdn.com/w320/ni.png', region: 'Latin America' },
    { name: 'El Salvador', code: 'SV', flag: 'https://flagcdn.com/w320/sv.png', region: 'Latin America' },
    { name: 'Panama', code: 'PA', flag: 'https://flagcdn.com/w320/pa.png', region: 'Latin America' },
    { name: 'Jamaica', code: 'JM', flag: 'https://flagcdn.com/w320/jm.png', region: 'Latin America' },
    { name: 'Cuba', code: 'CU', flag: 'https://flagcdn.com/w320/cu.png', region: 'Latin America' },
    { name: 'Dominican Republic', code: 'DO', flag: 'https://flagcdn.com/w320/do.png', region: 'Latin America' },
    { name: 'Haiti', code: 'HT', flag: 'https://flagcdn.com/w320/ht.png', region: 'Latin America' },
    { name: 'Trinidad and Tobago', code: 'TT', flag: 'https://flagcdn.com/w320/tt.png', region: 'Latin America' },
    { name: 'Guyana', code: 'GY', flag: 'https://flagcdn.com/w320/gy.png', region: 'Latin America' },
    { name: 'Suriname', code: 'SR', flag: 'https://flagcdn.com/w320/sr.png', region: 'Latin America' },
    { name: 'Belize', code: 'BZ', flag: 'https://flagcdn.com/w320/bz.png', region: 'Latin America' },
    { name: 'Barbados', code: 'BB', flag: 'https://flagcdn.com/w320/bb.png', region: 'Latin America' },
    { name: 'Saint Lucia', code: 'LC', flag: 'https://flagcdn.com/w320/lc.png', region: 'Latin America' },
    { name: 'Grenada', code: 'GD', flag: 'https://flagcdn.com/w320/gd.png', region: 'Latin America' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', flag: 'https://flagcdn.com/w320/vc.png', region: 'Latin America' },
    { name: 'Antigua and Barbuda', code: 'AG', flag: 'https://flagcdn.com/w320/ag.png', region: 'Latin America' },
    { name: 'Dominica', code: 'DM', flag: 'https://flagcdn.com/w320/dm.png', region: 'Latin America' },
    { name: 'Saint Kitts and Nevis', code: 'KN', flag: 'https://flagcdn.com/w320/kn.png', region: 'Latin America' },
  ],
  'south-asia': [
    { name: 'India', code: 'IN', flag: 'https://flagcdn.com/w320/in.png', region: 'South Asia' },
    { name: 'Pakistan', code: 'PK', flag: 'https://flagcdn.com/w320/pk.png', region: 'South Asia' },
    { name: 'Bangladesh', code: 'BD', flag: 'https://flagcdn.com/w320/bd.png', region: 'South Asia' },
    { name: 'Sri Lanka', code: 'LK', flag: 'https://flagcdn.com/w320/lk.png', region: 'South Asia' },
    { name: 'Nepal', code: 'NP', flag: 'https://flagcdn.com/w320/np.png', region: 'South Asia' },
    { name: 'Bhutan', code: 'BT', flag: 'https://flagcdn.com/w320/bt.png', region: 'South Asia' },
    { name: 'Maldives', code: 'MV', flag: 'https://flagcdn.com/w320/mv.png', region: 'South Asia' },
    { name: 'Afghanistan', code: 'AF', flag: 'https://flagcdn.com/w320/af.png', region: 'South Asia' },
  ],
  'asia-pacific': [
    { name: 'China', code: 'CN', flag: 'https://flagcdn.com/w320/cn.png', region: 'Asia Pacific' },
    { name: 'Japan', code: 'JP', flag: 'https://flagcdn.com/w320/jp.png', region: 'Asia Pacific' },
    { name: 'South Korea', code: 'KR', flag: 'https://flagcdn.com/w320/kr.png', region: 'Asia Pacific' },
    { name: 'Australia', code: 'AU', flag: 'https://flagcdn.com/w320/au.png', region: 'Asia Pacific' },
    { name: 'Thailand', code: 'TH', flag: 'https://flagcdn.com/w320/th.png', region: 'Asia Pacific' },
    { name: 'Vietnam', code: 'VN', flag: 'https://flagcdn.com/w320/vn.png', region: 'Asia Pacific' },
    { name: 'Indonesia', code: 'ID', flag: 'https://flagcdn.com/w320/id.png', region: 'Asia Pacific' },
    { name: 'Philippines', code: 'PH', flag: 'https://flagcdn.com/w320/ph.png', region: 'Asia Pacific' },
    { name: 'Malaysia', code: 'MY', flag: 'https://flagcdn.com/w320/my.png', region: 'Asia Pacific' },
    { name: 'Singapore', code: 'SG', flag: 'https://flagcdn.com/w320/sg.png', region: 'Asia Pacific' },
    { name: 'North Korea', code: 'KP', flag: 'https://flagcdn.com/w320/kp.png', region: 'Asia Pacific' },
    { name: 'Mongolia', code: 'MN', flag: 'https://flagcdn.com/w320/mn.png', region: 'Asia Pacific' },
    { name: 'Myanmar', code: 'MM', flag: 'https://flagcdn.com/w320/mm.png', region: 'Asia Pacific' },
    { name: 'Laos', code: 'LA', flag: 'https://flagcdn.com/w320/la.png', region: 'Asia Pacific' },
    { name: 'Cambodia', code: 'KH', flag: 'https://flagcdn.com/w320/kh.png', region: 'Asia Pacific' },
    { name: 'Brunei', code: 'BN', flag: 'https://flagcdn.com/w320/bn.png', region: 'Asia Pacific' },
    { name: 'East Timor', code: 'TL', flag: 'https://flagcdn.com/w320/tl.png', region: 'Asia Pacific' },
    { name: 'Papua New Guinea', code: 'PG', flag: 'https://flagcdn.com/w320/pg.png', region: 'Asia Pacific' },
    { name: 'New Zealand', code: 'NZ', flag: 'https://flagcdn.com/w320/nz.png', region: 'Asia Pacific' },
    { name: 'Fiji', code: 'FJ', flag: 'https://flagcdn.com/w320/fj.png', region: 'Asia Pacific' },
    { name: 'Solomon Islands', code: 'SB', flag: 'https://flagcdn.com/w320/sb.png', region: 'Asia Pacific' },
    { name: 'Vanuatu', code: 'VU', flag: 'https://flagcdn.com/w320/vu.png', region: 'Asia Pacific' },
    { name: 'Samoa', code: 'WS', flag: 'https://flagcdn.com/w320/ws.png', region: 'Asia Pacific' },
    { name: 'Tonga', code: 'TO', flag: 'https://flagcdn.com/w320/to.png', region: 'Asia Pacific' },
    { name: 'Kiribati', code: 'KI', flag: 'https://flagcdn.com/w320/ki.png', region: 'Asia Pacific' },
    { name: 'Tuvalu', code: 'TV', flag: 'https://flagcdn.com/w320/tv.png', region: 'Asia Pacific' },
    { name: 'Nauru', code: 'NR', flag: 'https://flagcdn.com/w320/nr.png', region: 'Asia Pacific' },
    { name: 'Palau', code: 'PW', flag: 'https://flagcdn.com/w320/pw.png', region: 'Asia Pacific' },
    { name: 'Marshall Islands', code: 'MH', flag: 'https://flagcdn.com/w320/mh.png', region: 'Asia Pacific' },
    { name: 'Micronesia', code: 'FM', flag: 'https://flagcdn.com/w320/fm.png', region: 'Asia Pacific' },
  ],
  world: [] // Will be populated by combining all regions
};

// Add North American countries
const northAmericanCountries: Country[] = [
  { name: 'United States', code: 'US', flag: 'https://flagcdn.com/w320/us.png', region: 'North America' },
  { name: 'Canada', code: 'CA', flag: 'https://flagcdn.com/w320/ca.png', region: 'North America' },
];

// Populate world category with all countries
countryData.world = [
  ...countryData.europe,
  ...countryData['middle-east'],
  ...countryData.africa,
  ...countryData['latin-america'],
  ...countryData['south-asia'],
  ...countryData['asia-pacific'],
  ...northAmericanCountries,
];

export const CATEGORIES = {
  world: { name: 'World', emoji: '🌍' },
  europe: { name: 'Europe', emoji: '🇪🇺' },
  'asia-pacific': { name: 'Asia Pacific', emoji: '🌏' },
  africa: { name: 'Africa', emoji: '🌍' },
  'latin-america': { name: 'Latin America', emoji: '🌎' },
  'south-asia': { name: 'South Asia', emoji: '🏔️' },
  'middle-east': { name: 'Middle East', emoji: '🕌' },
};

export async function getCountriesByCategory(category: CategoryType): Promise<Country[]> {
  return countryData[category] || [];
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateOptions(correctAnswer: string, allCountries: Country[], count: number = 4): string[] {
  const options = [correctAnswer];
  const otherCountries = allCountries
    .filter(country => country.name !== correctAnswer)
    .map(country => country.name);
  
  const shuffledOthers = shuffleArray(otherCountries);
  
  for (let i = 0; i < count - 1 && i < shuffledOthers.length; i++) {
    options.push(shuffledOthers[i]);
  }
  
  return shuffleArray(options);
}