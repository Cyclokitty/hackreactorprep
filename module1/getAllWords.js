function getAllWords(str) {
    if (!str) {
        return [];
    } else {
        return str.split(' ');
    }
}

getAllWords('Cookies are the best!');
