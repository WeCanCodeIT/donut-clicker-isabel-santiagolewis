let donutCount = 205;
let autoClickerCount = 0;
let autoClickerCost = 100;
let autoClickerActivation = false;

const donuts = document.getElementById("playerDonutCount");
const autoClickers = document.getElementById("playerAutoClickerCount");
const costAutoClicker = document.getElementById("nextAutoClickerCost");

function renderVariablesOnWebpage(){
    donuts.innerHTML = `You currently have ${donutCount} donuts`
    autoClickers.innerHTML = `You currently have ${autoClickerCount} auto clickers`
    costAutoClicker.innerHTML = `The next auto clicker will cost ${autoClickerCost} donuts.`
}

const addDonut = amount => donutCount = donutCount+amount

console.log(`You know have ${donutCount} donuts and ${autoClickerCount} autoclickers. The next autoclicker costs ${autoClickerCost} donuts.`)

function addAutoClicker(cost){
    if(donutCount >= cost){
        autoClickerCount++;
        donutCount = donutCount-cost;
        autoClickerCost = autoClickerCost + (autoClickerCost * .10)
        return `You know have ${donutCount} donuts and ${autoClickerCount} autoclickers. The next autoclicker costs ${autoClickerCost} donuts.`
    }
    else{
        return "Not enough donuts";
    }
}

const activateAutoClicker=() => autoClickerActivation = true; 

function checkAutoClickerActivation(isActivated)
{
    if (isActivated)
    {
        addDonut(autoClickerCount);
    }
}

setInterval(function (){
    renderVariablesOnWebpage();
    checkAutoClickerActivation(autoClickerActivation);
},1000)


console.log(addAutoClicker(autoClickerCost));
// activateAutoClicker()