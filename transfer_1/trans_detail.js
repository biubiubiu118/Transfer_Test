let startTime_all;
let timerInterval;
let currentTaskIndex = 0; // 初始从第一个任务开始
let seecurrentTask = 0; // 初始从第一个任务开始
let now_selecttoken="ETH";
let now_inputaddress="0x";

document.getElementById("task_Detail").style.display = "none";
// 禁用
document.getElementById("intro").classList.add("disabled");
document.getElementById("list").classList.add("disabled");
document.getElementById("questionnaire").classList.add("disabled");
document.getElementById("portfolioModal").classList.add("disabled");
document.getElementById("PageIn").style.display = "block";

const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const task3 = document.getElementById("task3");
const task4 = document.getElementById("task4");
const task5 = document.getElementById("task5");
const task6 = document.getElementById("task6");
const task7 = document.getElementById("task7");
const task8 = document.getElementById("task8");
const task9 = document.getElementById("task9");
const task10 = document.getElementById("task10");
const allTasks = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10];
const allTasks_record = ['task_record1', 'task_record2', 'task_record3', 'task_record4', 'task_record5', 'task_record6', 'task_record7', 'task_record8', 'task_record9', 'task_record10'];

function start(){
  startTimer();
  currentTaskIndex++;
  document.getElementById("portfolioModal").style.display = "block";

  document.getElementById("intro").classList.remove("active");
  document.getElementById("list").classList.remove("active");
  document.getElementById("task_intro").classList.add("hidden");
  document.getElementById("task_list").classList.add("hidden");

  activateTask1();

  document.getElementById("task_Detail").style.display = "block";

  document.getElementById("PageIn").style.display = "none";
}

function start_task(){
  document.getElementById("task_Detail").style.display = "none";
  document.getElementById("intro").classList.remove("disabled");
  document.getElementById("list").classList.remove("disabled");
  document.getElementById("portfolioModal").classList.remove("disabled");

  if(seecurrentTask==0){
  if (currentTaskIndex==1){
  document.getElementById("intro").classList.add("active");
  document.getElementById("list").classList.remove("active");
  document.getElementById("task_intro").classList.remove("hidden");
  document.getElementById("task_list").classList.add("hidden");
  }
  else {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("list").classList.add("active");
  document.getElementById("task_intro").classList.add("hidden");
  document.getElementById("task_list").classList.remove("hidden");
  }

  seecurrentTask=1;
  const preTaskname = allTasks_record[currentTaskIndex - 1];
  startTask(preTaskname);
  }
  else{
  document.getElementById("intro").classList.remove("active");
  document.getElementById("list").classList.add("active");
  document.getElementById("task_intro").classList.add("hidden");
  document.getElementById("task_list").classList.remove("hidden");
  }
}

// 点击侧边栏“任务列表”按钮时激活任务一
function activateTask1() {
  setActiveTask(task1);
}

// 点击确认按钮后激活任务二
function activateTask2() {
  setActiveTask(task2);
}

