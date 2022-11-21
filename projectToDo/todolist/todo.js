const input=document.querySelector('.inputs__div')
const actionAdd=document.querySelector('.button-add')
const inputANDicon=document.querySelector('.inputANDicon')
const actionSortD=document.querySelector('.icon-sort')


var key='down'
var sortArr=[]

actionAdd.addEventListener('click',()=>{
    
    const divNew=inputANDicon.cloneNode(true)
    input.appendChild(divNew)
    divNew.firstChild.value=''
    divNew.classList.add('inputANDicon')
    
    
    const actionDelete=document.querySelectorAll('.icon-delete:not(first-child)')
    var q=actionDelete.length
    actionDelete.forEach((actionDeleteEl)=>{
       
        actionDeleteEl.addEventListener('click',()=>{
              
              if(q>1){
              actionDeleteEl.parentElement.remove()
              
              }
              q--
        })
         
   

}) 
const inputText=document.querySelectorAll('.inputtext')
 
   
    
    
})
function Sort(keySort){
    const inputText=document.querySelectorAll('.inputtext')
    inputText.forEach(element=>{
        sortArr.push(element.value)
    })
    sortArr=sortArr.sort()
    if(keySort=='sortDown'){
    for(let i=0;i<sortArr.length;i++){
        inputText[i].value=sortArr[i]
    } 
    }
    else if(keySort=='sortUp'){
        sortArr=sortArr.reverse()
        for(let i=0;i<sortArr.length;i++){
            inputText[i].value=sortArr[i]
        } 
    }
    sortArr=[]
    
}



actionSortD.addEventListener('click',()=>{
    
  
    if(key=='down'){
        
        actionSortD.style.backgroundImage="URL('Photos.icons/icon-sort-up-black.svg')"
        
        key='up'
        Sort('sortDown')
        
    }
    else{
       
        actionSortD.style.backgroundImage="URL('Photos.icons/icon-sort-black.svg')"
        
        key='down'
        Sort('sortUp')
    }
    
})



function MouseOverSortD(event){
    if(key=='down'){
      event.target.style.backgroundImage="URL('Photos.icons/icon-sort-black.svg')"  
      
    }
    else if(key=='up'){
        event.target.style.backgroundImage="URL('Photos.icons/icon-sort-up-black.svg')"
        
    }
    
}
function MouseOutSortD(event){
    if(key=='down'){
        event.target.style.backgroundImage="URL('Photos.icons/icon-sort.svg')"
    }
    else {
        event.target.style.backgroundImage="URL('Photos.icons/icon-sort-up.svg')"
        
    }
    
   
}
actionSortD.addEventListener('mouseout',MouseOutSortD)
actionSortD.addEventListener('mouseover',MouseOverSortD)



