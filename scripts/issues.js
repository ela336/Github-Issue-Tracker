 let issueContainer=document.getElementById("issue-container");
 
 
 
 async function allIssues(){
    let res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues ");
    let data=await res.json();
    data.data.forEach((element) => {
        let date = new Date(element.createdAt);
        let formattedDate = date.toLocaleDateString("en-US");
        
        let card=document.createElement("div");
        card.innerHTML=`<div onclick="openModal(${element.id})" class="  ${element.status=='open' ? 'border-t-4 border-[#00A96E]':'border-t-4 border-[#A855F7]'} w-[300px] h-80 bg-white   rounded-xl shadow-xl flex flex-col">
                <header class="flex items-center justify-between p-4 ">
                    <img src="./assets/${element.status}-Status.png" alt="">
                    <div class=" priority h-6 w-20  text-center rounded-2xl">${element.priority}</div>
                </header>
                <main class="flex-1 p-4 space-y-2 ">
                    <h2 class="line-clamp-2 font-semibold text-[18px]">${element.title}</h2>
                    <p class="font-normal text-[14px] text-[#64748B] line-clamp-3">${element.description}</p>
                    <div class="flex items-center gap-2">
                  <div class="flex items-center gap-2">
             ${element.labels.map(label => `
                <div class="btn btn-xs btn-outline text-[#00A96E] bg-[#BBF7D0] rounded-xl">${label}</div>
             `).join("")}
             </div>
                       
                        
                        
                        
                    </div>
                    
                </main>
                <hr class="  border-[#dadbdd] ">
                    <footer class="text-[12px] text-[#64748B] font-normal p-4 ">
                        <p> #${element.id} by ${element.author}</p>
                        <p>${formattedDate}</p>
                    </footer>

             </div>`;


             let priorityDiv=card.querySelector(".priority");
             if (priorityDiv && element.priority) {
                 let p=element.priority;
                 if (p === "high") {
                     priorityDiv.classList.add("bg-[#FEECEC]", "text-[#EF4444]");
                 } else if (p === "medium") {
                     priorityDiv.classList.add("bg-[#FFF6D1]", "text-[#F59E0B]");
                 } else if (p === "low") {
                     priorityDiv.classList.add("bg-[#EEEFF2]", "text-[#9CA3AF]");
                 }
             }

        issueContainer.appendChild(card);
        
       
        
    });
    issueCount.textContent=`50 Issues`;
    

   


}




let searchInput=document.getElementById("search-input")