function showTask(task_num){
  seecurrentTask=0;
  // 禁用
  document.getElementById("intro").classList.add("disabled");
  document.getElementById("list").classList.add("disabled");
  document.getElementById("portfolioModal").classList.add("disabled");
  document.getElementById("task_intro").classList.add("hidden");
  document.getElementById("task_list").classList.add("hidden");
  const context = document.getElementById("taskdetail");
  const text3 = `Task 3：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0xe52a132e1d653e3afb17d9c75581efb1b3d40ab7">0xe52a...d40ab7</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 1.35 BNB</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text2 = `Task 2：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x254f2c16551f5960f2a6cbeeae713b320a66a83f">0x254f...66a83f</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 2.5 ETH</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text4 = `Task 4：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x66e0b66d9e7f44e99bec3090619e87f7f37ec7ca">0x66e0...7ec7ca</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 25 USDC</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text5 = `Task 5：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x681d51dd1bfe89efed93117937e5c7c27ad804dc">0x681d...d804dc</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 14.8 USDC</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text6 = `Task 6：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x5e8ce3a7f20a473a9af182ce15db0d9ed1980e8d">0x5e8c...980e8d</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 3.1 ETH</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text7 = `Task 7：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0xef8b47d5b94638f48848ff4f8b2987b1340ec372">0xef8b...0ec372</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 2.3 USDC</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text8 = `Task 8：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x3de969410e056e3f3b1ddd26e800da7c019a384e">0x3de9...9a384e</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 0.07 USDC</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text9 = `Task 9：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x061d7cb31ccf9429c1174d4f74171f025b07c49b">0x061d...07c49b</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 0.1 USDC</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;

const text10 = `Task 10：<br><br>
You have previously transacted with account
<span id="text_address" onmouseover="startHover()" onmouseout="endHover()" title="0x4e3ba91594ef274a383dfc0c5a58b4de7e56ce76">0x4e3b...56ce76</span>
(hover over the address can view its full address), <br><br>
Please send<strong> 2.5 BNB</strong> to this address again.<br><br>
(This can be viewed again by clicking task in the "Task List".)`;
  if (currentTaskIndex!=1){
    if (currentTaskIndex==2){
      context.innerHTML=text2;
    }
    else if (currentTaskIndex==3){
      context.innerHTML=text3;
    }
    else if (currentTaskIndex==4){
      context.innerHTML=text4;
    }
    else if (currentTaskIndex==5){
      context.innerHTML=text5;
    }
    else if (currentTaskIndex==6){
      context.innerHTML=text6;
    }
    else if (currentTaskIndex==7){
      context.innerHTML=text7;
    }
    else if (currentTaskIndex==8){
      context.innerHTML=text8;
    }
    else if (currentTaskIndex==9){
      context.innerHTML=text9;
    }
    else if (currentTaskIndex==10){
      context.innerHTML=text10;
    }
  }

  document.getElementById("task_Detail").style.display = "block";
}

// 设置当前激活的任务并禁用其他任务
function setActiveTask(activeBtn) {
  allTasks.forEach(btn => {
    if (btn === activeBtn) {
      btn.classList.add("active");
      btn.classList.remove("disabled");
    } else {
      btn.classList.remove("active");
      btn.classList.add("disabled");
    }
  });
}

function startTimer() {
  // 记录起始时间
  startTime_all = Date.now();

  // 如果已有计时器，先清除
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // 每秒更新页面
  timerInterval = setInterval(() => {
  const now = Date.now();
  const elapsedSeconds = Math.floor((now - startTime_all) / 1000);

  const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsedSeconds % 60).padStart(2, '0');

  document.getElementById("task_time").textContent = `Test Time Spent：${hours}:${minutes}:${seconds}`;
}, 1000);
}

function showTaskIntro(){
  const title="Task Instruction";
  document.getElementById("totalpage_title").textContent = title;
  document.getElementById("task_intro").classList.remove("hidden");
  document.getElementById("task_intro").classList.remove("hidden");
  document.getElementById("intro").classList.add("active");
  document.getElementById("list").classList.remove("active");

}

function showTaskDetail(){
  const title="Task List";
  document.getElementById("totalpage_title").textContent = title;
  document.getElementById("task_intro").classList.add("hidden");
  document.getElementById("task_list").classList.remove("hidden");
  document.getElementById("intro").classList.remove("active");
  document.getElementById("list").classList.add("active");
}


function showPortfolioModal() {
  document.getElementById("portfolioModal").style.display = "block";
  document.getElementById("portfolioOverlay").style.display = "block";
}

function showTxHistoryModal() {
  document.getElementById("txHistoryModal").style.display = "flex";
  document.getElementById("txHistoryOverlay").style.display = "block";
}

function closeTxHistoryModal() {
  document.getElementById("txHistoryModal").style.display = "none";
  document.getElementById("txHistoryOverlay").style.display = "none";
}

