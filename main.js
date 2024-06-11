const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeextra1 = document.getElementById('income-extra-1');
const incomeextra2 = document.getElementById('income-extra-2');
// 
const costFlat = document.getElementById('costs-flat');
const costHouse = document.getElementById('costs-house-services');
const costTransport= document.getElementById('costs-transport');
const costCredit = document.getElementById('costs-credit');
//
const totalMonthInput = document.getElementById('total-month');
const totalDayInput = document.getElementById('total-day');
const totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;


const inputRange = document.getElementById('money-box-range'),
      accmulatingInput = document.getElementById('accumulation'),
      spendMoney = document.getElementById('spend');



let accumulation = 0;
let totalPrecent = 0;

const inputs = document.querySelectorAll('.input');
const strToNum = str => str.value ? parseInt(str.value) : 0;
const coutingAvaible = ()=>{
 const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance)+ strToNum(incomeextra1) + strToNum(incomeextra2)
 const totalCosts = strToNum(costFlat) + strToNum(costHouse)+ strToNum(costTransport) + strToNum(costCredit)
 totalMonth = totalPerMonth - totalCosts;
 totalMonthInput.value = totalMonth;
 
}
inputs.forEach((input)=>{
  input.addEventListener('input',()=>{
   coutingAvaible()
   calculationPresent()
  })
})
inputRange.addEventListener('input', (e) =>{
  const totalPreEl = document.getElementById('total-precents');
  totalPrecent = e.target.value;
  totalPreEl.innerHTML = totalPrecent;
  calculationPresent()
  
})

const calculationPresent = ()=>{
  accumulation = ((totalMonth * totalPrecent)/100).toFixed();
  accmulatingInput.value = accumulation; 
  spendMoney.value = totalMonth - accumulation;
  totalDay = (spendMoney.value/30).toFixed();
  totalDayInput.value = totalDay;
  totalYear = accumulation * 12;
  totalYearInput.value = totalYear;
}