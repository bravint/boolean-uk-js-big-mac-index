/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/ 

/* 
Big Mac prices: Figures from the economist.com/big-mac-index

us 5.65 (base)
gb 3.49
euro 4.27
canada 6.77
japan 390
china 22.40
russia 169

Exchange Rates from google.co.uk

1 GBP = 1.37 USD
1 EUR  = 1.16 USD
1 YEN  = 0.0087 USSD
1 YUAN = 0.16 USD
1 ROUBLE = 0.014
*/

const bmUsa = 5.65;
const bmGb = 3.49
const bmEuro = 4.27;
const bmJapan = 390;
const bmChina = 22.4;
const bmRussia = 169;

const erGb = 1.37;
const erEuro = 1.16;
const erJapan = 0.0087;
const erChina = 0.16;
const erRussia = 0.014;

let bmiGb = 0;
let bmiEuro = 0;
let bmiJapan = 0;
let bmiChina = 0;
let bmiRussia = 0;

bmiGb = ((erGb - (bmUsa/bmGb)) / (bmUsa/bmGb)) * 100;
bmiEuro = ((erEuro - (bmUsa/bmEuro)) / (bmUsa/bmEuro)) * 100;
bmiJapan = ((erJapan - (bmUsa/bmJapan)) / (bmUsa/bmJapan)) * 100;
bmiChina =  ((erChina - (bmUsa/bmChina)) / (bmUsa/bmChina)) * 100;
bmiRussia =  ((erRussia - (bmUsa/bmRussia)) / (bmUsa/bmRussia)) * 100;

console.log (bmiGb)
/* -15.38% */
console.log (bmiEuro)
/* -12.33% */
console.log (bmiJapan)
/* -39.95% */
console.log (bmiChina)
/* -36.57% */
console.log (bmiRussia)
/* -58.12% */