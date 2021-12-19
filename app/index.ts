import jsonData from './corporation.json';
import { Corporation } from './interfaces';
var _ = require('lodash');

const { products, employees }: Corporation = jsonData;


// console.log('1.1', products.sort((a, b) => a.id - b.id));

// let data = _.filter(products, function(o:any) { return ['Metal','Steel','Wooden'].includes(o.material); });
// data = _.orderBy(data, ['material', 'name'], ['asc', 'asc']);
// console.log("1.2",data );

// const no2 = _.filter(employees,({skills}:any)=>{
//     return skills.find((a:any) => a.name  ==='Lick elbows' && a.level !== 'Cooking' && a.level !== 'Beginner' && a.level !=='Intermediate');
//
// })
// const a = no2.map(({firstName,lastName,skills}:any)=>{
//    const x = skills.find((a:any) => a.name  ==='Lick elbows' && a.level !== 'Cooking' && a.level !== 'Beginner' && a.level !=='Intermediate');
//    if(x){
//     return { fullName : firstName+' '+lastName ,lickLevel: x.level }
//    }
// })
// console.log('2',a)





// 3
// const m = _.filter(products, { 'material': 'Plastic' })
// const test:any = _.map(m, function(item:any) {
//     const dataB= _.filter(employees, function ({products}:any) {
//         return products.includes(item.id);
//     }).map(({firstName,lastName,email}:any)=> {return {firstName,lastName,email}});
//     return {
//         id:item.id,name:item.name,material:item.material, emp:dataB
//     };
// });
// console.log("test",JSON.stringify(test, null, 2) );



