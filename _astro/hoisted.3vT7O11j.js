document.getElementById("open-modal")?.addEventListener("click",()=>{document.getElementById("modal")?.classList.remove("hidden")});document.getElementById("close-modal")?.addEventListener("click",()=>{document.getElementById("modal")?.classList.add("hidden")});const o=document.getElementById("submit"),t=document.getElementById("name"),n=document.getElementById("email"),a=document.getElementById("comment");"keyup paste mouseup".split(" ").forEach(function(e){t.addEventListener(e,()=>{d(t.value,t,m)}),n.addEventListener(e,()=>{d(n.value,n,s)}),a.addEventListener(e,()=>{d(a.value,a,c)})});o?.addEventListener("click",()=>{d(t.value,t,m)&&d(n.value,n,s)&&d(a.value,a,c)&&(alert("Заявка отправлена"),t.value="",n.value="",a.value="")});const m=e=>/[a-zA-Zа-яА-ЯёЁ '`.\-]{3,64}$/g.test(e),s=e=>/^[a-zA-Z0-9._-]{1,64}@([a-zA-Z0-9.-]{2,255})\.[a-zA-Z]{2,255}$/.test(e),c=e=>!/[<>]/.test(e),d=(e,l,u)=>u(e)?(l.classList.remove("invalid"),!0):(l.classList.add("invalid"),!1);