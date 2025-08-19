export function useModal (){
    const isActive = ref(false)
    const openModal =()=>{
        isActive.value= true;
    }
    const closeModal =()=>{
        isActive.value = false
    }

    return {openModal, closeModal ,isActive}
}