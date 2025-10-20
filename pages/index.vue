<template>
    <!--========================
          HERO PART START
    ==========================-->
    <section class="bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat bg-cover">
        <div class="container pt-26 lg:pb-40 pb-20 lg:pt-40">
            <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
                <div class="basis-1/2">
                    <h1 class="text-[32px] lg:text-[48px] font-bold mb-6 leading-tight text-center lg:text-left">Complete <span class="gradient-text">PWA Multi-Restaurant</span> Ordering & Delivery Solution</h1>
                    <p class="text-base lg:text-lg font-normal mb-8 text-center lg:text-left">Run your food business from a responsive website with PWA for app-like speed and experience—no app store needed. Fully customizable, ready-to-use, and packed with tools for orders, deliveries, payouts, POS, vendor management, and more.</p>
                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-6">
                        <button class="primary-button">Buy Now</button>
                        <button class="button">Explore Demo</button> 
                    </div>
                </div>
                <div class="w-full basis-1/2 relative">
                    <img class="w-full h-full" src="/images/banner.png" alt="">
                    <div class="absolute p-5 left-1/2 lg:left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="relative flex size-20 sm:size-[104px] items-center justify-center">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b3b6bf] opacity-75"></span>
                            <button @click="openModal" class="relative flex items-center justify-center size-20 sm:size-[78px] rounded-full bg-white cursor-pointer">
                                <span class="relative flex items-center justify-center size-14 rounded-full bg-[#1a1f3c]">
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
                <h1 class="heading mb-6">FoodKing Has<span class="gradient-text"> Everything to Manage </span>Your Multi-Restaurant Food Business
                </h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">From admin control to delivery tracking, restaurant management, and customer ordering — Foodimaa handles it all seamlessly in one easy-to-use platform.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <NuxtLink href="#" v-for="ecosystem in ecosystems" :id="`card-${ecosystem.id}`" class="card">
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

    <!--===============================
           KEY FEATURES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <span class="title mb-6">Key Features</span>
                <h1 class="heading mb-6">Powerful & Effective<span class="gradient-text"> Features to Automate & Optimize </span>Your Restaurant Effortlessly</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Packed with essential features to streamline your restaurant operations, boost efficiency, and enhance customer experience.</p>
            </div>
            <div class="max-w-[930px] w-full mx-auto relative p-4 mb-8 bg-white rounded-full">
                <nav class="flex justify-between overflow-x-auto scrollbar-hide">
                    <button 
                        type="button" 
                        v-for="featureTab in autoplaytab.featuretabs.value"
                        @click="autoplaytab.handleFeatureShow(featureTab.id, $event)"
                        :key="featureTab.id"
                        :ref="el=>tabRefs[featureTab.id] = el"
                        :class="featureTab.id === autoplaytab.featureActive.value ? 'active' : ''"
                        class="navbtn w-fit text-base lg:text-lg font-semibold leading-5 lg:leading-6 rounded-full px-4 py-3 flex items-center whitespace-nowrap flex-shrink-0 gap-2 transition-all duration-300">
                        <i :class="[autoplaytab.featureActive.value===featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                        <span>{{ featureTab.name }}</span>
                    </button>
                </nav>
                <div class="w-full h-12 absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFC7A0] from-0% via-[#9BBEFF] via-50% to-[#FFA797] to-100% blur-[30px]"></div>
                <span class="lg:w-[580px] lg:h-[75px] bg-[#FFA087] blur-[300px] rotate-[35deg] absolute -bottom-0 left-0"></span>
            </div> 
            <div v-if="autoplaytab.featureActive.value == 1" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[414px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/admin-panel/admin-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p class="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 2" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Branch Manager Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the branch manager can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Chef/Kitchen Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the chef can see business analytics, order statistics, sales summary, orders summary, most popular items and so on of his branch.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 px-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">POS Operator Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the POS operator can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-3.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Point of Sale (POS)</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/branch-staff/branch-staff-4.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 3" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Responsive User Website</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing’s user website works seamlessly on all devices, making it easy for customers to browse, order, and track—anytime, anywhere.</p>
                            </div>
                            <NuxtImg class="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Web Banners</h3>
                                <p class="text-base font-normal">Highlight offers, promotions, or important updates with top banners on user website—grab attention & drive engagement.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[185px] w-full" src="/images/features/user-site/user-site-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Cookie Banner</h3>
                                <p class="text-base font-normal">FoodKing includes a built-in cookie banner to help you stay transparent and compliant—inform users and gain consent with ease.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] h-[168px] w-full" src="/images/features/user-site/user-site-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Featured & Most Popular Items</h3>
                                <p class="text-base font-normal">Showcase popular & featured items to boost visibility and drive more orders—automatically or manually highlight what’s hot on your menu.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 4" class="mb-12 md:mb-16">
                 <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Scan QR for Menu</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can quickly access the full menu by scanning a QR code from table—making ordering easy, contactless, and convenient.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Cart & Checkout</h3>
                                <p class="text-base font-normal">Allowing customers to review their selected items, adjust quantities, choose payment option, and complete their order quickly and securely.</p>
                            </div>
                            <NuxtImg class="h-[271px] w-full" src="/images/features/qr-code/qr-code-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item Details</h3>
                                <p class="text-base font-normal">A quick view modal of each items that showing item details with sizes, extras, addons, and quantity.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/qr-code/qr-code-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-4.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal">Customers can track their order—from confirmation to prepared and delivery—ensuring transparency & peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-5.png" alt="order_tracking"/>
                        </div>
                    </div>
                </div>
            </div>
            <button class="primary-button block mx-auto">Explore All Features</button>
        </div>
    </section>
     <!--===============================
           KEY FEATURES PART END 
     =================================-->

    <!--===============================
            Four STEPS PART START 
    =================================-->
    <section class="bg-[url('/images/four-steps-bg.png')] bg-contain md:bg-cover bg-no-repeat bg-top pb-20 sm:pb-40">
        <div class="container pt-20">
            <div class="max-w-[742px] w-full mx-auto mb-12 sm:mb-16">
                <h1 class="heading mb-6">Get Started with Foodimaa in Just <span class="gradient-text">Six Simple Steps</span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Setting up Foodimaa is quick and hassle-free. Just follow these 6 steps and start your multi restaurant food ordering business like a pro.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 lg:gap-0 gap-6 md:gap-8">
                  <div class="flex flex-col gap-6 md:gap-8 lg:col-span-2">
                      <div v-for="step in steps.slice(0,2)" class="rounded-3xl bg-white shadow-stepcard p-6">
                          <div class="flex justify-between items-center mb-6">
                              <div class="w-12 h-12 rounded-full bg-white drop-shadow-stepvector flex justify-center items-center">
                                  <i :class="step.icon" class="text-2xl text-primary"></i>
                              </div>
                              <span class="text-[42px] font-bold text-[#DEEAF2] leading-snug">0{{ step.id }}</span>
                          </div>
                          <h6 class="text-2xl font-bold mb-4 line-clamp-2">{{ step.title }}</h6>
                          <p class="text-lg font-normal line-clamp-2">{{ step.desc }}</p>
                      </div>
                  </div>
                  <div class="lg:flex hidden flex-col gap-8 col-span-3">
                      <div class="h-full relative">
                          <svg class="absolute left-0 top-20" xmlns="http://www.w3.org/2000/svg" width="150" height="202" viewBox="0 0 150 202" fill="none">
                            <path d="M150 200H107C89.3269 200 75 185.673 75 168V34C75 16.3269 60.6731 2 43 2H0" stroke="#FFEBE9" stroke-width="3"/>
                          </svg>
                          <svg class="absolute left-0 bottom-20" xmlns="http://www.w3.org/2000/svg" width="150" height="202" viewBox="0 0 150 202" fill="none">
                            <path d="M150 2H107C89.3269 2 75 16.3269 75 34V168C75 185.673 60.6731 200 43 200H0" stroke="#FFEBE9" stroke-width="3"/>
                          </svg>
                          <svg class="absolute right-0 top-20" xmlns="http://www.w3.org/2000/svg" width="150" height="202" viewBox="0 0 150 202" fill="none">
                            <path d="M0 200H43C60.6731 200 75 185.673 75 168V34C75 16.3269 89.3269 2 107 2H150" stroke="#FFEBE9" stroke-width="3"/>
                          </svg>
                          <svg class="absolute right-0 bottom-20" xmlns="http://www.w3.org/2000/svg" width="150" height="202" viewBox="0 0 150 202" fill="none">
                             <path d="M0 2H43C60.6731 2 75 16.3269 75 34V168C75 185.673 89.3269 200 107 200H150" stroke="#FFEBE9" stroke-width="3"/>
                          </svg>
                          <div class="w-[168px] h-[168px] absolute top-4/12 left-1/2 transform -translate-x-1/2">
                              <NuxtImg class="h-full w-full object-cover rounded-4xl" src="/images/icon.png" alt="product_icon" />
                          </div>
                      </div>
                  </div>
                  <div class="flex flex-col gap-6 md:gap-8 lg:col-span-2">
                      <div v-for="step in steps.slice(2,)" class="rounded-3xl bg-white shadow-stepcard p-6">
                          <div class="flex justify-between items-center mb-6">
                              <div class="w-12 h-12 rounded-full bg-white drop-shadow-stepvector flex justify-center items-center">
                                  <i :class="step.icon" class="text-2xl text-primary"></i>
                              </div>
                              <span class="text-[42px] font-bold text-[#DEEAF2] leading-snug">0{{ step.id }}</span>
                          </div>
                          <h6 class="text-2xl font-bold mb-4 line-clamp-2">{{ step.title }}</h6>
                          <p class="text-lg font-normal line-clamp-2">{{ step.desc }}</p>
                      </div>
                  </div>
            </div>
        </div>
    </section>
    <!--===============================`
            FOUR STEPS PART END 
    =================================-->

    <!--===============================
        PAYMENT GATEWAY PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 class="heading mb-6">Enhance Business Efficiency with Reliable<span class="text-primary"> Payment </span> &<span class="text-primary"> SMS Gateways </span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Secure, fast, and reliable integrations to keep your operations running smoothly.</p>
            </div>
            <div class="grid md:grid-cols-12 gap-6">
                <div class="md:col-span-6 lg:col-span-8">
                    <div class="bg-[#F6F9FC] rounded-2xl pt-6 lg:pt-8 overflow-hidden">
                        <div class="px-6 lg:px-8 mb-6">
                            <h3 class="text-2xl lg:text-3xl font-bold mb-4">20+ Payment Gateways</h3>
                            <p class="text-sm lg:text-base font-normal mb-4">We’ve integrated a range of convenient payment options to ensure a seamless buying experience for your customers.</p>
                            <ul class="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12">
                                <li class="flex gap-2 items-center">
                                    <i class="icon-check-circle text-xl gradient-text"></i>
                                    <span class="text-base font-medium leading-5">Cash On Delivery</span>
                                </li>
                                <li class="flex gap-2 items-center">
                                    <i class="icon-check-circle text-xl gradient-text"></i>
                                    <span class="text-base font-medium leading-5">Digital Payment</span>
                                </li>
                                <li class="flex gap-2 items-center">
                                    <i class="icon-check-circle text-xl gradient-text"></i>
                                    <span class="text-base font-medium leading-5">Credit Wallet</span>
                                </li>
                            </ul>
                        </div>
                        <NuxtImg class="w-full h-full" src="/images/vector/payment.png" alt="payment_logos"/>
                    </div>
                </div>
                <div class="md:col-span-6 lg:col-span-4">
                    <div class="bg-[#F6F9FC] rounded-2xl pt-6">
                        <div class="px-6">
                            <h3 class="text-2xl lg:text-3xl font-bold mb-4">8+ SMS Gateways</h3>
                            <p class="text-sm lg:text-base font-normal mb-4">Keep your customers informed in real time with fast, reliable SMS gateway integration. Instantly send essential updates, boost engagement, and enhance the customer experience.</p>
                        </div>
                        <NuxtImg class="w-full h-full" src="/images/vector/sms.png" alt="sms_gatways"/>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
        PAYMENT GATEWAY PART END 
     =================================-->

     <!--===============================
         PREMIUM SERVICES PART START 
     =================================-->
     <section class="container">
        <div class="my-20 sm:my-40 relative">
            <span class="blur-rect"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 class="heading mb-6">Kickstart Your Business with<span class="gradient-text"> Premium Services </span>Tailored to You</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Professional-grade services to ensure your system runs smoothly from day one.</p>
            </div>
            <div class="rounded-2xl p-6 md:p-8 mb-6 shadow-pricing-title group hover:shadow-card">
                <div class="grid grid-cols-12 gap-6 md:gap-4 ">
                    <div class="col-span-12 md:col-span-7 order-last md:order-first">
                    <h2 class="text-2xl md:text-[32px] leading-tight font-bold mb-4">Skip the Tech Headache, We’ve Got <span class="text-primary"> Installation </span>Covered</h2>
                    <p class="text-base font-normal mb-6">Our team will install FoodKing on your server quickly and correctly—so you can start running your business without delay.</p>
                    <ul class="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12 mb-8">
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Reliable Service</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Enhanced Security</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Ongoing Support</span>
                        </li>
                    </ul>
                    <button class="button hover-button">Installation Packages</button>
                    </div>
                    <div class="col-span-12 md:col-span-5 order-first md:order-last">
                        <NuxtImg class="w-full h-full" src="/images/vector/installation.png" alt="installation" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 md:col-span-6">
                    <div class="bg-white rounded-2xl p-6 shadow-pricing-title group hover:shadow-card">
                        <NuxtImg class="w-full h-full mb-6" src="/images/vector/customization.png" alt="installation" />
                        <h2 class="text-2xl md:text-[28px] leading-tight font-bold mb-4">Flexible<span class="text-primary"> Customization </span>to Fit Your Business Goal</h2>
                        <p class="text-base font-normal mb-6">Whether it’s branding, layout, or functionality, we customize it to work the way you need.</p>
                        <button class="button hover-button">Request Customization</button>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="bg-white rounded-2xl p-6 shadow-pricing-title group hover:shadow-card">
                        <NuxtImg class="w-full h-full mb-6" src="/images/vector/maintanence.png" alt="maintanance" />
                        <h2 class="text-2xl md:text-[28px] leading-tight font-bold mb-4">Reliable<span class="text-primary"> Maintenance Service </span>for Committed  Owners</h2>
                        <p class="text-base font-normal mb-6">We’ll handle performance checks, updates, and issues—so you can focus on growing your business.</p>
                        <button class="button hover-button">Get iCare Maintenance</button>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
         PREMIUM SERVICES PART END 
     =================================-->

    <!--===============================
        TECHNOLOGY SERVICES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="p-8 md:p-12 md:pb-0 rounded-2xl bg-custom-gradient relative -z-10">
                <svg class="absolute right-0 top-0 z-0" xmlns="http://www.w3.org/2000/svg" width="455" height="455" viewBox="0 0 455 455" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M467 458V-7.54517H465.545V-9H0V458H467ZM437.903 -7.54517H465.545V20.0966H437.903V-7.54517ZM379.71 456.545H407.352V428.903H379.71V456.545ZM379.71 427.449H407.352V399.807H379.71V427.449ZM378.255 399.807V427.449H350.614V399.807H378.255ZM379.71 398.352H407.352V370.71H379.71V398.352ZM378.255 370.71V398.352H350.614V370.71H378.255ZM379.71 369.255H407.352V341.614H379.71V369.255ZM378.255 341.614V369.255H350.614V341.614H378.255ZM379.71 340.159H407.352V312.517H379.71V340.159ZM378.255 312.517V340.159H350.614V312.517H378.255ZM379.71 311.062H407.352V283.421H379.71V311.062ZM378.255 283.421V311.062H350.614V283.421H378.255ZM379.71 281.966H407.352V254.324H379.71V281.966ZM378.255 254.324V281.966H350.614V254.324H378.255ZM379.71 252.869H407.352V225.227H379.71V252.869ZM378.255 225.227V252.869H350.614V225.227H378.255ZM379.71 223.773H407.352V196.131H379.71V223.773ZM378.255 196.131V223.773H350.614V196.131H378.255ZM379.71 194.676H407.352V167.034H379.71V194.676ZM378.255 167.034V194.676H350.614V167.034H378.255ZM379.71 165.579H407.352V137.938H379.71V165.579ZM378.255 137.938V165.579H350.614V137.938H378.255ZM379.71 136.483H407.352V108.841H379.71V136.483ZM378.255 108.841V136.483H350.614V108.841H378.255ZM379.71 107.386H407.352V79.7445H379.71V107.386ZM378.255 79.7445V107.386H350.614V79.7445H378.255ZM379.71 78.2897H407.352V50.648H379.71V78.2897ZM378.255 50.648V78.2897H350.614V50.648H378.255ZM379.71 49.1931H407.352V21.5514H379.71V49.1931ZM378.255 21.5514V49.1931H350.614V21.5514H378.255ZM379.71 20.0966H407.352V-7.54517H379.71V20.0966ZM378.255 -7.54517H350.614V20.0966H378.255V-7.54517ZM378.255 428.903V456.545H350.614V428.903H378.255ZM349.159 456.545H321.517V428.903H349.159V456.545ZM349.159 427.449H321.517V399.807H349.159V427.449ZM320.062 427.449V399.807H292.421V427.449H320.062ZM349.159 398.352H321.517V370.71H349.159V398.352ZM320.062 398.352V370.71H292.421V398.352H320.062ZM349.159 369.255H321.517V341.614H349.159V369.255ZM320.062 369.255V341.614H292.421V369.255H320.062ZM349.159 340.159H321.517V312.517H349.159V340.159ZM320.062 340.159V312.517H292.421V340.159H320.062ZM349.159 311.062H321.517V283.421H349.159V311.062ZM320.062 311.062V283.421H292.421V311.062H320.062ZM349.159 281.966H321.517V254.324H349.159V281.966ZM320.062 281.966V254.324H292.421V281.966H320.062ZM349.159 252.869H321.517V225.227H349.159V252.869ZM320.062 252.869V225.227H292.421V252.869H320.062ZM349.159 223.773H321.517V196.131H349.159V223.773ZM320.062 223.773V196.131H292.421V223.773H320.062ZM349.159 194.676H321.517V167.034H349.159V194.676ZM320.062 194.676V167.034H292.421V194.676H320.062ZM349.159 165.579H321.517V137.938H349.159V165.579ZM320.062 165.579V137.938H292.421V165.579H320.062ZM349.159 136.483H321.517V108.841H349.159V136.483ZM320.062 136.483V108.841H292.421V136.483H320.062ZM349.159 107.386H321.517V79.7445H349.159V107.386ZM320.062 107.386V79.7445H292.421V107.386H320.062ZM349.159 78.2897H321.517V50.648H349.159V78.2897ZM320.062 78.2897V50.648H292.421V78.2897H320.062ZM349.159 49.1931H321.517V21.5514H349.159V49.1931ZM320.062 49.1931V21.5514H292.421V49.1931H320.062ZM349.159 20.0966H321.517V-7.54517H349.159V20.0966ZM292.421 -7.54517H320.062V20.0966H292.421V-7.54517ZM320.062 456.545V428.903H292.421V456.545H320.062ZM263.324 456.545H290.966V428.903H263.324V456.545ZM263.324 427.449H290.966V399.807H263.324V427.449ZM261.869 399.807V427.449H234.227V399.807H261.869ZM263.324 398.352H290.966V370.71H263.324V398.352ZM261.869 370.71V398.352H234.227V370.71H261.869ZM263.324 369.255H290.966V341.614H263.324V369.255ZM261.869 341.614V369.255H234.227V341.614H261.869ZM263.324 340.159H290.966V312.517H263.324V340.159ZM261.869 312.517V340.159H234.227V312.517H261.869ZM263.324 311.062H290.966V283.421H263.324V311.062ZM261.869 283.421V311.062H234.227V283.421H261.869ZM263.324 281.966H290.966V254.324H263.324V281.966ZM261.869 254.324V281.966H234.227V254.324H261.869ZM263.324 252.869H290.966V225.227H263.324V252.869ZM261.869 225.227V252.869H234.227V225.227H261.869ZM263.324 223.773H290.966V196.131H263.324V223.773ZM261.869 196.131V223.773H234.227V196.131H261.869ZM263.324 194.676H290.966V167.034H263.324V194.676ZM261.869 167.034V194.676H234.227V167.034H261.869ZM263.324 165.579H290.966V137.938H263.324V165.579ZM261.869 137.938V165.579H234.227V137.938H261.869ZM263.324 136.483H290.966V108.841H263.324V136.483ZM261.869 108.841V136.483H234.227V108.841H261.869ZM263.324 107.386H290.966V79.7445H263.324V107.386ZM261.869 79.7445V107.386H234.227V79.7445H261.869ZM263.324 78.2897H290.966V50.648H263.324V78.2897ZM261.869 50.648V78.2897H234.227V50.648H261.869ZM263.324 49.1931H290.966V21.5514H263.324V49.1931ZM261.869 21.5514V49.1931H234.227V21.5514H261.869ZM263.324 20.0966H290.966V-7.54517H263.324V20.0966ZM261.869 -7.54517H234.227V20.0966H261.869V-7.54517ZM261.869 428.903V456.545H234.227V428.903H261.869ZM232.773 456.545H205.131V428.903H232.773V456.545ZM232.773 427.449H205.131V399.807H232.773V427.449ZM203.676 427.449V399.807H176.034V427.449H203.676ZM232.773 398.352H205.131V370.71H232.773V398.352ZM203.676 398.352V370.71H176.034V398.352H203.676ZM232.773 369.255H205.131V341.614H232.773V369.255ZM203.676 369.255V341.614H176.034V369.255H203.676ZM232.773 340.159H205.131V312.517H232.773V340.159ZM203.676 340.159V312.517H176.034V340.159H203.676ZM232.773 311.062H205.131V283.421H232.773V311.062ZM203.676 311.062V283.421H176.034V311.062H203.676ZM232.773 281.966H205.131V254.324H232.773V281.966ZM203.676 281.966V254.324H176.034V281.966H203.676ZM232.773 252.869H205.131V225.227H232.773V252.869ZM203.676 252.869V225.227H176.034V252.869H203.676ZM232.773 223.773H205.131V196.131H232.773V223.773ZM203.676 223.773V196.131H176.034V223.773H203.676ZM232.773 194.676H205.131V167.034H232.773V194.676ZM203.676 194.676V167.034H176.034V194.676H203.676ZM232.773 165.579H205.131V137.938H232.773V165.579ZM203.676 165.579V137.938H176.034V165.579H203.676ZM232.773 136.483H205.131V108.841H232.773V136.483ZM203.676 136.483V108.841H176.034V136.483H203.676ZM232.773 107.386H205.131V79.7445H232.773V107.386ZM203.676 107.386V79.7445H176.034V107.386H203.676ZM232.773 78.2897H205.131V50.648H232.773V78.2897ZM203.676 78.2897V50.648H176.034V78.2897H203.676ZM232.773 49.1931H205.131V21.5514H232.773V49.1931ZM203.676 49.1931V21.5514H176.034V49.1931H203.676ZM232.773 20.0966H205.131V-7.54517H232.773V20.0966ZM176.034 -7.54517H203.676V20.0966H176.034V-7.54517ZM203.676 456.545V428.903H176.034V456.545H203.676ZM146.938 456.545H174.579V428.903H146.938V456.545ZM146.938 427.449H174.579V399.807H146.938V427.449ZM145.483 399.807V427.449H117.841V399.807H145.483ZM146.938 398.352H174.579V370.71H146.938V398.352ZM145.483 370.71V398.352H117.841V370.71H145.483ZM146.938 369.255H174.579V341.614H146.938V369.255ZM145.483 341.614V369.255H117.841V341.614H145.483ZM146.938 340.159H174.579V312.517H146.938V340.159ZM145.483 312.517V340.159H117.841V312.517H145.483ZM146.938 311.062H174.579V283.421H146.938V311.062ZM145.483 283.421V311.062H117.841V283.421H145.483ZM146.938 281.966H174.579V254.324H146.938V281.966ZM145.483 254.324V281.966H117.841V254.324H145.483ZM146.938 252.869H174.579V225.227H146.938V252.869ZM145.483 225.227V252.869H117.841V225.227H145.483ZM146.938 223.773H174.579V196.131H146.938V223.773ZM145.483 196.131V223.773H117.841V196.131H145.483ZM146.938 194.676H174.579V167.034H146.938V194.676ZM145.483 167.034V194.676H117.841V167.034H145.483ZM146.938 165.579H174.579V137.938H146.938V165.579ZM145.483 137.938V165.579H117.841V137.938H145.483ZM146.938 136.483H174.579V108.841H146.938V136.483ZM145.483 108.841V136.483H117.841V108.841H145.483ZM146.938 107.386H174.579V79.7445H146.938V107.386ZM145.483 79.7445V107.386H117.841V79.7445H145.483ZM146.938 78.2897H174.579V50.648H146.938V78.2897ZM145.483 50.648V78.2897H117.841V50.648H145.483ZM146.938 49.1931H174.579V21.5514H146.938V49.1931ZM145.483 21.5514V49.1931H117.841V21.5514H145.483ZM146.938 20.0966H174.579V-7.54517H146.938V20.0966ZM145.483 -7.54517H117.841V20.0966H145.483V-7.54517ZM145.483 428.903V456.545H117.841V428.903H145.483ZM116.386 456.545H88.7445V428.903H116.386V456.545ZM116.386 427.449H88.7445V399.807H116.386V427.449ZM87.2897 427.449V399.807H59.648V427.449H87.2897ZM116.386 398.352H88.7445V370.71H116.386V398.352ZM87.2897 398.352V370.71H59.648V398.352H87.2897ZM116.386 369.255H88.7445V341.614H116.386V369.255ZM87.2897 369.255V341.614H59.648V369.255H87.2897ZM116.386 340.159H88.7445V312.517H116.386V340.159ZM87.2897 340.159V312.517H59.648V340.159H87.2897ZM116.386 311.062H88.7445V283.421H116.386V311.062ZM87.2897 311.062V283.421H59.648V311.062H87.2897ZM116.386 281.966H88.7445V254.324H116.386V281.966ZM87.2897 281.966V254.324H59.648V281.966H87.2897ZM116.386 252.869H88.7445V225.227H116.386V252.869ZM87.2897 252.869V225.227H59.648V252.869H87.2897ZM116.386 223.773H88.7445V196.131H116.386V223.773ZM87.2897 223.773V196.131H59.648V223.773H87.2897ZM116.386 194.676H88.7445V167.034H116.386V194.676ZM87.2897 194.676V167.034H59.648V194.676H87.2897ZM116.386 165.579H88.7445V137.938H116.386V165.579ZM87.2897 165.579V137.938H59.648V165.579H87.2897ZM116.386 136.483H88.7445V108.841H116.386V136.483ZM87.2897 136.483V108.841H59.648V136.483H87.2897ZM116.386 107.386H88.7445V79.7445H116.386V107.386ZM87.2897 107.386V79.7445H59.648V107.386H87.2897ZM116.386 78.2897H88.7445V50.648H116.386V78.2897ZM87.2897 78.2897V50.648H59.648V78.2897H87.2897ZM116.386 49.1931H88.7445V21.5514H116.386V49.1931ZM87.2897 49.1931V21.5514H59.648V49.1931H87.2897ZM116.386 20.0966H88.7445V-7.54517H116.386V20.0966ZM59.648 -7.54517H87.2897V20.0966H59.648V-7.54517ZM87.2897 456.545V428.903H59.648V456.545H87.2897ZM30.5514 456.545H58.1931V428.903H30.5514V456.545ZM30.5514 427.449H58.1931V399.807H30.5514V427.449ZM29.0966 399.807V427.449H1.45483V399.807H29.0966ZM30.5514 398.352H58.1931V370.71H30.5514V398.352ZM29.0966 370.71V398.352H1.45483V370.71H29.0966ZM30.5514 369.255H58.1931V341.614H30.5514V369.255ZM29.0966 341.614V369.255H1.45483V341.614H29.0966ZM30.5514 340.159H58.1931V312.517H30.5514V340.159ZM29.0966 312.517V340.159H1.45483V312.517H29.0966ZM30.5514 311.062H58.1931V283.421H30.5514V311.062ZM29.0966 283.421V311.062H1.45483V283.421H29.0966ZM30.5514 281.966H58.1931V254.324H30.5514V281.966ZM29.0966 254.324V281.966H1.45483V254.324H29.0966ZM30.5514 252.869H58.1931V225.227H30.5514V252.869ZM29.0966 225.227V252.869H1.45483V225.227H29.0966ZM30.5514 223.773H58.1931V196.131H30.5514V223.773ZM29.0966 196.131V223.773H1.45483V196.131H29.0966ZM30.5514 194.676H58.1931V167.034H30.5514V194.676ZM29.0966 167.034V194.676H1.45483V167.034H29.0966ZM30.5514 165.579H58.1931V137.938H30.5514V165.579ZM29.0966 137.938V165.579H1.45483V137.938H29.0966ZM30.5514 136.483H58.1931V108.841H30.5514V136.483ZM29.0966 108.841V136.483H1.45483V108.841H29.0966ZM30.5514 107.386H58.1931V79.7445H30.5514V107.386ZM29.0966 79.7445V107.386H1.45483V79.7445H29.0966ZM30.5514 78.2897H58.1931V50.648H30.5514V78.2897ZM29.0966 50.648V78.2897H1.45483V50.648H29.0966ZM30.5514 49.1931H58.1931V21.5514H30.5514V49.1931ZM29.0966 21.5514V49.1931H1.45483V21.5514H29.0966ZM30.5514 20.0966H58.1931V-7.54517H30.5514V20.0966ZM29.0966 -7.54517H1.45483V20.0966H29.0966V-7.54517ZM29.0966 428.903V456.545H1.45483V428.903H29.0966ZM436.449 456.545H408.807V428.903H436.449V456.545ZM436.449 427.449H408.807V399.807H436.449V427.449ZM436.449 398.352H408.807V370.71H436.449V398.352ZM436.449 369.255H408.807V341.614H436.449V369.255ZM436.449 340.159H408.807V312.517H436.449V340.159ZM436.449 311.062H408.807V283.421H436.449V311.062ZM436.449 281.966H408.807V254.324H436.449V281.966ZM436.449 252.869H408.807V225.227H436.449V252.869ZM436.449 223.773H408.807V196.131H436.449V223.773ZM436.449 194.676H408.807V167.034H436.449V194.676ZM436.449 165.579H408.807V137.938H436.449V165.579ZM436.449 136.483H408.807V108.841H436.449V136.483ZM436.449 107.386H408.807V79.7445H436.449V107.386ZM436.449 78.2897H408.807V50.648H436.449V78.2897ZM436.449 49.1931H408.807V21.5514H436.449V49.1931ZM436.449 20.0966H408.807V-7.54517H436.449V20.0966ZM437.903 78.2897V50.648H465.545V78.2897H437.903ZM437.903 107.386V79.7445H465.545V107.386H437.903ZM437.903 136.483V108.841H465.545V136.483H437.903ZM437.903 165.579V137.938H465.545V165.579H437.903ZM437.903 194.676V167.034H465.545V194.676H437.903ZM437.903 223.773V196.131H465.545V223.773H437.903ZM437.903 252.869V225.227H465.545V252.869H437.903ZM437.903 281.966V254.324H465.545V281.966H437.903ZM437.903 311.062V283.421H465.545V311.062H437.903ZM437.903 340.159V312.517H465.545V340.159H437.903ZM437.903 369.255V341.614H465.545V369.255H437.903ZM437.903 398.352V370.71H465.545V398.352H437.903ZM437.903 427.449V399.807H465.545V427.449H437.903ZM437.903 456.545V428.903H465.545V456.545H437.903ZM437.903 49.1931V21.5514H465.545V49.1931H437.903Z" fill="url(#paint0_radial_5891_8336)"/>
                    <defs>
                    <radialGradient id="paint0_radial_5891_8336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(446.5 3.00004) rotate(135.778) scale(520.479)">
                    <stop stop-color="white" stop-opacity="0.82"/>
                    <stop offset="0.866139" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                    </defs>
                </svg>
                <div class="grid grid-cols-12 md:gap-14 relative z-10">
                    <div class="col-span-12 md:col-span-5 flex flex-col justify-center">
                        <h2 class="text-3xl md:text-[42px] leading-tight font-bold mb-6">FoodKing Built with<span class="gradient-text"> Powerful </span>&<span class="gradient-text">  Modern </span>Technology</h2>
                        <p class="text-base font-normal mb-6">FoodKing is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
                    </div>
                    <div class="col-span-12 md:col-span-7">
                        <NuxtImg class="w-full h-full" src="/images/vector/used_technology.png" alt="technologies"/>
                    </div>
                </div>
            </div>
        </div>    
     </section>
     <!--===============================
        TECHNOLOGY SERVICES PART END 
     =================================-->

     <!--===============================
        RESOURCES GUIDE PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40 relative">
            <span class="blur-rect"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 class="heading mb-6">Helpful<span class="gradient-text"> Resources to Guide </span>Your Journey</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">From first setup to expert tips, our resources are here to help every step of the way.</p>
            </div>
            <div class="grid grid-cols-12 lg:grid-cols-9 gap-6 mb-6">
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="card group flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-1">
                             <i class="icon-music-play text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Contact Support</h6>
                            <p class="text-base font-normal">Reach out to our friendly support team for quick and reliable help.</p>
                        </div>
                        <button class="button hover-button !h-12">Open Support Ticket</button>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-5">
                    <div class="group card flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-2">
                            <i class="icon-clipboard-text text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Documentation</h6>
                            <p class="text-base font-normal">Dive into our complete documentation to discover how to install, configure, and run FoodKing with ease—no guesswork, just clear instructions.</p>
                        </div>
                        <button class="button hover-button !h-12">Read Documentation</button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 lg:grid-cols-9 gap-6">
                <div class="col-span-12 md:col-span-6 lg:col-span-5">
                    <div class="group card flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-4">
                            <i class="icon-message-question text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Frequently Asked Questions (FAQs)</h6>
                            <p class="text-base font-normal">Got questions? We’ve compiled answers to the most frequently asked queries to help you get started.</p>
                        </div>
                        <button class="button hover-button !h-12">View FAQs</button>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="group card flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-5">
                            <i class="icon-video-play text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Video Tutorial</h6>
                            <p class="text-base font-normal">Watch step-by-step video guides to learn how to set up, and run FoodKing like a pro.</p>
                        </div>
                        <button class="button hover-button !h-12">Watch Videos</button>
                    </div>
                </div>
            </div>
        </div>   
     </section>
     <!--===============================
        RESOURCES GUIDE PART END 
     =================================-->

    <!--===============================
              BLOG PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40 relative">
            <span class="blur-rect"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
                <h1 class="heading mb-6">Latest From the<span class="gradient-text"> Blog</span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Stay updated with the latest tips, features, and FoodKing news.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-9.5">
                <div v-for="blog in blogs.slice(0,3)" class="bg-white shadow-blog rounded-2xl flex flex-col hover:shadow-card">
                    <NuxtImg :src="blog.coverimage" class="w-full h-47 rounded-t-2xl" alt="blogcover"/>
                    <h6 class="mb-6 flex-grow line-clamp-2 px-6 pt-6 text-lg font-bold leading-7">{{ blog.title }}</h6>
                    <div class="flex justify-between gap-x-6 gap-y-3 px-6 pb-6 flex-wrap lg:flex-nowrap">
                        <span class="text-lg font-medium leading-tight">{{ blog.date }}</span>
                        <NuxtLink :to="`/blog/${blog.id}`" @click="blogDetails.setBlog(blog)" class="text-primary font-medium text-lg leading-tight">Read more</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 flex justify-center">
                <NuxtLink to="/blog" class="primary-button inline-flex items-center">View All Blogs & Articles</NuxtLink>
            </div>
        </div>   
     </section>
     <!--===============================
            BLOG PART END 
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <section class="container">
        <div class="mb-16 sm:mb-20 md:mb-40">
            <div class="p-8 md:p-12 rounded-2xl bg-custom-gradient relative">
                <svg class="absolute right-0 top-0 z-0" xmlns="http://www.w3.org/2000/svg" width="455" height="455" viewBox="0 0 455 455" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M467 458V-7.54517H465.545V-9H0V458H467ZM437.903 -7.54517H465.545V20.0966H437.903V-7.54517ZM379.71 456.545H407.352V428.903H379.71V456.545ZM379.71 427.449H407.352V399.807H379.71V427.449ZM378.255 399.807V427.449H350.614V399.807H378.255ZM379.71 398.352H407.352V370.71H379.71V398.352ZM378.255 370.71V398.352H350.614V370.71H378.255ZM379.71 369.255H407.352V341.614H379.71V369.255ZM378.255 341.614V369.255H350.614V341.614H378.255ZM379.71 340.159H407.352V312.517H379.71V340.159ZM378.255 312.517V340.159H350.614V312.517H378.255ZM379.71 311.062H407.352V283.421H379.71V311.062ZM378.255 283.421V311.062H350.614V283.421H378.255ZM379.71 281.966H407.352V254.324H379.71V281.966ZM378.255 254.324V281.966H350.614V254.324H378.255ZM379.71 252.869H407.352V225.227H379.71V252.869ZM378.255 225.227V252.869H350.614V225.227H378.255ZM379.71 223.773H407.352V196.131H379.71V223.773ZM378.255 196.131V223.773H350.614V196.131H378.255ZM379.71 194.676H407.352V167.034H379.71V194.676ZM378.255 167.034V194.676H350.614V167.034H378.255ZM379.71 165.579H407.352V137.938H379.71V165.579ZM378.255 137.938V165.579H350.614V137.938H378.255ZM379.71 136.483H407.352V108.841H379.71V136.483ZM378.255 108.841V136.483H350.614V108.841H378.255ZM379.71 107.386H407.352V79.7445H379.71V107.386ZM378.255 79.7445V107.386H350.614V79.7445H378.255ZM379.71 78.2897H407.352V50.648H379.71V78.2897ZM378.255 50.648V78.2897H350.614V50.648H378.255ZM379.71 49.1931H407.352V21.5514H379.71V49.1931ZM378.255 21.5514V49.1931H350.614V21.5514H378.255ZM379.71 20.0966H407.352V-7.54517H379.71V20.0966ZM378.255 -7.54517H350.614V20.0966H378.255V-7.54517ZM378.255 428.903V456.545H350.614V428.903H378.255ZM349.159 456.545H321.517V428.903H349.159V456.545ZM349.159 427.449H321.517V399.807H349.159V427.449ZM320.062 427.449V399.807H292.421V427.449H320.062ZM349.159 398.352H321.517V370.71H349.159V398.352ZM320.062 398.352V370.71H292.421V398.352H320.062ZM349.159 369.255H321.517V341.614H349.159V369.255ZM320.062 369.255V341.614H292.421V369.255H320.062ZM349.159 340.159H321.517V312.517H349.159V340.159ZM320.062 340.159V312.517H292.421V340.159H320.062ZM349.159 311.062H321.517V283.421H349.159V311.062ZM320.062 311.062V283.421H292.421V311.062H320.062ZM349.159 281.966H321.517V254.324H349.159V281.966ZM320.062 281.966V254.324H292.421V281.966H320.062ZM349.159 252.869H321.517V225.227H349.159V252.869ZM320.062 252.869V225.227H292.421V252.869H320.062ZM349.159 223.773H321.517V196.131H349.159V223.773ZM320.062 223.773V196.131H292.421V223.773H320.062ZM349.159 194.676H321.517V167.034H349.159V194.676ZM320.062 194.676V167.034H292.421V194.676H320.062ZM349.159 165.579H321.517V137.938H349.159V165.579ZM320.062 165.579V137.938H292.421V165.579H320.062ZM349.159 136.483H321.517V108.841H349.159V136.483ZM320.062 136.483V108.841H292.421V136.483H320.062ZM349.159 107.386H321.517V79.7445H349.159V107.386ZM320.062 107.386V79.7445H292.421V107.386H320.062ZM349.159 78.2897H321.517V50.648H349.159V78.2897ZM320.062 78.2897V50.648H292.421V78.2897H320.062ZM349.159 49.1931H321.517V21.5514H349.159V49.1931ZM320.062 49.1931V21.5514H292.421V49.1931H320.062ZM349.159 20.0966H321.517V-7.54517H349.159V20.0966ZM292.421 -7.54517H320.062V20.0966H292.421V-7.54517ZM320.062 456.545V428.903H292.421V456.545H320.062ZM263.324 456.545H290.966V428.903H263.324V456.545ZM263.324 427.449H290.966V399.807H263.324V427.449ZM261.869 399.807V427.449H234.227V399.807H261.869ZM263.324 398.352H290.966V370.71H263.324V398.352ZM261.869 370.71V398.352H234.227V370.71H261.869ZM263.324 369.255H290.966V341.614H263.324V369.255ZM261.869 341.614V369.255H234.227V341.614H261.869ZM263.324 340.159H290.966V312.517H263.324V340.159ZM261.869 312.517V340.159H234.227V312.517H261.869ZM263.324 311.062H290.966V283.421H263.324V311.062ZM261.869 283.421V311.062H234.227V283.421H261.869ZM263.324 281.966H290.966V254.324H263.324V281.966ZM261.869 254.324V281.966H234.227V254.324H261.869ZM263.324 252.869H290.966V225.227H263.324V252.869ZM261.869 225.227V252.869H234.227V225.227H261.869ZM263.324 223.773H290.966V196.131H263.324V223.773ZM261.869 196.131V223.773H234.227V196.131H261.869ZM263.324 194.676H290.966V167.034H263.324V194.676ZM261.869 167.034V194.676H234.227V167.034H261.869ZM263.324 165.579H290.966V137.938H263.324V165.579ZM261.869 137.938V165.579H234.227V137.938H261.869ZM263.324 136.483H290.966V108.841H263.324V136.483ZM261.869 108.841V136.483H234.227V108.841H261.869ZM263.324 107.386H290.966V79.7445H263.324V107.386ZM261.869 79.7445V107.386H234.227V79.7445H261.869ZM263.324 78.2897H290.966V50.648H263.324V78.2897ZM261.869 50.648V78.2897H234.227V50.648H261.869ZM263.324 49.1931H290.966V21.5514H263.324V49.1931ZM261.869 21.5514V49.1931H234.227V21.5514H261.869ZM263.324 20.0966H290.966V-7.54517H263.324V20.0966ZM261.869 -7.54517H234.227V20.0966H261.869V-7.54517ZM261.869 428.903V456.545H234.227V428.903H261.869ZM232.773 456.545H205.131V428.903H232.773V456.545ZM232.773 427.449H205.131V399.807H232.773V427.449ZM203.676 427.449V399.807H176.034V427.449H203.676ZM232.773 398.352H205.131V370.71H232.773V398.352ZM203.676 398.352V370.71H176.034V398.352H203.676ZM232.773 369.255H205.131V341.614H232.773V369.255ZM203.676 369.255V341.614H176.034V369.255H203.676ZM232.773 340.159H205.131V312.517H232.773V340.159ZM203.676 340.159V312.517H176.034V340.159H203.676ZM232.773 311.062H205.131V283.421H232.773V311.062ZM203.676 311.062V283.421H176.034V311.062H203.676ZM232.773 281.966H205.131V254.324H232.773V281.966ZM203.676 281.966V254.324H176.034V281.966H203.676ZM232.773 252.869H205.131V225.227H232.773V252.869ZM203.676 252.869V225.227H176.034V252.869H203.676ZM232.773 223.773H205.131V196.131H232.773V223.773ZM203.676 223.773V196.131H176.034V223.773H203.676ZM232.773 194.676H205.131V167.034H232.773V194.676ZM203.676 194.676V167.034H176.034V194.676H203.676ZM232.773 165.579H205.131V137.938H232.773V165.579ZM203.676 165.579V137.938H176.034V165.579H203.676ZM232.773 136.483H205.131V108.841H232.773V136.483ZM203.676 136.483V108.841H176.034V136.483H203.676ZM232.773 107.386H205.131V79.7445H232.773V107.386ZM203.676 107.386V79.7445H176.034V107.386H203.676ZM232.773 78.2897H205.131V50.648H232.773V78.2897ZM203.676 78.2897V50.648H176.034V78.2897H203.676ZM232.773 49.1931H205.131V21.5514H232.773V49.1931ZM203.676 49.1931V21.5514H176.034V49.1931H203.676ZM232.773 20.0966H205.131V-7.54517H232.773V20.0966ZM176.034 -7.54517H203.676V20.0966H176.034V-7.54517ZM203.676 456.545V428.903H176.034V456.545H203.676ZM146.938 456.545H174.579V428.903H146.938V456.545ZM146.938 427.449H174.579V399.807H146.938V427.449ZM145.483 399.807V427.449H117.841V399.807H145.483ZM146.938 398.352H174.579V370.71H146.938V398.352ZM145.483 370.71V398.352H117.841V370.71H145.483ZM146.938 369.255H174.579V341.614H146.938V369.255ZM145.483 341.614V369.255H117.841V341.614H145.483ZM146.938 340.159H174.579V312.517H146.938V340.159ZM145.483 312.517V340.159H117.841V312.517H145.483ZM146.938 311.062H174.579V283.421H146.938V311.062ZM145.483 283.421V311.062H117.841V283.421H145.483ZM146.938 281.966H174.579V254.324H146.938V281.966ZM145.483 254.324V281.966H117.841V254.324H145.483ZM146.938 252.869H174.579V225.227H146.938V252.869ZM145.483 225.227V252.869H117.841V225.227H145.483ZM146.938 223.773H174.579V196.131H146.938V223.773ZM145.483 196.131V223.773H117.841V196.131H145.483ZM146.938 194.676H174.579V167.034H146.938V194.676ZM145.483 167.034V194.676H117.841V167.034H145.483ZM146.938 165.579H174.579V137.938H146.938V165.579ZM145.483 137.938V165.579H117.841V137.938H145.483ZM146.938 136.483H174.579V108.841H146.938V136.483ZM145.483 108.841V136.483H117.841V108.841H145.483ZM146.938 107.386H174.579V79.7445H146.938V107.386ZM145.483 79.7445V107.386H117.841V79.7445H145.483ZM146.938 78.2897H174.579V50.648H146.938V78.2897ZM145.483 50.648V78.2897H117.841V50.648H145.483ZM146.938 49.1931H174.579V21.5514H146.938V49.1931ZM145.483 21.5514V49.1931H117.841V21.5514H145.483ZM146.938 20.0966H174.579V-7.54517H146.938V20.0966ZM145.483 -7.54517H117.841V20.0966H145.483V-7.54517ZM145.483 428.903V456.545H117.841V428.903H145.483ZM116.386 456.545H88.7445V428.903H116.386V456.545ZM116.386 427.449H88.7445V399.807H116.386V427.449ZM87.2897 427.449V399.807H59.648V427.449H87.2897ZM116.386 398.352H88.7445V370.71H116.386V398.352ZM87.2897 398.352V370.71H59.648V398.352H87.2897ZM116.386 369.255H88.7445V341.614H116.386V369.255ZM87.2897 369.255V341.614H59.648V369.255H87.2897ZM116.386 340.159H88.7445V312.517H116.386V340.159ZM87.2897 340.159V312.517H59.648V340.159H87.2897ZM116.386 311.062H88.7445V283.421H116.386V311.062ZM87.2897 311.062V283.421H59.648V311.062H87.2897ZM116.386 281.966H88.7445V254.324H116.386V281.966ZM87.2897 281.966V254.324H59.648V281.966H87.2897ZM116.386 252.869H88.7445V225.227H116.386V252.869ZM87.2897 252.869V225.227H59.648V252.869H87.2897ZM116.386 223.773H88.7445V196.131H116.386V223.773ZM87.2897 223.773V196.131H59.648V223.773H87.2897ZM116.386 194.676H88.7445V167.034H116.386V194.676ZM87.2897 194.676V167.034H59.648V194.676H87.2897ZM116.386 165.579H88.7445V137.938H116.386V165.579ZM87.2897 165.579V137.938H59.648V165.579H87.2897ZM116.386 136.483H88.7445V108.841H116.386V136.483ZM87.2897 136.483V108.841H59.648V136.483H87.2897ZM116.386 107.386H88.7445V79.7445H116.386V107.386ZM87.2897 107.386V79.7445H59.648V107.386H87.2897ZM116.386 78.2897H88.7445V50.648H116.386V78.2897ZM87.2897 78.2897V50.648H59.648V78.2897H87.2897ZM116.386 49.1931H88.7445V21.5514H116.386V49.1931ZM87.2897 49.1931V21.5514H59.648V49.1931H87.2897ZM116.386 20.0966H88.7445V-7.54517H116.386V20.0966ZM59.648 -7.54517H87.2897V20.0966H59.648V-7.54517ZM87.2897 456.545V428.903H59.648V456.545H87.2897ZM30.5514 456.545H58.1931V428.903H30.5514V456.545ZM30.5514 427.449H58.1931V399.807H30.5514V427.449ZM29.0966 399.807V427.449H1.45483V399.807H29.0966ZM30.5514 398.352H58.1931V370.71H30.5514V398.352ZM29.0966 370.71V398.352H1.45483V370.71H29.0966ZM30.5514 369.255H58.1931V341.614H30.5514V369.255ZM29.0966 341.614V369.255H1.45483V341.614H29.0966ZM30.5514 340.159H58.1931V312.517H30.5514V340.159ZM29.0966 312.517V340.159H1.45483V312.517H29.0966ZM30.5514 311.062H58.1931V283.421H30.5514V311.062ZM29.0966 283.421V311.062H1.45483V283.421H29.0966ZM30.5514 281.966H58.1931V254.324H30.5514V281.966ZM29.0966 254.324V281.966H1.45483V254.324H29.0966ZM30.5514 252.869H58.1931V225.227H30.5514V252.869ZM29.0966 225.227V252.869H1.45483V225.227H29.0966ZM30.5514 223.773H58.1931V196.131H30.5514V223.773ZM29.0966 196.131V223.773H1.45483V196.131H29.0966ZM30.5514 194.676H58.1931V167.034H30.5514V194.676ZM29.0966 167.034V194.676H1.45483V167.034H29.0966ZM30.5514 165.579H58.1931V137.938H30.5514V165.579ZM29.0966 137.938V165.579H1.45483V137.938H29.0966ZM30.5514 136.483H58.1931V108.841H30.5514V136.483ZM29.0966 108.841V136.483H1.45483V108.841H29.0966ZM30.5514 107.386H58.1931V79.7445H30.5514V107.386ZM29.0966 79.7445V107.386H1.45483V79.7445H29.0966ZM30.5514 78.2897H58.1931V50.648H30.5514V78.2897ZM29.0966 50.648V78.2897H1.45483V50.648H29.0966ZM30.5514 49.1931H58.1931V21.5514H30.5514V49.1931ZM29.0966 21.5514V49.1931H1.45483V21.5514H29.0966ZM30.5514 20.0966H58.1931V-7.54517H30.5514V20.0966ZM29.0966 -7.54517H1.45483V20.0966H29.0966V-7.54517ZM29.0966 428.903V456.545H1.45483V428.903H29.0966ZM436.449 456.545H408.807V428.903H436.449V456.545ZM436.449 427.449H408.807V399.807H436.449V427.449ZM436.449 398.352H408.807V370.71H436.449V398.352ZM436.449 369.255H408.807V341.614H436.449V369.255ZM436.449 340.159H408.807V312.517H436.449V340.159ZM436.449 311.062H408.807V283.421H436.449V311.062ZM436.449 281.966H408.807V254.324H436.449V281.966ZM436.449 252.869H408.807V225.227H436.449V252.869ZM436.449 223.773H408.807V196.131H436.449V223.773ZM436.449 194.676H408.807V167.034H436.449V194.676ZM436.449 165.579H408.807V137.938H436.449V165.579ZM436.449 136.483H408.807V108.841H436.449V136.483ZM436.449 107.386H408.807V79.7445H436.449V107.386ZM436.449 78.2897H408.807V50.648H436.449V78.2897ZM436.449 49.1931H408.807V21.5514H436.449V49.1931ZM436.449 20.0966H408.807V-7.54517H436.449V20.0966ZM437.903 78.2897V50.648H465.545V78.2897H437.903ZM437.903 107.386V79.7445H465.545V107.386H437.903ZM437.903 136.483V108.841H465.545V136.483H437.903ZM437.903 165.579V137.938H465.545V165.579H437.903ZM437.903 194.676V167.034H465.545V194.676H437.903ZM437.903 223.773V196.131H465.545V223.773H437.903ZM437.903 252.869V225.227H465.545V252.869H437.903ZM437.903 281.966V254.324H465.545V281.966H437.903ZM437.903 311.062V283.421H465.545V311.062H437.903ZM437.903 340.159V312.517H465.545V340.159H437.903ZM437.903 369.255V341.614H465.545V369.255H437.903ZM437.903 398.352V370.71H465.545V398.352H437.903ZM437.903 427.449V399.807H465.545V427.449H437.903ZM437.903 456.545V428.903H465.545V456.545H437.903ZM437.903 49.1931V21.5514H465.545V49.1931H437.903Z" fill="url(#paint0_radial_5891_8336)"/>
                    <defs>
                    <radialGradient id="paint0_radial_5891_8336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(446.5 3.00004) rotate(135.778) scale(520.479)">
                    <stop stop-color="white" stop-opacity="0.82"/>
                    <stop offset="0.866139" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                    </defs>
                </svg>
                <div class="relative">
                    <div class="flex flex-col justify-center items-center max-w-[934px] w-full mx-auto">
                        <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Start Your Journey with Foodimaa & Build a
                            <span class="gradient-text">Multi-Restaurant Food Business</span>Today!
                        </h2>
                        <p class="text-base font-normal text-center mb-6">Stay ahead in the game with the best restaurant business solution.</p>
                        <div class="flex flex-wrap gap-6 items-center justify-center">
                             <button class="primary-button">Buy Now</button>
                             <button class="button">Explore Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
     </section>
     <!--===============================
              ACTION PART END 
     =================================-->

    <!--===============================
           VIDEO MODAL PART START
     =================================-->
    <div class="modal" :class="[isActive? 'active':'']">
        <div class="modal-content">
            <button @click="closeModal" class="absolute top-0.5 right-0.5">
                 <i class="icon-close-circle text-2xl"></i>
            </button>
            <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/IHqGxTJ_ISA?si=CXg-uFqDoYE1Zjpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <!--===============================
           VIDEO MODAL PART END 
     =================================-->

</template>
<script setup>

import ecosystems from "@/assets/json/ecosystem.json"
import steps from "@/assets/json/steps.json"
import blogs from "@/assets/json/blogs.json"
import { useModal } from "~/composable/modal.js"
import { useAutoplayTab } from "~/composable/autoplayTab";
const {openModal,isActive, closeModal} = useModal();

    const tabRefs ={}
    const tabContainer = ref(null)
    const featureTabs = ref([
        { id: 1, name: 'Admin Panel', icon:"icon-admin-panel" },
        { id: 2, name: 'Restaurant Owner Panel', icon:"icon-branch-panel" },
        { id: 3, name: 'Delivery Man Panel', icon:"icon-user-site" },
        { id: 4, name: 'User PWA Website' , icon:"icon-qr-order"}
    ])
    const autoplaytab = useAutoplayTab(
        {
           tabSource: featureTabs,
            getScrollElements:()=>({
                btnElement: tabRefs[autoplaytab.featureActive.value]
            })
        }
    )

</script>