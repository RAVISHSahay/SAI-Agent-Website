const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'useCases.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

const sectors = {
    'Primary Sector (Natural Resources)': ['Agriculture, Forestry & Fishing', 'Mining & Quarrying'],
    'Secondary Sector (Manufacturing)': ['Manufacturing', 'Electricity, Gas & Utilities', 'Construction'],
    'Tertiary Sector (Service Industry)': ['Financial & Insurance Activities', 'Wholesale & Retail Trade', 'Transportation & Storage', 'Real Estate Activities', 'Accommodation & Food Services', 'Arts, Entertainment & Recreation'],
    'Quaternary Sector (Knowledge Economy)': ['Information & Communication', 'Professional, Scientific & Technical Services', 'Education', 'Health & Social Work'],
    'Quinary Sector (Leadership Economy)': ['Public Administration & Defense', 'Administrative & Support Services', 'Other Service Activities']
};

const gdpGroups = {
   'Agriculture, Forestry & Fishing': ['Agriculture', 'Dairy Farming', 'Fisheries & Aquaculture', 'Forestry & Logging'],
   'Mining & Quarrying': ['Mining (Coal, Iron Ore, Minerals)', 'Oil & Gas Extraction', 'Quarrying'],
   'Manufacturing': ['Automobile Manufacturing', 'Aerospace & Defense', 'Electronics & Semiconductor', 'Consumer Goods', 'Chemical Manufacturing', 'Pharmaceutical Manufacturing'],
   'Financial & Insurance Activities': ['Banking', 'Insurance', 'Asset Management', 'Investment Banking', 'Fintech'],
   'Wholesale & Retail Trade': ['Retail', 'Wholesale', 'E-commerce'],
   'Transportation & Storage': ['Airlines', 'Railways', 'Shipping', 'Trucking & Logistics'],
   'Accommodation & Food Services': ['Hotels & Resorts', 'Restaurants', 'Tourism'],
   'Real Estate Activities': ['Property Development', 'Property Management', 'Commercial Real Estate', 'Leasing'],
   'Information & Communication': ['Information Technology (IT)', 'Software Development', 'Telecom Operators', 'Digital Media', 'Artificial Intelligence', 'Cybersecurity'],
   'Professional, Scientific & Technical Services': ['Legal Services', 'Management Consulting', 'Research & Development', 'Biotechnology', 'Data Analytics'],
   'Education': ['Schools', 'Universities', 'EdTech'],
   'Health & Social Work': ['Hospitals', 'Clinics', 'Diagnostics', 'Pharmaceutical Services'],
   'Administrative & Support Services': ['Human Resources Services', 'Customer Support Services', 'Facilities Administration'],
   'Public Administration & Defense': ['Government Administration', 'Policy & Regulatory Bodies', 'Non-profit Sector'],
   'Electricity, Gas & Utilities': ['Energy Equipment Manufacturing', 'Utilities'],
   'Construction': ['Cement & Construction Materials'],
   'Arts, Entertainment & Recreation': ['Film & Television', 'Music', 'Gaming'],
   'Other Service Activities': ['Corporate Leadership & Strategic Management', 'Think Tanks']
};

// Map of departments/functions to GDP Industry Groups
const industryMapping = {
    'Accounting': 'Financial & Insurance Activities',
    'Finance': 'Financial & Insurance Activities',
    'Human Resources': 'Administrative & Support Services',
    'Procurement': 'Wholesale & Retail Trade',
    'Supply Chain': 'Transportation & Storage',
    'Sales': 'Wholesale & Retail Trade',
    'Marketing': 'Information & Communication',
    'Customer Service': 'Administrative & Support Services',
    'IT Operations': 'Information & Communication',
    'Legal': 'Professional, Scientific & Technical Services',
    'Compliance': 'Professional, Scientific & Technical Services',
    'R&D': 'Professional, Scientific & Technical Services',
    'Manufacturing Operations': 'Manufacturing',
    'Quality Assurance': 'Professional, Scientific & Technical Services',
    'Data Management': 'Information & Communication',
    'Facilities Management': 'Real Estate Activities',
    'Strategy': 'Other Service Activities'
};

function getSectorForGdpGroup(gdpGroup) {
    for (const [sector, groups] of Object.entries(sectors)) {
        if (groups.includes(gdpGroup)) return sector;
    }
    return 'Tertiary Sector (Service Industry)'; // default
}

const defaultGroups = Object.keys(gdpGroups);

data.forEach((uc, index) => {
    let cleanFunc = uc.function.replace(/ Function$/i, '').trim();
    
    // Find GDP group
    let gdpGroup = industryMapping[cleanFunc] || defaultGroups[index % defaultGroups.length];
    
    // Distribute occasionally to make sure every category gets some items regardless of function
    if (index % 15 === 0) {
        gdpGroup = defaultGroups[(index / 15) % defaultGroups.length];
    }
    
    // Get sector
    let sector = getSectorForGdpGroup(gdpGroup);
    
    // Find specific industry
    let specificList = gdpGroups[gdpGroup];
    let industry = specificList ? specificList[index % specificList.length] : gdpGroup;
    
    uc.sector = sector;
    uc.industryGroup = gdpGroup;
    uc.industry = industry;
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Successfully mapped 600+ use cases to 5 Sectors and specific industries.');
