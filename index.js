class Formatter {
  //add static methods here
  static capitalize(string){
    const chars = string.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');

  }
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9\s-'']/g, '')
  }
  static titleize(string){
    
      const ignoreWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = string.split(' ');
      const titleizedWords = words.map((word, index) => {
          if (index === 0 || !ignoreWords.includes(word.toLowerCase())) {
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          } else {
              return word.toLowerCase();
          }
      });
      return titleizedWords.join(' ');

  }
}