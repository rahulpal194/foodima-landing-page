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
                <h1 class="heading mb-6">Foodpi Has<span class="gradient-text"> Everything to Manage </span>Your Multi-Restaurant Food Business
                </h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">From admin control to delivery tracking, restaurant management, and customer ordering — Foodpi handles it all seamlessly in one easy-to-use platform.</p>
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
                        class="navbtn">
                        <i :class="[autoplaytab.featureActive.value===featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                        <span>{{ featureTab.name }}</span>
                    </button>
                </nav>
                <div class="navgradientBg"></div>
                <span class="blur-rect"></span>
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
                                <h3 class="text-2xl font-bold mb-4">Restaurants List</h3>
                                <p class="text-base font-normal">View and manage all registered restaurants in one place — check details, update info, and keep everything organized easily.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/admin-panel/admin-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Offer Setup</h3>
                                <p class="text-base font-normal">Create and manage exclusive offers or discounts for restaurants and customers to boost sales and engagement effortlessly.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Voucher Setup</h3>
                                <p class="text-base font-normal">Set up and control voucher codes to reward customers, attract new users, and keep your sales growing.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Campaign Setup</h3>
                                <p class="text-base font-normal">Run time-based campaigns to promote restaurants, highlight special deals, and drive more orders during peak hours.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 2" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8  feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Panel Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">Give restaurant owners full control with a smart dashboard — manage menus, track orders, monitor earnings, and keep daily operations running smoothly.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/restaurant-panel/restaurant-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8  feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Items Management</h3>
                                <p class="text-base font-normal">Add, edit, and organize food items with items extras and addons easily — manage categories, prices, and availability to keep your menu up to date.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/restaurant-panel/restaurant-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item’s Extras</h3>
                                <p class="text-base font-normal">Add & manage item extras like toppings or anything like that to give customers a fully customizable ordering experience.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item’s Addons</h3>
                                <p class="text-base font-normal">Create and manage item addons to offer extra options, enhance customer choices, and boost order value.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-4.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Point of Sale (POS)</h3>
                                <p class="text-base font-normal">Process orders quickly and efficiently with offers, token, & multiple payment option from Point of Sale (POS).</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-5.png" alt="qr_code"/>
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
                                <p class="text-base font-normal overflow-ellipsis">Foodpi’s user website works seamlessly on all devices, making it easy for customers to browse, order, and track—anytime, anywhere.</p>
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
                                <p class="text-base font-normal">Foodpi includes a built-in cookie banner to help you stay transparent and compliant—inform users and gain consent with ease.</p>
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
                <h1 class="heading mb-6">Get Started with Foodipi in Just <span class="gradient-text">Four Simple Steps</span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Setting up Foodpi is quick and hassle-free. Just follow these 6 steps and start your multi restaurant food ordering business like a pro.</p>
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
                              <NuxtImg class="h-full w-full object-cover rounded-4xl" src="/images/product-icon.png" alt="product_icon" />
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
            <span class="blur-rect !top-20"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 class="heading mb-6">Kickstart Your Business with<span class="gradient-text"> Premium Services </span>Tailored to You</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Professional-grade services to ensure your system runs smoothly from day one.</p>
            </div>
            <div class="rounded-2xl p-6 md:p-8 mb-6 shadow-pricing-title group hover:shadow-card">
                <div class="grid grid-cols-12 gap-6 md:gap-4 ">
                    <div class="col-span-12 md:col-span-7 order-last md:order-first">
                    <h2 class="text-2xl md:text-[32px] leading-tight font-bold mb-4">Skip the Tech Headache, We’ve Got <span class="text-primary"> Installation </span>Covered</h2>
                    <p class="text-base font-normal mb-6">Our team will install Foodpi on your server quickly and correctly—so you can start running your business without delay.</p>
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
            <div class="p-8 md:p-12 md:pb-0 rounded-2xl bg-custom-gradient">
                <div class="grid grid-cols-12 md:gap-14">
                    <div class="col-span-12 md:col-span-5 flex flex-col justify-center">
                        <h2 class="heading mb-6">Foodpi Built with<span class="gradient-text"> Powerful </span>&<span class="gradient-text">  Modern </span>Technology</h2>
                        <p class="text-base font-normal mb-6">Foodpi is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
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
            <span class="blur-rect !top-20"></span>
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
                            <p class="text-base font-normal">Dive into our complete documentation to discover how to install, configure, and run Foodpi with ease—no guesswork, just clear instructions.</p>
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
                            <p class="text-base font-normal">Watch step-by-step video guides to learn how to set up, and run Foodpi like a pro.</p>
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
            <span class="blur-rect !top-20"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
                <h1 class="heading mb-6">Latest From the<span class="gradient-text"> Blog</span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Stay updated with the latest tips, features, and Foodpi news.</p>
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
    <ActionComponent>
        <div class="flex flex-col justify-center items-center max-w-[934px] w-full mx-auto">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Start Your Journey with Foodipi & Build a
                <span class="gradient-text">Multi-Restaurant Food Business</span>Today!
            </h2>
            <p class="text-base font-normal text-center mb-6">Stay ahead in the game with the best restaurant business solution.</p>
            <div class="flex flex-wrap gap-6 items-center justify-center">
                 <button class="primary-button">Buy Now</button>
                 <button class="button">Explore Demo</button>
            </div>
        </div>
    </ActionComponent>
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