function openTransactionDetailModal(tran_id, sender, receiver, amount, tokentype, direction, suspicious,time) {
  const preTaskname = allTasks_record[currentTaskIndex-1];

  // 初始化并记录点击次数
  const clicks = taskData.tasks[preTaskname].transactionClicks;
  if (!clicks[tran_id]) {
    clicks[tran_id] = 1;
  } else {
    clicks[tran_id]++;
  }

  function formatAddress(addr) {
    if (!addr || addr.length < 12) return addr;
    return addr.slice(0, 6) + "..." + addr.slice(-6);
  }

  //const formattedFrom = formatAddress(sender);
  //const formattedTo = formatAddress(receiver);

  const receiverElem = document.getElementById("txReceiver");
  const senderElem = document.getElementById("txSender");

  document.getElementById("trans_time").innerText=time;
  //document.getElementById("network_fee").innerText=time;
  //document.getElementById("network_type").innerText=time;
  //document.getElementById("trans_detail_value").innerText=time;

  //const amountNum = parseFloat(amount);
  //const total = amountNum + 0.0000021;
  //const formattedTotal = total.toFixed(7);
  //const displayValue = `${amount} ${tokentype}`;
  //const displayTotalValue = `${formattedTotal} ${tokentype}`;

  if (direction=="receive"){
    document.getElementById("receive_or_send").innerText = "Receive";
    const displayValue = `+ ${amount} ${tokentype}`;
    document.getElementById("trans_detail_value").innerText=displayValue;
    document.getElementById("subtext_from").classList.add("hidden");
    document.getElementById("subtext_to").classList.remove("hidden");
  }
  else if (direction=="send"){
    document.getElementById("receive_or_send").innerText = "Send";
    const displayValue = `- ${amount} ${tokentype}`;
    document.getElementById("trans_detail_value").innerText=displayValue;
    document.getElementById("subtext_from").classList.remove("hidden");
    document.getElementById("subtext_to").classList.add("hidden");
  }

  receiverElem.textContent  = receiver;
  receiverElem.setAttribute("data-full-address", receiver);
  receiverElem.setAttribute("history_id", tran_id);

  if (suspicious=="sus-to"){
    receiverElem.setAttribute("suspicious", "1");
  }
  else{
    receiverElem.setAttribute("suspicious", "0");
  }

  senderElem.textContent  = sender;
  senderElem.setAttribute("data-full-address", sender);
  senderElem.setAttribute("history_id", tran_id);

  if (suspicious=="sus-from"){
    senderElem.setAttribute("suspicious", "1");
  }
  else{
    senderElem.setAttribute("suspicious", "0");
  }

  //pagetime.textContent  = time;

  if (tokentype=="BNB"){
    document.getElementById("network_type").innerText  = "BNB Chain";
    document.getElementById("network_fee").innerText= "<0.00001 BNB";
    document.getElementById("trans_detail_logo").src = "bnb-logo1.png";  // 设置为你的图片路径
  }
  else if (tokentype=="ETH"){
    document.getElementById("network_type").innerText  = "Ethereum";
    document.getElementById("network_fee").innerText= "<0.00001 ETH";
    document.getElementById("trans_detail_logo").src = "eth-logo1.png";  // 设置为你的图片路径
  }
  else if (tokentype=="USDC"){
    document.getElementById("network_type").innerText  = "Ethereum";
    document.getElementById("network_fee").innerText= "<0.00001 ETH";
    document.getElementById("trans_detail_logo").src = "eth-logo1.png";  // 设置为你的图片路径
  }

  //pagevalue.textContent  = displayValue;

  document.getElementById("transactionDetailModal").style.display = "block";
}

function copyFullAddress(element) {
  const fullAddress = element.getAttribute("data-full-address");
  if (!fullAddress) return;

  const tranId = element.getAttribute("history_id");

  const isSender = element.id === "txSender";
  const preTaskname = allTasks_record[currentTaskIndex - 1];
  const task = taskData.tasks[preTaskname];

  // 初始化 copiedAddresses 子结构
  if (!task.copiedAddresses.sender) task.copiedAddresses.sender = {};
  if (!task.copiedAddresses.receiver) task.copiedAddresses.receiver = {};

  // 增加对应记录
  const target = isSender ? task.copiedAddresses.sender : task.copiedAddresses.receiver;
  if (!target[tranId]) {
    target[tranId] = 1;
  } else {
    target[tranId]++;
  }


  const suspicious_if = element.getAttribute("suspicious");
  const suspicious_add = element.getAttribute("similar-address");
  //const fromElem = document.getElementById("warning_one");
  //if (suspicious_if=="1"){
    //fromElem.setAttribute("title", suspicious_add);
    //document.getElementById("copyWarningModal").style.display = "block";
  //}

  navigator.clipboard.writeText(fullAddress)
    .then(() => {
      showCopyToast(); // 显示提示
    })
    .catch(err => {
      console.error("复制失败", err);
    });
}


