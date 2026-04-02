 let issueContainer=document.getElementById("issue-container");
 
 
 
 async function allIssues(){
    let res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues ");
    let data=await res.json();
    data.data.forEach((element) => {
        
        
        let card=document.createElement("div");
        card.innerHTML=`<div class="w-[300px] h-80 bg-white p-4 space-y-4 rounded-xl shadow-xl">
                <header class="flex items-center justify-between ">
                    <img src="./assets/${element.status}-Status.png" alt="">
                    <div class=" priority h-6 w-20  text-center rounded-2xl">${element.priority}</div>
                </header>
                <main class="space-y-2 ">
                    <h2 class="line-clamp-2 font-semibold text-[18px]">${element.title}</h2>
                    <p class="font-normal text-[14px] text-[#64748B] line-clamp-3">${element.description}</p>
                    <div class="flex items-center gap-2">
                  <div class="flex items-center gap-2">
  ${element.labels.map(label => `
    <div class="btn btn-xs btn-outline">${label}</div>
  `).join("")}
</div>
                       
                        
                        
                        
                    </div>
                    <hr class="border-[#64748B] -mx-2 my-3">
                    <footer class="text-[12px] text-[#64748B] font-normal ">
                        <p>#1 by john_doe</p>
                        <p>1/15/2024</p>
                    </footer>
                </main>

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

allIssues();