// function getRandom(n1 = 10, n2 = null) {
//   // 1
//   if (n2 === null) {
//     //n
//     let i = 1;
//     let x = 0;
//     let checker = 0;
//     let count = 1;
//     let taa = 0;
//     while (i === 1) {
//       const t = new Date().getMilliseconds() * count; //1
//       const t1 = count * new Date().getSeconds();
//       const t2 = new Date().getUTCMilliseconds(); //1
//       x = (t * t1 * count + (1000 * n1) / (n1 / count) - n1 * 1) * t2;
//       while (taa < n1) {
//         checker = checker * 10 + 9;
//         taa++;
//       }
//       // console.log('current x =', x);
//       if (checker < x && x !== NaN && x !== Infinity) {
//         let xzx = x.toString();
//         x = xzx.slice(0, n1);
//         x = parseInt(x);
//         return x;
//         i = 0;
//       }
//       count++;
//     }
//   } else {
//     let i = 1;
//     while (i === 1) {
//       const t = new Date().getMilliseconds(); //1
//       const t1 = new Date().getSeconds(); //1
//       const t2 = new Date().getUTCMilliseconds(); //1
//       let xx = ((t + t1 / t2) / n1) * (t2 / t1); //1
//       xx = ~~xx * (t1 / t2);
//       if (xx > n1 && xx < n2) {
//         return xx;
//         i = 0;
//       }
//     }
//   }
// }

function getRandom(n1 = 10, n2 = null) {
  // 1
  // n1 = 10;
  //n2 = null;
  if (n2 === null) {
    //n
    let i = 1;
    let x = 0;
    let checker = 0;
    let count = 1;
    let taa = 0;
    while (i === 1) {
      const t = new Date().getMilliseconds() * count; //1
      const t1 = count * new Date().getSeconds();
      const t2 = new Date().getUTCMilliseconds(); //1
      x = (t * t1 * count + (1000 * n1) / (n1 / count) - n1 * 1) * t2;
      while (taa < n1) {
        checker = checker * 10 + 9;
        taa++;
      }
      // console.log('current x =', x);
      if (checker < x && x !== NaN && x !== Infinity) {
        let xzx = x.toString();
        x = xzx.slice(0, n1);
        x = parseInt(x);
        if (count % 2 === 0) {
          x = x * -1;
        }
        //console.log(x);
        return x;
        i = 0;
      }
      count++;
    }
  } else {
    let i = 1;
    let t3 = 0;
    while (i === 1) {
      const t = new Date().getMilliseconds(); //1
      const t1 = new Date().getSeconds(); //1
      const t2 = new Date().getUTCMilliseconds(); //1
      let xx = ((t + t1 / t2) / n1) * (t2 / t1); //1
      xx = ~~xx * (t1 + (1 / t2) * t3);

      if (xx > n1 && xx < n2) {
        //console.log(xx);
        return xx;

        i = 0;
      }
      t3 = ++t3 * -1;
    }
  }
}
module.exports = getRandom;
