export default function () {
    const rnaMap = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    const transcribe = nucleotide => {
        if(!(nucleotide in rnaMap)){
            throw new Error('Invalid input DNA.')
        }
        return rnaMap[nucleotide]
    };

    return {
        toRna (dna) {
            return [...dna]
                .map(nucleotide => transcribe(nucleotide))
                .join('')
        }
    }
}