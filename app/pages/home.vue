<template>
    <!--========================
          HERO PART START
    ==========================-->
    <section class="bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat bg-cover">
        <div class="container py-20 lg:py-40">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
                <div class="basis-1/2">
                    <h1 class="text-[32px] lg:text-[48px] font-bold mb-6 leading-tight text-center lg:text-left">Complete <span class="gradient-text">PWA Multi-Restaurant</span> Ordering & Delivery Solution</h1>
                    <p class="text-base lg:text-lg font-normal mb-8 text-center lg:text-left">Run your food business from a responsive website with PWA for app-like speed and experience—no app store needed. Fully customizable, ready-to-use, and packed with tools for orders, deliveries, payouts, POS, vendor management, and more.</p>
                    <div class="flex items-center justify-center lg:justify-start gap-6">
                        <button class="primary-button">Sign In</button>
                        <button class="button">Explore Demo</button> 
                    </div>
                </div>
                <div class="w-full basis-1/2 relative">
                    <img class="w-full h-full" src="/images/banner.png" alt="">
                    <div class="absolute p-5 left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="relative flex size-20 sm:size-[104px] items-center justify-center">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(179,182,191)] opacity-75"></span>
                            <button class="relative flex items-center justify-center size-20 sm:size-[78px] rounded-full bg-white cursor-pointer">
                                <span class="relative flex items-center justify-center size-14 rounded-full bg-[rgb(26,31,60)]">
                                    <i class="icon-fill-play text-xl text-white"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--========================
           HERO PART END
    ==========================-->
     <!--===============================
        RESTAURANT ECOSYSTEM PART START 
     =================================-->
     <section class="pb-20 sm:pb-40">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto mb-12 sm:mb-16">
                <h1 class="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">FoodKing Comes Packed with<span class="gradient-text"> Everything to Maintain </span>Your Restaurant Ecosystem</h1>
                 <p class="text-base lg:text-lg font-normal text-center lg:px-24">From admin to kitchen, dine-in to delivery, customers to delivery man, FoodKing connects every part of your restaurant for a seamless experience.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <NuxtLink href="#" v-for="ecosystem in ecosystems" :id="`card-${ecosystem.id}`" class="bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                    <div class="flex items-start justify-between">
                        <div :class="`vector-bg-${ecosystem.id}`" class="w-9 h-9 rounded-full mb-6 flex items-center justify-center">
                            <i class="text-xl text-white" :class="ecosystem.vector"></i>
                        </div>
                        <div v-if="ecosystem.addon" class="absolute right-0 shadow-badge">
                            <div class="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                <div class="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                <div class="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-2xl font-bold mb-3">{{ecosystem.name}}</h6>
                    <p class="text-base font-normal">{{ecosystem.desc}}</p>
                </NuxtLink>
            </div>
        </div>
     </section>
     <!--===============================
        RESTAURANT ECOSYSTEM PART END 
     =================================-->
</template>
<script setup>
import ecosystems from "@/assets/json/ecosystem.json"
</script>