

const abi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"getSwapOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract ERC20","name":"tokenAddress","type":"address"},{"internalType":"address","name":"userId","type":"address"}],"name":"maxTokenWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userId","type":"address"}],"name":"maxValueOfWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sharePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"swapType","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDepositedValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSharesSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawTokensAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const erc20Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

const contractAddress = '0x444c1018D0caCf1E5340Da56e97c2B0d847d785A';

const foodToken = '0xF57b246C67F86361F3156b78337785db893d8F9d';
const woodToken = '0xa0F39175bCAf930dDa518449e73983Edb0f42422';
const copperToken = '0x3360Ce87000aa67e2C8E7737ADF2A1dd3290845b';
const weaponToken = '0x7B797465297e1df393daEc8c502B5A7d19E7e816';

const Emult = 1000000000000000000;

var userShares = 0;
var foodAmount = 0;
var woodAmount = 0;
var copperAmount = 0;
var weaponAmount = 0;

var foodOfUser = 0;
var woodOfUser = 0;
var copperOfUser = 0;
var weaponOfUser = 0;

var foodPrice = 1;
var woodPrice = 1;
var copperPrice = 2;
var weaponPrice = 4;



var userAddress = '';

const forwarderOrigin = 'http://localhost:9010';

const initialize = async () => {
  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');
  const getAccountsButton = document.getElementById('getAccounts');
  const getAccountsResult = document.getElementById('getAccountsResult');

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  //We create a new MetaMask onboarding object to use in our app
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

  //This will start the onboarding proccess
  const onClickInstall = () => {
    onboardButton.innerText = 'Onboarding in progress';
    onboardButton.disabled = true;
    //On this object we have startOnboarding which will start the onboarding process for our end user
    onboarding.startOnboarding();
  };

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
    }
  };

  const MetaMaskClientCheck = async () => {
    //Now we check to see if Metmask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      onboardButton.innerText = 'Click here to install MetaMask!';
      //When the button is clicked we call th is function
      onboardButton.onclick = onClickInstall;
      //The button is now disabled
      onboardButton.disabled = false;
    } else {
      //If MetaMask is installed we ask the user to connect to their wallet

//      const accounts1 = ethereum.request({ method: 'eth_accounts' }).then((accounts1) => {
      const accounts1 = await ethereum.request({ method: 'eth_accounts' });

      console.log(accounts1[0]);
      onboardButton.innerText = 'Connect';
      onboardButton.onclick = onClickConnect;

      if (accounts1.length > 0){
        accounts.innerHTML = accounts1[0] || 'Not able to get accounts';
        userAddress = accounts1[0];
        onboardButton.disabled = true;
          
        updateValues();

      }else{
        onboardButton.disabled = false;
      }
//      });
    }
  };



  await MetaMaskClientCheck();
  ethereum.on('accountsChanged', (accounts) => {
    MetaMaskClientCheck();
  });

  ethereum.on('connect', (accounts) => {
    MetaMaskClientCheck();
  });

  ethereum.on('chainChanged', (chainId) => {
    window.location.reload();
  });


  await loadWeb3();
  await testContract();
  await checkApprovals();
  await checkBalances();
  await makeCalcsWork();


  const myContract = new web3.eth.Contract(abi,contractAddress);

  var subscription = web3.eth.subscribe('logs', {
    address: contractAddress
}, function(error, result){
    if (!error)
//        console.log(result);
        updateValues();
    });

};

async function updateValues(){
    await loadWeb3();

  await testContract();
  await checkApprovals();
  await checkBalances();
  makeCalcsWork();
}

window.addEventListener('DOMContentLoaded', initialize);

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

