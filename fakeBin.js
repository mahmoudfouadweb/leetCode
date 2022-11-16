const fakeBin = x => x.split('').map(l => +l < 5 ? l = '0' : '1').join('');

fakeBin('45385593107843568')