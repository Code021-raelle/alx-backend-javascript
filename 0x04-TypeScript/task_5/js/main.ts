interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'MajorCredits'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'MinorCredits'
    };
}

const majorSubject1: MajorCredits = { credits: 30, brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 20, brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 10, brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 5, brand: 'MinorCredits' };

const sumMajor = sumMajorCredits(majorSubject1, majorSubject2);
const sumMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Sum of Majorj Credits:', sumMajor.credits);
console.log('Sum of Minor Credits:', sumMinor.credits);
