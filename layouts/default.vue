<template>

    <!--==========================
           HEADER PART START 
     ==========================-->
    <header :class="[isSticky ? 'sticky-header': '']" class="fixed top-0 left-0 w-full z-[30]">
        <div class="container !py-4">
            <div class="flex justify-between items-center">
            <NuxtLink to="/"><NuxtImg class="h-8 lg:h-9" src="/images/logo.png" alt="logo"/></NuxtLink>
            <div class="flex justify-between items-center gap-7">
                <nav class="hidden lg:flex items-center gap-7 text-base leading-5 font-medium [&_a]:hover:text-primary">
                    <NuxtLink class="active:text-primary" to="/features">Features</NuxtLink>
                    <NuxtLink to="/demo">Demo</NuxtLink>
                    <NuxtLink to="/pricing">Pricing</NuxtLink>

                     <!--========================
                          SERVICE PART START 
                     ==========================-->
                    <div class="relative group">
                        <button class="capitalize font-medium group-hover:text-primary">services</button>
                        <div class="absolute top-12 left-0 z-10 w-[260px] p-4 rounded-3xl shadow-paper bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                            <NuxtLink to="/installation" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-blue bg-gradient-to-l from-[#73C3FF] to-[#007EDD]">
                                    <i class="icon-fill-install text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold capitalize whitespace-nowrap">
                                    Installation
                                </span>
                            </NuxtLink>
                            <NuxtLink to="/customization" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-orange bg-gradient-to-l from-[#FFC773] to-[#DD3500]">
                                    <i class="icon-fill-install text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Customization
                                </span>
                            </NuxtLink>
                            <NuxtLink to="/maintanence" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#52EA7C] to-[#1CB803]">
                                    <i class="icon-music-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    iCare Maintenance
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                    <!--========================
                          SERVICE PART END 
                     ==========================-->

                    <!--========================
                        RESOURCES PART START 
                     ==========================-->
                     <div class="relative group">
                        <button class="capitalize font-medium group-hover:text-primary">Resources</button>
                        <div class="absolute top-12 left-0 z-10 w-[260px] p-4 rounded-3xl shadow-paper bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                            <NuxtLink to="/documentation" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-blue bg-gradient-to-l from-[#FF62A6] to-[#ED0067]">
                                    <i class="icon-clipboard-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold capitalize whitespace-nowrap">
                                    Documentation
                                </span>
                            </NuxtLink>
                            <NuxtLink to="/blogs" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-orange bg-gradient-to-l from-[#B077FF] to-[#7918FF]">
                                    <i class="icon-document-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Blogs
                                </span>
                            </NuxtLink>
                            <NuxtLink to="#" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#FFB973] to-[#DD5C00]">
                                    <i class="icon-video-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Videos
                                </span>
                            </NuxtLink>
                            <NuxtLink to="#" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#52EA7C] to-[#1CB803]">
                                    <i class="icon-people text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Community
                                </span>
                            </NuxtLink>
                            <NuxtLink to="/faq" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#73C3FF] to-[#007EDD]">
                                    <i class="icon-message-question text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    FAQs
                                </span>
                            </NuxtLink>
                            <NuxtLink to="#" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#7AA0FF] to-[#034BFF]">
                                    <i class="icon-music-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Support
                                </span>
                            </NuxtLink>
                        </div>
                     </div>
                    <!--========================
                        RESOURCES PART START 
                     ==========================-->

                    <!--========================
                       COMPANY PART START 
                    ==========================-->
                    <div class="relative group">
                        <button class="capitalize font-medium group-hover:text-primary">Company</button>
                        <div class="absolute top-12 left-0 z-10 w-[260px] p-4 rounded-3xl shadow-paper bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                            <NuxtLink to="#" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-blue bg-gradient-to-l from-[#FF62A6] to-[#ED0067]">
                                    <i class="icon-clipboard-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold capitalize whitespace-nowrap">
                                    About Us
                                </span>
                            </NuxtLink>
                            <NuxtLink to="#" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-orange bg-gradient-to-l from-[#B077FF] to-[#7918FF]">
                                    <i class="icon-document-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Contact Us
                                </span>
                            </NuxtLink>
                            <NuxtLink to="/testimonial" class="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span class="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#FFB973] to-[#DD5C00]">
                                    <i class="icon-video-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span class="text-base font-semibold whitespace-nowrap">
                                    Testimonial
                                </span>
                            </NuxtLink>
                        </div>
                     </div>
                    <!--========================
                       COMPANY PART START 
                    ==========================-->

                    <NuxtLink to="/#">Partner</NuxtLink>
                </nav>
                <NuxtLink to="#" class="primary-button h-12 hidden lg:flex items-center">Sign In</NuxtLink>
                <div class=" gap-7 ">
                    
                </div>
                <button @click="isOpen=!isOpen" class="lg:hidden block rounded-2xl">
                    <i class="icon-hamburger-menu gradient-text text-2xl"></i>
                </button>
            </div>
        </div>
        </div>
    </header>
    <!--==========================
           HEADER PART END 
    ==========================-->

    <slot/>

    <!--===============================
            CONNECT US PART START 
     =================================-->
     <section class="-mb-70 lg:-mb-50 relative z-10">
        <div class="container">
            <div class="w-full p-8 sm:p-12 md:p-16 relative z-10 rounded-3xl overflow-hidden shadow-connect bg-white">
                <span class="absolute top-16 -left-14 -z-10 w-64 h-48 rounded-full -rotate-6 blur-[100px] bg-[#FFE6E3]"></span>
                <span class="absolute -bottom-8 -right-11 -z-10 w-96 h-48 rounded-full -rotate-6 blur-[150px] bg-[#FFE6F1]"></span>
                <div class="grid grid-cols-12 gap-y-12">
                    <div class="col-span-12 md:col-span-5 lg:pr-3">
                        <h2 class="text-3xl lg:text-[42px] font-bold mb-6 leading-tight md:text-start text-center">
                            <span class="gradient-text">Connect with Us </span>for the Latest Updates
                        </h2>
                        <p class="text-sm font-normal md:text-start text-center">
                            We recommended you to subscribe to our newsletter for the latest updates & offers, drop your email to get daily update about FoodKing.
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-7">
                        <form class="md:ml-12 lg:ml-27" aria-label="Subscribe to newsletter">
                            <label for="name" class="sr-only">Name</label>
                            <input id="name" name="name" type="text" placeholder="Enter your name" class="px-6 w-full rounded-full shadow-input h-[52px] outline-none mb-4 bg-white" required/>
                            <label for="email" class="sr-only">Email</label>
                            <input id="email" name="email" type="email" placeholder="Enter your email" class="px-6 w-full rounded-full shadow-input h-[52px] outline-none mb-4 bg-white" required/>
                            <button type="submit" class="float-start md:float-end primary-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
            CONNECT US PART START 
     =================================-->

     <!--===============================
            FOOTER PART START 
     =================================-->
    <footer class="pt-[330px] lg:pt-75 bg-[url('/images/footer-bg.png')] bg-no-repeat bg-cover bg-top">
        <div class="container">
            <div class="grid grid-cols-12 gap-y-12 sm:gap-x-10 pb-12">
                <div class="col-span-12 lg:col-span-4">
                    <NuxtLink to="/" class="w-fit block mb-6">
                        <NuxtImg class="w-30 h-auto" src="/images/logo.png" alt="FoodKing Logo" loading="lazy" />
                    </NuxtLink>
                    <p class="text-lg font-normal mb-8">Foodimaa is a multi-restaurant food ordering and delivery solution built to connect restaurants and customers in a single platform. Purchase Foodimaa with source code and documentation.</p>
                    <div class="mb-8">
                        <h3 class="text-2xl font-semibold mb-4">Follow Our Socials</h3>
                        <div class="flex gap-4">
                            <NuxtLink to="/" aria-label="Facebook">
                              <NuxtImg class="w-8 h-8 rounded-full shadow-social-link" src="/images/social/Facebook.png" alt="Facebook" loading="lazy" />
                            </NuxtLink>
                            <NuxtLink to="/" aria-label="Twitter">
                              <NuxtImg class="w-8 h-8 rounded-full shadow-social-link" src="/images/social/twitter.png" alt="Twitter" loading="lazy" />
                            </NuxtLink>
                            <NuxtLink to="/" aria-label="LinkedIn">
                              <NuxtImg class="w-8 h-8 rounded-full shadow-social-link" src="/images/social/Linkedin.png" alt="LinkedIn" loading="lazy" />
                            </NuxtLink>
                            <NuxtLink to="/" aria-label="YouTube">
                              <NuxtImg class="w-8 h-8 rounded-full shadow-social-link" src="/images/social/YouTube.png" alt="YouTube" loading="lazy" />
                            </NuxtLink>
                        </div>
                    </div>
                    <button class="primary-button">Get Support</button>
                </div>
                <div class="col-span-12 lg:col-span-8">
                    <div class="grid grid-cols-12 gap-y-12 sm:gap-x-10">
                        <div class="col-span-12 sm:col-span-6 md:col-span-4">
                            <h3 class="text-2xl font-semibold mb-8">Company</h3>
                            <nav class="flex flex-col gap-6 [&_a]:hover:text-primary [&_a]:w-fit">
                                <NuxtLink class="text-lg font-normal" to="/about">About Us</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/contact">Contact Us</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/privacy">Privacy Policy</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/refund">Refund Policy</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/support">Support Policy</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/cookie">Cookie Policy</NuxtLink>
                            </nav>
                        </div>
                        <div class="col-span-12 sm:col-span-6 md:col-span-4">
                            <h3 class="text-2xl font-semibold mb-8">Quick Links</h3>
                            <nav class="flex flex-col gap-6 [&_a]:hover:text-primary [&_a]:w-fit">
                                <NuxtLink class="text-lg font-normal" to="/demo">Explore Demo</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/documentation">Documentations</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/testimonial">Testimonials</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/faq">FAQs</NuxtLink>
                                <NuxtLink class="text-lg font-normal" to="/blogs">Blogs</NuxtLink>
                            </nav>
                        </div>
                        <div class="col-span-12 md:col-span-4">
                            <h3 class="text-2xl font-semibold mb-8">Related Products</h3>
                            <nav class="flex flex-col gap-6 [&_a]:hover:text-primary [&_a]:w-fit">
                                <NuxtLink to="#">
                                    <div class="flex gap-4 text-lg font-medium"><NuxtImg class="w-7.5 h-7.5 rounded-full drop-shadow-foodbank" src="/images/product/foodbank.png" alt="foodbank"/><span>FoodBank</span></div>
                                </NuxtLink>
                                <NuxtLink to="#">
                                    <div class="flex gap-4 text-lg font-medium"><NuxtImg class="w-7.5 h-7.5 rounded-full drop-shadow-foodscan" src="/images/product/foodscan.png" alt="foodscan"/><span>FoodScan</span></div>
                                </NuxtLink>
                                <NuxtLink to="#">
                                    <div class="flex gap-4 text-lg font-medium"><NuxtImg class="w-7.5 h-7.5 rounded-full drop-shadow-foodappi" src="/images/product/foodappi.png" alt="foodbaappi"/><span>FoodAppi</span></div>
                                </NuxtLink>
                                <NuxtLink to="#">
                                    <div class="flex gap-4 text-lg font-medium"><NuxtImg class="w-7.5 h-7.5 rounded-full drop-shadow-shopking" src="/images/product/shopking.png" alt="shopking"/><span>ShopKing</span></div>
                                </NuxtLink>
                                <NuxtLink to="#">
                                    <div class="flex gap-4 text-lg font-medium"><NuxtImg class="w-7.5 h-7.5 rounded-full drop-shadow-shopperzz" src="/images/product/shopperzz.png" alt="shopperzz"/><span>Shopperzz</span></div>
                                </NuxtLink>
                                <NuxtLink to="#">
                                    <div class="flex gap-4 text-lg font-medium"><NuxtImg class="w-7.5 h-7.5 rounded-full drop-shadow-storeking" src="/images/product/storeking.png" alt="storeking"/><span>StoreKing</span></div>
                                </NuxtLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-6.5 border-t border-[#FFEAF2] relative">
            <NuxtLink to="#" class="!w-13 !px-0 rounded-full primary-button flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" aria-label="Back to Top">
                <i class="icon-chevron-up text-3xl text-white"></i>
            </NuxtLink>
        </div>
        <div class="container">
            <div class="flex items-center md:flex-row flex-col gap-y-6 md:justify-between py-8">
                <div class="flex md:flex-col lg:flex-row items-center gap-3">
                    <h4 class="text-base font-medium">A Product Of</h4>
                    <NuxtImg class="w-27 h-auto" src="/images/company-logo.png" alt="Company Logo" loading="lazy" />
                </div>
                <div class="flex md:flex-col lg:flex-row items-center gap-3">
                    <p class="text-base font-normal">©2025, FoodKing. All Rights Reserved.</p>
                </div>
                <div class="flex items-center gap-3">
                    <NuxtImg class="w-8 h-auto" src="/images/payment/Secure.png" alt="Secure Payment" loading="lazy" />
                    <span class="text-sm font-medium text-[#818B9B]">Secure Payment</span>
                    <hr class="h-5 w-0.5 bg-[#CCE7F9] border-none" />
                    <NuxtImg class="w-12 h-auto" src="/images/payment/stripe.png" alt="Stripe" loading="lazy" />
                </div>
            </div>
        </div>
    </footer>
     <!--===============================
            FOOTER PART END 
     =================================-->

</template>
<script setup>
    import {useSticky} from '~/composable/sticky.js';
    const isOpen = ref(false)
    const {isSticky} = useSticky()
    
    const handledropdown = ($event) => {
      const targetBtn = $event.currentTarget;
      const dropdownGroup = targetBtn.closest('.dropdown-group');
    
      document.querySelectorAll('.dropdown-group').forEach(group => {
        if (group !== dropdownGroup) {
          group.classList.remove('active');
        }
      });
    
      dropdownGroup.classList.toggle('active');
    };

</script>