async function makeCalcsWork(){
  userFoodAmountTXT.onclick = async function(){
    foodToConvertInput.value=Math.round(100*foodOfUser/Emult)/100;
    type0ResultTxt.innerText = await checkOutput(foodToConvertInput.value);
    foodToConvertInput.oninput();
  };

  userFoodAmountTXT1.onclick = async function(){
    foodWoodToConvertInput.value=Math.round(100*foodOfUser/Emult)/100;
    type2ResultTxt.innerText = await checkOutput(foodWoodToConvertInput.value);
    foodWoodToConvertInput.oninput();
  };
  userFoodAmountTXT2.onclick = async function(){
    foodWoodCopperToConvertInput.value=Math.round(100*foodOfUser/Emult)/100;
    type4ResultTxt.innerText = await checkOutput(foodWoodCopperToConvertInput.value);
    foodWoodCopperToConvertInput.oninput();
  };
//////////
  userWoodAmountTXT.onclick = async function(){
    woodToConvertInput.value=Math.round(100*woodOfUser/Emult)/100;
    type1ResultTxt.innerText = await checkOutput(woodToConvertInput.value);
    woodToConvertInput.oninput();
  };

  userWoodAmountTXT1.onclick = async function(){
    foodWoodToConvertInput.value=Math.round(100*woodOfUser/Emult)/100;
    type2ResultTxt.innerText = await checkOutput(foodWoodToConvertInput.value);
    foodWoodToConvertInput.oninput();
  };

  userWoodAmountTXT2.onclick = async function(){
    foodWoodCopperToConvertInput.value=Math.round(100*woodOfUser/Emult)/100;
    type4ResultTxt.innerText = await checkOutput(foodWoodCopperToConvertInput.value);
    foodWoodCopperToConvertInput.oninput();
  };
///////////
  userCopperAmountTXT.onclick = async function(){
    copperToConvertInput.value=Math.round(100*copperOfUser/Emult)/100;
    type3ResultTxt.innerText = await checkOutput(copperToConvertInput.value);
    copperToConvertInput.oninput();
  };

  userCopperAmountTXT1.onclick = async function(){
    foodWoodCopperToConvertInput.value=Math.round(100*copperOfUser/Emult)/100;
    type4ResultTxt.innerText = await checkOutput(foodWoodCopperToConvertInput.value);
    foodWoodCopperToConvertInput.oninput();

  };
//////////
  userWeaponAmountTXT.onclick = async function(){
    weaponToConvertInput.value=Math.round(100*weaponOfUser/Emult)/100;
    type5ResultTxt.innerText = await checkOutput(weaponToConvertInput.value);
    weaponToConvertInput.oninput();

  };

////////////
  foodToConvertInput.oninput = async function(){
    console.log(foodToConvertInput.value + '/' + foodOfUser/Emult + '/' + type0ResultTxt.innerText + '/' +woodAmount/Emult)


    type0ResultTxt.innerText = await checkOutput(foodToConvertInput.value);
    if(foodToConvertInput.value <= foodOfUser/Emult && type0ResultTxt.innerText <= woodAmount/Emult){
      foodConvertBtn.disabled = false;
    }else{foodConvertBtn.disabled = true}
  }
  woodToConvertInput.oninput = async function(){
    console.log(woodToConvertInput.value + '/' + woodOfUser/Emult + '/' + type1ResultTxt.innerText + '/' +foodAmount/Emult)

    type1ResultTxt.innerText = await checkOutput(woodToConvertInput.value);
    if(woodToConvertInput.value <= woodOfUser/Emult && type1ResultTxt.innerText <= foodAmount/Emult){
      woodConvertBtn.disabled = false;
    }else{woodConvertBtn.disabled = true}
  }
  foodWoodToConvertInput.oninput = async function(){
    type2ResultTxt.innerText = await checkOutput(foodWoodToConvertInput.value);
    if(foodWoodToConvertInput.value <= foodOfUser/Emult && foodWoodToConvertInput.value <= woodOfUser/Emult && type2ResultTxt.innerText <= copperAmount/Emult){
      foodWoodConvertBtn.disabled = false;
    }else{foodWoodConvertBtn.disabled = true}
  }
  copperToConvertInput.oninput = async function(){
    type3ResultTxt.innerText = await checkOutput(copperToConvertInput.value);
    if(copperToConvertInput.value <= copperOfUser/Emult && type3ResultTxt.innerText <= foodAmount/Emult && type3ResultTxt.innerText <= woodAmount/Emult){
      copperConvertBtn.disabled = false;
    }else{copperConvertBtn.disabled = true}
  }
  foodWoodCopperToConvertInput.oninput = async function(){
    type4ResultTxt.innerText = await checkOutput(foodWoodCopperToConvertInput.value);
    if(foodWoodCopperToConvertInput.value <= foodOfUser/Emult && foodWoodCopperToConvertInput.value <= woodOfUser/Emult && foodWoodCopperToConvertInput.value <= copperOfUser/Emult && type4ResultTxt.innerText <= weaponAmount/Emult){
      foodWoodCopperConvertBtn.disabled = false;
    }else{foodWoodCopperConvertBtn.disabled = true}
  }
  weaponToConvertInput.oninput = async function(){
    type5ResultTxt.innerText = await checkOutput(weaponToConvertInput.value);
    if(weaponToConvertInput.value <= weaponOfUser/Emult && type5ResultTxt.innerText <= foodAmount/Emult && type5ResultTxt.innerText <= woodAmount/Emult && type5ResultTxt.innerText <= copperAmount/Emult){
      weaponConvertBtn.disabled = false;
    }else{weaponConvertBtn.disabled = true}
  }
//////////

//HERE

}