function showCopyToast() {
  const toast = document.getElementById('copyToast');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 1500); // 提示显示 1.5 秒后消失
}

function closeTransactionDetailModal() {
  document.getElementById("transactionDetailModal").style.display = "none";
}

function showSendModal() {
  document.getElementById("SelectCryptoModal").style.display = "block";
  //document.getElementById("sendOverlay").style.display = "block";
}

function closeSelectCryptoModal() {
  // 清空输入字段
  //document.getElementById("receiverInput").value = "";
  //document.getElementById("networkSelect").selectedIndex = 0; // 重置为第一个选项
  //document.getElementById("Amount").value = "";
  //resetSendForm();
  document.getElementById("SelectCryptoModal").style.display = "none";
  document.getElementById("sendOverlay").style.display = "none";
}

function select_eth(){
  now_selecttoken="ETH";
  document.getElementById("SendtoModal").style.display = "block";
}

function select_bnb(){
  now_selecttoken="BNB";
  document.getElementById("SendtoModal").style.display = "block";
}

function select_usdc(){
  now_selecttoken="USDC";
  document.getElementById("SendtoModal").style.display = "block";
}

function triggerSendAmount(){
  now_inputaddress = document.getElementById("address_input").value || "0x";

  function checkAddress(addr){
    if (now_inputaddress.length != 42) {
      alert("Please enter a 40-character hexadecimal address starting with ‘0x’ (excluding the ‘0x’ prefix).");
      return 0;
    }
  }

  const check_full_ornot=checkAddress(now_inputaddress);
  if (check_full_ornot!=0){

  if (now_selecttoken=="BNB"){
    document.getElementById("sendamount_token").innerText="BNB";
    document.getElementById("send_amount_all").innerText="****** BNB";
    document.getElementById("send_amount_logo").src = "bnb-logo1.png";  // 设置为你的图片路径
  }
  else if (now_selecttoken=="ETH"){
    document.getElementById("sendamount_token").innerText="ETH";
    document.getElementById("send_amount_all").innerText="****** ETH";
    document.getElementById("send_amount_logo").src = "eth-logo1.png";  // 设置为你的图片路径
  }
  else if (now_selecttoken=="USDC"){
    document.getElementById("sendamount_token").innerText="USDC";
    document.getElementById("send_amount_all").innerText="****** USDC";
    document.getElementById("send_amount_logo").src = "usdc-logo1.png";  // 设置为你的图片路径
  }

  document.getElementById("SendAmountModal").style.display = "block";
  }
}

function closeSendtoModal() {
  // 清空输入字段
  //document.getElementById("receiverInput").value = "";
  //document.getElementById("networkSelect").selectedIndex = 0; // 重置为第一个选项
  //document.getElementById("Amount").value = "";
  resetSendForm("send-to");
  document.getElementById("SendtoModal").style.display = "none";
  document.getElementById("sendOverlay").style.display = "none";
}

function closeSendAmountModal() {
  // 清空输入字段
  //document.getElementById("receiverInput").value = "";
  //document.getElementById("networkSelect").selectedIndex = 0; // 重置为第一个选项
  //document.getElementById("Amount").value = "";
  resetSendForm("send-amount");
  document.getElementById("SendAmountModal").style.display = "none";
  document.getElementById("sendOverlay").style.display = "none";
}

function closeConfirmModal() {
  document.getElementById("sendConfirmModal").style.display = "none";
  document.getElementById("sendConfirmOverlay").style.display = "none";
}

