// Interface representing Major Credits with a branded number type
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' }; 
}

// Interface representing Minor Credits with a branded number type
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' }; 
}

// Function to sum Major Credits from two subjects
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // Return a new MajorCredits object with summed credits
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Function to sum Minor Credits from two subjects
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // Return a new MinorCredits object with summed credits
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