async function convertResource(type, amount){
  const contractInstance = new web3.eth.Contract(abi,contractAddress);
  var a = new BN(amount.toString());
  contractInstance.methods.swap(type, a).send({from:userAddress}).on('confirmation', function(){updateValues()});
}

async function checkOutput(input){
  input = input*Emult;
  input = numberToString(input);
  input = new BN(input.toString());
  const contractInstance = new web3.eth.Contract(abi, contractAddress);
  stuffToGet = await contractInstance.methods.getSwapOut(input).call();
  return Math.round(100*stuffToGet/Emult)/100;
}

async function checkBalances(){
  const contractInstance = new web3.eth.Contract(erc20Abi,foodToken);
  foodOfUser = await contractInstance.methods.balanceOf(userAddress).call();

  userFoodAmountTXT.innerText = Math.round(100*foodOfUser/Emult)/100;
  userFoodAmountTXT1.innerText = Math.round(100*foodOfUser/Emult)/100;
  userFoodAmountTXT2.innerText = Math.round(100*foodOfUser/Emult)/100;


////////////
  const contractInstance1 = new web3.eth.Contract(erc20Abi,woodToken);
  woodOfUser = await contractInstance1.methods.balanceOf(userAddress).call();

  userWoodAmountTXT.innerText = Math.round(100*woodOfUser/Emult)/100;
  userWoodAmountTXT1.innerText = Math.round(100*woodOfUser/Emult)/100;
  userWoodAmountTXT2.innerText = Math.round(100*woodOfUser/Emult)/100;

  userWoodAmountTXT.onclick = function(){woodToConvertInput.value=Math.round(100*woodOfUser/Emult)/100};
  userWoodAmountTXT1.onclick = function(){foodWoodToConvertInput.value=Math.round(100*woodOfUser/Emult)/100};
  userWoodAmountTXT2.onclick = function(){foodWoodCopperToConvertInput.value=Math.round(100*woodOfUser/Emult)/100};
//////////
  const contractInstance2 = new web3.eth.Contract(erc20Abi,copperToken);
  copperOfUser = await contractInstance2.methods.balanceOf(userAddress).call();

  userCopperAmountTXT.innerText = Math.round(100*copperOfUser/Emult)/100;
  userCopperAmountTXT1.innerText = Math.round(100*copperOfUser/Emult)/100;

  userCopperAmountTXT.onclick = function(){copperToConvertInput.value=Math.round(100*copperOfUser/Emult)/100};
  userCopperAmountTXT1.onclick = function(){foodWoodCopperToConvertInput.value=Math.round(100*copperOfUser/Emult)/100};
//////////
  const contractInstance3 = new web3.eth.Contract(erc20Abi, weaponToken);
  weaponOfUser = await contractInstance3.methods.balanceOf(userAddress).call();

  userWeaponAmountTXT.innerText = Math.round(100*weaponOfUser/Emult)/100;
  userWeaponAmountTXT.onclick = function(){weaponToConvertInput.value=Math.round(100*weaponOfUser/Emult)/100};
}


