'use strict'  // Strictモードで利用するための記述
const number = process.argv[2] || 0;
//条件付き論理和は、先に左側に書かれた値を見て Truthy であれば、その値を結果として使います。  
//なぜ添字として 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、
//1 番には、実行しているプログラムのファイルのパスが入る、という決まりがあるためです。
//コマンドの後ろに書いた最初の引数は process.argv[2] なのです。
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);