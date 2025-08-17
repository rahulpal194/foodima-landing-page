<template>

    <!--========================
         HEADER PART START
    ==========================-->
    <header :class="[isSticky ? 'sticky-header': '']" class="fixed top-0 left-0 w-full z-[30] transition-all duration-300">
        <span class="bg-primary h-54 w-8 absolute -rotate-45 -top-24 left-12 blur-[93px]"></span>
        <span class="bg-primary h-54 w-8 absolute rotate-45 -top-24 right-12 blur-[93px]"></span>
        <nav class="container flex justify-between items-center py-4">
            <NuxtLink to="#">
                <NuxtImg class="h-8 lg:h-9 w-fit" src="/images/logo.png" alt="" />
            </NuxtLink>
            <div class="lg:flex hidden gap-7 items-center">
                <ul class="flex gap-7 items-center">
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Features</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Demo</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Pricing</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Services</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Resources</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Company</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Partner</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="#">Hire Us</NuxtLink></li>
                </ul>
                <button class="h-12 px-8 bg-gradient-to-b from-secondary to-primary rounded-full text-white text-base font-bold shadow-button"> Sign In</button>            
            </div>
            <button class="lg:hidden block">
                <i class="icon-hamburger-menu text-2xl text-primary"></i>
            </button>
        </nav>
    </header>
    <!--========================
         HEADER PART START
    ==========================-->

    <slot/>

</template>
<script setup>
    import {useSticky} from '~/composable/sticky.js';
    const {isSticky} = useSticky()

</script>