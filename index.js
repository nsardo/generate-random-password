/**
 * @author Nicholas Sardo <nsardo@aol.com>
 */


/*
seedrandom.js
=============

Seeded random number generator for Javascript.

version 2.3.10
Author: David Bau
*/
!function(a,b,c,d,e,f,g,h,i){function j(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=s&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=s&f+1],c=c*d+h[s&(h[f]=h[g=s&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function k(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(k(a[c],b-1))}catch(f){}return d.length?d:"string"==e?a:a+"\0"}function l(a,b){for(var c,d=a+"",e=0;e<d.length;)b[s&e]=s&(c^=19*b[s&e])+d.charCodeAt(e++);return n(b)}function m(c){try{return o?n(o.randomBytes(d)):(a.crypto.getRandomValues(c=new Uint8Array(d)),n(c))}catch(e){return[+new Date,a,(c=a.navigator)&&c.plugins,a.screen,n(b)]}}function n(a){return String.fromCharCode.apply(0,a)}var o,p=c.pow(d,e),q=c.pow(2,f),r=2*q,s=d-1,t=c["seed"+i]=function(a,f,g){var h=[];f=1==f?{entropy:!0}:f||{};var o=l(k(f.entropy?[a,n(b)]:null==a?m():a,3),h),s=new j(h);return l(n(s.S),b),(f.pass||g||function(a,b,d){return d?(c[i]=a,b):a})(function(){for(var a=s.g(e),b=p,c=0;q>a;)a=(a+c)*d,b*=d,c=s.g(1);for(;a>=r;)a/=2,b/=2,c>>>=1;return(a+c)/b},o,"global"in f?f.global:this==c)};if(l(c[i](),b),g&&g.exports){g.exports=t;try{o=require("crypto")}catch(u){}}else h&&h.amd&&h(function(){return t})}(this,[],Math,256,6,52,"object"==typeof module&&module,"function"==typeof define&&define,"random");

/***********************************************
 * RANDOM PASSWORD GENERATOR
 ***********************************************
 *
 * let len = 5;
 * let password = generateRandomPassword( len );
 *
 **********************************************/
// export function generateRandomPassword( len ) 
module.exports = {
  generateRandomPassword: function( len, percent_punc_appears = 20 ) {
    
    if ( ( String( percent_punc_appears )).indexOf( '.' ) != -1 || Number( percent_punc_appears ) > 100 ) {
      throw new Error('INVALID INPUT. Whole numbers only, less than or equal to 100'); 
    }

    let pw    = ''
        //        !  #  $  %  &  *  +  ?  ~   @
      , punc  =  [33,35,36,37,38,42,43,63,64,126];
      
    Math.seedrandom();
    
    do {   
      //RETURN PUNC CHARACTER percent_punc_appears % CHANCE
      if (  Math.floor( ( Math.random() * 100 ) + 1 ) <= ( Number( percent_punc_appears ))  ) {
        let pran = Math.floor( ( Math.random() * 9 ));    //0 - 9
        pw += String.fromCharCode( punc[ pran ] );
      } else {
        //100 - percent_punc_appears % CHANCE TO RETURN EITHER UPPER OR LOWER CASE LETTER
        pw += this.returnRandomLetterAndCase(); 
      }
    } while ( pw.length != len ); //x CHARACTER PASSWORDS RETURNED
    
    return pw; //RETURN CREATED PASSWORD
  },

  returnRandomLetterAndCase: function() {
    let lran = Math.floor( ( Math.random() * 25 )) + 97  //LOWERCASE LETTER
      , uran = Math.floor( ( Math.random() * 25 )) + 65  //UPPERCASE LETTER
      , l = '';

    if ( Math.floor( ( Math.random() * 100 ) + 1 ) <= 51  ) {
      l = String.fromCharCode( lran );            
    } else if ( Math.floor(  ( Math.random() * 100 ) + 1 ) > 52 ) {
      l = String.fromCharCode( uran );
    }
    return l;
  }
}