function triggerConfirm() {
  //const receiver = document.getElementById("receiverInput").value || "0";
  //const network = document.getElementById("networkSelect").value || "Binance Smart Chain";
  const amount = document.getElementById("amountInput").value || "0";
  const amount1 = `- ${amount}`;

  openSendConfirmModal(now_inputaddress, now_selecttoken, amount1);
}

function openSendConfirmModal(receiver, network, amount) {
 function formatAddress2(addr) {
    if (addr.length != 42) {
      alert("请输入0x为首的40位（不包含0x）十六进制地址");
      return "0";
    }
    return addr.slice(0, 6) + "..." + addr.slice(-6);
  }

  //const formattedTo = formatAddress2(receiver);

  //if (formattedTo!="0"){

  const toElem = document.getElementById("confirmReceiver");

  toElem.textContent  = receiver;
  toElem.setAttribute("full-to-add", receiver);
  document.getElementById("confirm_amount").textContent=amount;

  if (network=="BNB"){
     document.getElementById("confirm_token").textContent = "BNB";
     document.getElementById("confirm_network").innerText = "Est BNB Chain network fee";
     document.getElementById("confirm_avefee").innerText = "<0.00001 BNB ($******)";
     document.getElementById("confirm_maxfee").innerText = "Maximum <0.00001 BNB ($******)";
     document.getElementById("confirm_feetoken").src = "bnb-logo1.png";  // 设置为你的图片路径
     document.getElementById("confirmpage-title").src = "bnb-logo1.png";  // 设置为你的图片路径
  }
  else if (network=="ETH"){
     document.getElementById("confirm_token").innerText = "ETH";
     document.getElementById("confirm_network").innerText = "Est Ethereum network fee";
     document.getElementById("confirm_avefee").innerText = "<0.00001 ETH ($******)";
     document.getElementById("confirm_maxfee").innerText = "Maximum <0.00001 ETH ($******)";
     document.getElementById("confirm_feetoken").src = "eth-logo1.png";  // 设置为你的图片路径
     document.getElementById("confirmpage-title").src = "eth-logo1.png";  // 设置为你的图片路径
  }
  else{
     document.getElementById("confirm_token").innerText = "USDC";
     document.getElementById("confirm_network").innerText = "Est Ethereum network fee";
     document.getElementById("confirm_avefee").innerText = "<0.00001 ETH ($******)";
     document.getElementById("confirm_maxfee").innerText = "Maximum <0.00001 ETH ($******)";
     document.getElementById("confirm_feetoken").src = "usdc-logo1.png";  // 设置为你的图片路径
     document.getElementById("confirmpage-title").src = "usdc-logo1.png";  // 设置为你的图片路径
  }

  document.getElementById("sendConfirmModal").style.display = "block";
  document.getElementById("sendConfirmOverlay").style.display = "block";
  //}
}

function ConfirmNo() {
  document.getElementById("sendConfirmModal").style.display = "none";
  document.getElementById("sendConfirmOverlay").style.display = "none";
}

