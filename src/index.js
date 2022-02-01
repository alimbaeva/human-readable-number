module.exports = function toReadable(number) {
    const numName = {
        'udinitsa': {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',

        },
        'dozens': {
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        },
        'dozensZ': {
            1: 'ten',
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety',
        },
        'hundreds': 'hundred',
    };

    let nameNum = '';
    let doz = String(number);

    if (doz.length === 3) {
        nameNum += `${numName.udinitsa[doz[0]]} hundred `;
        if (doz[1] === '0' && doz[2] === '0') {
            return `${numName.udinitsa[doz[0]]} hundred`;
        } else if (doz[1] === '0') {
            nameNum += numName.udinitsa[doz[2]];
            return nameNum;
        } else if (doz[2] !== '0' && doz[1] !== '1') {
            nameNum += `${numName.dozensZ[doz[1]]} ${numName.udinitsa[doz[2]]}`;
            return nameNum;
        } else if (doz[2] === '0') {
            nameNum += numName.dozensZ[doz[1]];
            return nameNum;
        } else if (doz[1] !== '0') {
            nameNum += numName.dozens[doz.substring(1)];
            return nameNum;
        };
    } else if (doz.length === 2) {
        if (doz[1] !== '0' && doz[0] !== '1') {
            nameNum += `${numName.dozensZ[doz[0]]} ${numName.udinitsa[doz[1]]}`
            return nameNum;
        } else if (doz[1] === '0') {
            nameNum += numName.dozensZ[doz[0]];
            return nameNum;
        } else {
            nameNum += numName.dozens[doz];
            return nameNum;
        }
    } else {
        nameNum += numName.udinitsa[doz];
        return nameNum;
    }

}
