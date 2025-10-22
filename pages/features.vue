<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="h-auto w-full pt-26 lg:pt-38">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto">
                <h1 class="heading mb-6">Extraordinary<span class="gradient-text"> Features of FoodKing Multi-Branch </span>Restaurant Business Solution</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">FoodKing is packed with the tools that keep your restaurant running smooth and growing your business fast. Manage orders, deliveries, dine-in, inventory, staff, and more from one powerful system. Whether you run a small café or a multi-branch restaurant, FoodKing scales with your business.</p>
            </div>
            <div class="flex gap-5 sm:gap-6 items-center justify-center mb-12 sm:mb-16">
                <button class="primary-button relative z-20">Buy Now</button>
                <button class="button">Explore Demo</button>
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
                <div class="max-w-[997px] w-full mx-auto relative p-4 mb-12 bg-white rounded-full">
                    <nav class="flex justify-between overflow-x-auto scrollbar-hide">
                        <button 
                            type="button" 
                            v-for="featureTab in featureTabs"
                            @click="featureActive = featureTab.id"
                            :key="featureTab.id"
                            :class="featureTab.id === featureActive ? 'active' : ''"
                            class="navbtn !px-6">
                            <i :class="[featureActive === featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                            <span>{{ featureTab.name }}</span>
                        </button>
                    </nav>
                    <div class="navgradientBg"></div>
                    <div class="blur-rect"></div>
                </div>
            </div>
            <div v-if="featureActive == 1" class="mb-12 md:mb-16">
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
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-4.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Campaign Setup</h3>
                                <p class="text-base font-normal">Run time-based campaigns to promote restaurants, highlight special deals, and drive more orders during peak hours.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-5.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 pt-8 px-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Transactions</h3>
                                <p class="text-base font-normal">ATrack all financial activities in one place — from restaurant earnings to commissions and payouts, with full transparency.</p>
                            </div>
                            <NuxtImg class="w-[318px] h-[226px]" src="/images/features/admin-panel/admin-panel-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 pt-8 px-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Cash Collections</h3>
                                <p class="text-base font-normal">Monitor all cash collections from delivery personnel and restaurants to ensure accurate, hassle-free accounting.</p>
                            </div>
                            <NuxtImg class="w-[336px] h-[226px]" src="/images/features/admin-panel/admin-panel-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Payouts</h3>
                                <p class="text-base font-normal">Manage and release restaurant, delivery man, other staffs payouts easily — keep payment records clear, fast, and fully organized.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[366px] w-full" src="/images/features/admin-panel/admin-panel-7.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracker</h3>
                                <p class="text-base font-normal">Track any order in the order tacker — see statuses, issues, and ensure smooth operations & customer satisfaction.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-9.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Return Orders</h3>
                                <p class="text-base font-normal">Manage and process returned orders quickly, keeping customers, delivery man, and restaurants informed every step of the way.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-10.png" alt="addon"/>
                        </div>
                    </div>
                </div>

                
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between admin, managers, staffs, and customers making it easy to coordinate tasks, share updates, and resolve issues quickly without relying on external apps.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-10.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Employees & User Management</h3>
                                <p class="text-base font-normal">We offer user management system lets the admin easily manage users & their  roles like branch managers, staff, delivery boys, customers, waiters, and chefs—each with specific permissions to ensure smooth and secure operations.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-12.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
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
                    <div class="col-span-12 py-8 ps-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-8 pt-8 ps-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Branch Setup</h3>
                                <p class="text-base font-normal">Multi-branch setup lets the admin manage multiple restaurant locations from a single system. Each branch can have its own staff, orders, and settings, while the admin maintains full control and oversight across all branches.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-14.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Availability Time Slot</h3>
                                <p class="text-base font-normal overflow-ellipsis">Lets admins set specific operating hours for each branch. This helps control when customers can place orders, ensuring orders are only accepted during active business hours.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-16.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-4   px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Push Notification Setup</h3>
                                <p class="text-base font-normal">Push Notification Setup enables real-time updates to customers, delivery boys, and staff, improving communication and overall user experience.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[160px] w-full" src="/images/features/admin-panel/admin-panel-18.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8   pt-8 ps-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Setup</h3>
                                <p class="text-base font-normal overflow-ellipsis">It supports various payment methods, including cash, card, and credit wallets. Admins can enable or disable options for all branch, offering customers convenient payment choices.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-20.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8  feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Branch Manager Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the branch manager can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8  feature-card">
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
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 pt-8 ps-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized online order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[318px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 pt-8 ps-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Table Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized table order list allows the admin to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, payment info, delivery progress, and more.</p>
                            </div>
                            <NuxtImg class="max-w-[338px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 px-6 pt-6 feature-card">
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
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Status Screen (OSS)</h3>
                                <p class="text-base font-normal">Customers can see their order’s current progress in real-time by the token number in OSS Monitor from the table.</p>
                            </div>
                            <NuxtImg class="h-[184px] w-full" src="/images/features/branch-staff/branch-staff-8.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 px-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between admin, managers, staffs, and customers making it easy to coordinate tasks, share updates, and resolve issues quickly without relying on external apps.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/branch-staff/branch-staff-10.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-8 pt-8 px-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Employees & Staff Management</h3>
                                <p class="text-base font-normal">We offer staff & user management system lets the branch manger easily manage staff & their  roles like delivery boys, customers, waiters, and chefs—each with specific permissions to ensure smooth and secure operations.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-12.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
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
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item or Dish Search</h3>
                                <p class="text-base font-normal overflow-ellipsis">Help customers find their favorite dishes fast with a smart search bar—quick, accurate results make ordering easier and faster.</p>
                            </div>
                            <NuxtImg class="h-[295px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-5.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Veg/Non-veg Filter</h3>
                                <p class="text-base font-normal">Let customers quickly filter dishes by veg or non-veg—ensuring a personalized and hassle-free browsing experience.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-7.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">User’s Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">The user cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[295px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-9.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Set Delivery Location</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can easily set their delivery location or edit existing location on the map or by address—ensuring accurate, timely deliveries every time.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
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
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class=" h-[185px] w-full" src="/images/features/user-site/user-site-13.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Option</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing supports multiple payment methods—including cash, card, and credit balance—giving customers the flexibility to pay however they prefer.</p>
                            </div>
                            <NuxtImg class="h-[289px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-15.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Orders History</h3>
                                <p class="text-base font-normal overflow-ellipsis">The Order History feature lets customers view all their past orders & current orders in one place. They can easily review order details and track spending with just a few clicks.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] h-[286px] w-full" src="/images/features/user-site/user-site-17.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Built-in Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between customers and branch manager making it easy to  resolve issues quickly without any hassle.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-site/user-site-19.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
            <div v-if="featureActive == 5" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Home Screen</h3>
                                <p class="text-base font-normal overflow-ellipsis">The home screen gives users a smooth start with menu categories, popular and featured items, plus eye-catching offer banners—all designed to help users discover and order quickly.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Offer Banner</h3>
                                <p class="text-base font-normal">Catch attention with vibrant offer banners that highlight discounts, deals, and special promotions right on the app’s home page.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/user-app/user-app-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Details & Add to Cart</h3>
                                <p class="text-base font-normal">A quick view modal of each items that showing item details with sizes, extras, addons, and a field for special instructions. Customers can add to cart any item from here.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px]" src="/images/features/user-app/user-app-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">User’s Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">The user cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-7.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-app/user-app-9.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Schedule Delivery</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can schedule their delivery by selecting a preferred date and time—making it easy to plan meals in advance and receive orders at their convenience.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal overflow-ellipsis">Customers can track their order status in real time—from confirmation to preparation and delivery—ensuring transparency and peace of mind.</p>
                            </div>
                            <NuxtImg class="h-[271px]" src="/images/features/user-app/user-app-13.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-4  px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">User Profile</h3>
                                <p class="text-base font-normal">Users can manage their personal details, saved addresses, order history, and preferences—all in one profile section.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/user-app/user-app-15.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4  px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-app/user-app-16.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4  px-6 pt-6 feature-card">
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
                    <div class="col-span-12 lg:col-span-6  pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold">Home Screen</h3>
                                <p class="text-base font-normal overflow-ellipsis">The home screen shows delivery stats of a quick overview of their activity and a real-time list of active assigned orders—keeping delivery boys informed and on track.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6  px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-6  pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold">View Delivery Direction</h3>
                                <p class="text-base font-normal overflow-ellipsis">Delivery boys can easily view the best route to the customer using integrated map directions—making deliveries faster and more efficient.</p>
                            </div>
                            <NuxtImg class="h-[271px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-3.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6  px-8 pt-8 feature-card">
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
                    <div class="col-span-12 lg:col-span-4  px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery Boy Profile</h3>
                                <p class="text-base font-normal">Delivery boys can manage their personal information, update profile details—all from their profile section.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/delivery-app/delivery-app-5.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4  px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">FoodKing supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/delivery-app/delivery-app-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4  px-6 pt-6 feature-card">
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
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">Curious to
                <span class="gradient-text"> Discuss More </span>
                About Foodpi?
                </h2>
            <p class="text-base font-normal text-center mb-6">Need help or customization? Talk to the experts who built it — book your session now.</p>
            <div class="flex flex-wrap items-center max-lg:justify-center gap-4">
                <NuxtLink to="#" class="primary-button inline-flex items-center gap-3 !px-6">
                    <i class="icon-line-tidycal text-2xl"></i>
                    Book a Meeting
                </NuxtLink>
                <NuxtLink to="#" class="whatsapp-button inline-flex items-center gap-3 !px-6">
                    <i class="icon-line-whatsapp text-2xl"></i>
                    <span class="text-base sm:text-lg font-semibold capitalize">WhatsApp</span>
                </NuxtLink>
            </div>
        </div>
     </ActionComponent>
     <!--===============================
              ACTION PART END 
     =================================-->
</template>
<script setup>
    const featureActive = ref(1);
    const featureTabs = reactive([
        { id: 1, name: 'Admin Panel', icon:"icon-admin-panel" },
        { id: 2, name: 'Restaurant Owner Panel', icon:"icon-branch-panel" },
        { id: 3, name: 'Delivery Man Panel', icon:"icon-delivery-app" },
        { id: 4, name: 'User PWA Website', icon:"icon-user-site" },
    ])

</script>