function SendConfirm() {
  const toElem = document.getElementById("confirmReceiver");
  const full_add = toElem.getAttribute("full-to-add");

  const false_add=['0x4e3ba4816a894f2b7317c9ec8919e4ce7e56ce76','0xe52a775659b59a33f525b1c40e7c703796d40ab7', '0x061d7018174525be5198a8374e21bcff4b07c49b', '0x5e8ced668b63452fa227be40439d07c831980e8d','0x3de9558d23715d5d4381738e0106060d5e9a384e','0xef8b3f103601d0b40f85423067a8b462f40ec372','0x66e0bcf0a1f09fd25e77aed2ea3d2bd5437ec7ca'];

  //if (false_add.includes(full_add)){
    //document.getElementById("copyWarningModal2").style.display = "block";
 // }
  //else{
    // ✅ 记录转账信息
    //const selectedToken = document.getElementById("networkSelect").value||"BNB";
    const amount = document.getElementById("amountInput").value || "0";

    const preTaskname = allTasks_record[currentTaskIndex - 1];

    if (!taskData.tasks[preTaskname].transferDetails) {
      taskData.tasks[preTaskname].transferDetails = {};
    }

    taskData.tasks[preTaskname].transferDetails = {
      to: now_inputaddress,
      token: now_selecttoken,
      amount: amount
    };

    if (currentTaskIndex!=10){
    const preTaskname = allTasks_record[currentTaskIndex - 1];
    endTask(preTaskname);
    currentTaskIndex++;
    const currentTaskname = allTasks[currentTaskIndex - 1];
    setActiveTask(currentTaskname);
    showTask(currentTaskIndex);
    }
    else{
      task10.classList.remove("active");
      task10.classList.add("disabled");
      document.getElementById("questionnaire").classList.remove("disabled");
      document.getElementById("list").classList.add("disabled");
      document.getElementById("intro").classList.add("disabled");
      document.getElementById("questionnaire").classList.add("active");
      document.getElementById("list").classList.remove("active");
      document.getElementById("intro").classList.remove("active");
      document.getElementById("task_intro").classList.add("hidden");
      document.getElementById("task_list").classList.add("hidden");
      document.getElementById("task_question").classList.remove("hidden");
      document.getElementById("portfolioModal").style.display = "none";
    }

    document.getElementById("SendAmountModal").style.display = "none";
    document.getElementById("SendtoModal").style.display = "none";
    document.getElementById("SelectCryptoModal").style.display = "none";
    document.getElementById("sendConfirmModal").style.display = "none";
    document.getElementById("sendConfirmOverlay").style.display = "none";
    document.getElementById("sendOverlay").style.display = "none";
    showsendOK();
    resetSendForm("confirm");
  //}

}

function handleReturn() {
  recordCheckBack1();
  navigator.clipboard.writeText("")
  .then(() => {
      showCopiedTooltip();
    });
  document.getElementById("copyWarningModal").style.display = "none";
}

function showCopiedTooltip() {
  const toast = document.getElementById('copyClean');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 1500); // 提示显示 1.5 秒后消失
}

function showsendOK() {
  const toast = document.getElementById('sendOk');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 1500); // 提示显示 1.5 秒后消失
}

function handleConfirm() {
  recordIgnore1();
  document.getElementById("copyWarningModal").style.display = "none";
}

function handleReturn2() {
  recordCheckBack2();
  document.getElementById("copyWarningModal2").style.display = "none";
}


function handleConfirm2() {
  showsendOK();
  recordIgnore2();
  const preTaskname = allTasks_record[currentTaskIndex - 1];
  endTask(preTaskname);

  // ✅ 记录转账信息
  const toElem = document.getElementById("confirmReceiver");
  const full_add = toElem.getAttribute("full-to-add");
  const selectedToken = document.getElementById("networkSelect").value;
  const amount = document.getElementById("amountInput").value;

  if (!taskData.tasks[preTaskname].transferDetails) {
      taskData.tasks[preTaskname].transferDetails = {};
  }

  taskData.tasks[preTaskname].transferDetails = {
    to: full_add,
    token: selectedToken,
    amount: amount
  };

  currentTaskIndex++;
  const currentTaskname = allTasks[currentTaskIndex - 1];
  setActiveTask(currentTaskname);
  showTask(currentTaskIndex);

  document.getElementById("copyWarningModal2").style.display = "none";
  document.getElementById("sendConfirmModal").style.display = "none";
  document.getElementById("sendConfirmOverlay").style.display = "none";
  document.getElementById("SelectCryptoModal").style.display = "none";
  document.getElementById("sendOverlay").style.display = "none";

  resetSendForm("confirm");
}

function resetSendForm(modalname) {
  if (modalname=="send-to"){
    // 清空地址输入框
    document.getElementById("address_input").value = "";
    now_inputaddress="0x";
  }
  else if (modalname=="send-amount"){
    // 清空金额输入框
    document.getElementById("amountInput").value = "";
  }
  else if (modalname=="confirm"){
    document.getElementById("amountInput").value = "";
    document.getElementById("address_input").value = "";
    now_inputaddress="0x";
    now_selecttoken="ETH";
  }
}