async function searchIssues(){
    let query=searchInput.value.toLocaleLowerCase();
    let res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${query}`);
    let data=await res.json();
    issueContainer.innerHTML="";
     data.data.forEach((element) => {
        let date = new Date(element.createdAt);
        let formattedDate = date.toLocaleDateString("en-US");
        
        let card=document.createElement("div");
        card.innerHTML=`<div class= "${element.status=='open' ? 'border border-[#00A96E]':'border border-[#A855F7]'}   w-[300px] h-80 bg-white   rounded-xl shadow-xl flex flex-col">
                <header class="flex items-center justify-between p-4 ">
                    <img src="./assets/${element.status}-Status.png" alt="">
                    <div class=" priority h-6 w-20  text-center rounded-2xl">${element.priority}</div>
                </header>
                <main class="flex-1 p-4 space-y-2 ">
                    <h2 class="line-clamp-2 font-semibold text-[18px]">${element.title}</h2>
                    <p class="font-normal text-[14px] text-[#64748B] line-clamp-3">${element.description}</p>
                    <div class="flex items-center gap-2">
                  <div class="flex items-center gap-2">
             ${element.labels.map(label => `
                <div class="btn btn-xs btn-outline text-[#00A96E] bg-[#BBF7D0] rounded-xl">${label}</div>
             `).join("")}
             </div>
                       
                        
                        
                        
                    </div>
                    
                </main>
                <hr class="  border-[#dadbdd] ">
                    <footer class="text-[12px] text-[#64748B] font-normal p-4 ">
                        <p> #${element.id} by ${element.author}</p>
                        <p>${formattedDate}</p>
                    </footer>

             </div>`;


             let priorityDiv=card.querySelector(".priority");
             if (priorityDiv && element.priority) {
                 let p=element.priority;
                 if (p === "high") {
                     priorityDiv.classList.add("bg-[#FEECEC]", "text-[#EF4444]");
                 } else if (p === "medium") {
                     priorityDiv.classList.add("bg-[#FFF6D1]", "text-[#F59E0B]");
                 } else if (p === "low") {
                     priorityDiv.classList.add("bg-[#EEEFF2]", "text-[#9CA3AF]");
                 }
             }

             
            

        issueContainer.appendChild(card);
        updateissuecount();
       
        
    });

    

}


// toggling button

let allbtn=document.getElementById("allbtn");
let openbtn=document.getElementById("openbtn");
let closedbtn=document.getElementById("closedbtn");

function toggleMenu(id){
    allbtn.classList.remove("btn-primary");
    openbtn.classList.remove("btn-primary");
    closedbtn.classList.remove("btn-primary");

    allbtn.classList.add("btn-outline");
    openbtn.classList.add("btn-outline");
    closedbtn.classList.add("btn-outline");

    id.classList.remove("btn-outline");
    id.classList.add("btn-primary");


   
}

allIssues();


// issue count
let issueCount=document.getElementById("issuecount");
function updateissuecount(){
    let count=issueContainer.children.length;
    issueCount.textContent=`${count} Issues`;
}


//open button functionality
 async function func(iid)
 {
    issueContainer.innerHTML="";
     let res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    let data=await res.json();
    data.data.forEach((element) => {
        if(element.status == iid){
        let date = new Date(element.createdAt);
        let formattedDate = date.toLocaleDateString("en-US");
        
        let card=document.createElement("div");
        card.innerHTML=`<div class="${iid =='open' ? 'border-t-4 border-[#00A96E]':'border-t-4 border-[#A855F7]'} w-[300px] h-80 bg-white   rounded-xl shadow-xl flex flex-col">
                <header class="flex items-center justify-between p-4 ">
                    <img src="./assets/${element.status}-Status.png" alt="">
                    <div class=" priority h-6 w-20  text-center rounded-2xl">${element.priority}</div>
                </header>
                <main class="flex-1 p-4 space-y-2 ">
                    <h2 class="line-clamp-2 font-semibold text-[18px]">${element.title}</h2>
                    <p class="font-normal text-[14px] text-[#64748B] line-clamp-3">${element.description}</p>
                    <div class="flex items-center gap-2">
                  <div class="flex items-center gap-2">
             ${element.labels.map(label => `
                <div class="btn btn-xs btn-outline text-[#00A96E] bg-[#BBF7D0] rounded-xl">${label}</div>
             `).join("")}
             </div>
                       
                        
                        
                        
                    </div>
                    
                </main>
                <hr class="  border-[#dadbdd] ">
                    <footer class="text-[12px] text-[#64748B] font-normal p-4 ">
                        <p> #${element.id} by ${element.author}</p>
                        <p>${formattedDate}</p>
                    </footer>

             </div>`;


             let priorityDiv=card.querySelector(".priority");
             if (priorityDiv && element.priority) {
                 let p=element.priority;
                 if (p === "high") {
                     priorityDiv.classList.add("bg-[#FEECEC]", "text-[#EF4444]");
                 } else if (p === "medium") {
                     priorityDiv.classList.add("bg-[#FFF6D1]", "text-[#F59E0B]");
                 } else if (p === "low") {
                     priorityDiv.classList.add("bg-[#EEEFF2]", "text-[#9CA3AF]");
                 }
             }

        issueContainer.appendChild(card);
        updateissuecount();
            }
       
        
    });

 }

    // modal

    async function openModal(id){
        let modalid=document.getElementById("my_modal_5");
        let res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
        let data =await res.json();
        let element=data.data;
let date= new Date(element.updatedAt);
let updateddate=date.toLocaleDateString("en-us");

         let modal=document.createElement("dialog");
         modal.classList.add("modal","modal-bottom","sm:modal-middle");
         modal.id="my_modal_5";
        modal.innerHTML=`  <div class="modal-box space-y-6 relative">
    <header class="space-y-3">
    <h3  class="text-[24px] font-bold">${element.title}</h3>
    <div class="flex items-center gap-2">
        <div class="bg-green-500 rounded-xl w-[50px] h-6 text-[12px] text-white flex items-center justify-center font-medium">${element.status}</div>
        <p class="flex items-center justify-center"><div class="bg-[#64748B] w-[5px] h-[5px] rounded-full"></div><p class="text-[#64748B]">Opened by ${element.assignee}</p></p>
        <p><div class="bg-[#64748B] w-[5px] h-[5px] rounded-full"></div><p class="text-[#64748B]">${updateddate}</p></p>
    </div>
     </header>
    
     <main class="space-y-3 ">
       <div class="flex items-center gap-2">
                  <div class="flex items-center gap-2">
             ${element.labels.map(label => `
                <div class="btn btn-xs btn-outline text-[#00A96E] bg-[#BBF7D0] rounded-xl">${label}</div>
             `).join("")}
             </div>
       </div>
     
      <p class="text-[16px] font-normal text-[#64748B]">${element.description}</p>
     </main>

     <footer class="space-y-3 bg-[#F8FAFC] flex items-center p-3 gap-32">
        <div>
            <p class="text-[16px] font-normal text-[#64748B]">Assignee:</p>
            <p class="text-[16px] font-semibold">${element.assignee}</p>
        </div>
        <div>
            <p class="text-[16px] font-normal text-[#64748B]">Priority:</p>
            <div class=" prio btn btn-xs btn-outline text-[#00A96E] bg-[#BBF7D0] rounded-xl">${element.priority}</div>
        </div>

     </footer>

      <form method="dialog" class="m-4" >
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary absolute right-6 bottom-2  ">Close</button>
      </form>
    </div>
  </div>
`;

 let prioDiv=modal.querySelector(".prio");
             if (prioDiv && element.priority) {
                 let p=element.priority;
                 if (p === "high") {
                     prioDiv.classList.add("bg-[#FEECEC]", "text-[#EF4444]");
                 } else if (p === "medium") {
                     prioDiv.classList.add("bg-[#FFF6D1]", "text-[#F59E0B]");
                 } else if (p === "low") {
                     prioDiv.classList.add("bg-[#EEEFF2]", "text-[#9CA3AF]");
                 }
             }

     document.body.appendChild(modal);
      modal.showModal();
    }

    