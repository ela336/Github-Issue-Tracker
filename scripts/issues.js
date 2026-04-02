 let issueContainer=document.getElementById("issue-container");
 
 
 
 async function allIssues(){
    let res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues ");
    let data=await res.json();
    data.data.forEach((element) => {
        let date = new Date(element.createdAt);
        let formattedDate = date.toLocaleDateString("en-US");
        
        let card=document.createElement("div");
        card.innerHTML=`<div class="w-[300px] h-80 bg-white   rounded-xl shadow-xl flex flex-col">
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
        card.innerHTML=`<div class="w-[300px] h-80 bg-white   rounded-xl shadow-xl flex flex-col">
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