// 控制第4题显示
document.querySelectorAll('input[name="q4"]').forEach(input => {
  input.addEventListener('change', () => {
    const showQ5 = input.value === 'yes';
    document.getElementById('question5').classList.toggle('hidden', !showQ5);
  });
});

// 控制第9题显示
document.querySelectorAll('input[name="q8"]').forEach(input => {
  input.addEventListener('change', () => {
    const showQ9 = input.value !== '0';
    document.getElementById('question9').classList.toggle('hidden', !showQ9);
  });
});

function submitQuestionnaire() {
  // 检查必答题是否都有选择
  const requiredRadios = [
    { name: "q2", label: "Question 1" },
    { name: "q4", label: "Question 3" },
    { name: "q8", label: "Question 8" },
    { name: "q10", label: "Question 10" },
    { name: "q11", label: "Question 11" },
    { name: "q12", label: "Question 12" },
    { name: "q13", label: "Question 13" }
  ];

  for (const q of requiredRadios) {
    const selected = document.querySelector(`input[name="${q.name}"]:checked`);
    if (!selected) {
      alert(`${q.label} is required. Please select your option before submitting.`);
      return;  // 阻止提交
    }
  }

  // 可选：如果 Q4 == yes 才显示 Q5，必须选择一个
  const q4Answer = document.querySelector('input[name="q4"]:checked').value;
  if (q4Answer === 'yes') {
    const q5Checked = document.querySelectorAll('input[name="q5[]"]:checked');
    if (q5Checked.length === 0) {
      alert("Question 5 is required. Please select your option before submitting.");
      return;
    }
  }

  const q1Text = document.getElementById("q1").value.trim();
  if (q1Text === "") {
    alert("Question 1 is required. Please enter your response.");
    return;
  }

  const q3Text = document.getElementById("q3").value.trim();
  if (q3Text === "") {
    alert("Question 3 is required. Please enter your response.");
    return;
  }

  const q7Text = document.getElementById("q7").value.trim();
  if (q7Text === "") {
    alert("Question 7 is required. Please enter your response.");
    return;
  }

  // 可选：如果 Q8 != 0，Q9 必填
  const q8Value = document.querySelector('input[name="q8"]:checked').value;
  const q9Text = document.getElementById("q9").value.trim();
  if (q8Value !== "0" && (q9Text === "")) {
    alert("Question 9 is required. Please enter your response.");
    return;
  }

  // ✅ 如果验证通过，继续收集问卷并下载（同之前逻辑）
  const answers = [];
  answers.push("问卷调查结果：");

  // Q1 文本题
  const q1 = document.getElementById("q1").value;
  answers.push("Q1: " + (q1 || "未填写"));

  // 单选题 Q2
  const q2 = document.querySelector('input[name="q2"]:checked');
  answers.push("Q2: " + (q2 ? q2.value : "未作答"));

  // Q3 文本题
  const q3 = document.getElementById("q3").value;
  answers.push("Q3: " + (q3 || "未填写"));

  // Q4 是/否
  const q4 = document.querySelector('input[name="q4"]:checked');
  answers.push("Q4: " + (q4 ? q4.value : "未作答"));

  // Q5 多选题（仅在 Q4 选“是”时才显示）
  const q5 = document.querySelectorAll('input[name="q5[]"]:checked');
  const q5_vals = Array.from(q5).map(c => c.parentElement.textContent.trim());
  answers.push("Q5: " + (q5_vals.length ? q5_vals.join(", ") : "未作答"));

  // Q5 单选题
  //const q5 = document.querySelector('input[name="q5"]:checked');
  //answers.push("Q5: " + (q5 ? q5.value : "未作答"));

  // Q6 单选题
  //const q6 = document.querySelector('input[name="q6"]:checked');
  //answers.push("Q6: " + (q6 ? q6.value : "未作答"));

  // Q7 文本题
  const q7 = document.getElementById("q7").value;
  answers.push("Q7: " + (q7 || "未填写"));

  // Q8 单选
  const q8 = document.querySelector('input[name="q8"]:checked');
  answers.push("Q8: " + (q8 ? q8.value : "未作答"));

  // Q9 文本题（仅 Q8 != "0" 时才显示）
  const q9 = document.getElementById("q9").value;
  answers.push("Q9: " + (q9 || "未填写"));

  // Q10 单选
  const q10 = document.querySelector('input[name="q10"]:checked');
  answers.push("Q10: " + (q10 ? q10.value : "未作答"));

  // Q11 单选
  const q11 = document.querySelector('input[name="q11"]:checked');
  answers.push("Q11: " + (q11 ? q11.value : "未作答"));

  // Q12 单选
  const q12 = document.querySelector('input[name="q12"]:checked');
  answers.push("Q12: " + (q12 ? q12.value : "未作答"));

  // Q13 文本
  const q13 = document.querySelector('input[name="q13"]:checked');
  answers.push("Q13: " + (q13 ? q13.value : "未作答"));

  // Q14 文本
  const q14 = document.getElementById("q14").value;
  answers.push("Q14: " + (q14 || "未填写"));

  // 然后将 taskData 添加进来
  answers.push("\n任务交互数据：");
  answers.push(JSON.stringify(taskData, null, 2)); // 格式化 JSON

  // 生成文本内容
  const textContent = answers.join("\n");

  // 创建并下载 txt 文件
  const blob = new Blob([textContent], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'question1.txt';
  a.click();
}

const taskData = {
  tasks: {
    task_record1: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record2: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record3: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record4: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record5: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record6: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record7: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record8: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record9: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    },
    task_record10: {
      startTime: null,
      endTime: null,
      durationSeconds: 0,
      transactionClicks: {},        // { 'nonce-id': clickCount }
      copiedAddresses: {
        sender: {},                // { 'nonce-id': copyCount }
        receiver: {}
      },                           // { 'nonce-id': copyCount }
      hoverDetails: {
        hoverCount: 0,
        totalHoverTimeMs: 0
      },
      checkBackClickCount1: 0,
      checkBackClickCount2: 0,
      IgnoreClickCount1: 0,
      IgnoreClickCount2: 0,
      transferDetails: {
        to: null,
        token: null,
        amount: null
      }
    }
  }
};

