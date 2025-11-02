<template>
    <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-40 mb-12 sm:mb-16">
        <div class="container">
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading mb-6">Foodpi<span class="gradient-text"> Documentation</span></h1>
                <p class="text-base lg:text-lg font-normal text-center">Everything you need to set up, manage, and master Foodpi.</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--================================
       DOCUMENTATION CONTENT PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
      <div class="container">
       <div class="grid col-span-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:place-content-between">
        <div ref="dropdownContainer" class="md:col-span-1 origin-top relative">
            <button @click="isOpen= !isOpen" class="flex md:hidden items-center justify-between gap-2 w-full h-12 px-6 rounded-full shadow-input bg-white">
                <span class="text-base font-medium capitalize text-heading">{{ activetab }}</span>
                <i :class="isOpen? 'rotate-180':'rotate-0'" class="icon-chevron-down text-xl text-heading transition-all duration-300"></i>
            </button>
            <div :class="isOpen ? 'max-md:scale-y-100' : 'max-md:scale-y-0'" class="transition-all duration-300 origin-top w-full absolute md:sticky top-12 md:top-32 p-4 z-20 rounded-2xl bg-white shadow-faq">
                <nav class="flex flex-col gap-2 text-[#1A203C]">
                    <div v-for="tab in documentation">
                        <div v-if="tab.dropdownContent" class="vertical-dropdown-group" :class="{ active: activetab === tab.name }">
                            <button @click="handledropTab(tab.name, tab.dropdownContent[0])"
                                :class="{ active: activetab === tab.name }"
                                class="vertical-dropdown-btn tabBtn">
                                <div class="flex items-center gap-3.5">
                                  <i :class="tab.icon" class="icon-clipboard-text text-xl gradient-text"></i>
                                  <span>{{ tab.name }}</span>
                                </div>
                                <div class="w-[42px] h-[42px] rounded-full bg-[#FFE4E1] flex items-center justify-center">
                                  <span class="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center font-bold text-base text-white">{{ tab.dropdownContent.length }}</span>
                                </div>
                            </button>
                            <div class="vertical-dropdown-content flex-col ms-4">
                                <button v-for="content in tab.dropdownContent"
                                      :key="content"
                                      @click="handledropTab(tab.name, content)"
                                      :class="activeContent== content ? 'active':''"
                                      class=" content p-4 py-3 w-full rounded-xl text-lg flex gap-3 items-center">
                                      <i class="icon-line-document text-[#818B9B]"></i>
                                     <span>{{ content }}</span>
                                </button>
                            </div>
                        </div>
                       <button v-else
                            @click="handleTab(tab.name)"
                            :class="{ active: activetab === tab.name }"
                            class="tabBtn">
                            <div class="flex items-center gap-3.5">
                                 <i :class="tab.icon" class="text-xl gradient-text"></i>
                                 <span>{{ tab.name }}</span>
                            </div>
                       </button>
                    </div>
                </nav>
            </div>
        </div>
        <div class="md:col-span-2">
            <div v-if="activetab=='Getting Started'">
                <h2 class="text-[28px] font-bold mb-4">Getting started</h2>
                <div class="border-t border-primary pt-6">
                    <h6 class="text-2xl font-medium mb-6">Foodpi - Multi Restaurant Food Delivery System with PWA Website and Laravel Admin Panel with POS</h6>
                    <ul class="grid grid-cols-2 gap-y-6 mb-8 sm:mb-12">
                        <li class="text-base font-bold">Version: <span class="font-medium">v1.0</span></li>
                        <li class="text-base font-bold">Created: <span class="font-medium">20 October, 2025</span></li>
                        <li class="text-base font-bold">Author: <span class="font-medium text-[#007EDD]"><NuxtLink to="http://www.inilabs.net/">iNiLabs</NuxtLink></span></li>
                        <li class="text-base font-bold">Last Update: <span class="font-medium">20 October, 2025</span></li>
                    </ul>
                    <div class="max-w-[735px]">
                        <NuxtImg class="w-full rounded-2xl mb-8 sm:mb-12" src="/images/documentation/doc_banner.png"></NuxtImg>
                    </div>
                    <div class="doc-warn-div">
                         <p class="text-base font-medium">If you have any questions or need any help that are not in this documentation file, Please feel free to <NuxtLink class="font-bold text-[#007EDD]" to="https://inilabsn.freshdesk.com/">create a Support Ticket.</NuxtLink></p>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent=='Basic Knowledge'">
                <h2 class="text-[28px] font-bold mb-4">Basic Knowledge</h2>
                <div class="border-t border-primary pt-6">
                    <p class="text-2xl font-medium mb-8">To install, set up, and publish Foodpi with your branding, it's necessary to possess fundamental knowledge in server-side configuration.</p>
                    <ul class="mb-8 list-disc ps-5 flex flex-col gap-2">
                        <li>IDE for Web development, we prefer VSCode.</li>
                        <li>Real server related knowledge like apache or local machine server, we prefere to use a real server.</li>
                        <li>Server related knowledge and we preferred cPanel in your server for quick installation</li>
                        <li>Basic knowledge in PHP, NPM, Vue, Node and Laravel if you want to do some customization yourself (Not compulsory).</li>
                        <li>basic knowledge about firebase</li>
                    </ul>
                    <div class="doc-warn-div">
                         <p class="text-base font-medium">Note: Remember! Envato's pricing does not cover installation support. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent == 'Server Requirement'">
                <h2 class="text-[28px] font-bold mb-4">Server Requirement</h2>
                <div class="border-t border-primary pt-6">
                    <p class="text-2xl font-medium mb-8">Before install, please make sure you have the components bellow enable on your server</p>
                    <ul class="mb-8 list-disc ps-5 flex flex-col gap-2.5">
                        <li>PHP 8.3 or Greater</li>
                        <li>OpenSSL PHP Extension</li>
                        <li>PDO PHP Extension</li>
                        <li>Mbstring PHP Extension</li>
                        <li>Tokenizer PHP Extension</li>
                        <li>XML PHP Extension</li>
                        <li>Ctype PHP Extension</li>
                        <li>JSON PHP Extension</li>
                        <li>BCMath PHP Extension</li>
                        <li>GD PHP Extension</li>
                        <li>Imagick PHP Extension</li>
                        <li>PHP Zip Archive</li>
                        <li>PHP JSON</li>
                        <li>PHP cURL</li>
                        <li>PHP Zip Archive</li>
                        <li>PROC_OPEN PHP Function</li>
                        <li>open_basedir must be disabled</li>
                    </ul>
                    <div class="doc-info-div">
                         <p class="text-base font-medium">Typically, these extensions are enabled by default on most servers, but it is recommended that you confirm with your hosting provider.</p>
                    </div>
                    <div class="doc-danger-div">
                         <p class="text-base font-medium">Please proceed with caution and take great care in completing this task. Any errors made will not be the responsibility of our team.</p>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent == 'Active Purchase Key'">
                <h2 class="text-[28px] font-bold mb-4">Active Purchase Key</h2>
                <div class="border-t border-primary pt-6">
                    <div class="doc-info-div">
                        <p class="text-lg font-normal flex gap-3 items-center">
                            <span class="doc-badge-red">TIPS</span>
                            Check the video tutorial!
                        </p>
                    </div>
                    <iframe class="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/KPRw7sd7wK4?si=ALv3NcZwxZ_h-WTr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p class="text-lg font-normal mb-8">Before install, please active your envato purchase key from our system and install project by our license key</p>
                    <ol class="list-decimal ms-5 w-full [&_li]:text-lg [&_li]:font-normal">
                        <li class="mb-8">Goto inilabs official site <NuxtLink to="http://inilabs.net/" class="text-[#007EDD] underline">inilabs.net</NuxtLink></li>
                        <li class="mb-8">
                            <p class="mb-6">Now create an account in our site</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/market-place/register.png" />
                        </li>
                        <li class="mb-8">
                            <p class="mb-6">Click the below link and verify your email</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/market-place/verify-email.png" />
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Now click <span class="font-bold">Active Purchase Key </span>from home page and fill you information</p>
                            <ul class="list-disc ms-5 mb-6 flex flex-col gap-2">
                                <li>Select your product</li>
                                <li>Enter your domain, Which domain you would be using this product</li>
                                <li>Enter your envato purchase key and click submit</li>
                            </ul>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/market-place/active-purchase-key.png" />
                        </li>
                        <li>
                            <p class="mb-6">Now copy your Active License and install the product by this license</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/market-place/active-license.png" />
                        </li>
                    </ol>
                </div>
            </div>
            <div v-if="activetab=='Website Installation' && activeContent == 'Installation'">
                <h2 class="text-[28px] font-bold mb-4">Installation</h2>
                <div class="border-t border-primary pt-6">
                    <div class="doc-info-div">
                        <span class="doc-badge-red">TIPS</span>
                         <p class="text-base font-medium">Check the video tutorial!</p>
                    </div>
                    <iframe class="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/2oYE2Qo8mI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div class="doc-warn-div">
                        <h6 class="text-xl mb-6 font-medium">php.ini Requirements:</h6>
                         <p class="text-base font-medium">open_basedir must be disabled</p>
                    </div>
                    <div class="doc-info-div">
                         <p class="text-base font-normal">Note: Remember! The script doesn't have any "install" folder or directory. The installation is controlled by a Controller.</p>
                    </div>
                    <p class="text-xl font-normal mb-8">Now Follow the steps below to setup the script:</p>
                    <ol class="list-decimal ms-5 w-full [&_li]:text-lg [&_li]:font-normal">
                        <li class="mb-8">Unzip the downloaded package from here and open the /Source Code folder to find all the Script zip. You will need to upload the Script.zip file to your hosting web server using FTP or localhost, then you need to unzip this file, you will find "Foodpi" folder. You need to move all files and folders in your domain's document root directory.</li>
                        <li class="mb-8">
                            <p class="mb-6">Your will have these files and folders in your document root:</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/folder-structure.png" />
                        </li>
                        <li class="mb-8">
                            <p class="mb-6">Make sure /bootstrap and /storage folder have permission as 755 recursively. If you don't have 755 permission in this two folder, you have to give permission manually. To give permission right click on the folder and click "Change permission" button, you will see the prompt to change permission like the second image below. Select the checkboxes you can see in the second image.</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl mb-4" src="/images/documentation/install/permission-0.png"/>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/permissions.png"/>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Before starting the installation, database must be configured for the application.For creating the database, the following ways must be maintained</p>
                            <ul class="list-disc ms-5">
                                <li class="mb-8">
                                    <p class="mb-4">From cPanel Go to MySQL Databases</p>
                                    <NuxtImg class="w-full -ms-5 rounded-2xl mb-4" src="/images/documentation/install/database/step-1.png"/>
                                </li>
                                <li class="mb-8">
                                    <p class="mb-4">Create a new database</p>
                                    <NuxtImg class="w-full -ms-5 rounded-2xl mb-4" src="/images/documentation/install/database/step-2.png"/>
                                </li>
                                <li class="mb-8">
                                    <p class="mb-4">Create a user for the database</p>
                                    <NuxtImg class="w-full -ms-5 rounded-2xl mb-4" src="/images/documentation/install/database/step-3.png"/>
                                </li>
                            </ul>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Run the install script path from any web browser <span class="font-bold">(http://yourdomain.com/install)</span> and click on “Check Requirements” button.</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/1.png"></NuxtImg>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Now you can see your php extension list if it is already installed in all extension then you can see "Check Permissions" button. Now click on this button and go to next step</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/2.png"></NuxtImg>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Now you will see the folders permission list if everything is ok then click “Site Setup”</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/3.png"></NuxtImg>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Provide your App name and Domain name as App Url, then click “Database Setup”</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/4.png"></NuxtImg>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Provide your database information like Database Host, Database Port, Database Name, Database Username, and Database Password, then click “Final Setup”</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/5.png"></NuxtImg>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Now you will see the login information (Email : admin@example.com , Password : 123456) then click “Finish” to exit</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/install/6.png"></NuxtImg>
                        </li>
                        <li class="mb-8">
                            <p class="mb-4">Good Luck!!!</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div v-if="activetab=='Website Installation' && activeContent == 'Push Notification'">
                <h2 class="text-[28px] font-bold mb-4">Firebase Push Notification Setup</h2>
                <div class="border-t border-primary pt-6">
                    <div class="doc-info-div">
                        <span class="doc-badge-red">TIPS</span>
                         <p class="text-base font-medium">Check the video tutorial!</p>
                    </div>
                    <iframe class="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/KPRw7sd7wK4?si=ALv3NcZwxZ_h-WTr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div>
                        <p class="text-base font-normal mb-4">To use firebase follow the procedure which are mentioned below</p>
                        <ol class="list-decimal ms-5 w-full [&_li]:text-lg [&_li]:font-normal flex flex-col gap-3">
                            <li>Go to this URL to create a project  <NuxtLink to="http://inilabs.net/" class="text-[#007EDD] underline">https://console.firebase.google.com/u/0/</NuxtLink>. If you already have a project, continue with that.</li>
                            <li>
                                Then go to Project Settings and create an app.
                            </li>
                            <li>
                                In Project Settings > General > "your created app", you will find apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId.
                            </li>
                            <li>
                               Click on "Cloud Messaging". There you will find a button named "Generate key pair". Click it to get the KEY PAIR.
                            </li>
                            <li>
                                Now in Project Settings, click "Service Account". There you will find a "Generate new private key" button. Click this button to get a JSON file.
                            </li>
                            <li>
                               Then go to your "Foodpi" admin Dashboard > Settings > Notification. Enter your credentials and save them.
                            </li>
                            <li>
                                Now it's done.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Website Installation' && activeContent == 'Business Setting'">
                <h2 class="text-[28px] font-bold mb-4">Business Setup</h2>
                <div class="border-t border-primary pt-6">
                    <p class="text-base font-normal mb-4 leading-relaxed">Within the administrative panel, we provide a designated section known as "System Settings" This particular area empowers you to configure various essential aspects of your business, such as your Company, Site Frontend, Terms & Conditions, Mail, Pusher, Storage, Delivery Setup, OTP, Notification, Notification Alert, Social Media, Cookies, Analytics, Theme, Banks, Currencies, Rider Tips, Cuisines, About Steps, Benefits, Pages, Role & Permissions, Languages, SMS Gateway, Payment Gateway, Progressive Web App, PHP Logs.</p>

                    <div class="doc-info-div">
                        <span class="doc-badge-red">TIPS</span>
                         <p class="text-base font-medium">Check the video tutorial!</p>
                    </div>
                    <iframe class="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/KPRw7sd7wK4?si=ALv3NcZwxZ_h-WTr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div v-if="activetab=='Website Installation' && activeContent == 'Language Translate'">
                <h2 class="text-[28px] font-bold mb-4">Language Translate</h2>
                <div class="border-t border-primary pt-6">
                    <h6 class="text-2xl font-semibold mb-8">How to change or customize a language?</h6>
                    <p class="text-base font-normal mb-4">Translate your admin and website, follow these steps:</p>
                    <ol class="mb-8 list-decimal ps-8 flex flex-col gap-2.5">
                        <li>Login into the admin panel</li>
                        <li>Goto System Settings -> Languages.</li>
                        <li>Click On Add Language</li>
                        <li>Fill all field and add new language.</li>
                        <li>Click on the view icon of the new language low in from the list.</li>
                        <li>XML PHP Extension</li>
                        <li>Ctype PHP Extension</li>
                        <li>JSON PHP Extension</li>
                        <li>BCMath PHP Extension</li>
                        <li>GD PHP Extension</li>
                        <li>Imagick PHP Extension</li>
                        <li>PHP Zip Archive</li>
                        <li>PHP JSON</li>
                        <li>PHP cURL</li>
                        <li>PHP Zip Archive</li>
                        <li>PROC_OPEN PHP Function</li>
                        <li>open_basedir must be disabled</li>
                    </ol>
                    <code class="bg-[#f8f8f8] rounded-xl p-6 block mb-4">npm install</code>
                    <code class="bg-[#f8f8f8] rounded-xl p-6 block mb-4">npm run build</code>
                </div>
            </div>
            <div v-if="activetab=='Support'">
                <h2 class="text-[28px] font-bold mb-4">Support</h2>
                <div class="border-t border-primary pt-6">
                    <p class="text-base font-normal mb-6">If this documentation doesn’t answer your questions, please create a support ticket on the 
                        <NuxtLink to="https://inilabsn.freshdesk.com/" class="py-1.5 px-3 rounded-sm text-white bg-blue-500 block w-fit">item support ticket</NuxtLink>
                    </p> 
                    
                    <p class="text-base font-normal mb-4 leading-relaxed">We are located in GMT +6:30 time zone and we answer all questions within 12-24 hours in weekdays. In some rare cases the waiting time can be to 48 hours. (except holiday seasons which might take longer).</p>
                    <div class="doc-warn-div">
                        <p><span class="doc-badge-red">Note:</span> While we aim to provide the best support possible, please keep in mind that it only extends to verified buyers and only to issues related to our script's & app's like bugs and errors. Custom modifications or third party module implementations are not included.</p>
                    </div>
                    <div class="flex items-center gap-1 text-2xl my-6">
                        <p>Don’t forget to Rate this script</p>
                        <div class="flex items-center gap-1">
                            <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                            <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                            <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                            <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                            <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                        </div>
                    </div>
                    <div class="doc-info-div">
                        <p class="leading-relaxed">Please Add your Review (Opinion) for Our script. It would be a great support for us. Go to your <span class="font-bold">Codecanyon Profile > Downloads Tab ></span> & then You can Rate & Review for our script.Thank You.</p>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Change Log'">
                <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                <div class="border-t border-primary pt-6">
                    <h6 class="text-2xl font-semibold mb-8">Version 1.0 (20 October, 2025)</h6>
                    <p class="text-base font-normal">Initial Release</p>
                </div>
            </div>
            <div v-if="activetab=='Version Update'">
                <h2 class="text-[28px] font-bold mb-4">Update</h2>
                <div class="border-t border-primary pt-6">
                    <h6 class="text-2xl font-semibold mb-8">How to get latest version and How to update Your Current Version to New Version?</h6>
                    <p class="text-base font-normal">Download latest version from <NuxtLink class="text-[#0355b3] hover:underline" to="https://codecanyon.net/downloads"> here.</NuxtLink> or if you want us to upgrade your current system then you can take one of our premium support plan from <NuxtLink class="text-[#0355b3] hover:underline" to="https://inilabsn.freshdesk.com/"> here</NuxtLink></p>
                </div>
            </div>
        </div>
       </div>
      </div>
     </section>
    <!--================================
       DOCUMENTATION CONTENT PART END 
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
    <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="heading mb-3">
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
    import documentation from 'assets/json/documentation.json'
    import { useClickOutside } from '~/composable/clickOutside';

    const activetab = ref('Getting Started');
    const activeContent = ref(null)
    const handleTab = (tab)=>{
        activetab.value = tab
    }
    const handledropTab = (tab, content)=>{
      activetab.value = tab
      activeContent.value = content
    }

    const { isOpen, dropdownContainer } = useClickOutside()
</script>