<template>
     <!--===============================
           BLOG PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-20 sm:mb-40">
        <div class="container">
        <div class="max-w-[742px] w-full mx-auto">
            <div class="mb-12 sm:mb-16">
            <ul class="flex items-center justify-center gap-x-3 mb-4">
                <li class="flex items-start gap-1.5">
                    <span class="text-lg font-medium capitalize text-paragraph">{{ blogDetails.date }}</span>
                </li>
                <li class="flex items-start gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-black"></span>
                </li>
                <li class="flex items-start gap-1.5">
                    <span class="text-lg font-medium capitalize text-paragraph">10 min read</span>
                </li>
            </ul> 
            <h1 class="text-2xl sm:text-[42px] font-semibold mb-8 sm:mb-12 text-center">
                {{ blogDetails.title }}
            </h1>
            <NuxtImg :src="blogDetails.coverimage" alt="blog-details" class="w-full rounded-2xl mb-8 sm:mb-12" />
            <p class="mb-8">
                The iNiLabs product FoodKing was recognized by Envato as the most popular mobile development item in 2023. This innovative restaurant food delivery system offers everything a restaurant owner needs, including an admin panel, a delivery man app, and a robust POS system. With its easy-to-use, flexible, and efficient platform, FoodKing revolutionized the food delivery industry. Official link : <NuxtLink to="#">most-popular-web-and-code-items-on-market-2023</NuxtLink>
            </p>
            <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4">
                    What is FoodKing?
                </h3>
                <p>
                    FoodKing is a restaurant food delivery system designed to meet the needs of restaurants, food delivery services, and online food orders. The system includes:
                </p>
            </div>
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-3 leading-snug">
                    Admin Panel
                </h3>
                <p>
                    The admin panel simplifies restaurant operations by enabling easy order management, menu creation, and payment processing. Restaurant owners can efficiently manage their business through this intuitive interface.
                </p>
            </div>
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-3 leading-snug">
                    Delivery Man App
                </h3>
                <p>
                    An intuitive app designed for delivery personnel, making it easy to manage and deliver food orders efficiently. The app ensures that delivery operations run smoothly and on time.
                </p>
            </div>
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-3 leading-snug">
                    Restaurant POS
                </h3>
                <p>
                    FoodKing’s powerful point-of-sale (POS) system supports both in-store and delivery operations. This feature helps restaurants streamline sales processes and track transactions effortlessly. With these rich features, restaurants can streamline operations and provide exceptional customer service.
                </p>
            </div>
            <div class="mb-8">
                <h3 class="font-bold text-2xl mb-4">
                    Why Did FoodKing Stand Out in 2023?
                </h3>
                <p>
                    Envato’s recognition of FoodKing as the most popular mobile development item in 2023 illustrates its significant impact and effectiveness. Here are some key reasons why FoodKing outshines its competition:
                </p>
            </div>
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-3 leading-snug">
                    Admin Panel
                </h3>
                <p>
                    The admin panel simplifies restaurant operations by enabling easy order management, menu creation, and payment processing. Restaurant owners can efficiently manage their business through this intuitive interface.
                </p>
            </div>
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-3 leading-snug">
                    Delivery Man App
                </h3>
                <p>
                    An intuitive app designed for delivery personnel, making it easy to manage and deliver food orders efficiently. The app ensures that delivery operations run smoothly and on time.
                </p>
            </div>
            <div class="mb-8">
                <h3 class="text-lg font-bold mb-3 leading-snug">
                    Restaurant POS
                </h3>
                <p>
                    FoodKing’s powerful point-of-sale (POS) system supports both in-store and delivery operations. This feature helps restaurants streamline sales processes and track transactions effortlessly. With these rich features, restaurants can streamline operations and provide exceptional customer service.
                </p>
            </div>
            <div>
                <h3 class="font-bold text-2xl mb-4">
                    Why Did FoodKing Stand Out in 2023?
                </h3>
                <p>
                    Envato’s recognition of FoodKing as the most popular mobile development item in 2023 illustrates its significant impact and effectiveness. Here are some key reasons why FoodKing outshines its competition:
                </p>
            </div>
            </div>
            <div class="flex flex-col justfy-start">
                <h3 class="text-2xl font-bold mb-4">Like this article? Spread the word</h3>
                <div class="flex flex-wrap gap-4 items-center">
                    <NuxtLink v-for="social in socials" :to="social.path"
                        class="w-6 h-6 sm:w-12 sm:h-12 rounded-full flex-shrink-0">
                        <NuxtImg class="w-full" :src="social.img"/>
                    </NuxtLink>
                </div>
            </div>
        </div>
        </div>
     </section>
     <!--==============================
           BLOG PART END 
     =================================-->

     <!--===============================
            OTHER BLOG PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="max-w-[742px] w-full mx-auto">
                <h1 class="text-3xl lg:text-[42px] font-bold leading-tight mb-12 sm:mb-16 text-center">Other Popular
                    <span class="gradient-text"> News </span>&
                    <span class="gradient-text"> Article</span>
                </h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-9.5">
                    <div v-for="blog in blogs.slice(0,2)" class="bg-white shadow-blog rounded-2xl flex flex-col hover:shadow-card">
                        <div class="w-full h-47">
                            <NuxtImg :src="blog.coverimage" class="w-full h-full object-cover rounded-t-2xl" alt="blogcover" />
                        </div>
                        <h6 class="mb-6 flex-grow line-clamp-2 px-6 pt-6 text-lg font-bold leading-7">{{ blog.title }}</h6>
                        <div class="flex justify-between gap-x-6 gap-y-3 px-6 pb-6 flex-wrap lg:flex-nowrap">
                            <span class="text-lg font-medium leading-tight">{{ blog.date }}</span>
                            <NuxtLink :to="`/blog/${blog.id}`" @click="blogDetails.setblog(blog)" class="text-primary font-medium text-lg leading-tight">Read more</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
            OTHER BLOG PART END
     =================================-->
</template>
<script setup>
    import blogs from '@/assets/json/blogs.json'
    import { useBlogStore } from '@/stores/blog';
    const blogDetails = useBlogStore()

    const socials = ref([
        {name:'youtube', path:"/youtube", img:"/images/social/Youtube.png"},
        {name:'facebook', path:"/facebook", img:"/images/social/Facebook.png"},
        {name:'instagram', path:"/instagram", img:"/images/social/Instagram.png"},
        {name:'telegram', path:"/telegram", img:"/images/social/Telegram.png"},
        {name:'twitter', path:"/twitter", img:"/images/social/Twitter.png"},
        {name:'Reddit', path:"/reddit", img:"/images/social/Reddit.png"},
        {name:'pinterest', path:"/pinterest", img:"/images/social/Pinterest.png"},
        {name:'messenger', path:"/messenger", img:"/images/social/Messenger.png"},
        {name:'linkedin', path:"/linkedin", img:"/images/social/Linkedin.png"},
    ])
</script>