let currentTask="task_record1";
let hoverStartTime = null;

function startTask(taskName) {
  const task = taskData.tasks[taskName];
  task.startTime = new Date().toISOString();
}

function endTask(taskName) {
  const task = taskData.tasks[taskName];

  task.endTime = new Date().toISOString();
  task.durationSeconds = Math.floor((new Date(task.endTime) - new Date(task.startTime)) / 1000);
  hoverStartTime = null;
}

function recordTransactionClick(txId) {
  const inTaskname=allTasks_record[currentTaskIndex-1];
  const clicks = taskData.tasks[inTaskname].transactionClicks;
  clicks[txId] = (clicks[txId] || 0) + 1;
}

function startHover() {
  const inTaskname=allTasks_record[currentTaskIndex-1];
  if (hoverStartTime) {
  taskData.tasks[inTaskname].hoverDetails.hoverCount += 1;
  }
  else{
  hoverStartTime = Date.now();
  taskData.tasks[inTaskname].hoverDetails.hoverCount += 1;
  }
}

function endHover() {
  if (hoverStartTime) {
    const inTaskname=allTasks_record[currentTaskIndex-1];
    const duration = Date.now() - hoverStartTime;
    taskData.tasks[inTaskname].hoverDetails.totalHoverTimeMs += duration;
    //hoverStartTime = null;
  }
}

function recordCheckBack1() {
  const inTaskname=allTasks_record[currentTaskIndex-1];
  taskData.tasks[inTaskname].checkBackClickCount1 += 1;
}

function recordCheckBack2() {
  const inTaskname=allTasks_record[currentTaskIndex-1];
  taskData.tasks[inTaskname].checkBackClickCount2 += 1;
}


function recordIgnore1() {
  const inTaskname=allTasks_record[currentTaskIndex-1];
  taskData.tasks[inTaskname].IgnoreClickCount1 += 1;
}

function recordIgnore2() {
  const inTaskname=allTasks_record[currentTaskIndex-1];
  taskData.tasks[inTaskname].IgnoreClickCount2 += 1;
}
