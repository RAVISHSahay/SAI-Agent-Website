const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'useCases.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

// Map of departments/functions to GDP Industry Groups
const industryMapping = {
    'Accounting': 'Financial & Insurance Activities',
    'Finance': 'Financial & Insurance Activities',
    'Human Resources': 'Administrative & Support Services',
    'Procurement': 'Wholesale & Retail Trade', // Or Supply Chain
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
    'Strategy': 'Professional, Scientific & Technical Services'
};

const specificIndustries = {
    'Financial & Insurance Activities': ['Banking', 'Insurance', 'Asset Management', 'Fintech', 'Investment Banking'],
    'Administrative & Support Services': ['Human Resources Services', 'Customer Support Services', 'Facilities Administration'],
    'Wholesale & Retail Trade': ['Retail', 'Wholesale', 'E-commerce'],
    'Transportation & Storage': ['Airlines', 'Railways', 'Shipping', 'Trucking & Logistics'],
    'Information & Communication': ['Information Technology (IT)', 'Software Development', 'Telecom Operators', 'Digital Media', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing'],
    'Professional, Scientific & Technical Services': ['Legal Services', 'Management Consulting', 'Research & Development', 'Biotechnology', 'Data Analytics'],
    'Manufacturing': ['Automobile Manufacturing', 'Electronics & Semiconductor Manufacturing', 'Consumer Goods Manufacturing', 'Pharmaceutical Manufacturing', 'Food Processing & Packaging', 'Machinery & Industrial Equipment'],
    'Real Estate Activities': ['Property Development', 'Property Management', 'Commercial Real Estate']
};

const defaultGDPGroups = [
    'Agriculture, Forestry & Fishing',
    'Mining & Quarrying',
    'Manufacturing',
    'Electricity, Gas & Utilities',
    'Construction',
    'Wholesale & Retail Trade',
    'Transportation & Storage',
    'Accommodation & Food Services',
    'Information & Communication',
    'Financial & Insurance Activities',
    'Real Estate Activities',
    'Professional, Scientific & Technical Services',
    'Administrative & Support Services',
    'Public Administration & Defense',
    'Education',
    'Health & Social Work',
    'Arts, Entertainment & Recreation',
    'Other Service Activities'
];

data.forEach((uc, index) => {
    let cleanFunc = uc.function.replace(/ Function$/i, '').trim();

    // Find GDP group
    let group = industryMapping[cleanFunc] || defaultGDPGroups[index % defaultGDPGroups.length];

    // Find specific industry
    let specificList = specificIndustries[group];
    let industry = specificList ? specificList[index % specificList.length] : group;

    uc.industryGroup = group;
    uc.industry = industry;

    // Some random distribution to ensure all GDP groups show up somewhere across the 600
    if (index % 15 === 0) {
        uc.industryGroup = defaultGDPGroups[index % defaultGDPGroups.length];
        uc.industry = uc.industryGroup;
    }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Successfully mapped use cases to industries.');
