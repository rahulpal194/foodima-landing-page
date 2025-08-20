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
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="/demo">Demo</NuxtLink></li>
                    <li class="text-base font-medium hover:text-primary"><NuxtLink to="/pricing">Pricing</NuxtLink></li>
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
    const {isSticky} = useSticky()

</script>