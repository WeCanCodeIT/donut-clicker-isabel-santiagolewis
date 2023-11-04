document.addEventListener("DOMContentLoaded", function () {
const donuts = document.getElementById("playerDonutCount");
const autoClickers = document.getElementById("playerAutoClickerCount");
const costAutoClicker = document.getElementById("nextAutoClickerCost");
const addDonutBtn = document.getElementById("donutButton")
const addAutoClickerBtn = document.getElementById("autoClickerButton")
const autoClickersActivationBtn = document.getElementById("autoClickersActivationButton")
const resetGameBtn = document.getElementById("reset")

const isabelModalBlock = document.getElementById("isabelModal")
const isabelModalBtn = document.getElementById("isabelBtn");
const closeIsabelModal = document.getElementsByClassName("close")[0];
const FredModalBlock = document.getElementById("FredModal")
const FredModalBtn = document.getElementById("FredBtn");
const closeFredModal = document.getElementsByClassName("close")[1];

function resetAll(){
    donutCount = 0;
    autoClickerCount = 0;
    autoClickerCost = 100;
    autoClickerActivation = false;
    renderVariablesOnWebpage();
}

resetAll();

function renderVariablesOnWebpage(){
    donuts.innerHTML = `You currently have ${donutCount} donuts`
    autoClickers.innerHTML = `You currently have ${autoClickerCount} auto clickers`
    costAutoClicker.innerHTML = `The next auto clicker will cost ${autoClickerCost} donuts.`
}

const addDonut = amount => donutCount = donutCount+amount

function addAutoClicker(cost){
    if(donutCount >= cost){
        autoClickerCount++;
        donutCount = donutCount-cost;
        autoClickerCost = Math.round (autoClickerCost + (autoClickerCost * .10))
    }
    else{
        return "Not enough donuts";
    }
}

function changeAutoClickerActivation(){
    autoClickerActivation = !autoClickerActivation; 
    if(autoClickerActivation){
        autoClickersActivationBtn.textContent = "Turn Off Auto Clickers"
    }
    else{
        autoClickersActivationBtn.textContent = "Turn On Auto Clickers"
    }
} 

function checkAutoClickerActivation(isActivated)
{
    if (isActivated)
    {
        addDonut(autoClickerCount);
    }
}

setInterval(function (){
    checkAutoClickerActivation(autoClickerActivation);
    donuts.textContent = `You currently have ${donutCount} donuts`
    if(donutCount >= autoClickerCost){
        addAutoClickerBtn.disabled = false;
    }
    else{
        addAutoClickerBtn.disabled = true;
    }
},1000)

addDonutBtn.addEventListener('click', function(event){
    addDonut(1);
    donuts.textContent = `You currently have ${donutCount} donuts`;
});

addAutoClickerBtn.addEventListener('click', function(event){
    addAutoClicker(autoClickerCost);
    autoClickers.textContent = `You currently have ${autoClickerCount} auto clickers`
    costAutoClicker.textContent = `The next auto clicker will cost ${autoClickerCost} donuts.`
    donuts.textContent = `You currently have ${donutCount} donuts`;
})

autoClickersActivationBtn.addEventListener('click', function(event){changeAutoClickerActivation();});

resetGameBtn.addEventListener('click', function(event){resetAll();});

isabelModalBtn.addEventListener("click", function (event) {
    isabelModalBlock.style.display = "block";
});

closeIsabelModal.onclick=function(){
    isabelModalBlock.style.display = "none";
}

window.onclick = function(event){
    if(event.target == isabelModalBlock){
        isabelModalBlock.style.display = "none";
    }
    if(event.target == FredModalBlock){
        FredModalBlock.style.display = "none";
    }
}

FredModalBtn.addEventListener("click", function (event) {
    FredModalBlock.style.display = "block";
});

closeFredModal.onclick=function(){
    FredModalBlock.style.display = "none";
}

})