async function checkApprovals(){
  // FOOD
  var contractInstance = new web3.eth.Contract(erc20Abi,foodToken);
  var foodApproved = await contractInstance.methods.allowance(userAddress, contractAddress).call();
  console.log(foodApproved);

  if(foodApproved==0){ 
    approveFoodBtn.innerText = 'Approve';
    approveFoodBtn.onclick = function(){approveResource(foodToken)};
    approveFoodBtn.disabled = false;
    
    foodConvertBtn.innerText = 'Approve';
    foodConvertBtn.onclick = function(){approveResource(foodToken)};
    foodConvertBtn.disabled = false;
  }else{ 
    approveFoodBtn.innerText = 'Deposit';
    approveFoodBtn.onclick = function(){depositResource(foodToken, foodToDeposit.value)};
    approveFoodBtn.disabled = false;
    foodMax.onclick = function(){foodToDeposit.value = Math.round(1000*foodOfUser/Emult)/1000}
    foodConvertBtn.onclick = function(){convertResource(0,numberToString(foodToConvertInput.value*Emult))}
    foodConvertBtn.innerText = 'Convert';
    foodConvertBtn.disabled = false;
  }

  if(userShares>0 && foodAmount > 0){
    withdrawFoodBtn.innerText = 'Withdraw';
    withdrawFoodBtn.onclick = function(){withdrawResource(foodToken, foodToWithdraw.value)};
    withdrawFoodBtn.disabled = false;
    var maxerF = Math.min(Math.round(1000*(userShares/foodPrice)/Emult)/1000, Math.round(1000*foodAmount/Emult)/1000);
    //var maxerF = Math.round(1000*foodAmount/Emult)/1000;
    food2Max.onclick = function(){foodToWithdraw.value = maxerF}
  }

  // WOOD
  contractInstance = new web3.eth.Contract(erc20Abi,woodToken);
  var woodApproved = await contractInstance.methods.allowance(userAddress, contractAddress).call();

  if(woodApproved==0){ 
    approveWoodBtn.innerText = 'Approve';
    approveWoodBtn.onclick = function(){approveResource(woodToken)};
    approveWoodBtn.disabled = false;

    woodConvertBtn.innerText = 'Approve';
    woodConvertBtn.onclick = function(){approveResource(woodToken)};
    woodConvertBtn.disabled = false;
  }else{ 
    approveWoodBtn.innerText = 'Deposit';
    approveWoodBtn.onclick = function(){depositResource(woodToken, woodToDeposit.value)};
    approveWoodBtn.disabled = false;
    woodMax.onclick = function(){woodToDeposit.value = Math.round(1000*woodOfUser/Emult)/1000}

    woodConvertBtn.onclick = function(){convertResource(1,numberToString(woodToConvertInput.value*Emult))}
    woodConvertBtn.innerText = 'Convert';
    woodConvertBtn.disabled = false;
  }

  if(userShares>0 && woodAmount > 0){
    withdrawWoodBtn.innerText = 'Withdraw';
    withdrawWoodBtn.onclick = function(){withdrawResource(woodToken, woodToWithdraw.value)};
    withdrawWoodBtn.disabled = false;
    var maxerW = Math.min(Math.round(1000*(userShares/woodPrice)/Emult)/1000, Math.round(1000*woodAmount/Emult)/1000);
    //var maxerW = Math.round(1000*woodAmount/Emult)/1000;
    wood2Max.onclick = function(){woodToWithdraw.value = maxerW}
  }

// COPPER
  contractInstance = new web3.eth.Contract(erc20Abi,copperToken);
  var copperApproved = await contractInstance.methods.allowance(userAddress, contractAddress).call();

  if(copperApproved==0){ 
    approveCopperBtn.innerText = 'Approve';
    approveCopperBtn.onclick = function(){approveResource(copperToken)};
    approveCopperBtn.disabled = false;

    copperConvertBtn.innerText = 'Approve';
    copperConvertBtn.onclick = function(){approveResource(copperToken)};
    copperConvertBtn.disabled = false;
  }else{ 
    approveCopperBtn.innerText = 'Deposit';
    approveCopperBtn.onclick = function(){depositResource(copperToken, copperToDeposit.value)};
    approveCopperBtn.disabled = false;
    copperMax.onclick = function(){copperToDeposit.value = Math.round(1000*copperOfUser/Emult)/1000};

    copperConvertBtn.onclick = function(){convertResource(3,numberToString(copperToConvertInput.value*Emult))}
    copperConvertBtn.innerText = 'Convert';
    copperConvertBtn.disabled = false;
  }

  if(userShares>0 && copperAmount > 0){
    withdrawCopperBtn.innerText = 'Withdraw';
    withdrawCopperBtn.onclick = function(){withdrawResource(copperToken, copperToWithdraw.value)};
    withdrawCopperBtn.disabled = false;
    var maxerC = Math.min(Math.round(1000*(userShares/copperPrice)/Emult)/1000, Math.round(1000*copperAmount/Emult)/1000);
    //var maxerC = Math.round(1000*copperAmount/Emult)/1000;
    copper2Max.onclick = function(){copperToWithdraw.value = maxerC}
  }

    // WEAPON
  contractInstance = new web3.eth.Contract(erc20Abi,weaponToken);
  var weaponApproved = await contractInstance.methods.allowance(userAddress, contractAddress).call();

  if(weaponApproved==0){ 
    approveWeaponBtn.innerText = 'Approve';
    approveWeaponBtn.onclick = function(){approveResource(weaponToken)};
    approveWeaponBtn.disabled = false;

    weaponConvertBtn.innerText = 'Approve';
    weaponConvertBtn.onclick = function(){approveResource(weaponToken)};
    weaponConvertBtn.disabled = false;
  }else{ 
    approveWeaponBtn.innerText = 'Deposit';

    approveWeaponBtn.onclick = function(){depositResource(weaponToken, weaponToDeposit.value)};
    approveWeaponBtn.disabled = false;
    weaponMax.onclick = function(){weaponToDeposit.value = Math.round(1000*weaponOfUser/Emult)/1000}

    weaponConvertBtn.onclick = function(){convertResource(5,numberToString(weaponToConvertInput.value*Emult))}
    weaponConvertBtn.innerText = 'Convert';
    weaponConvertBtn.disabled = false;
  }

  if(userShares>0 && weaponAmount > 0){
    withdrawWeaponBtn.innerText = 'Withdraw';
    withdrawWeaponBtn.onclick = function(){withdrawResource(weaponToken, weaponToWithdraw.value)};
    withdrawWeaponBtn.disabled = false;
    var maxerWe = Math.min(Math.round(1000*(userShares/weaponPrice)/Emult)/1000, Math.round(1000*weaponAmount/Emult)/1000);
   // var maxerWe = Math.round(1000*weaponAmount/Emult)/1000;
    weapon2Max.onclick = function(){weaponToWithdraw.value = maxerWe}
  }

  if(foodApproved>0 && woodApproved>0){
    foodWoodConvertBtn.onclick = function(){convertResource(2,numberToString(foodWoodToConvertInput.value*Emult))};
    foodWoodConvertBtn.innerText = 'Convert';
    foodWoodConvertBtn.disabled = false;
  }else{
    if(foodApproved==0){
      foodWoodConvertBtn.innerText = 'Approve Food';
      foodWoodConvertBtn.onclick = function(){approveResource(foodToken)};
      foodWoodConvertBtn.disabled = false;
    }else{
      foodWoodConvertBtn.innerText = 'Approve Wood';
      foodWoodConvertBtn.onclick = function(){approveResource(woodToken)};
      foodWoodConvertBtn.disabled = false;
    }
  }
  if(foodApproved>0 && woodApproved>0 && copperApproved>0){
    foodWoodCopperConvertBtn.onclick = function(){convertResource(4,numberToString(foodWoodCopperToConvertInput.value*Emult))};
    foodWoodCopperConvertBtn.innerText = 'Convert';
    foodWoodCopperConvertBtn.disabled = false;
  }else{
    if(foodApproved==0){
      foodWoodCopperConvertBtn.innerText = 'Approve Food';
      foodWoodCopperConvertBtn.onclick = function(){approveResource(foodToken)};
      foodWoodCopperConvertBtn.disabled = false;
    }else if(woodApproved==0){
      foodWoodCopperConvertBtn.innerText = 'Approve Wood';
      foodWoodCopperConvertBtn.onclick = function(){approveResource(woodToken)};
      foodWoodCopperConvertBtn.disabled = false;
    }else{
      foodWoodCopperConvertBtn.innerText = 'Approve Copper';
      foodWoodCopperConvertBtn.onclick = function(){approveResource(copperToken)};
      foodWoodCopperConvertBtn.disabled = false;
    }
  }
}

