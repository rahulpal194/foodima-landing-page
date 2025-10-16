<template>
    <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-40 mb-12 sm:mb-16">
        <div class="container">
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading mb-6">FoodKing<span class="gradient-text"> Documentation</span></h1>
                <p class="text-base lg:text-lg font-normal text-center">Everything you need to set up, manage, and master FoodKing.</p>
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
        <div class="md:col-span-1">
            <div class="sticky top-32 p-4 rounded-2xl bg-white shadow-[0px_6px_12px_0px_rgba(186,186,186,0.10)]">
                <nav class="flex flex-col gap-2 text-[#1A203C]">
                    <div v-for="tab in tabs">
                        <div v-if="tab.dropdownContent" class="vertical-dropdown-group" :class="{ active: activetab === tab.name }">
                            <button @click="handledropTab(tab.name, tab.dropdownContent[0])"
                                :class="{ active: activetab === tab.name }"
                                class="vertical-dropdown-btn p-4 w-full text-start rounded-xl text-lg font-bold hover:bg-[#FFF2F0] flex justify-between items-center tabBtn">
                                <div class="flex items-center gap-3.5">
                                  <i :class="tab.icon" class="icon-clipboard-text text-xl bg-linear-to-b from-primary to-secondary bg-clip-text text-transparent"></i>
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
                               class="p-4 w-full text-start rounded-xl text-lg font-bold hover:bg-[#FFF2F0] flex justify-between items-center tabBtn">
                         <div class="flex items-center gap-3.5">
                           <i :class="tab.icon" class="text-xl bg-linear-to-b from-primary to-secondary bg-clip-text text-transparent"></i>
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
                    <p class="text-2xl font-medium mb-8">FoodKing - Restaurant Food Delivery System with Admin Panel & Delivery Man App | Restaurant POS</p>
                    <ul class="grid grid-cols-2 gap-y-6 mb-8 sm:mb-12">
                        <li class="text-base font-bold">Version: <span class="font-medium">3.2</span></li>
                        <li class="text-base font-bold">Created: <span class="font-medium">1 June, 2023</span></li>
                        <li class="text-base font-bold">Author: <span class="font-medium text-[#007EDD]"><NuxtLink to="/inilabs">iNiLabs</NuxtLink></span></li>
                        <li class="text-base font-bold">Last Update: <span class="font-medium">8 June, 2023</span></li>
                    </ul>
                    <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4]">
                         <p class="text-base font-medium">If you have any questions or need any help that are not in this documentation file, Please feel free to <NuxtLink class="font-bold text-primary" to="/support">create a Support Ticket.</NuxtLink></p>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent=='Basic Knowledge'">
                <h2 class="text-[28px] font-bold mb-4">Basic Knowledge</h2>
                <div class="border-t border-primary pt-6">
                    <p class="text-2xl font-medium mb-8">To install, set up, and publish FoodKing with your branding, it's necessary to possess fundamental knowledge in both server-side and mobile app development since the system comprises multiple features for web and mobile applications.</p>
                    <ul class="mb-8 list-disc ps-5">
                        <li>IDE for Mobile and Web development, we preferred Android Studio and VSCode.</li>
                        <li>Flutter SDK and JDK with path setup in your IDE.</li>
                        <li>Real server Server related knowledge like apache or local machine server, we preferred to use a real server.</li>
                        <li>Server related knowledge and we preferred cPanel in your server for quick installation</li>
                        <li>Basic knowledge in PHP, NPM, Vue, Node, Dart, Laravel and Flutter if you want to do some customization yourself (Not compulsory).</li>
                        <li>basic knowledge about google cloud and firebase</li>
                    </ul>
                    <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                         <p class="text-base font-medium">Note: Remember! Envato's pricing does not cover installation or app publishing support. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                    </div>
                </div>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent == 'Server Requirement'" >
                <h2 class="text-[28px] font-bold mb-4">Server Requirement</h2>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent == 'Active Purchase Key'" >
                <h2 class="text-[28px] font-bold mb-4">Active Purchase Key</h2>
                <div class="border-t border-primary pt-6">
                    <p class="text-lg font-normal mb-8 flex gap-3 items-center">
                        <span class="text-white text-base font-semibold bg-linear-270 from-[#73C3FF] to-[#007EDD] py-1 px-2 rounded-sm">TIPS</span>
                        Check the video tutorial!
                    </p>
                    <iframe class="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/KPRw7sd7wK4?si=ALv3NcZwxZ_h-WTr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p class="text-lg font-normal mb-8">Before install, please active your envato purchase key from our system and install project by our license key</p>
                    <ol class="list-decimal ms-5 w-full [&_li]:text-lg [&_li]:font-normal">
                        <li>Goto inilabs official site <NuxtLink to="inilabs.net" class="text-[#007EDD] underline">inilabs.net</NuxtLink></li>
                        <li class="mb-8">
                            <p class="mb-6">Now create an account in our site</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/create-account.png" />
                        </li>
                        <li class="mb-8">
                            <p class="mb-6">Click the below link and verify your email</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/verify-email.png" />
                        </li>
                        <li class="mb-8">
                            <p>Now click Active Purchase Key from home page and fill you information</p>
                            <ul class="list-disc ms-5 mb-6">
                                <li>Select your product</li>
                                <li>Enter your domain, Which domain you would be using this product</li>
                                <li>Enter your envato purchase key and click submit</li>
                            </ul>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/active-product.png" />
                        </li>
                        <li>
                            <p class="mb-6">Now copy your Active License and install the product by this license</p>
                            <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/active-license.png" />
                        </li>
                    </ol>
                </div>
            </div>
            <div v-if="activetab=='Prerequisite' && activeContent == 'Mobile App'" >
                <h2 class="text-[28px] font-bold mb-4">Mobile App</h2>
            </div>
            <div v-if="activetab=='Environment Setup'">
                <h2 class="text-[28px] font-bold mb-4">Environment Setup</h2>
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
     <section class="container">
        <div class="mb-20 sm:mb-40">
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
                </div>
            </div>
        </div>    
     </section>
    <!--===============================
              ACTION PART END 
     =================================-->
</template>
<script setup>
    const tabs = ref([
        {name: 'Getting Started', icon:'icon-fill-shutdown'},
        {name: 'Prerequisite', icon:'icon-clipboard-text', dropdownContent:['Basic Knowledge', 'Server Requirement', 'Active Purchase Key','Mobile App']},
        {name: 'Environment Setup', icon:'icon-env-setup'},
        {name: 'Website Installation', icon:'icon-fill-install', dropdownContent:['Installation', 'Push Notification', 'Map Setting','Business Setting', 'Payment Gateway', 'SMS Gateway', 'Language Translate']},
        {name: 'Mobile App', icon:'icon-fill-mobile'},
        {name: 'Change Log', icon:'icon-change-log'},
        {name: 'Support', icon:'icon-music-play'},
        {name: 'Version Update', icon:'icon-fill-update'}
    ])
    
    const activetab = ref('Getting Started');
    const activeContent = ref(null)
    const handleTab = (tab)=>{
      activetab.value = tab
    }
    const handledropTab = (tab, content)=>{
      activetab.value = tab
      activeContent.value = content
    }
</script>