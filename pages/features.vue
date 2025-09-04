<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="h-auto w-full pt-26 lg:pt-38">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto">
                <h1 class="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Extraordinary<span class="gradient-text"> Features of FoodKing Multi-Branch </span>Restaurant Business Solution</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">FoodKing is packed with the tools that keep your restaurant running smooth and growing your business fast. Manage orders, deliveries, dine-in, inventory, staff, and more from one powerful system. Whether you run a small café or a multi-branch restaurant, FoodKing scales with your business.</p>
            </div>
            <div class="flex gap-5 sm:gap-6 items-center justify-center mb-12 sm:mb-16">
                <button class="primary-button relative z-20">Buy Now</button>
                <button class="button hover-button">Explore Demo</button>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--===============================
           KEY FEATURES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="sticky top-20 lg:top-24 z-10">
                <div class="w-full relative p-4 mb-12 bg-white rounded-full">
                    <nav class="flex overflow-x-auto scrollbar-hide">
                        <button 
                            type="button" 
                            v-for="featureTab in featureTabs"
                            @click="featureActive = featureTab.id"
                            :key="featureTab.id"
                            :class="featureTab.id === featureActive ? 'active' : ''"
                            class="navbtn w-fit text-base lg:text-lg font-semibold leading-5 lg:leading-6 rounded-full px-4 py-3 flex items-center whitespace-nowrap flex-shrink-0 gap-2 ">
                            <i :class="[featureActive === featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                            <span>{{ featureTab.name }}</span>
                        </button>
                    </nav>
                    <div class="w-full h-12 absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFC7A0] from-0% via-[#9BBEFF] via-50% to-[#FFA797] to-100% blur-[30px]"></div>
                    <div class="lg:w-[580px] lg:h-[75px] -z-40 bg-[#FFA087] blur-[300px] rotate-[35deg] absolute -bottom-0 left-1/4"></div>
                </div>
            </div>
            <div v-if="featureActive == 1" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FFFBFA] pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[414px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
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
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p class="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FFFBFA] pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FFFBFA] pt-8 px-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized online order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="w-[318px] h-[226px]" src="/images/features/admin-panel/admin-panel-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FFFBFA] pt-8 px-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Table Orders Manage</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[336px] h-[226px]" src="/images/features/admin-panel/admin-panel-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">POS Order Manage</h3>
                                <p class="text-base font-normal">A well-organized POS order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[366px] w-full" src="/images/features/admin-panel/admin-panel-7.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Status Screen (OSS)</h3>
                                <p class="text-base font-normal">Customers can see their order’s current progress in real-time by the token number in OSS Monitor from the table.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-8.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FFFBFA] pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-9.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] pt-8 px-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between admin, managers, staffs, and customers making it easy to coordinate tasks, share updates, and resolve issues quickly without relying on external apps.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-10.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] px-8 pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Offer & Promotion</h3>
                                <p class="text-base font-normal">In the Promotion section, the admin can create coupons and offers with customizable options like discount type, minimum and maximum purchase amounts, and expiry date. These promos appear on the customer website and can be used for discounted food purchases.</p>
                            </div>
                            <NuxtImg class="h-[241px] w-full" src="/images/features/admin-panel/admin-panel-11-1.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FFFBFA] pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Employees & User Management</h3>
                                <p class="text-base font-normal">We offer user management system lets the admin easily manage users & their  roles like branch managers, staff, delivery boys, customers, waiters, and chefs—each with specific permissions to ensure smooth and secure operations.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-12.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Report & Analytics</h3>
                                <p class="text-base font-normal">We offers smart reports and analytics, including sales, items, and credit balance, helping admins track performance.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-13.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 bg-[#FFFBFA] py-8 ps-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Company & Business Settings</h3>
                                <p class="text-base font-normal">Company & Site Settings allow the admin to configure essential details like business name, logo, contact info, tax settings, currency, google map and more. This ensures the platform aligns with the brand identity and operates according to business needs.</p>
                            </div>
                            <NuxtImg class="max-w-[599px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-13.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FFFBFA] pt-8 ps-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Branch Setup</h3>
                                <p class="text-base font-normal">Multi-branch setup lets the admin manage multiple restaurant locations from a single system. Each branch can have its own staff, orders, and settings, while the admin maintains full control and oversight across all branches.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-14.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Branch-wise Delivery Zone</h3>
                                <p class="text-base font-normal">Each branch can set its own delivery area, ensuring faster, more efficient delivery service for customers.</p>
                            </div>
                            <NuxtImg class=" h-[184px] w-full" src="/images/features/admin-panel/admin-panel-15.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] pt-8 px-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Availability Time Slot</h3>
                                <p class="text-base font-normal overflow-ellipsis">Lets admins set specific operating hours for each branch. This helps control when customers can place orders, ensuring orders are only accepted during active business hours.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-16.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] px-8 pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order & Delivery Charge Setup</h3>
                                <p class="text-base font-normal">Order & Delivery Charge Setup allows admins to define minimum order amounts and set flexible delivery fees based on distance, zone, or fixed rates. This ensures fair pricing while optimizing delivery operations.</p>
                            </div>
                            <NuxtImg class="h-[241px] w-full" src="/images/features/admin-panel/admin-panel-17.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Push Notification Setup</h3>
                                <p class="text-base font-normal">Push Notification Setup enables real-time updates to customers, delivery boys, and staff, improving communication and overall user experience.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[160px] w-full" src="/images/features/admin-panel/admin-panel-18.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FFFBFA] pt-8 ps-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Bulk Import and Export</h3>
                                <p class="text-base font-normal">Bulk Import & Export feature allows admins to quickly upload or download item data in bulk, making it easy to manage large menus efficiently and save time on manual entry.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-19.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] pt-8 px-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Setup</h3>
                                <p class="text-base font-normal overflow-ellipsis">It supports various payment methods, including cash, card, and credit wallets. Admins can enable or disable options for all branch, offering customers convenient payment choices.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-20.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] px-8 pt-8 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Language Setup</h3>
                                <p class="text-base font-normal">It allows the platform to support multiple languages, making it accessible to a wider audience. Admins can add, edit, and manage languages to provide a localized experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-21.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 2" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Branch Manager Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the branch manager can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
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
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">POS Operator Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the POS operator can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-3.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Point of Sale (POS)</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/branch-staff/branch-staff-4.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FCF6F8] pt-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized online order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[318px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 bg-[#FCF6F8] pt-8 ps-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Table Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized table order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[338px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">POS Order Manage</h3>
                                <p class="text-base font-normal">A well-organized POS order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="h-[366px] w-full" src="/images/features/branch-staff/branch-staff-7.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Status Screen (OSS)</h3>
                                <p class="text-base font-normal">Customers can see their order’s current progress in real-time by the token number in OSS Monitor from the table.</p>
                            </div>
                            <NuxtImg class="h-[184px] w-full" src="/images/features/branch-staff/branch-staff-8.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Kitchen Display System (KDS)</h3>
                                <p class="text-base font-normal">KDS is helps streamline kitchen workflow by showing real-time orders on-screen. Orders update live by status, making it easy for staff to manage and serve efficiently.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-9.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between admin, managers, staffs, and customers making it easy to coordinate tasks, share updates, and resolve issues quickly without relying on external apps.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/branch-staff/branch-staff-10.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Delivery Zone</h3>
                                <p class="text-base font-normal">Each branch has its own delivery area which is configure by system admin to ensuring faster, more efficient delivery service for customers.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-11.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Employees & Staff Management</h3>
                                <p class="text-base font-normal">We offer staff & user management system lets the branch manger easily manage staff & their  roles like delivery boys, customers, waiters, and chefs—each with specific permissions to ensure smooth and secure operations.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-12.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Report & Analytics</h3>
                                <p class="text-base font-normal">We offers smart reports and analytics, including sales, items, and credit balance, helping admins track performance.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/branch-staff/branch-staff-13.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 3" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Responsive User Website</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing’s user website works seamlessly on all devices, making it easy for customers to browse, order, and track—anytime, anywhere.</p>
                            </div>
                            <NuxtImg class="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
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
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Cookie Banner</h3>
                                <p class="text-base font-normal">FoodKing includes a built-in cookie banner to help you stay transparent and compliant—inform users and gain consent with ease.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] h-[168px] w-full" src="/images/features/user-site/user-site-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Featured & Most Popular Items</h3>
                                <p class="text-base font-normal">Showcase popular & featured items to boost visibility and drive more orders—automatically or manually highlight what’s hot on your menu.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item or Dish Search</h3>
                                <p class="text-base font-normal overflow-ellipsis">Help customers find their favorite dishes fast with a smart search bar—quick, accurate results make ordering easier and faster.</p>
                            </div>
                            <NuxtImg class="h-[295px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-5.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Menu Category</h3>
                                <p class="text-base font-normal">Organize your dishes into clear, user-friendly categories, making it easy for customers to browse and find what they’re craving.</p>
                            </div>
                            <NuxtImg class="h-[295px] w-full" src="/images/features/user-site/user-site-6.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-7.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Details & Add to Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">A quick view modal of each items that showing item details with sizes, extras, addons, and a field for special instructions. Customers can add to cart any item from here.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-8.png" alt="admin"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">User’s Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">The user cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[295px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-9.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Checkout</h3>
                                <p class="text-base font-normal">The checkout page is fast, simple, and user-friendly—letting customers confirm their order, add delivery address, choose delivery time schedule or choose branch & time schedule for takeaway and place their order with confidence.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/user-site/user-site-10.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Set Delivery Location</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can easily set their delivery location or edit existing location on the map or by address—ensuring accurate, timely deliveries every time.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Branch Selection</h3>
                                <p class="text-base font-normal">For delivery, the nearest branch is auto-selected based on customer’s location. For takeaway, customers can pick their preferred branch manually.</p>
                            </div>
                            <NuxtImg class=" h-[160px] w-full" src="/images/features/user-site/user-site-12.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-13.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Schedule Delivery</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can schedule their delivery by selecting a preferred date and time—making it easy to plan meals in advance and receive orders at their convenience.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] h-[286px] w-full" src="/images/features/user-site/user-site-14.png" alt="admin"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Option</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing supports multiple payment methods—including cash, card, and credit balance—giving customers the flexibility to pay however they prefer.</p>
                            </div>
                            <NuxtImg class="h-[289px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-15.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal">Customers can track their order status in real time—from confirmation to preparation and delivery—ensuring transparency and peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-site/user-site-16.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Orders History</h3>
                                <p class="text-base font-normal overflow-ellipsis">The Order History feature lets customers view all their past orders & current orders in one place. They can easily review order details and track spending with just a few clicks.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] h-[286px] w-full" src="/images/features/user-site/user-site-17.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-18.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between customers and branch manager making it easy to  resolve issues quickly without any hassle.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-site/user-site-19.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Authentication & Guest Login</h3>
                                <p class="text-base font-normal">Customers can sign up or log in easily to manage their orders, or simply continue as a guest for a quick and hassle-free checkout experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-site/user-site-20.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 4" class="mb-12 md:mb-16">
                 <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Scan QR for Menu</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can quickly access the full menu by scanning a QR code from table—making ordering easy, contactless, and convenient.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
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
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item Details</h3>
                                <p class="text-base font-normal">A quick view modal of each items that showing item details with sizes, extras, addons, and quantity.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/qr-code/qr-code-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/qr-code/qr-code-4.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
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
            <div v-if="featureActive == 5" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Home Screen</h3>
                                <p class="text-base font-normal overflow-ellipsis">The home screen gives users a smooth start with menu categories, popular and featured items, plus eye-catching offer banners—all designed to help users discover and order quickly.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Item or Dish Search</h3>
                                <p class="text-base font-normal">Help customers find their favorite dishes fast with a smart search bar—type a name or keyword and accurate results make ordering easier and faster.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Offer Banner</h3>
                                <p class="text-base font-normal">Catch attention with vibrant offer banners that highlight discounts, deals, and special promotions right on the app’s home page.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/user-app/user-app-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Menu Items List</h3>
                                <p class="text-base font-normal">Browse a clean, organized list of menu items with images, prices, and brief descriptions—making it easy to explore and choose your favorites.</p>
                            </div>
                            <NuxtImg class="max-w-[396px] w-full h-[286px]" src="/images/features/user-app/user-app-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Details & Add to Cart</h3>
                                <p class="text-base font-normal">A quick view modal of each items that showing item details with sizes, extras, addons, and a field for special instructions. Customers can add to cart any item from here.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px]" src="/images/features/user-app/user-app-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-app/user-app-6.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">User’s Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">The user cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-7.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Checkout</h3>
                                <p class="text-base font-normal">The checkout page letting customers confirm their order, add delivery address, choose delivery time schedule or choose branch & time schedule for takeaway and place their order.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-8.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-app/user-app-9.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Set Delivery Location</h3>
                                <p class="text-base font-normal">Customers can easily set their delivery location or edit existing location on the map or by address—ensuring accurate, timely deliveries every time.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] h-[286px] w-full" src="/images/features/user-app/user-app-10.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Schedule Delivery</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can schedule their delivery by selecting a preferred date and time—making it easy to plan meals in advance and receive orders at their convenience.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Multi Payment Option</h3>
                                <p class="text-base font-normal">FoodKing supports multiple payment methods—including cash, card, and credit balance—giving customers the flexibility to pay however they prefer.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-12.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can track their order status in real time—from confirmation to preparation and delivery—ensuring transparency and peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-13.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-4">Order History</h3>
                                <p class="text-base font-normal">The Order History feature lets customers view all their past orders & current orders in one place. They can easily review order details and track spending with just a few clicks.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-14.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6">   
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">User Profile</h3>
                                <p class="text-base font-normal">Users can manage their personal details, saved addresses, order history, and preferences—all in one profile section.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/user-app/user-app-15.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-app/user-app-16.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Authentication & Guest Login</h3>
                                <p class="text-base font-normal">Customers can sign up or log in easily, or simply continue as a guest for a quick and hassle-free checkout experience.</p>
                            </div>
                            <NuxtImg class="h-[154px] flex-grow flex-shrink-0" src="/images/features/user-app/user-app-17.png" alt="order_tracking"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 6" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold">Home Screen</h3>
                                <p class="text-base font-normal overflow-ellipsis">The home screen shows delivery stats of a quick overview of their activity and a real-time list of active assigned orders—keeping delivery boys informed and on track.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold">Active Orders & Details</h3>
                                <p class="text-base font-normal">Delivery boys can view all active orders with full details, including customer info, address, items, and delivery instructions—ensuring smooth, accurate deliveries.</p>
                            </div>
                            <NuxtImg class="h-[271px] w-full" src="/images/features/delivery-app/delivery-app-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 px-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold">View Delivery Direction</h3>
                                <p class="text-base font-normal overflow-ellipsis">Delivery boys can easily view the best route to the customer using integrated map directions—making deliveries faster and more efficient.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-3.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-8 pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order History</h3>
                                <p class="text-base font-normal">Delivery boys can access a complete history of their past deliveries—helpful for tracking performance and resolving any order-related issues.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/delivery-app/delivery-app-4.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery Boy Profile</h3>
                                <p class="text-base font-normal">Delivery boys can manage their personal information, update profile details—all from their profile section.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/delivery-app/delivery-app-5.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery Boy Login</h3>
                                <p class="text-base font-normal">Delivery boys can securely log in to their account to access assigned orders, track deliveries, and manage their profile.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-7.png" alt="order_tracking"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
           KEY FEATURES PART END 
     =================================-->

    <!--===============================
          ADDON FEATURES PART START 
     =================================-->
     <section class="bg-[url('/images/bg/addon-bg.png')] bg-contain md:bg-cover bg-no-repeat bg-top pt-20 pb-20 sm:pb-40">
        <div class="container">
            <div class="max-w-[742px] w-full mx-auto md:px-20 mb-12 lg:mb-16">
                <h1 class="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Boost Your System –<span class="gradient-text"> Addons Features </span>Uncovered</h1>
                <p class="text-base lg:text-lg font-normal text-center ">Packed with extra goodies to make running your restaurant smoother, faster, and way more fun!</p>
            </div>
            <div class="sticky top-20 lg:top-24 z-10">
                <div class="w-full max-w-[553px] relative p-4 mb-12 mx-auto bg-white rounded-full">
                    <nav class="flex overflow-x-auto scrollbar-hide justify-between">
                        <button 
                            type="button" 
                            v-for="addonTab in addonTabs"
                            @click="addonActive = addonTab.id"
                            :key="addonTab.id"
                            :class="addonTab.id === addonActive ? 'active' : ''"
                            class="navbtn w-fit text-base lg:text-lg font-semibold leading-5 lg:leading-6 rounded-full px-4 py-3 flex items-center whitespace-nowrap flex-shrink-0 gap-2 ">
                            <i :class="[addonActive === addonTab.id? 'text-white': '', addonTab.icon]" class="text-xl text-[#818B9B]"></i>
                            <span>{{ addonTab.name }}</span>
                        </button>
                    </nav>
                    <div class="w-full h-12 bg-[#FFA087] absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFC7A0] from-0% via-[#9BBEFF] via-50% to-[#FFA797] to-100% blur-[30px]"></div>
                </div>
            </div>
            <div v-if="featureActive == 1">
                <div class="grid lg:grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-[28px] font-bold mb-4">Dashboard</h3>
                                <p class="text-base font-normal">Quick overview of entire business with a real-time dashboard that shows sales, orders, performance, and key insights.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/dashboard.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-[28px] font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">Manage online customer orders effortlessly with live updates, automatic status tracking, and easy access to order details for smooth fulfillment.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/order-management.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">POS Orders Manage</h3>
                                <p class="text-base font-normal">Take in-store orders quickly with built-in POS system—optimized for speed, accuracy, & an intuitive user experience.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/pos-order.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Details</h3>
                                <p class="text-base font-normal">View and manage each order including items, customer info, payment status, and delivery progress—all in one place.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/order-details.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FFFBFA] px-6 pt-6 rounded-2xl border border-[#FFD8D3]">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Sales Report</h3>
                                <p class="text-base font-normal">Access detailed sales reports to monitor performance, spot trends, and make data-driven decisions that drive growth.</p>
                            </div>
                            <NuxtImg class="h-full w-full" src="/images/addon/marchent/sales-report.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
           ADDON FEATURES PART END 
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="p-8 md:p-12 rounded-2xl bg-custom-gradient relative z-0">
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
                    <div class="flex flex-col justify-center items-center">
                        <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">Curious to
                            <span class="gradient-text"> Discuss More </span>
                            About Foodimaa?
                            </h2>
                        <p class="text-base font-normal text-center mb-6">Need help or customization? Talk to the experts who built it — book your session now.</p>
                        <div class="flex flex-wrap items-center max-lg:justify-center gap-4">
                            <NuxtLink to="#" class="h-[52px] !leading-[52px] px-6 rounded-full primary-button text-base sm:text-lg font-semibold capitalize flex items-center gap-3 text-white">
                                <i class="icon-line-tidycal text-2xl"></i>
                                Book a Meeting
                            </NuxtLink>
                            <NuxtLink to="#" class="h-[52px] !leading-[52px] px-6 rounded-full whatsapp-gradient flex items-center gap-3 text-white">
                                <i class="icon-line-whatsapp text-2xl"></i>
                                <span class="text-base sm:text-lg font-semibold capitalize">WhatsApp</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
     </section>
     <!--===============================
              ACTION PART END 
     =================================-->
</template>
<script setup>
    const featureActive = ref(1);
    const addonActive = ref(1);

    const featureTabs = reactive([
        { id: 1, name: 'Admin Panel', icon:"icon-admin-panel" },
        { id: 2, name: 'Branch & Staffs Panel', icon:"icon-branch-panel" },
        { id: 3, name: 'User Website', icon:"icon-user-site" },
        { id: 4, name: 'QR Table Order' , icon:"icon-qr-order"},
        { id: 5, name: 'User App', icon:"icon-user-app" }, 
        { id: 6, name: 'Delivery App', icon:"icon-delivery-app" },
    ])
    

    const addonTabs = reactive([
        { id: 1, name: 'Marchent/Manager App', icon:"icon-merchant-app" },
        { id: 2, name: 'Delivery Man App', icon:"icon-kitchen-app" }
    ])

</script>