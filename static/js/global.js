var scrollDownTL;
var prevNextLine;
var eyesInterval;
if (!String.prototype.trim) {
  (function() {    
    String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  })();
}