<template>
    <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-40 mb-12 sm:mb-16">
        <div class="container">
            <div class="max-w-[742px] w-full mx-auto">
                <h1 class="heading mb-6">FoodKing<span class="gradient-text"> FAQs</span></h1>
                <p class="text-base lg:text-lg font-normal text-center">Answers to Common Questions About FoodKing.</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--================================
            FAQ CONTENT PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="grid col-span-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:place-content-between">
                <div class="md:col-span-1">
                    <div class="sticky top-32 p-4 rounded-2xl bg-white shadow-faq">
                        <nav class="flex flex-col gap-2 text-[#1A203C]">
                            <div v-for="topic in topics">
                               <button
                                    @click="handleTab(topic)"
                                    :class="{ active: activetab === topic }"
                                    class="tabBtn">
                                    <div class="flex items-center gap-3.5">
                                      <i class="icon-message-question text-xl gradient-text"></i>
                                      <span>{{ topic }}</span>
                                    </div>
                               </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="md:col-span-2">
                    <div v-if="activetab == 'General Questions'">
                        <h2 class="text-[28px] font-bold mb-4">Server Requirement</h2>
                        <div class="border-t border-secondary pt-6">
                            <div v-for="(faq,index) in faqs" @click="handleFaq(index)" class="group p-6 text-left w-full mb-6 cursor-pointer bg-white rounded-xl shadow-faq">
                                <div class="flex items-center gap-3 justify-between group-hover:text-primary">
                                    <h6 class="text-lg/[23px] font-semibold ">{{ faq.qns }}</h6>
                                    <i :class="{ 'rotate-180': faqOpen[index] }" class="icon-circle-down text-xl gradient-text rotate-0 transition-all duration-300"></i>
                                </div>
                                <div class="h-0 origin-top faq-text overflow-hidden transition-all duration-300 ease-in-out">
                                    <p class="text-base font-normal pt-6">{{ faq.ans }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    <!--================================
             FAQ CONTENT PART END 
     =================================-->

     <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">
                Reach Out of
                <span class="gradient-text"> Support or Questions </span>
                Any Time
                </h2>
            <p class="text-base font-normal text-center mb-6">If your have any questions or need any help, please create a support ticket.</p>
            <div class="flex flex-wrap items-center max-lg:justify-center gap-4">
                <NuxtLink to="#" class="primary-button flex items-center justify-center">
                    Create a Support Ticket
                </NuxtLink>
            </div>
        </div>
     </ActionComponent>
    <!--===============================
              ACTION PART END 
     =================================-->
</template>

<script setup>
import ActionComponent from '~/components/ActionComponent.vue';

    const activetab = ref('General Questions');
    let faqOpen = ref({})
    const topics = ref(['General Questions', 'Purchase & Licensing', 'Installation & Setup', 'Customization', 'Addons & Modules', 'Support & Update'])
    const faqs = ref([
        {id:1, qns: "Where can I buy FoodKing?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:2, qns: "What are the difference between regular & extended license?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:3, qns: "Do I need to pay monthly?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:4, qns: "Can I switch from Regular to Extended License later?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:5, qns: "What does the license include?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:6, qns: "Can I use the product on multiple websites with a single license purchase?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:6, qns: "Does the license cover all future updates and improvements to the product?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."}
    ])
    
    const handleTab = (tab)=>{
      activetab.value = tab
    }
    
    const handleFaq = (index) => {
      faqOpen.value = { [index]: !faqOpen.value[index] };
      const contents = document.querySelectorAll('.faq-text');
      contents.forEach((content, i) => {
        const isActive = i === index && faqOpen.value[index];
        content.style.height = isActive ? `${content.scrollHeight}px` : '0px';
      });
    };
</script>