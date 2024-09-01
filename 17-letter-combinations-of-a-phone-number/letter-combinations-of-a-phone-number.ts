function letterCombinations(digits: string): string[] {
       if (digits.length === 0) return [];

    const digitToLetters: { [key: string]: string[] } = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    // Convert each digit in the input to its corresponding letter array
    const letterGroups = digits.split('').map(digit => digitToLetters[digit]);

    // Helper function to calculate combinations recursively
    const getCombinations = (groups: string[][], index: number): string[] => {
        // Base case: if we are at the last group, return it as the starting point
        if (index === groups.length - 1) {
            return groups[index];
        }

        // Recursively get combinations from the remaining groups
        const subCombinations = getCombinations(groups, index + 1);

        // Calculate the combinations of the current group with the subCombinations
        const combinations: string[] = [];
        for (const letter of groups[index]) {
            for (const subCombination of subCombinations) {
                combinations.push(letter + subCombination);
            }
        }

        return combinations;
    };

    return getCombinations(letterGroups, 0);
};