async function approveResource(token){
  const contractInstance = new web3.eth.Contract(erc20Abi, token);
  contractInstance.methods.approve(contractAddress,'1000000000000000000000000000000').send({from:userAddress}).on('confirmation', function(){updateValues()});
}

async function depositResource(token, input){

  const contractInstance = new web3.eth.Contract(abi,contractAddress);

  input = input*Emult;
  input = numberToString(input);
  input = new BN(input.toString());
  contractInstance.methods.depositTokens(token, input).send({from:userAddress}).on('confirmation', function(){updateValues()});
}

async function withdrawResource(token, input){
  const contractInstance = new web3.eth.Contract(abi,contractAddress);

  input = input*Emult;
  input = numberToString(input);
  input = new BN(input.toString());

  contractInstance.methods.withdrawTokens(token, input).send({from:userAddress}).on('confirmation', function(){updateValues()});
}


async function testContract(){
  const contractInstance = new web3.eth.Contract(abi,contractAddress);

//  console.log(contractInstance.methods);
  var abc = await contractInstance.methods.tokenAmounts().call();

  foodAmount = abc[0];
  woodAmount = abc[1];
  copperAmount = abc[2];
  weaponAmount = abc[3];

  foodCounter.innerHTML = foodAmount/Emult;
  woodCounter.innerHTML = woodAmount/Emult;
  copperCounter.innerHTML = copperAmount/Emult;
  weaponCounter.innerHTML = weaponAmount/Emult;

  var sharePrice = await contractInstance.methods.sharePrice().call();
  var totalShares = await contractInstance.methods.totalSharesSupply().call();
  var totalValue = await contractInstance.methods.totalDepositedValue().call();

  sharePricer.innerHTML = sharePrice/Emult;
  totalShareser.innerHTML = totalShares/Emult;
  totalValuer.innerHTML = totalValue/Emult;

  userShares = await contractInstance.methods.balanceOf(userAddress).call();
  if(userShares>0){
    yourSharesLbl.innerHTML = userShares/Emult;
    yourValueLbl.innerHTML = Math.round(100*userShares/Emult * sharePrice/Emult)/100;

  }
} 





function numberToString(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}


