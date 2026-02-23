const fs = require('fs');

const content = fs.readFileSync('d:\\\\learnsquere\\\\src\\\\pages\\\\SemesterPrepPage.tsx', 'utf8');
const match = content.match(/const UNIVERSITY_DATA[\s\S]*?=\s*(\{[\s\S]*?\n\});/);

if (match) {
    const objStr = match[1];
    let obj;
    try {
        obj = eval('(' + objStr + ')');
    } catch (e) {
        console.error("Eval error", e);
        process.exit(1);
    }

    const csvLines = ['University,College'];
    for (const uni in obj) {
        for (const college of obj[uni]) {
            let u = uni.replace(/"/g, '""');
            let c = college.replace(/"/g, '""');
            csvLines.push(`"${u}","${c}"`);
        }
    }
    fs.writeFileSync('d:\\\\RegisterForm\\\\RegisterFrom_back\\\\registerform_back\\\\data\\\\semester_colleges.csv', csvLines.join('\n'));
    console.log('Success, wrote ' + csvLines.length + ' lines');
} else {
    console.log('UNIVERSITY_DATA not found');
}
